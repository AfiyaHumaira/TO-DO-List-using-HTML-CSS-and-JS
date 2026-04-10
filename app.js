let listContainer = document.getElementById('list-container')

let inputbox = document.getElementById('input-box')

let clearAllBtn = document.getElementById('clear-all');

function addtask(){
    if(inputbox.value === ''){
        alert('Add your task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputbox.value
        listContainer.appendChild(task)

    let span = document.createElement('span');
    span.textContent ='\u00d7'
    task.appendChild(span)
}
inputbox.value = ''
}

listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
    }
    else if(el.target.tagName =='SPAN'){
        el.target.parentElement.remove()
    }
})
clearAllBtn.addEventListener('click', function () {
    listContainer.innerHTML = ''; 
});
