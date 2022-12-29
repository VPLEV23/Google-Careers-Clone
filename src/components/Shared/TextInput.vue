<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = ($e: Event) => {
  const target = $e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
// export default {
//   name: "TextInput",
//   props: {
//     modelValue: {
//       type: String,
//       required: true,
//     },
//   },
//   emits: ["update:modelValue"],
//   methods: {
//
//   },
// };
</script>
