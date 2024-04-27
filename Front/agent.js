let url = window.location.search

let id = new URLSearchParams(url).get("id")

console.log(id)
fetch(`http://localhost:3000/agents/${id}`)
    .then ((response) => response.json())
    .then ((data) => {
        let agent = document.querySelector('#agent')
        agent.innerHTML = 
        `
        <small>${data.id}</small>
        <h1>${data.name}</h1>
        <h2>${data.age}</h2>
        <h2>${data.role}</h2>
        <a href="list.html">Back</a>
        <a href ="rename.html?id=${data.id}">Modify</a>
        <button onclick="deleteAgent()">Delete</button> 
        `
    })

const deleteAgent = async () => {
    let response = await fetch(`http://localhost:3000/agents/${id}`, {
        method : 'DELETE',
    })
    window.location.href = 'list.html'
}