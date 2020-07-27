
//variables i might need
const globe = document.querySelectorAll('.continent')
const world = document.querySelectorAll('.country')
const north = document.querySelector('.NA')  
const south = document.querySelector('.SA')
const as = document.querySelector('.Asia')
const eur = document.querySelector('.Europe')
const afr = document.querySelector('.Africa')
const Game = document.querySelector('#Gameover');
let days = 0;
let cycle = document.createElement('p')
let dia = document.createElement('p')
let planet = document.querySelector('.global')
// console.log(who)
// people array
// people array dont care what i want, what do?
// maybe make people and days different 
const people = [
            {name:'Mansa_Musa'},
            {name:'Vlad_Dracula'}, 
            {name:'Ching_Shih'}, 
            {name:'Gandhi'},
            {name:'Nelson_Mandela'}, 
            {name:'Joan_of_Arc'},
            {name:'Hernan_Cortez'},
            ]
            //who u gonna get?
            const who = people[Math.floor(Math.random() * people.length)];
// buttons
    for (let  p = 0; world.length > p; p++) {
            UnitedStates.addEventListener('click', born)
            Brazil.addEventListener('click', born)
            UK.addEventListener('click', born)
            Japan.addEventListener('click', born)
            CapeVerde.addEventListener('click', born)
            North.addEventListener('click', travel)
            South.addEventListener('click', travel)
            Europe.addEventListener('click', travel)
            A.addEventListener('click', travel)
            Africa.addEventListener('click', travel)
            Game.addEventListener('click', (event) => {
                if(startGame) {
                 window.location.reload(true)
                }
            });
    }   
    
let startGame = false;
function restart () {
    startGame = false 
    days = 0; 
    born();
}
//start
function born(place) { 
         planet.after(dia)
            dia.innerText = `you have were born in ${place.target.innerHTML} and 1 day decided to travel away from ${place.target.innerHTML}.`;
            document.getElementById('UnitedStates').style.display = 'none'
            document.getElementById('Brazil').style.display = 'none' 
            document.getElementById('UK').style.display = 'none'
            document.getElementById('Japan').style.display = 'none'
            document.getElementById('CapeVerde').style.display = 'none'
            for(let c = 0; c < globe.length; c++) {
                globe[c].style.display ='initial'
            }
        }

        function travel (place) {
            
            if(who === 'Mansa_Musa') {
        days+=1;
    }  else if (who === 'Vlad_Dracula') {
            days+=4;
    } else if(who === 'Ching_Shih') {
            days+=2;
    } else  if(who === 'Gandhi') {
        days-=2;
    } else if (who === 'Nelson_Mandela') {
            days-=5;
    } else if (who === 'Joan_Of_Arc') { 
            days+=3;
    } else if(who === 'Hernan_Cortez') {
            days+=2;
            console.log(who)
    }
            days +=1;
            console.log(days)
            planet.after(dia)
            dia.innerHTML = `you decided to go to ${place.target.innerHTML} for a day.`;
            for(let z = 0; z < globe.length; z++) {
                 if(globe[z].innerHTML === place.target.innerHTML)  {
                    globe[z].remove()      
                 }
                 if(days >= 5) {
                    alert('you did not ever return home game over.')
                    this.after(Gameover)
                    document.getElementById('Gameover').style.display ='initial'
                    for(let z = 0; z < globe.length; z++) {
                           globe[z].remove() 
                    }
                    startGame = true;
                 }
                }
            }
                    // we have had this loop able to go through each globe by using [else if (globe.length)]
                //  } else if (globe.length == []) {
                //      alert('congradulations you made it back home.') 
                //   }  
            //     startGame = true;
            //  } else if (globe[z] == 0) {
            //      alert('congradulations you made it back home.')
            //      document.getElementById('Gameover').style.display ='initual'
            //  }
            // }