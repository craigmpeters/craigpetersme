<template>
   <div>
      <div class="privacy-embed" v-html="html" v-if="html"></div>
   </div>
</template>

<script setup lang="ts">
   
    const html = await $fetch('/clarity/privacy.html')
</script>

<style scoped>
.privacy-embed {
   background-color: #fff;
   padding: 5em;
}
</style>