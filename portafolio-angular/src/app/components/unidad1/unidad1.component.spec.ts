import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad1 } from './unidad1';

describe('Unidad1', () => {
  let component: Unidad1;
  let fixture: ComponentFixture<Unidad1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unidad1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unidad1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
