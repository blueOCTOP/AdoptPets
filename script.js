const axios = require('axios')

const getPosts = async function() {
    const posts = await axios.get('https://jsoncplaceholder.typicode.com/posts')
    console.log('posts')
}

getPosts()
