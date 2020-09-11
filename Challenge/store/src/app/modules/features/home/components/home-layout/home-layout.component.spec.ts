import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeLayoutComponent } from './home-layout.component';
import { NavbarService } from './../../../../core/services/navbar.service';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;
  let store: MockStore;
  const initialState = { categories: {}, products: {} };

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

  it('should call getCategories() and getProducts() when component is initiated', () => {
    spyOn(component, 'getCategories');
    spyOn(component, 'getProducts');

    component.ngOnInit();

    expect(component.getCategories).toHaveBeenCalled();
    expect(component.getProducts).toHaveBeenCalled();
  });

  it('should dispatch actions to get products and categories', () => {
    spyOn(store, 'dispatch');

    component.getCategories();
    component.getProducts();

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should dispatch action to filter products by category', () => {
    spyOn(store, 'dispatch');

    component.getProductsByCategory({ id: 1, slug: '', name: '' });

    expect(store.dispatch).toHaveBeenCalled();
  });

  // it('should call openAddToCart() (method) to open Add to Cart Dialog', () => {});

  // it('should dispatch action to filter products by name', () => {});
});
