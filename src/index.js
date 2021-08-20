const alltasksdiv = document.querySelector('.all_tasks');

function deletegrid(container)
{
    var cells = container.lastElementChild;
    while(cells)
    {
        container.removeChild(cells);
        cells = container.lastElementChild;
    }
}

const button  = document.querySelector('.submit');
button.addEventListener('click', ()=> {
    const task = document.querySelector('#floatingInput').value;
    var new_task = document.createElement('p');
    new_task.textContent = task;
    console.log(new_task)
    alltasksdiv.append(new_task);
    console.log(task);
})


console.log(button);

const card_body = document.querySelector('.card-body');
const new_list = document.querySelector('.new_list');
new_list.addEventListener('click', ()=> {
    const new_div = document.createElement('div');
    new_div.classList.add('form-floating mb-3');
    card_body.appendChild(new_div);
})