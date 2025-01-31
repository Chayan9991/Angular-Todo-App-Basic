import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodosComponent } from './view-todos.component';

describe('ViewTodosComponent', () => {
  let component: ViewTodosComponent;
  let fixture: ComponentFixture<ViewTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
