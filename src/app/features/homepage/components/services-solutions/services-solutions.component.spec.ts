import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSolutionsComponent } from './services-solutions.component';

describe('ServicesSolutionsComponent', () => {
  let component: ServicesSolutionsComponent;
  let fixture: ComponentFixture<ServicesSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
