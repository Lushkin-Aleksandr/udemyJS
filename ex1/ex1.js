"use strict";
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

let appData = {
    money,
    timeDate: time,
    expenses: {
        answer1: answer2
        // answer1: prompt("Введите обязательную статью расходов в этом месяце"),
        // answer2: prompt("Во сколько обойдется?"),
        
    },
    optionalExpenses: "",
    income: [],
    savings: false
};

let dailyBudget = (appData.money - appData.expenses.answer1) / 30;

alert("Ваш бюджет на день " + dailyBudget + " рублей.");

