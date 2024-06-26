<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang='ts'>
const { data } = await useAsyncData('about', () => queryContent('/about').findOne())
console.log('[ data ]-9', data)
</script>



