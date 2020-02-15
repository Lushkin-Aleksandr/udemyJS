'use strict';

let startCalcBtn = document.getElementById('start');

let budgetValue = document.querySelector('.budget-value');
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
