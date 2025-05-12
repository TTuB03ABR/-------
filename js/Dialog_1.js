 var person = {
    "Snils 1" : ["Дивин", "Артём", "Викторович", 4, "сентября", 2005, "м","исполнено"],
    "Snils 2" : ["Дивина", "Дарья", "Викторовна", 28, "марта", 2003, "ж","медотвод"],
    "Snils 3" : ["Дивина", "Алина", "Викторовна", 27, "декабря", 1997, "ж","назначено"],
};
console.log(person);
Snils4="Snils 4"

        let Snils;
        var FirstFunction = function (person,Snils) {
            Snils = prompt("Введите SNILS пациента", Snils);
            infoname = person[Snils];
            console.log(infoname);
            alert("Информация найдена"+ infoname);
            statusPriv = person[Snils][7];
            console.log(statusPriv);
            
            
};
        
        var SecondFunction = function (statusPriv, infoname){      
        //statusPriv = person[Snils][7];
        if (statusPriv === "исполнено") {
            alert("Отказано в прививке пациенту" + infoname);
        } else if (statusPriv === "медотвод") {
            alert("Отказано в прививке пациенту" + infoname);
        } else {
            alert("Исполнить прививку пациенту" + infoname);
        }
    }
    ForSecond = FirstFunction(person, Snils);
    SecondFunction(statusPriv, infoname);
        while (confirm("Продолжить проверку?")) {
    ForSecond = FirstFunction(person, Snils);
    SecondFunction(statusPriv, infoname);
   } 
   console.log("Сеанс проверки окончен");