import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooAnimalsComponent } from './zoo-animals.component';

describe('ZooAnimalsComponent', () => {
  let component: ZooAnimalsComponent;
  let fixture: ComponentFixture<ZooAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
