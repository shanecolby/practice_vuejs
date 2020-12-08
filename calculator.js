var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0
    };
  },
  methods: {
    computeSum: function () {
      console.log('computing sum..');
      // console.log(this.number1);
      // console.log(this.number2);
      // console.log(this.number3);
      console.log(parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3));
      this.sum = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    }
  }
});