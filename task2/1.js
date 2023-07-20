var personAccount = {
  firtName: "Tauseef",
  lastName: "patel",
  incomes: {
    job: 300,
    moonLight: 700,
  },
  expenses: {
    lifeStyle: 800,
    house: 200,
  },
  totalIncome: function () {
    var tIncome = 0;
    for (const inc in this.incomes) {
      tIncome = this.incomes[inc] + tIncome;
    }
    return tIncome;
  },
  totalExpense: function () {
    var tExpense = 0;
    for (const exp in this.expenses) {
      tExpense = this.expenses[exp] + tExpense;
    }
    return tExpense;
  },
  accountInfo: function () {
    console.log(
      `Name is ${this.firtName} ${
        this.lastName
      } total income ${this.totalIncome()} and total expenses ${this.totalExpense()}`
    );
  },
  addIncome: function (desc, inc) {
    this.incomes[desc] = inc;
  },
  addExpense: function (desc, exp) {
    this.expenses[desc] = exp;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
