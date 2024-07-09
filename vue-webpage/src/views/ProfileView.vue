<script setup>
import { computed } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const displayValue = (value) => {
  return value || "____";
};

const email = computed(() => displayValue(userStore.email));
const firstName = computed(() => displayValue(userStore.firstName));
const lastName = computed(() => displayValue(userStore.lastName));
const birthDate = computed(() => displayValue(userStore.birthDate));
const hobbies = computed(() => displayValue(userStore.hobbies));
</script>

<template>
  <div class="m-2 p-2 text-center mt-20">
    <p class="mb-3 text-black dark:text-gray-400">
      You are called <strong>{{ firstName }} {{ lastName }}</strong
      >, you were born the day <strong>{{ birthDate }}</strong
      >, your email is <strong>{{ email }}</strong> and your hobbies are
      <strong>{{ hobbies }}</strong>
    </p>
  </div>
</template>
