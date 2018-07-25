export class BlogServiceClient {
  HEROKU_ENV = process.env.BACKEND_URL;
  BACKEND_URL = 'http://localhost:8080/api/blog';

  if(HEROKU_ENV) {
    this.BACKEND_URL = process.env.BACKEND_URL;
  }

  createBlog(newBlog) {
    return fetch(this.BACKEND_URL, {
      body: JSON.stringify(newBlog),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findAllBlogs() {
    return fetch(this.BACKEND_URL)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findBlogById(id) {
    return fetch(this.BACKEND_URL + '/' + id)
      .then(response => response.json(),
        response => alert('Blog not found by Id: ' + id));
  }

  updateBlog(updatedBlog) {
    return fetch(this.BACKEND_URL, {
      body: JSON.stringify(updatedBlog),
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteBlog(blogId) {
    return fetch(this.BACKEND_URL + '/' + blogId, {
      method: 'DELETE'
    });
  }
}
