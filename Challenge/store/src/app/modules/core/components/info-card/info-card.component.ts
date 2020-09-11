import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserState } from 'src/app/store/states/user.states';
import { name, email } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  name$: Observable<string>;
  email$: Observable<string>;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.name$ = this.store.select(name);
    this.email$ = this.store.select(email);
  }
}
