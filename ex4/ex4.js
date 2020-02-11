"use strict";

let money;
let time;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();




let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется?");
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
                && a !=  '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("bad");
                i--;
            }
            
        } 
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ваш бюджет на один день " + appData.moneyPerDay + " рублей.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с вашего депозита за месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let a = prompt("Статья необязательных расходов?");
    
            appData.optionalExpenses[i] = a;
            
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
        console.log(typeof items);
        while (typeof(items) != "string" || items === "" || items === null) {
            items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.sort();
        
        appData.income.forEach(function(item, i, arr) {
            alert("Способы доп. заработка: " + (i+1) + " " + item);
        });

        
    }
};

console.log("Наша программа включает в себя данные:  \n");
for (let key in appData) {
    console.log(key + "\n");
}



