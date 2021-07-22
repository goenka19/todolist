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
    var new_task = document.createElement('h2');
    new_task.textContent = task;
    console.log(new_task)
    alltasksdiv.append(new_task);
    console.log(task);
})


console.log(button);