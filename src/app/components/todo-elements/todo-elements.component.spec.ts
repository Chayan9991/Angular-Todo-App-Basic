import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoElementsComponent } from './todo-elements.component';

describe('TodoElementsComponent', () => {
  let component: TodoElementsComponent;
  let fixture: ComponentFixture<TodoElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
