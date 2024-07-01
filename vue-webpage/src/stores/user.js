import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    email: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    hobbies: "",
  }),
  actions: {
    setUserData(email, firstName, lastName, birthDate) {
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthDate = birthDate;
    },
    setHobbies(hobbies) {
      this.hobbies = hobbies;
    },
  },
});
