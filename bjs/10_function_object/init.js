
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText=initPerson.gender;
    document.getElementById('birthYearOutput').innerText=initPerson.birthYear;
    document.getElementById('professionOutput').innerText=initPerson.profession;
};


document.getElementById('restart').addEventListener('click',function(){
    window.location.reload();
});


document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText='Генерация года рождения';
    document.getElementById('professionOutput').innerText='Генерация профессии';
});