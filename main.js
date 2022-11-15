// Creating the post class:
class Post {
    constructor(username, text) {
        if (username && text) {
            this.username = username;
            this.text = text;
            posts.push(this);    
        } else {
            throw("Error: Post arguments not valid!");
        }
        
    }
}

// Creating an array for storing posts:
const posts = [];

// Example post:
const examplePost = new Post('Lynx', 'Hello guys, Im Lynx.');

// Async Function to process Posts:
async function processPosts(username, text) {
    try {
        await new Post(username, text);
        console.log(
            posts.map((post) => {
                return post;
            })
        );
    } catch (error) {
        console.log(error);
    }
}

// Function test:
processPosts('Egemen', 'Hello guys, Im Egemen.');
