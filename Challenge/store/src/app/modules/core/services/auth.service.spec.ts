import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/api-responses.interface';

describe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should post to user login', () => {
    const credentials = {
      email: '',
      password: '',
    };

    const expectedResponse = {
      data: {
        token: '',
        user: {},
      },
    };

    service.login(credentials).subscribe((response) =>
      expect(response).toEqual({
        token: '',
        user: {} as IUser,
      })
    );

    const req = controller.expectOne(environment.apiUrl + 'users/login');
    req.flush(expectedResponse);
  });
});
