<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Bulka's Careers",
    };
  },
};
</script>
