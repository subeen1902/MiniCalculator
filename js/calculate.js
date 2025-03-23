// 사칙연산 함수
export function calculate(a, b, cal, callback) {
  let result;

  switch (cal) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '/':
      result = b !== 0 ? a / b : '연산 불가';
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = '연산자를 입력하세요.';
  }

  if (callback) {
    callback(result);
  }
}
