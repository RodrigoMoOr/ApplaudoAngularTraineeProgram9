import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, Subject } from 'rxjs';
import { MatButtonHarness } from '@angular/material/button/testing';

import { ProductDetailsComponent } from './product-details.component';

let loader: HarnessLoader;

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
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.product = {
      id: 1,
      slug: '',
      name: '',
      description: '',
      likes_up_count: 0,
      likes_down_count: 0,
      published_at: '',
      category: {
        id: 1,
        slug: '',
        name: '',
      },
      image: {
        id: 1,
        url: '',
      },
      master: {
        price: '',
        promotional_price: '',
        stock: 1,
      },
    };
  });

  it('should dispatch getProductBySlug action when params are obtained', () => {
    spyOn(store, 'dispatch');

    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ name: '', id: 0 });

    component.getProduct('', 0);

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should display product info in template', () => {
    const imgDE = fixture.debugElement.query(By.css('img'));
    const nameDE = fixture.debugElement.query(By.css('h3'));
    const categoryDE = fixture.debugElement.query(By.css('h4'));
    const descriptionDE = fixture.debugElement.query(By.css('span'));

    const imgEl: HTMLImageElement = imgDE.nativeElement;
    const nameEl: HTMLElement = nameDE.nativeElement;
    const categoryEl: HTMLElement = categoryDE.nativeElement;
    const descriptionEl: HTMLElement = descriptionDE.nativeElement;

    expect(imgEl.src).toBe('');
    expect(nameEl.innerText).toBe('');
    expect(categoryEl.innerText).toBe('');
    expect(descriptionEl.innerText).toBe('');
  });

  it('should dispatch updateProduct action when like or dislike is clicked', async () => {
    spyOn(store, 'dispatch');
    const like = await loader.getHarness(MatButtonHarness);
    console.log(like);

    await like.click();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
