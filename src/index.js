import './style.css';
//import view from './x.html';
import moment from 'moment';


//moment.locale('es');
//document.querySelector('h1').innerText = `hoy es ${ndia} ${dia} de ${mes} del ${año}`;

/** Initial title */
let nextYear =  Number(moment().add(1,'year').format('YYYY'));
/** Get the coming christmas */
let christmas = (`25-12-${moment().year()}`<moment())?`25-12-${moment().year()}`:`25-12-${moment().year()+1}`;

console.log(christmas);

const difi = document.querySelector('.falta');
difi.innerText = `there are ${calcDiff('days',nextYear)} days until ${nextYear}`;


/* Progress bar */
export let porcentaje = 100 - Math.round(calcDiff('days',nextYear)/3.65);
const barra = document.getElementById('interporcent');
barra.style.width = `${porcentaje}%`;
barra.innerText = `${porcentaje}%`;



/** Functions */

function calcDiff(unity,target){
    let diference = moment().diff(target+'-01-01',unity);
    return diference *=-1;
}

/** listen options */

const options = document.querySelector('.op');

options.addEventListener('click',(e)=>{
    
    const unity = e.target.innerText;
    if(unity.length <15){ 
        difi.innerText = `There are ${new Intl.NumberFormat().format(calcDiff(unity.toLowerCase(),nextYear))} ${unity} until ${nextYear}`;
    }
});

/** p5 */

//const x = document.querySelector('.x');





