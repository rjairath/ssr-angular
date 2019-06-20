import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrHomeComponent } from './ssr-home.component';

describe('SsrHomeComponent', () => {
  let component: SsrHomeComponent;
  let fixture: ComponentFixture<SsrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
