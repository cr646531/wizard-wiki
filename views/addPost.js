const addPost = () => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Wizard News</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div class="news-list">
                <header><img src="/logo.png"/>Wizard News</header>
                <form method="POST" action="/add">
                    <label for="name">Author</label>
                    <input type="text" name="name" />
                    <label for="title">Title</label>
                    <input type="text-area" name="title" />
                    <textarea name="content" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </body>
        </html>
    `
};

module.exports = addPost;