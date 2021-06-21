const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue",
      vueLink: "https://vuejs.org/",
      name: ""
    };
  },
  conputed: {
    fullName() {
      if (this.name === "") {
        return;
      }
      return this.name + " " + "Swindall";
    }
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return "Need some work";
      }
      return "Master Vue person";
    }
  }
});

app.mount("#user-goal");
