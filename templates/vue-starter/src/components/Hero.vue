<script setup lang="ts">
defineProps<{
  href: string
  ariaLabel: string
}>()
</script>

<template>
  <a
    :href="href"
    rel="noreferrer noopener"
    target="_blank"
    :aria-label="ariaLabel"
    class="col-span-2 text-center text-lg font-extrabold bg-lavender-blue-500 dark:bg-white text-white dark:text-black dark:hover:text-white py-3 px-4 border-black dark:border-lavender-blue-500 dark:hover:border-white border-[3px] rounded-sm transition-all shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_#7888FF] dark:hover:shadow-[8px_8px_0px_#fff] hover:bg-lavender-blue-400 dark:hover:bg-black active:bg-lavender-blue-600 dark:active:bg-black active:shadow-none active:translate-x-[8px] active:translate-y-[8px]"
  >
    <slot />
  </a>
</template>
