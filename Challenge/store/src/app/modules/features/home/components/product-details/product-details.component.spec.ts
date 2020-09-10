import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProductDetailsComponent } from './product-details.component';

class ActivatedRouteStub {
  private subject = new Subject();

  push(value): void {
    this.subject.next(value);
  }

  get paramMap(): Observable<any> {
    return this.subject.asObservable();
  }
}

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should dispatch getProductBySlug action', () => {
    spyOn(store, 'dispatch');

    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ name: '', id: 0 });

    component.getProduct('', 0);

    expect(store.dispatch).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
