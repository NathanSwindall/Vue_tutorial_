const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: []
    };
  },
  methods: {
    addGoal() {
      let alreadyValue =
        this.goals.findIndex((t) => t === this.enteredGoalValue) === 0;
      console.log();
      if (this.enteredGoalValue !== "" && !alreadyValue) {
        this.goals.push(this.enteredGoalValue);
      }

      this.enteredGoalValue = "";
    },
    addGoal_Input(e) {
      let alreadyValue =
        this.goals.findIndex((t) => t === this.enteredGoalValue) === 0;
      if (this.enteredGoalValue !== "" && !alreadyValue) {
        this.goals.push(this.enteredGoalValue);
      }
      this.enteredGoalValue = "";
    },
    removeGoal(value) {
      this.goals = this.goals.filter((item) => item !== value);
    }
  }
});

app.mount("#user-goals");
