// 수식 및 결과 출력, 상태 관리
let expression = '';
let displayElement = null;

export function initDisplay(el) {
  displayElement = el;
  updateDisplay();
}

export function updateDisplay() {
  if (displayElement) {
    displayElement.innerText = expression || '0';
  }
}

export function clearCalculator() {
  expression = '';
  updateDisplay();
}

export function appendToExpression(value) {
  expression += value;
  updateDisplay();
}

export function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

export function getExpression() {
  return expression;
}

export function setExpression(newValue) {
  expression = newValue;
  updateDisplay();
}
