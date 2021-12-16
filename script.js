const axios = require('axios')

const getPosts = async function() {
    const posts = await axios.get('https://github.com/AxolotlAPI/data')
    console.log(posts.data)
}

getPosts()
