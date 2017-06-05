const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const heading=document.querySelector('h1')
    heading.textContent=f.personName.value
    heading.textContent=f.personAge.value
}

personForm.addEventListener('submit', handleSubmit)