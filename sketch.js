const container = document.querySelector('#container');
const btn = document.createElement('button');
btn.innerText = 'Reset';
btn.classList.add('btn');
container.appendChild(btn);

let num1 = 64;
for(let i=0;i<num1;i++){
    const box_holder = document.createElement('div');
    box_holder.classList.add('box_holder');
    container.appendChild(box_holder);
    for(let j=0;j<num1;j++){
        const box = document.createElement('div');
        box.classList.add('box');
        let color = Math.floor(Math.random()*16777215).toString(16);
        box.addEventListener('mouseover',function(){
            box.style.background = '#'+ color;
        });
        box_holder.appendChild(box);
    }
}

btn.addEventListener('click',function(){
    const prevBox = document.querySelectorAll('.box_holder');
    const demi_container = document.querySelector('#container');
    for(prev of prevBox){
        demi_container.removeChild(prev);
    }
    num1 = prompt("Select the box number: ");
    for(let i=0;i<num1;i++){
        const box_holder = document.createElement('div');
        box_holder.classList.add('box_holder');
        container.appendChild(box_holder);
        for(let j=0;j<num1;j++){
            const box = document.createElement('div');
            box.classList.add('box');
            let color = Math.floor(Math.random()*16777215).toString(16);
            box.addEventListener('mouseover',function(){
                box.style.background = '#'+ color;
            })
            box_holder.appendChild(box);
        }
    }
});



