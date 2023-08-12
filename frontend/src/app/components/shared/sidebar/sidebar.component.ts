import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/_enums/userType.enum';
import { TokenService } from 'src/app/_services/token-storage.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    allowedUser: UserType[];
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '', allowedUser: [UserType.OrgAdmin, UserType.SuperAdmin] },
    { path: '/department', title: 'Masters', icon: 'nc-tile-56', class: '', allowedUser: [UserType.OrgAdmin, UserType.SuperAdmin] },
    { path: '/clients', title: 'Clients', icon: 'nc-globe', class: '', allowedUser: [UserType.SuperAdmin] },
    { path: '/employees', title: 'Employee', icon: 'nc-circle-10', class: '', allowedUser: [UserType.OrgAdmin, UserType.SuperAdmin] },
    // { path: '/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
    // { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
    // { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
    // { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
    // { path: '/register', title: 'Register', icon: 'nc-caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: RouteInfo[] = [];
    userType!: UserType;

    constructor(private tokenService: TokenService) { }

    ngOnInit() {
        this.userType = this.tokenService.decodeToken().userType as UserType;
        this.menuItems = ROUTES.filter(menuItem => menuItem.allowedUser.indexOf(this.userType) >= 0);
    }
}
