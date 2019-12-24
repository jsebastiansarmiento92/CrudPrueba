import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfPageComponent } from './nf-page.component';

describe('NfPageComponent', () => {
  let component: NfPageComponent;
  let fixture: ComponentFixture<NfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
