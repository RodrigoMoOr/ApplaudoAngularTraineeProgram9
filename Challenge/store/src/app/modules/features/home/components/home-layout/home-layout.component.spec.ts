import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeLayoutComponent } from './home-layout.component';
import { NavbarService } from './../../../../core/services/navbar.service';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;
  let store: MockStore;
  const initialState = { categories: {}, products: { filteredIds: [] } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLayoutComponent],
      providers: [provideMockStore({ initialState }), NavbarService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should have a sidenav and a list in it, and sidenav content', () => {
    const sidenav = fixture.debugElement.query(By.css('mat-sidenav-container'));
    const list = fixture.debugElement.query(By.css('mat-list'));
    const sidenavContent = fixture.debugElement.query(
      By.css('mat-sidenav-content')
    );

    expect(sidenav).toBeTruthy();
    expect(list).toBeTruthy();
    expect(sidenavContent).toBeTruthy();
  });
});
