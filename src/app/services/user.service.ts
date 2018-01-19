import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  items: Observable<any[]>;
  itemRef: AngularFireList<any>;

  // lastDbId = 1;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.list('/users');
    this.items = this.itemRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  postData(newHero){
    this.itemRef.push(newHero);
    console.log("Posted", newHero);
  }

  updateUserName(key: string, updatedName: string){
    this.itemRef.update(key, { name: updatedName });
  }

  deleteUser(key: string){
    this.itemRef.remove(key);
  }

  deleteAllUsers(){
    this.itemRef.remove();
  }
}
