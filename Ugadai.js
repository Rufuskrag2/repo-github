var button = document.querySelector("button");
var button1 = document.querySelector("button1");
var Igroki = document.querySelector(".input-in");
var a;
var y;
var qwestMassiv = ["Книга", "Храм", "Бомж", "Блуд", "Байкал", "Потрах", "Цербер"];
var qwesti = qwestMassiv[Math.round(Math.random()*(qwestMassiv.length-1))];

button.onclick = function (){ // функция скроет поле кол-ва игроков и кнопку по id myDiv а также запишет введенные в поле данные в переменную igroki
  
    //Открываем вопросы для игроков
    y = document.getElementById("mPlayrQ1");
        y.style.display = "block";

    var x = document.getElementById("myDiv");  //введение для скорытия кнопки
  

    if (Igroki.value < 4){ // проверка достаточно ли игнроков
        alert("Мало человек для игры"); }
        else {if (x.style.display === "none"){//это блок скрывает поля если все ок
        x.style.display = "block";} 
        else {x.style.display = "none";
        alert(Igroki.value + " -  столько будет игроков");}}
        //___________________________________________

    a = +Igroki.value;// - блок по записи данных в переменнную igroki
  
    
          var z = 1;
            for(var i = 0; i < a; i++){
                   z = Math.round(Math.random()*a);
                if(z < (2*a)/5){
                    alert("Ты шпион");
                    alert("Отдай телефон соседу справа");
                }else {alert(qwesti);  alert("Отдай телефон соседу справа");}

            }
            if (i == a){
                startTimer();
            }
             
    
};

// button1.onclick = function (){

//     var x = Math.round(Math.random()*a);

//     alert(x);

// };
// ТАЙМЕР - код не мой




function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    if (s == 0) {
      if (m == 0) {
        if (h == 0) {
          alert("Время вышло");
          window.location.reload();
          return;
        }
        h--;
        m = 60;
        if (h < 10) h = "0" + h;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    setTimeout(startTimer, 1000);
  }