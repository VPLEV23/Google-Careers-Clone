import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Degree } from "@/api/types";
import getDegree from "@/api/getDegrees";

export const useDegreeStore = defineStore("degrees", () => {
  const degrees = ref<Degree[]>([]);

  const FETCH_DEGREES = async () => {
    const reciveDegrees = await getDegree();
    degrees.value = reciveDegrees;
  };

  const UNIQ_DEGREES = computed(() =>
    degrees.value.map((degree) => degree.degree)
  );

  return { degrees, FETCH_DEGREES, UNIQ_DEGREES };
});
