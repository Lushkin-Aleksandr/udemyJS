'use strict';

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function convertUsd() {
        let promise = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            
            request.onreadystatechange = function(){
                if (request.readyState === 4 && request.status === 200) {
                    
                    
                    resolve(request.response);
                    console.log(request.readyState);
                                   
                } else if (request.readyState < 4 && request.status > 200) {
                    reject();      
                    console.log(request.status);              
                }
            };
            
        });

        return promise;
    }

    convertUsd()
        .then((response) => {
            let data = JSON.parse(response);
                inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => {
            inputUsd.value = "Что-то пошло не так!";
        });
    

});