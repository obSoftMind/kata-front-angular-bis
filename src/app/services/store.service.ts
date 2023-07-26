import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalInformation } from '../models/personal-information.medel';
import { ProjectDetails } from '../models/project-setails.model.ts';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    user = { civility: '', email: '', firstName: '', name: '', phonenumber: null };
    message = { user: '', eligibleOrNot: '' };

    private userSubject = new BehaviorSubject<PersonalInformation>(this.user);
    user$: Observable<PersonalInformation> = this.userSubject.asObservable();

    private messageSubject = new BehaviorSubject<{ user: string, eligibleOrNot: string }>(this.message);
    message$: Observable<{ user: string, eligibleOrNot: string }> = this.messageSubject.asObservable();

    constructor(private router: Router) { }

    userInformation(user: PersonalInformation) {
        this.userSubject.next(user);
    }

    userInfoProject(userInfoProject: ProjectDetails) {

        const user = this.userSubject.getValue()
        const userInformation = `Merci ${user.civility} ${user.name} ${user.firstName}`
        const notEligible = `Non éligibilté`
        const eligible = `Félicitation, vous êtes éligible à notre programme d'aide et d'accompagnement`;

        if (userInfoProject.ownerOrTenant === 'locataire') {
            this.userNotEligible(userInformation, notEligible)
        } else {
            const projectCost = userInfoProject.propertyArea * 80;
            const effyHelp = (projectCost * 0.75) - (userInfoProject.householdIcome / userInfoProject.numberOfPeopleInTheHousehold) * 0.15;
            effyHelp > 0 ? this.userEligible(userInformation, eligible) : this.userNotEligible(userInformation, notEligible);
        }
    }

    userEligible(user: string, eligible: string){
        this.message = { user, eligibleOrNot: eligible};
        this.router.navigateByUrl('user-info-recap')
        this.messageSubject.next(this.message);
    }

    userNotEligible(user: string, notEligible: string) {
        this.message = { user, eligibleOrNot: notEligible };
        this.router.navigateByUrl('user-info-recap')
        this.messageSubject.next(this.message);
    }
}