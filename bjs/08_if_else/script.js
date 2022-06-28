let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    
// Замена введенных Мин и Мах в случае выхода за допустимые границы
minValue = ((minValue < -999) || (minValue > 999) ? -999 : minValue); 
maxValue = ((maxValue < -999) || (maxValue > 999)? 999 : maxValue);
// Перестановка введенных Мин и Мах местами в случае Мин > Мах
if (minValue > maxValue){
    const changeMinMax = minValue;
    minValue = maxValue;
    maxValue = changeMinMax;
}  

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); 
let orderNumber = 1; 
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
                const phraseRandom = Math.round(Math.random()*2);   // случайный выбор фразы для ответа через тернарный оператор
                answerField.innerText = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;
                    `Похоже, что я не смогу угадать..`; 

                gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);

            // Преобразование ответа из числа в текстовую форму
            let answerText; 
            let units=['','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
            let tens=['','','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'];
            let hundreds=['','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
            if (Math.abs(answerNumber) <= 19){
                answerText = units[Math.abs(answerNumber)];

            }else{
                if  ((Math.abs(answerNumber) >= 20) && (Math.abs(answerNumber) <= 99)){
                    answerText = tens[Math.floor(Math.abs(answerNumber) / 10)] + ' ' + units[Math.abs(answerNumber) % 10];

                }else{
                    if ((Math.abs(answerNumber) % 100) < 20) {
                        answerText = hundreds[Math.floor(Math.abs(answerNumber) / 100)] + ' ' + units[Math.abs(answerNumber) % 100];  

                    }else{
                        answerText = hundreds[Math.floor(Math.abs(answerNumber) / 100)] + ' ' + tens[Math.floor(Math.abs(answerNumber % 100) / 10)] + ' ' + units[Math.abs(answerNumber) % 10];
                    }                    
                }      
            }
            if (answerNumber<0) {
                answerText='минус '+answerText;
            }
                        
            if (answerText.length >= 20){
                answerText=answerNumber;
            }
            // Конец преобразования

            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random()*2);  // случайный выбор варианта фразы для ответа через Switch
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerText }?`;
                    break;
                case 1:
                    answerField.innerText = `Хммм, вы загадали число ${answerText }?`;
                    break;
                case 2:
                    answerField.innerText = `Дайте подумать... Неужели это число ${answerText }?`;                    
                    break;
                default:
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()); // случайный выбор фразы для ответа через тернарный оператор
            answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                `Похоже, что я не смогу угадать..`; 
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            // Преобразование ответа из числа в текстовую форму
            let answerText; 
            let units=['','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
            let tens=['','','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'];
            let hundreds=['','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
            if (Math.abs(answerNumber) <= 19){
                answerText = units[Math.abs(answerNumber)];

            }else{
                if ((Math.abs(answerNumber) <= 99)){
                    answerText = tens[Math.floor(Math.abs(answerNumber) / 10)] + ' ' + units[Math.abs(answerNumber) % 10];

                }else{
                    if ((Math.abs(answerNumber) % 100) < 20) {
                        answerText = hundreds[Math.floor(Math.abs(answerNumber) / 100)] + ' ' + units[Math.abs(answerNumber) % 100];  

                    }else{
                        answerText = hundreds[Math.floor(Math.abs(answerNumber) / 100)] + ' ' + tens[Math.floor(Math.abs(answerNumber % 100) / 10)] + ' ' + units[Math.abs(answerNumber) % 10];
                    }                    
                }      
            }
            if (answerNumber<0) {
                answerText='минус '+answerText;
            }
                        
            if (answerText.length > 20){
                answerText=answerNumber;
            }
            // Конец преобразования
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);  // случайный выбор варианта фразы для ответа через Switch
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerText }?`;
                    break;
                case 1:
                    answerField.innerText = `Хммм, вы загадали число ${answerText }?`;
                    break;
                case 2:
                    answerField.innerText = `Дайте подумать... Неужели это число ${answerText }?`;
                    break;
                default:
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);  
        answerField.innerText = (phraseRandom == 0) ?                 
            `Я всегда угадываю\n\u{1F60E}` : 
            (phraseRandom == 1) ?
                `Ну какой же я молодец!\n\u{1F44D}` : 
                `Это было непросто, но я угадал!\n\u{270C}`;
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    // Замена введенных Мин и Мах в случае выхода их за допустимые границы
    minValue = ((minValue < -999) || (minValue > 999) ? -999 : minValue); 
    maxValue = ((maxValue < -999) || (maxValue > 999)? 999 : maxValue);
    // Перестановка местами введенных Мин и Мах в случае, если Мин > Мах
    if (minValue > maxValue){
        const changeMinMax = minValue;
        minValue = maxValue;
        maxValue = changeMinMax;
    }  

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);   
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    
})


