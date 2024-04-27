let url = window.location.search

let id = new URLSearchParams(url).get("id")

console.log(id)
fetch(`http://localhost:3000/agents/${id}`)
    .then ((response) => response.json())
    .then ((data) => {
        let member = document.querySelector('input[name="member"]')
        let old = document.querySelector('input[name="old"]').value
        let job = document.querySelector('input[name="job"]').value

        member.value = data.name
        old.value = data.age
        job.value = data.role        
    })

const updateAgent = async () => {
    let member = document.querySelector('input[name="member"]').value
    let old = document.querySelector('input[name="old"]').value
    let job = document.querySelector('input[name="job"]').value

    let response = await fetch(`http://localhost:3000/agents/${id}`, {
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name : member, age : old, role : job}),
    })
    window.location.href = 'list.html'
}
