console.info('Hello World !');

let compteur = 0;
let firstclick = true;
let play = true;
let chronos = 15;
let largeur = window.innerWidth;
let longueur = window.innerHeight;
console.log("largeur: " + largeur, "longueur: " + longueur);

let box2 = document.querySelector(".box");

box2.addEventListener('click', (event) => {
    if (play) {
        if (firstclick) {
            firstclick = false;
            setInterval(setTime, 1000);
        }
        
        compteur += 1;
        console.log('nombre de click: ', compteur);
        let x = 0;
        let y = 0;
        
        do {
            x = Math.floor(Math.random() * (largeur - 100));
        } while(x > largeur);

        do {
            y = Math.floor(Math.random() * (longueur - 100));
        } while(y > longueur);
        
        console.log("longueur:" + x, "largeur: " + y);

        event.target.style.top = y + "px";
        event.target.style.left = x + "px";
    }
});


function setTime () {
    if (play) {
        chronos--;

        if (chronos <= 5) {
            document.querySelector('.time').style.color = "red";
        }

        if (chronos <= 0) {
            play = false;
        }

        document.querySelector('.time').innerHTML = '' + chronos;
    } else {
        document.querySelector('.time').style.color = "greenyellow";
        document.querySelector('.time').innerHTML = "Vous avez cliqué " + compteur + " fois";
        box2.style.display = "none";
    }
}
