import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate() {
        if ( this.authService.user ) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
