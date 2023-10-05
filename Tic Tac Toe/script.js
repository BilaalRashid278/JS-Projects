const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');
const btn_4 = document.querySelector('.btn-4');
const btn_5 = document.querySelector('.btn-5');
const btn_6 = document.querySelector('.btn-6');
const btn_7 = document.querySelector('.btn-7');
const btn_8 = document.querySelector('.btn-8');
const btn_9 = document.querySelector('.btn-9');
const buttons = document.querySelectorAll('.button');
const zero = '<i class="fa-solid fa-0 text-white fs-1"></i>'
const cross = '<i class="fa-solid fa-xmark text-white fs-1"></i>';
const reset = document.querySelector('.reset');
let isgame = false
const iswinner = document.querySelector('.winner');

buttons.forEach((e,index) => {
    const randomFunction = (indexVal) => {
        const arr = [btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,btn_7,btn_8,btn_9];
        isgame = false
        let filtered;
        const randomValGeneratorFunc = () => {
            filtered = arr.filter((value) => {
                return value.innerHTML == ""
            });
            const filteredLength = filtered.length
            let randomValGenerator = Math.round(Math.random() * filteredLength);
            return randomValGenerator
        };
        const randomValue =randomValGeneratorFunc();
        setTimeout(() => {
            filtered[randomValue].innerHTML = zero
        },500);
    };
    e.addEventListener('click',() => {
        if(isgame == false){
            isgame = true;
            buttons[index].innerHTML = cross
            randomFunction(index);
        }
    });
});

reset.addEventListener('click',() => {
    buttons.forEach((e) => {
       if(e.innerHTML == zero || e.innerHTML == cross){
            e.innerHTML = '';
       }
    });
});


