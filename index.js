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
    const printit=document.querySelector('p#paragraphOne')
    var i=0
    while (i<f.paragraph.value.length){
        i++
    }
    if (f.paragraph.value[f.paragraph.value.length-1]==='.'||f.paragraph.value[f.paragraph.value.length-1]==='!'){
        printit.textContent=f.paragraph.value+' Your input is '+i+' characters long'+f.paragraph.value[f.paragraph.value.length-1]
    }
    else if (f.paragraph.value[f.paragraph.value.length-1]==='?'){
        printit.textContent=f.paragraph.value+' Your input is '+i+' characters long.'
    }
    else {
        printit.textContent=f.paragraph.value+'. Your input is '+i+' characters long.'
    }
}
function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value

    details.innerHTML += name
}

personForm.addEventListener('submit', handleSubmit)
personForm.addEventListener('submit', handleSubmitTwo)
personForm.addEventListener('submit', lengthReturn)