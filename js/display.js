// 수식과 결과 출력을 위한 전역 변수
let expression = '';
let displayElement = null;

export function initDisplay(el) {
  displayElement = el;
  updateDisplay();
}

export function clearCalculator() {
  expression = '';
  updateDisplay();
}

export function updateDisplay() {
  if (displayElement) {
    displayElement.innerText = expression || '0';
  }
}

export function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

export function getExpression() {
  return expression;
}

export function setExpression(value) {
  expression = value;
  updateDisplay();
}
