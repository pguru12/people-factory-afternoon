const personForm = document.querySelector('#personForm')

function renderColor(color){
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'

    return div 
}

function renderList(){
    const list = document.createElement('ul')
    // call renderListItem several times?
    Object.keys(personData).map(function(label){
        const item = renderListItem(label, personData)
        list.appendChild()
    })
    return list
}

function renderListItem(){
    const item = document.createElement('li')
    item.textContent=`${label}: ${value}`

    return item
}

function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const heading=document.querySelector('h1')
    heading.textContent=f.personName.value
    
}

// function handleSubmitTwo(ev){
//     ev.preventDefault()
//     const f = ev.target
//     const heading=document.querySelector('h2')
//     heading.textContent=f.personAge.value
// }

function lengthReturn(ev){
    ev.preventDefault()
    const f = ev.target
    const printit=document.querySelector('p#paragraphOne')
    var i=0
    while (i<f.paragraph.value.length){
        i++
    }
    if (f.paragraph.value[f.paragraph.value.length-1]==='.'||f.paragraph.value[f.paragraph.value.length-1]==='!'){
        printit.textContent='Paragraph: '+f.paragraph.value+' Your input is '+i+' characters long'+f.paragraph.value[f.paragraph.value.length-1]
    }
    else if (f.paragraph.value[f.paragraph.value.length-1]==='?'){
        printit.textContent='Paragraph: '+f.paragraph.value+' Your input is '+i+' characters long.'
    }
    else {
        printit.textContent='Paragraph: '+f.paragraph.value+'. Your input is '+i+' characters long.'
    }
}
function handleSubmit3(ev){
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value
    const favoriteColor=f.favoriteColor.value
    const age=f.age.value
    const favoriteFood=f.favoriteFood.value
    const favoriteDino=f.favoriteDino.value
    const paragraph=f.paragraph.value

    // const person = {
    //     name: f.personName.value,
    //     favoriteColor: f.favoriteColor.value,
    //     age: f.age.value,
    //     favoriteFood: f.favoriteFood.value
    //     favoriteDino: f.favoriteDino.value
    //     paragraph: f.paragraph.value
    // }

    const colorDiv = `<div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>`
//    const favoriteFood = f.favoriteFood.value
   // const boldedName = document.createElement('strong')
 //  <div id="details">
 //  <strong>Pranav</strong>
 //  </div>
   // boldedName.textContent=name
   // details.appendChild(boldedName)

   const list = document.createElement('ul')
   const nameItem = document.createElement('li')
   nameItem.textContent = `Name: ${name}`

   const colorItem = document.createElement('li')
   colorItem.textContent = `Favorite Color: ${renderColor(favoriteColor).outerHTML}`

   const ageItem = document.createElement('li')
   ageItem.textContent=`Age: ${age}`

   const foodItem = document.createElement('li')
   foodItem.textContent=`Food: ${favoriteFood}`

   const dinoItem = document.createElement('li')
   dinoItem.textContent=`Dinosaur: ${favoriteDino}`

   const paraItem = document.createElement('li')
   paraItem.textContent=`Age: ${paragraph}`

 //  const list = document.createElement('ul')
   list.appendChild(nameItem)
   list.appendChild(colorItem)
   list.appendChild(ageItem)
   list.appendChild(foodItem)
   list.appendChild(dinoItem)
   list.appendChild(paraItem)

   details.appendChild(list)

   details.innerHTML = `
   <ul>
    <li>Name: ${name}</li>
    <li>Favorite Color: ${colorDiv}</li>
    <li>Age: ${age}</li>
    <li>Favorite Food: ${favoriteFood}</li>
    <li>Favorite Dinosaur: ${favoriteDino}</li>
    <li>Paragraph: ${paragraph}
   </ul>`
   document.createElement = `
   <ul>
       <li>Favorite Food: ${favoriteFood}</li>
       <li>Favorite Dinosaur: ${favoriteDino}</li>
   </ul>`

   details.appendChild = `
   <ul>
       <li>Favorite Food: ${favoriteFood}</li>
       <li>Favorite Dinosaur: ${favoriteDino}</li>
   </ul>`
}

personForm.addEventListener('submit', handleSubmit)
//personForm.addEventListener('submit', handleSubmitTwo)
personForm.addEventListener('submit', lengthReturn)
personForm.addEventListener('submit', handleSubmit3)