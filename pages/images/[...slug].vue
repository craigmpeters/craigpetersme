<template>
    <div>
        <ContentDoc>
            <template v-slot="{ doc }">
                <h1>{{  doc.title }}</h1>
                <NuxtImg fit="cover" :src="doc.pictures" width="300px" height="300px" class="rounded object-contain h-48 w-96"  />
                <ContentRenderer :value="doc" />
            </template>
        </ContentDoc>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>