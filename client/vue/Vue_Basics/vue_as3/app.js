const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    sub(num) {
      this.counter -= num;
    },
    showResult() {}
  },
  computed: {
    result() {
      console.log("computed");
      if (this.counter < 37) {
        return "Below 37";
      } else if (this.counter > 37) {
        return "Above 37";
      } else {
        return "Just 37";
      }
    }
  }
});

app.mount("#assignment");
