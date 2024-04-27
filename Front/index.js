const sendAgent = async () => {
    
    let member = document.querySelector('input[name="member"]').value
    let old = document.querySelector('input[name="old"]').value
    let job = document.querySelector('input[name="job"]').value
    
    let response = await fetch('http://localhost:3000/agents', {
        method : 'POST', 
        
        headers : {
            'Content-Type' : 'application/json',
        },

        body : 
            JSON.stringify({name : member, age : old, role : job}),
        
    })

    window.location.href = "list.html"
}

