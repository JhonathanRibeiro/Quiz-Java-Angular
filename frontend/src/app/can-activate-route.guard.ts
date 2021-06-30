import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(): any {
        //implementar este método
    }
}