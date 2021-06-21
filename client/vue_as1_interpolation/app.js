const app = Vue.createApp({
  data() {
    return {
      name: "Nathan",
      age: 29,
      favoriteRan: Math.random(),
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jamesgmartin.center%2F2020%2F09%2Feliminate-or-radically-restructure-federal-student-loans%2F&psig=AOvVaw1rxCqC4cIYTPPnTrBbVEjZ&ust=1622128982605000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJi5-L_T5_ACFQAAAAAdAAAAABAD"
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    changeName(event) {
      this.name = event.target.value;
    }
  }
});

app.mount("#assignment");

// if you want the change to happen with every "enter" press you use change
// if you wnat the change to happen every key stroke use 'input' event
// using the method with no () like changeName and not changeName() will allow access to the click event
