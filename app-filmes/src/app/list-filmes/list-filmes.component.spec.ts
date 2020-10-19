import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmesComponent } from './list-filmes.component';

describe('ListFilmesComponent', () => {
  let component: ListFilmesComponent;
  let fixture: ComponentFixture<ListFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
