console.log("Let's get this party started!");

//- Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF

let search = document.getElementById('search')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')

let gifContainer = document.getElementById('gifcontainer')

submit.addEventListener('click', function() {
    // gifContainer.innerHTML = ''
    let term = search.value
    let what = term.replaceAll(' ', '+')
    callGiphyAPI(what)
    search.value = ''
})

function callGiphyAPI (searchTerm) {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=kvOro3B8UeF2dLPQJv2LKrQlKYfuZN40&limit=1`).then(function(result) {
        let data = result.data.data
        let keys = Object.keys(data)
        let gifs = keys.map(k => data[k].id)
        gifs.forEach(appendGif)
    })
}

//- Once the Giphy API has responded with data, append the GIF to the page
// - Allow the user to search for as many GIFs as they would like and keep appending them to the page

function appendGif (id) {
    let gif = document.createElement('iframe')
    gif.id = `gif${id}`
    gif.src = `https://giphy.com/embed/${id}`
    let del = document.createElement('button')
    del.innerText = 'x'
    del.classList.add('deleteButton')
    del.id = `${id}`
    gifContainer.appendChild(del)
    gifContainer.appendChild(gif)
}

let delBtn = document.getElementById('deleteButton')

gifContainer.addEventListener('click', function(event) {
    let gifId = event.target.id
    removeGif(gifId)

})

// - Allow the user to remove all of the GIFs by clicking a button

function removeGif (id) {
    let gif = document.getElementById(`gif${id}`)
    let delBtn = document.getElementById(`${id}`)
    gif.remove()
    delBtn.remove()
}
 
clear.addEventListener('click', function() {
    gifContainer.innerHTML = ''
}) 

// - Here is an example of what the application might look like