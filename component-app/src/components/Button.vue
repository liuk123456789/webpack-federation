<script setup>
  import { ref } from 'vue'
  let count = ref(1)

  const onAddCount = () => {
    count.value++
  }
</script>

<template>
  <a-button type="primary" shape="round" @click="onAddCount">当前数字：{{ count }}</a-button>
</template>