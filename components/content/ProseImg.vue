<script setup>
defineOptions({ inheritAttrs: false })
const props = defineProps({
  src: String,
  alt: String,
  width: [String, Number],
  height: [String, Number],
  title: String,
  float: { type: String, validator: value => ['left', 'right'].includes(value) },
  size: { type: String, validator: value => ['small', 'medium', 'full'].includes(value) },
  caption: String,
})
const layoutSize = computed(() => props.size || (props.float ? 'medium' : 'full'))
const sizes = computed(() => props.width
  ? `100vw sm:${props.width}px`
  : layoutSize.value === 'small' ? '100vw sm:200px'
    : layoutSize.value === 'medium' ? '100vw sm:320px' : '100vw md:60vw lg:700px')
const wrapperStyle = computed(() => props.width ? { maxWidth: `${Number(props.width)}px` } : undefined)
</script>

<template>
  <span class="article-image" :class="[`article-image--${layoutSize}`, float && `article-image--${float}`]" :style="wrapperStyle">
    <span class="article-image__media">
      <span class="article-image__bleed" aria-hidden="true">
        <NuxtImg :src="src" alt="" :width="width" :height="height" :sizes="sizes" class="article-image__background" />
      </span>
      <NuxtImg v-bind="$attrs" :src="src" :alt="alt" :title="title" :width="width" :height="height" :sizes="sizes" class="article-image__image rounded" />
    </span>
    <span v-if="caption" class="article-image__caption text-sm text-gray-500 dark:text-gray-400 italic">{{ caption }}</span>
  </span>
</template>

<style scoped>
.article-image { display: block; width: 100%; margin: 1rem auto; }
.article-image--small { max-width: 200px; }
.article-image--medium { max-width: 320px; }
.article-image__media { display: block; position: relative; isolation: isolate; }
.article-image__bleed { display: none; }
.article-image__image { display: block; width: 100%; max-width: 100%; height: auto; }
.article-image__caption { display: block; margin-top: 0.375rem; text-align: center; }
@media (max-width: 767px) {
  /* The article and its centred images share the mobile viewport's centre. */
  .article-image__bleed {
    display: block;
    position: absolute;
    inset-block: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
  }
  .article-image__background {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(24px);
    transform: scale(1.2);
  }
}
@media (min-width: 1024px) {
  .article-image--left { float: left; margin: 0.5rem 1.5rem 1rem 0; }
  .article-image--right { float: right; margin: 0.5rem 0 1rem 1.5rem; }
}
</style>
