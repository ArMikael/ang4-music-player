/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SingersDataService } from './singers-data.service';

describe('SingersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingersDataService]
    });
  });

  it('should ...', inject([SingersDataService], (service: SingersDataService) => {
    expect(service).toBeTruthy();
  }));
});
