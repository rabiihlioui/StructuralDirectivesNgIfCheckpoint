import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirNgifComponent } from './struct-dir-ngif.component';

describe('StructDirNgifComponent', () => {
  let component: StructDirNgifComponent;
  let fixture: ComponentFixture<StructDirNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
