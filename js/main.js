// 모듈 연결
import { bindEvents } from './events.js';
import { initDisplay } from './display.js';

// 화면 초기화
document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.equation');
  initDisplay(display);
  bindEvents(display);
});
