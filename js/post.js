function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(data){
    const post_container = document.getElementById('post_container');
    for(let post of data){
       const div = document.createElement('div');
       div.classList.add('post')
       div.innerHTML = `
        <h2>User- ${post.userId}</h2>
        <h4>Post- ${post.title}</h4>
        <p>Post Descriptions: ${post.body}</p>
        
       `
       console.log(post);
       post_container.appendChild(div);
    }
}


loadPost()





