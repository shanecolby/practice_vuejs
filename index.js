var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
  methods: {
    changeMessage: function () {
      console.log("changing message...");
      this.message = "POOF...new message";
    }
  }
});

