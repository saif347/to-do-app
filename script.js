const listContainer = document.getElementById('list-container');

const addTask = ()=>{
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    inputBox.value = '';

    if(inputValue === ''){
        alert ('write something to add')
    }
    else{
        const li = document.createElement('li');

        li.innerText= inputValue;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    saveData();
}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function getData (){
   listContainer.innerHTML = localStorage.getItem('data')
}
getData ()