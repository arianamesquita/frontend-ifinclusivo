import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTalkComponent } from './chat-talk.component';

describe('ChatTalkComponent', () => {
  let component: ChatTalkComponent;
  let fixture: ComponentFixture<ChatTalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatTalkComponent]
    });
    fixture = TestBed.createComponent(ChatTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
