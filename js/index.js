function loadUser1(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData1(data))
}


function displayData1(data){
    const ulContainer = document.getElementById('ul_container');
    for(let user of data){
        let li = document.createElement('li');
        li.innerText = user.name;
        ulContainer.appendChild(li);
    }
}