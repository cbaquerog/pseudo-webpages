<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const hobbies = ref("");
const router = useRouter();
const userStore = useUserStore();

const handleSubmit = () => {
  userStore.setHobbies(hobbies.value);
  router.push("/profile");
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
    <label
      for="hobbies"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your hobbies</label
    >
    <textarea
      v-model="hobbies"
      required
      id="hobbies"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write here..."
    ></textarea>
    <button
      type="submit"
      class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit and go next
    </button>
  </form>
</template>
