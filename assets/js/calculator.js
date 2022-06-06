let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    console.log('clear')
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // key doen't press
    if(!event.target.classList.contains('btn')) return;
    //  ac key was pressed
    if(event.target.classList.contains('ac')) return; 

    out.textContent = '';
    // take press button 
    const key = event.target.textContent;

    //if press buttons 0-9 or .
    if(digit.includes(key)) {
       if(b === '' && sign === ''){
        a += key;
        out.textContent =  a;
       } else if (a !== '' && b !== '' && finish ) {
        b = key;
        finish = true;
        out.textContent = b;

       } else {
           b += key;
           out.textContent = b;
       }
       console.log(a, b, sign);
       return;
    }

    //if press buttons + - / *
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign)
        return;
    }

     //if press buttons =
     if(key === '='){
         if( b === ''){
             b = a;
         }
         switch(sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;    
            case '/':
                if( b === '0'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a / b;
                break; 
         }
         finish = true;
         out.textContent = a;
         console.log(a, b, sign)
     }

     //if press buttons %
     if(key === '%'){
        a = a / 100;
        out.textContent = a;
     }

     //if press buttons %
     if(key === '+/-'){
        if(b === '' && sign === ''){
            a = -1 * a;
            out.textContent = a;
        } else {
            b = -1 * b;
            out.textContent = b;
        }
     }
}