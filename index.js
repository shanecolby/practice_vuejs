var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      showInfo: true,
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
    }
  }
});

