<script setup>
const props = defineProps({
  expression: String,
})
</script>

<template>
  <div class="equation">{{ props.expression || '0' }}</div>
</template>
