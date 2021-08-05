//variables DOM
const btnNum = document.getElementsByName('data-number');
const btnOpe = document.getElementsByName('data-opera');
const btnequal = document.getElementsByName('data-equal')[0];
const btndel = document.getElementsByName('data-del')[0];
const checkbox = document.getElementsByName('switch');
const toggle = document.getElementsByName('switch');
const delbtn = document.getElementById('delete');
const resetbtn = document.getElementById('reset');
const equalbtn = document.getElementById('same');
const screen = document.getElementById('box');
const allbtn = document.getElementsByClassName('botones')[0];
const div = document.getElementById('cont')
//theme 1
let keybackground1 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground1');
let keyshadow1 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow1');
let keybackground1_2 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground1_2');
let keyshadow1_2 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow1_2');
let keybackground1_3 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground1_3');
let keyshadow1_3 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow1_3');
let color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1');
let theme1 = getComputedStyle(document.documentElement).getPropertyValue('--theme1');
let f1 = getComputedStyle(document.documentElement).getPropertyValue('--f1');
let screen1 = getComputedStyle(document.documentElement).getPropertyValue('--screen1');
//theme 2
let keybackground2 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground2');
let keyshadow2 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow2');
let keybackground2_2 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground2_2');
let keyshadow2_2 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow2_2');
let keybackground2_3 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground2_3');
let keyshadow2_3 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow2_3');
let color2 = getComputedStyle(document.documentElement).getPropertyValue('--color2');
let theme2 = getComputedStyle(document.documentElement).getPropertyValue('--theme2');
let f2 = getComputedStyle(document.documentElement).getPropertyValue('--f2');
let screen2 = getComputedStyle(document.documentElement).getPropertyValue('--screen2');
//Theme 3
let keybackground3 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground3');
let keyshadow3 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow3');
let keybackground3_3 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground3_3');
let keyshadow3_3 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow3_3');
let keybackground3_2 = getComputedStyle(document.documentElement).getPropertyValue('--keybackground3_2');
let keyshadow3_2 = getComputedStyle(document.documentElement).getPropertyValue('--keyshadow3_2');
let color3 = getComputedStyle(document.documentElement).getPropertyValue('--color3');
let theme3 = getComputedStyle(document.documentElement).getPropertyValue('--theme3');
let f3 = getComputedStyle(document.documentElement).getPropertyValue('--f3');
let screen3 = getComputedStyle(document.documentElement).getPropertyValue('--screen3');

//code for theme change
checkbox[0].addEventListener('change',()=>{
    div.style.setProperty('--color1',color1);
    allbtn.style.setProperty('--f1',f1);
    document.documentElement.style.setProperty('--defaultcolor','white');
    document.documentElement.style.setProperty('--keybackground1',keybackground1);
    document.documentElement.style.setProperty('--keyshadow1',keyshadow1);
    document.documentElement.style.setProperty('--keybackground1_3',keybackground1_3);
    document.documentElement.style.setProperty('--keyshadow1_3',keyshadow1_3);
    document.documentElement.style.setProperty('--keybackground1_2',keybackground1_2);
    document.documentElement.style.setProperty('--keyshadow1_2',keyshadow1_2);
    document.body.style.backgroundColor = theme1;
    allbtn.style.backgroundColor=color1;
    screen.style.backgroundColor=screen1;
});
checkbox[1].addEventListener('change',()=>{
    div.style.setProperty('--color1',color2);
    allbtn.style.setProperty('--f1',f2);
    document.documentElement.style.setProperty('--defaultcolor',f2);
    document.documentElement.style.setProperty('--keybackground1',keybackground2);
    document.documentElement.style.setProperty('--keyshadow1',keyshadow2);
    document.documentElement.style.setProperty('--keybackground1_2',keybackground2_2);
    document.documentElement.style.setProperty('--keyshadow1_2',keyshadow2_2);
    document.documentElement.style.setProperty('--keybackground1_3',keybackground2_3);
    document.documentElement.style.setProperty('--keyshadow1_3',keyshadow2_3);
    document.body.style.backgroundColor = theme2;
    allbtn.style.backgroundColor=color2;
    screen.style.backgroundColor=screen2;
});
checkbox[2].addEventListener('change',()=>{
    div.style.setProperty('--color1',color3);
    allbtn.style.setProperty('--f1',f3);
    document.documentElement.style.setProperty('--defaultcolor',f3);
    document.documentElement.style.setProperty('--keybackground1',keybackground3);
    document.documentElement.style.setProperty('--keyshadow1',keyshadow3);
    document.documentElement.style.setProperty('--keybackground1_3',keybackground3_3);
    document.documentElement.style.setProperty('--keyshadow1_3',keyshadow3_3);
    document.documentElement.style.setProperty('--keybackground1_2',keybackground3_2);
    document.documentElement.style.setProperty('--keyshadow1_2',keyshadow3_2);
    document.body.style.backgroundColor = theme3;
    allbtn.style.backgroundColor=color3;
    screen.style.backgroundColor=screen3;
});


//calculator code
let result = document.getElementById('box');
let operActual ='';
let operOld = '';
let operacion = undefined;
let signoOld = '';
let signoActual = '';

btnNum.forEach(function(button){
 button.addEventListener('click', function(){
     addNumber(button.innerText);
 })

});

btnOpe.forEach(function(button){
    button.addEventListener('click', function(){
        selectOp(button.innerText);
        addOp(button.innerText);
        
    })
});

btnequal.addEventListener('click',function(){
    calculate();
    actualizar();
});

resetbtn.addEventListener('click',function(){
    clear();
    actualizar();
});
delbtn.addEventListener('click',function(){
    del();
});

  function  addNumber(num){
      operActual = operActual.toString() + num.toString();
      
        actualizar();
  }
    function addOp(op) {

        signoActual = signoActual.toString() + op.toString();  
        actualizar();
    }

    function selectOp (op) {
       if(operActual === '') return;
       if(operActual !==''){
            calculate();
       }
       operacion = op.toString();
       operOld = operActual;
       operActual ='';

   }
   function calculate () {

       let calc;
       const anterior = parseFloat(operOld);
       const actual = parseFloat(operActual);
        
       if(isNaN(anterior) || isNaN(actual)) return;
       
       switch (operacion) {
           case '+':
               calc = anterior + actual;
               break;

               case '-':
                   calc = anterior - actual;
                   break;
                
                   case 'x':
                       calc = anterior * actual;
                       break;
                       
                       case '/':
                           calc = anterior / actual;

                            break;
                           default:
                               return;
       }
        operActual = calc;
        operacion = undefined;
        operOld = '';
        signoOld = '';
        signoActual = '';
        if(operActual == Infinity){
            operActual == 'Error';
        }
        console.log(operActual);
   }
  function actualizar(){
        result.value =  operActual + signoActual;
  }

  function clear(){
      operActual='';
      operOld = '';
      signoActual = '';
      signoOld = '';
      operacion = undefined;
  }
  function del(){
    result.value = result.value.substring(0,result.value.length -1);
    operActual='';
    signoActual='';
  }

  clear();