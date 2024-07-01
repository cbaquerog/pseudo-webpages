<script setup>
import { computed } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const email = computed(() => userStore.email);
const firstName = computed(() => userStore.firstName);
const lastName = computed(() => userStore.lastName);
const birthDate = computed(() => userStore.birthDate);
const hobbies = computed(() => userStore.hobbies);
</script>

<template>
  <div class="m-2 p-2">
    <p class="mb-3 text-gray-500 dark:text-gray-400">
      You are called {{ firstName }} {{ lastName }}, you were born the day
      {{ birthDate }}, your email is {{ email }} and your hobbies are
      {{ hobbies }}
    </p>
  </div>
</template>
