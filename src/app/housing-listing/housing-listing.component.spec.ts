import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingListingComponent } from './housing-listing.component';

describe('HousingListingComponent', () => {
  let component: HousingListingComponent;
  let fixture: ComponentFixture<HousingListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
