//If you want to get the value the user enters and bind the value use v-model and not v-bind:value  and v-on:input
// v-model=data-property
// : shorthand for v-bind
// @ shorthand for v-on

const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmedOutput: "",
      name: "",
      counter: 0
    };
  },
  computed: {
    fullName() {
      console.log("Hello");
      if (this.name === "") {
        return;
      }
      return this.name + " " + "Swindall";
    }
  },
  watch: {
    counter(value) {
      console.log("the watcher");
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  methods: {
    alertButton() {
      alert("you have pressed the button");
    },
    registerKeyDown(event) {
      this.output = event.target.value;
      this.name = event.target.value;
    },
    registerConfirmed(event) {
      this.confirmedOutput = this.output;
    },
    add(event, additive) {
      this.counter += additive;
    },
    dec(event, subtractive) {
      this.counter -= subtractive;
    }
  }
});

app.mount("#assignment");
