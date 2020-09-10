import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

import { ProductComponent } from './product.component';

let loader: HarnessLoader;

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
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

  it('should have like, dislike and add to cart buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const like = buttons[0];
    const dislike = buttons[1];
    const addToCart = buttons[2];

    expect(like).toBeTruthy();
    expect(dislike).toBeTruthy();
    expect(addToCart).toBeTruthy();
  });

  it('should dispatch action when like or dislike is clicked', async () => {
    spyOn(store, 'dispatch');
    const like = await loader.getHarness(MatButtonHarness);

    like.click();
    component.likeProduct('');

    expect(store.dispatch).toHaveBeenCalled();
  });
});
