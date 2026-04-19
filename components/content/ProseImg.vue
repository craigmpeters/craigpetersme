<script setup>
defineProps({
  src: String,
  alt: String,
  width: [String, Number],
  height: [String, Number],
  title: String,
})

const lightboxOpen = ref(false)
const open = () => { lightboxOpen.value = true }
const close = () => { lightboxOpen.value = false }

const handleKeydown = (e) => { if (e.key === 'Escape') close() }
onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <span class="block my-4 text-center">
    <img
      :src="src"
      :alt="alt"
      :title="title || alt"
      class="w-full rounded cursor-zoom-in object-cover shadow-sm hover:shadow-md transition-shadow"
      @click="open"
    />
    <span v-if="alt" class="block text-sm text-gray-500 dark:text-gray-400 mt-1.5 italic">{{ alt }}</span>
  </span>

  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
        @click.self="close"
      >
        <button
          @click="close"
          class="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full w-9 h-9 flex items-center justify-center text-lg transition-colors"
          aria-label="Close image"
        >
          &times;
        </button>
        <img
          :src="src"
          :alt="alt"
          class="max-w-full max-h-full rounded object-contain shadow-2xl"
        />
        <span v-if="alt" class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm italic">{{ alt }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
