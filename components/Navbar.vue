<script setup lang='ts'>

</script>

<template>
   <nav>
    <ContentNavigation v-slot="{ navigation }">
      console.log('[ navigation ]-8', navigation)
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav
</template>

<style scoped lang='scss'>

</style>
