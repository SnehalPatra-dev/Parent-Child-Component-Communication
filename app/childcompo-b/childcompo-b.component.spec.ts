import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompoBComponent } from './childcompo-b.component';

describe('ChildcompoBComponent', () => {
  let component: ChildcompoBComponent;
  let fixture: ComponentFixture<ChildcompoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcompoBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcompoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
