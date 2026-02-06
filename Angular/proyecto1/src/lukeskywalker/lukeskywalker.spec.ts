import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lukeskywalker } from './lukeskywalker';

describe('Lukeskywalker', () => {
  let component: Lukeskywalker;
  let fixture: ComponentFixture<Lukeskywalker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lukeskywalker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lukeskywalker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
