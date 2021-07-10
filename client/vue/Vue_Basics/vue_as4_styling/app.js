const app = Vue.createApp({
  data() {
    return {
      message: "",
      placeholder: "Nathan was here",
      hidden: false,
      color: ""
    };
  },
  computed: {
    addUser() {
      if (this.message === "user1") {
        return { user1: true };
      } else if (this.message === "user2") {
        return { user2: true };
      } else return {};
    },
    makeHidden() {
      if (this.hidden === true) {
        return { hidden: true };
      } else {
        return { visible: true };
      }
    },
    colorP() {
      if (this.color !== "") {
        console.log("In the color function");
        return { backgroundColor: this.color };
      }
    }
  },
  methods: {
    toggleButton() {
      this.hidden = !this.hidden;
    }
  }
});

app.mount("#assignment");
