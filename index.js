const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const heading=document.querySelector('h1')
    heading.textContent=f.personName.value
    
}

function handleSubmitTwo(ev){
    ev.preventDefault()
    const f = ev.target
    const heading=document.querySelector('h2')
    heading.textContent=f.personAge.value
}

function lengthReturn(ev){
    ev.preventDefault()
    const f = ev.target
    const printit=document.querySelector('h3')
    printit.textContent=f.paragraph.value
}

personForm.addEventListener('submit', handleSubmit)
personForm.addEventListener('submit', handleSubmitTwo)
personForm.addEventListener('submit', lengthReturn)