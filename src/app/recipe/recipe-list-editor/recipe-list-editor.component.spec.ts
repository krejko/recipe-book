import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListEditorComponent } from './recipe-list-editor.component';

describe('RecipeListEditorComponent', () => {
  let component: RecipeListEditorComponent;
  let fixture: ComponentFixture<RecipeListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
