import { bindEvents } from './events.js';
import { initDisplay } from './display.js';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.equation');
  initDisplay(display);
  bindEvents(display);
});
