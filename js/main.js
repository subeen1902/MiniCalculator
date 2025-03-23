import { bindEvents } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.equation');
  bindEvents(display);
});
