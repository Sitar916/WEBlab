export default class Model {
  constructor() {
    this.simpleButtons = "C CE / * 7 8 9 - 5 6 4 + 1 2 3 0 ( ) =".split(" ");
    this.complexButtons = [
      { name: "sin", symbol: "sin" },
      { name: "cos", symbol: "cos" },
      { name: "tan", symbol: "tan" },
      { name: "ctg", symbol: "ctg" },
      { name: "C", symbol: "C" },
      { name: "CE", symbol: "CE" },
      { name: "(", symbol: "(" },
      { name: ")", symbol: ")" },
      { name: "ln", symbol: "ln" },
      { name: "lg", symbol: "lg" },
      { name: "%", symbol: "%" },
      { name: "*", symbol: "*" },
      { name: "^2", symbol: "x^2" },
      { name: "sqrt", symbol: "√x" },
      { name: "!", symbol: "x!" },
      { name: "/", symbol: "/" },
      { name: "^", symbol: "x^y" },
      { name: "+", symbol: "+" },
      { name: "-", symbol: "-" },
      { name: "0", symbol: "0" },
      { name: "1", symbol: "1" },
      { name: "2", symbol: "2" },
      { name: "3", symbol: "3" },
      { name: "4", symbol: "4" },
      { name: "5", symbol: "5" },
      { name: "6", symbol: "6" },
      { name: "7", symbol: "7" },
      { name: "8", symbol: "8" },
      { name: "9", symbol: "9" },
      { name: ".", symbol: "." },
      { name: "=", symbol: "=" },
    ];
    this.result = 0;
    this.powInput = "";
    this.output = "";
    this.history = [];
  }

  factorial() {
    let n = this.output;
    let result = 1;
    while (n) {
      result *= n--;
    }
    return result;
  }

  degrees(value) {
    switch (value) {
      case "sin":
        return parseFloat(
          Math.sin((eval(this.output) / 180) * Math.PI)
            .toFixed(5)
            .toString()
        );
      case "cos":
        return parseFloat(
          Math.cos((eval(this.output) / 180) * Math.PI)
            .toFixed(5)
            .toString()
        );
      case "tan":
        return parseFloat(
          Math.tan((eval(this.output) / 180) * Math.PI)
            .toFixed(5)
            .toString()
        );
      case "ctg":
        return parseFloat(
          1 /
            Math.tan((eval(this.output) / 180) * Math.PI)
              .toFixed(5)
              .toString()
        );
    }
    return this.result;
  }

  logAndSimpleFunctions(value) {
    switch (value) {
      case "ln":
        return Math.log(eval(this.output)).toFixed(5);
      case "lg":
        return Math.log10(eval(this.output)).toFixed(5);
      case "%":
        return eval(this.output) / 100;
      case "sqrt":
        return Math.sqrt(eval(this.output));
    }
  }

  powAndFact(value) {
    switch (value) {
      case "!":
        return this.factorial();
      case "^2":
        return Math.pow(eval(this.output), 2);
      case "^":
        return this.output + "^";
    }
    return this.result;
  }

  async defineValue(value) {
    if (
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "9" ||
      value === "0" ||
      value === "+" ||
      value === "-" ||
      value === "/" ||
      value === "*" ||
      value === "." ||
      value === "(" ||
      value === ")"
    )
      this.output += value;

    if (
      value === "sin" ||
      value === "cos" ||
      value === "tan" ||
      value === "ctg"
    )
      this.output = this.degrees(value).toString();

    if (value === "ln" || value === "lg" || value === "%" || value === "sqrt")
      this.output = this.logAndSimpleFunctions(value).toString();

    if (value === "^2" || value === "^" || value === "!")
      this.output = this.powAndFact(value).toString();

    if (value === "C") this.output = "";

    if (value.match(/CE|Backspace/))
      this.output = this.output.substring(0, this.output.length - 1);

    if (value.match(/=|Enter/)) {
      if (this.output.includes("^")) {
        let input = this.output.split("^");
        let powNum = eval(input[1]);
        let numToPow = eval(input[0]);
        this.result = Math.pow(numToPow, powNum);
        this.output = this.result;
      }
      await this.sendHistoryItemOnServer(`${this.output}=${eval(this.output)}`);
      await this.getHistoryFromServer();
      this.output = eval(this.output).toString();
    }
  }

  calc(value) {
    console.log(value);
    this.defineValue(value);
    console.log(typeof this.output);
  }
  async getHistoryFromServer() {
    this.history = [];
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((item) => {
          this.history.push(item.item);
        });
      });
  }
  async sendHistoryItemOnServer(item) {
    fetch("http://localhost:3000/push", {
      method: "POST",
      body: JSON.stringify({ item: item }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async clearHistory() {
    await fetch("http://localhost:3000/clear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await this.getHistoryFromServer();
  }
}
