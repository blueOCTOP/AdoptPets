//const axios = require('axios')

const getPosts = async function() {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(posts.data)
}

// getPosts()

document.querySelector('h1').innerText = 'change me'
