export class BlogServiceClient {
  BLOG_URL = 'http://localhost:8080/api/blog';

  createBlog(newBlog) {
    return fetch(this.BLOG_URL, {
      body: JSON.stringify(newBlog),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findAllBlogs() {
    return fetch(this.BLOG_URL)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findBlogById(id) {
    return fetch(this.BLOG_URL + '/' + id)
      .then(response => response.json(),
        response => alert('Blog not found by Id: ' + id));
  }

  updateBlog(updatedBlog) {
    return fetch(this.BLOG_URL, {
      body: JSON.stringify(updatedBlog),
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteBlog(blogId) {
    return fetch(this.BLOG_URL + '/' + blogId, {
      method: 'DELETE'
    });
  }
}
