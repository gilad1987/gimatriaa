import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GimatriaComponent } from './gimatria.component';

describe('GimatriaComponent', () => {
  let component: GimatriaComponent;
  let fixture: ComponentFixture<GimatriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimatriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GimatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
