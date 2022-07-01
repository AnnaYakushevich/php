const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Светлана",
            "id_2": "Анна",
            "id_3": "Дарья",
            "id_4": "Любовь",
            "id_5": "Мария",
            "id_6": "Анастасия",
            "id_7": "Наталья",
            "id_8": "Полина",
            "id_9": "Марина",
            "id_10": "Галина"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Павлов",
            "id_3": "Вячеславов",
            "id_4": "Вадимов",
            "id_5": "Михайлов",
            "id_6": "Дмитриев",
            "id_7": "Владимиров",
            "id_8": "Георгиев",
            "id_9": "Алексеев",
            "id_10": "Николаев"
        }
    }`,

    maleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "Пилот",
            "id_2": "Пожарный",
            "id_3": "Футболист",
            "id_4": "Моряк",
            "id_5": "Медбрат",
            "id_6": "Программист",
            "id_7": "Врач",
            "id_8": "Учитель",
            "id_9": "Бухгалтер",
            "id_10": "Дизайнер"
        }
    }`,

    femaleProfessionJson: `{
        "count": 10,
        "list": {     
            "id_1": "Маникюрша",
            "id_2": "Стюардесса",
            "id_3": "Медсестра",
            "id_4": "Актриса",
            "id_5": "Швея",
            "id_6": "Программист",
            "id_7": "Врач",
            "id_8": "Учитель",
            "id_9": "Бухгалтер",
            "id_10": "Дизайнер"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина', 
 
  
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min), // Генерация случайного числа между min и max

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
    randomGender() {
        return this.gender=this.randomIntNumber() ? 'Мужчина': 'Женщина';
    },

    randomFirstName: function() {
        if (this.gender =='Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }else {
            return this.randomValue(this.firstNameFemaleJson);
        }     

    },

    randomSurname: function() {
        if (this.gender =='Мужчина') {
            return this.randomValue(this.surnameJson);        
        }else {
            return this.randomValue(this.surnameJson)+'a'; 
        }
    },

    randomPatronymic: function() {
        if (this.gender =='Мужчина') {
            return this.randomValue(this.patronymicJson)+'ич';        
        }else {
            return this.randomValue(this.patronymicJson)+'на'; 
        }
    },

    randomBirthYear: function() {
       return this.randomIntNumber(1930, 2004) + ' года рождения';       
    },
   
    randomProfession: function() {
        if (this.gender =='Мужчина') {
            return this.randomValue(this.maleProfessionJson);        
        }else {
            return this.randomValue(this.femaleProfessionJson); 
        }
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
