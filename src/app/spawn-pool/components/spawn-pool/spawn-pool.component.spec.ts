import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpawnPoolComponent } from './spawn-pool.component';

describe('SpawnPoolComponent', () => {
  let component: SpawnPoolComponent;
  let fixture: ComponentFixture<SpawnPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpawnPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpawnPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
