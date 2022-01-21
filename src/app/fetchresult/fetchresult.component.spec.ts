import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchresultComponent } from './fetchresult.component';

describe('FetchresultComponent', () => {
  let component: FetchresultComponent;
  let fixture: ComponentFixture<FetchresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
