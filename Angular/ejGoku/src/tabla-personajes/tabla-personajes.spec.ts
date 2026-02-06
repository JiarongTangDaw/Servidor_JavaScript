import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonajes } from './tabla-personajes';

describe('TablaPersonajes', () => {
  let component: TablaPersonajes;
  let fixture: ComponentFixture<TablaPersonajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPersonajes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
