let fbr = document.querySelectorAll('.filter-btn');
let b1 = document.querySelector('.Choose-btn1');
let b2 = document.querySelector('.Choose-btn2');
let b3 = document.querySelector('.Choose-btn3');
let b4 = document.querySelector('.Choose-btn4');
let b5 = document.querySelector('.Choose-btn5');
let b6 = document.querySelector('.Choose-btn6');
let b7 = document.querySelector('.SSS');
let i = 0;
let b = 0;
for (let b of fbr){
    b.onclick = function(){
        document.querySelector('.filter-btn.current').classList.remove('current');
        b.classList.add('current');
        if(document.querySelector('.filter-btn.current').innerText == "МЬЮИНГ"){
            b1.style.backgroundImage = "url(gg/sss.jpg)";
            b1.style.color = "yellow";
            b1.innerText = "Создатель сайта";
            b2.innerText = "ориг мьюинг";
            b2.style.backgroundImage = "url(gg/121212121212.png)";
            b2.style.color = "yellow";
            b3.innerText = "снеговик мьюинг";
            b3.style.backgroundImage = "url(gg/image23.png)";
            b3.style.color = "yellow";
            b4.style.visibility = "hidden";
            b5.style.visibility = "hidden";
            b6.style.visibility = "hidden";
            
        }
        if(document.querySelector('.filter-btn.current').innerText == "ПАСХАЛКИ"){
            b1.style.backgroundImage = "none";
            b1.style.backgroundColor = "RED"
            b1.style.color = "Black";
            b1.innerText = "1488";
            b2.innerText = "банкай";
            b2.style.backgroundImage = "url(gg/maxresdefa.jpg)";
            b2.style.color = "black";
            b3.innerText = "Испанские сапоги";
            b3.style.backgroundImage = "url(gg/pos.jpg)";
            b3.style.color = "black";
            b4.style.visibility = "hidden";
            b5.style.visibility = "hidden";
            b6.style.visibility = "hidden";
            
        }
        if(document.querySelector('.filter-btn.current').innerText == "РАЙАН ГОСЛИНГ"){
            b1.style.backgroundImage = "url(gg/main_2x.jpg)";
            
            b1.style.color = "pink";
            b2.innerText = "Драйв";
            b1.innerText = "Кен(т)";
            b2.style.backgroundImage = "url(gg/drive.jpg)";
            b2.style.color = "pink";
            b3.innerText = "Мемный";
            b3.style.backgroundImage = "url(gg/1a.jpg)";
            b3.style.color = "pink";
            b4.style.visibility = "hidden";
            b5.style.visibility = "hidden";
            b6.style.visibility = "hidden";
            
        }
        if(document.querySelector('.filter-btn.current').innerText == "УЗБЕКИ"){
            b2.style.backgroundImage = "url(gg/u2.jpg)";
            
            b1.style.color = "green";
            b2.innerText = "Проснулись";
            b1.innerText = "Спят";
            b1.style.backgroundImage = "url(gg/u1.jpg)";
            b2.style.color = "green";
            b3.innerText = "Кушают";
            b3.style.backgroundImage = "url(gg/u3.jpg)";
            b3.style.color = "green";
            b4.style.visibility = "hidden";
            b5.style.visibility = "hidden";
            b6.style.visibility = "hidden";
            
        }
        if(document.querySelector('.filter-btn.current').innerText == "ПИНГВИНЫ"){
            b2.style.backgroundImage = "url(gg/tr.jpg)";
            b4.style.backgroundImage = "url(gg/ch.jpg)";
           
            b2.innerText = "";
            b1.innerText = "";
            b1.style.backgroundImage = "url(gg/pr.jpg)";
            
            b3.innerText = "";
            b3.style.backgroundImage = "url(gg/m.jpg)";
            b4.innerText = "";
            b4.style.visibility = "visible";
            b5.style.visibility = "hidden";
            b6.style.visibility = "hidden";
            
        }
        if(document.querySelector('.filter-btn.current').innerText == "СИГМЫ"){
            b1.style.backgroundImage = "url(gg/korol.jpg)";
            b1.style.color = "red";
            b1.innerText = "Создатель сайта";
            b2.innerText = "Тайлер Дерден";
            b2.style.backgroundImage = "url(gg/112.jpg)";
            b2.style.color = "red";
            b3.innerText = "Сигма";
            b3.style.backgroundImage = "url(gg/ez.jpg)";
            b3.style.color = "red";
            b4.style.backgroundImage = "url(gg/rtt.jpg)";
            b4.style.color = "red";
            b4.innerText = "Арген";
            b5.innerText = "Американский психопат";
            b5.style.backgroundImage = "url(gg/maxr.jpg)";
            b5.style.color = "red";
            b6.innerText = "мьюинг сигмо";
            b6.style.backgroundImage = "url(gg/sss.jpg)";
            b6.style.color = "red";
            b4.style.visibility = "visible";
            b5.style.visibility = "visible";
            b6.style.visibility = "visible";
            
        }
    }
    i++; 
}
b7.onclick = function(){
    if(b == 10){
        b7.innerText = "Все больше не покликаешь!!!!😡😡😡😡😡"
        b7.style.backgroundColor = "black"
        b7.style.color = "white"
    }
    if(b7.innerText == "Эта кнопка просто для декора. Вас надурили!!!"){
        b7.innerText = "Вас обманули но вы все еще пытаетесь нажать?"
        b7.style.backgroundColor = "green"
    
    }else if((b7.innerText == "Вас обманули но вы все еще пытаетесь нажать?") || (b7.innerText == "ВСЕ МОЖНО НАЙТИ ЗДЕСЬ")){
        b7.innerText = "Эта кнопка просто для декора. Вас надурили!!!";
        b7.style.backgroundColor = "red";
    }
    b++;
}
