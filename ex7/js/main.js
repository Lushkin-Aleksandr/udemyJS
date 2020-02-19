'use strict';

let startCalcBtn = document.getElementById('start');

let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');


let expensesItems = document.getElementsByClassName('expenses-item');

let buttons = document.getElementsByTagName('button');
let expensesItemBtn = buttons[0];
let optionalexpensesBtn = buttons[1];
let countBudgetBtn = buttons[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let savingsCheckbox = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

function checkStartProgram() {
    if (money === undefined) {
        expensesItemBtn.disabled = true;
        optionalexpensesBtn.disabled = true;
        countBudgetBtn.disabled = true;
    } else {
        expensesItemBtn.disabled = false;
        optionalexpensesBtn.disabled = false;
        countBudgetBtn.disabled = false;
    }
}

checkStartProgram();

//Обработка клика по кнпоке Начать расчет
startCalcBtn.addEventListener('click', function() {    
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeDate = time;
    
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    checkStartProgram();
});

//Кнопка обязательных расходов
expensesItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a !=  '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("bad");
            i--;
        }
        
    }
    expensesValue.textContent = sum;
});

//Кнопка необязательных расходов
optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let a = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = a;

        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        
    }
});

//Кнопка расчета дневного бюджета
countBudgetBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }

    
});

//Статьи возможного дохода
chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

//Чекбокс накоплений
savingsCheckbox.addEventListener('click', function() {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

//Расчет накоплений через сумму и процент
chooseSum.addEventListener('input', function() {
    if (appData.savings === true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function() {
    if (appData.savings === true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});




let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
};







