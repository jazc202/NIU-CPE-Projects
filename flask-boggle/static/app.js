let form = document.getElementById('guess')
let guess = document.getElementById('guess_text')

import axios from 'axios';
const request = await axios.get('/') 
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const formData = new FormData(form)
    axios.get('/')

})