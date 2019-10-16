const postList = (posts, users) => {

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/> Wizard News </header>
      <br />
        <a href="/posts/new">Create A New Post</a>
      <br />
      <br />
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position"> ${post.id}. ▲</span>
            <a href="/posts/${post.id}"> ${post.title} </a><small>(by ${post.author.name})</small>
            <small class="news-info">
              ${post.upvotes} upvotes
            </small>
          </p>
          <br />
        </div>`
      ).join('')}
    </div>
  </body>
  </html>
  `;
}

module.exports = postList;
