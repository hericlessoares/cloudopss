import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosPostComponent } from './candidatos-post.component';

describe('CandidatosPostComponent', () => {
  let component: CandidatosPostComponent;
  let fixture: ComponentFixture<CandidatosPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
