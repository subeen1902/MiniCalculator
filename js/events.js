import {
  initDisplay,
  updateDisplay,
  clearCalculator,
  appendToExpression,
  deleteLast,
  getExpression,
  setExpression,
} from './display.js';

export function bindEvents(displayEl) {
  initDisplay(displayEl);

  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const value = this.dataset.value;
      console.log('버튼 클릭:', value);
      handleInput(value);
    });
  });
}

function handleInput(value) {
  if (value === '=' || value === 'Enter') {
    evaluateExpression();
  } else if (value === 'AC') {
    clearCalculator();
  } else if (value === 'delete') {
    deleteLast();
  } else {
    appendToExpression(value);
  }
}

// 결과 출력 이벤트
function evaluateExpression() {
  let expression = getExpression().trim();
  console.log('Evaluating:', expression);

  if (expression === '') {
    setExpression('');
    return;
  }

  try {
    const result = eval(expression);
    setExpression(result.toString());
  } catch (e) {
    console.error('에러 발생:', e);
    setExpression('Error');
  }
}
