<script setup>
import { ref } from 'vue'
import Display from './Display.vue'
import ButtonGrid from './ButtonGrid.vue'

const expression = ref('')

function calculate(a, b, n) {
  switch (n) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b !== 0 ? a / b : '연산 불가'
    default:
      return '오류'
  }
}

function handleInput(value) {
  if (value === '=') {
    try {
      expression.value = eval(expression.value).toString()
    } catch {
      expression.value = 'Error'
    }
  } else if (value === 'AC') {
    expression.value = ''
  } else if (value === 'delete') {
    expression.value = expression.value.slice(0, -1)
  } else {
    expression.value += value
  }
}
</script>

<template>
  <div class="calculator">
    <Display :expression="expression" />
    <ButtonGrid @input="handleInput" />
  </div>
</template>

<style scoped>
@import '../assets/calculate.css';
</style>
