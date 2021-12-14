const axios = require('axios')

const getPosts = async function() {
    const posts = await axios.get('https://api.adoptapet.com')
    console.log(posts.data)
}

getPosts()
