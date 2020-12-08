var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      showInfo: true,
      isEcoFriendly: false,
      fruits: ["raspberry", "strawberry", "cantalope", "apple"],
      newFruit: ""
    };
  },
  methods: {
    changeMessage: function () {
      console.log("changing message...");
      this.message = "POOF...new message";
    },
    toggleInfo: function () {
      console.log('toggling info...');
      this.showInfo = !this.showInfo;
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
    },
    addFruit: function () {
      console.log("adding fruit...")
      console.log(this.newFruit)
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
    // toggleEcoFriendly: function () {
    //   console.log('toggling eco friendly');
    //   this.isEcoFriendly
  }

});

