<template>
  <main>
    <section class="flex h-screen flex-col bg-yellow-200 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-700">Col-1</div>
        <div class="col-span-5 col-start-2 border border-blue-700">
          <the-head-line />
        </div>
        <div class="col-span-5 col-start-7 border border-blue-700">COL-5</div>
        <div class="col-span-1 col-start-12 border border-blue-700">COL-1</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadLine from "./TheHeadline.vue";
export default {
  name: "TheHero",
  components: {
    TheHeadLine,
  },
};
</script>
