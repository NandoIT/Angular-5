import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signIn(email: string, password: string){
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log(this.user  );
      this.router.navigate(['/home']);

    })
    .catch(err => {
      console.log("Something went wrong: " + err.message);
    });
  }

  logOut(){
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
