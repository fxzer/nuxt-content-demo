



<script setup lang='ts'>
const {
  // Global references
  globals,
  navigation,
  surround,
  page,
  // Computed properties from `page` key
  excerpt,
  toc,
  type,
  layout,
  // Computed properties from `surround` key
  next,
  prev
} = useContent()
console.log('[ next ]-19', next)
</script>

<template>
  <main>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
    <!-- <ContentList path="/articles" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList> -->
  </nav>
    <ContentDoc />
  </main>
</template>

<style scoped lang='scss'>

</style>
