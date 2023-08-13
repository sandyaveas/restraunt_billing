import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/_enums/userRole.enum';
import { TokenService } from 'src/app/_services/token-storage.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    allowedUser: UserRole[];
    subMenus?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '', allowedUser: [UserRole.OrgAdmin, UserRole.SuperAdmin] },
    { path: '', title: 'Masters', icon: 'nc-tile-56', class: '', allowedUser: [UserRole.OrgAdmin, UserRole.SuperAdmin],
        subMenus: [ 
            {path: '/menu', title: 'Menu', icon: 'nc-tile-56', class: '', allowedUser: [UserRole.OrgAdmin, UserRole.SuperAdmin]},            
        ]
    },
    { path: '/clients', title: 'Clients', icon: 'nc-globe', class: '', allowedUser: [UserRole.SuperAdmin] },
    { path: '/employees', title: 'Employee', icon: 'nc-circle-10', class: '', allowedUser: [UserRole.OrgAdmin, UserRole.SuperAdmin] },
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
    userRole!: UserRole;

    constructor(private tokenService: TokenService) { }

    ngOnInit() {
        this.userRole = this.tokenService.decodeToken().userRole as UserRole;
        this.menuItems = ROUTES.filter(menuItem => menuItem.allowedUser.indexOf(this.userRole) >= 0);
    }
}
