import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

import { NavbarComponent } from './navbar.component';
import { NavbarService } from './../../services/navbar.service';
import { isLogged } from 'src/app/store/selectors/user.selectors';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let store: MockStore;
  let userSelector: MemoizedSelector<typeof isLogged, boolean>;
  const initialState = { user: '', token: '' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [NavbarService, provideMockStore({ initialState })],
      imports: [MatDialogModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    userSelector = store.overrideSelector(isLogged, true);
    fixture.detectChanges();
  });

  it('should open dialog', () => {
    spyOn(component, 'openDialog');
    const buttons = fixture.debugElement.queryAll(By.css('.navbar-menu-icon'));
    const personButtonDE = buttons[4];
    const personButtonEl: HTMLButtonElement = personButtonDE.nativeElement;

    personButtonEl.click();

    expect(component.openDialog).toHaveBeenCalled();
  });
});
