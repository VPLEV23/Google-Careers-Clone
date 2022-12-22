<template>
  <li class="mb-7">
    <router-link
      to="/jobs/result/1"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">
          Front End Developer, Perception, Augment reality
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>Bulka</span>
          </div>
          <div class="">
            <span>Uzhhorod, ZA, Ukraine</span>
          </div>
        </div>
      </div>

      <div class="py-4 px-8">
        <div class="">
          <h3 class="mt-1 mb-2">Qualification:</h3>
          <div class="">
            <ul class="list-disc pl-8">
              <li>Bechelor's degree or equivalent pratcital expirience.</li>
              <li>5+ years in Programing Expirience</li>
              <li>Expirience analyzing data</li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/result/1" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>
