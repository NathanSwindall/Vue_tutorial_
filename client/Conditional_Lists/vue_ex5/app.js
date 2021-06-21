const app = Vue.createApp({
  data() {
    return {
      enteredText: "",
      tasks: [],
      hidden: "Hide"
    };
  },
  methods: {
    addTask() {
      let already = this.tasks.findIndex((t) => t === this.enteredText) === 0;
      if (!already && this.enteredText !== "") {
        this.tasks.push(this.enteredText);
      }
      this.enteredText = "";
    },
    hideTasks() {
      if (this.hidden === "Hide") {
        this.hidden = "Show";
      } else {
        this.hidden = "Hide";
      }
    }
  }
});

app.mount("#assignment");
