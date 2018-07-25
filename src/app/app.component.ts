import {Component, OnInit} from '@angular/core';
import {Blog} from '../app/models/blog.model.client';
import {BlogServiceClient} from '../app/services/blog.service.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  blogsList: Blog[] = [];
  selectedBlog: Blog; // Blog selectedBlog = null; ==> Java notation
  updatedBlog: Blog;
  newBlog: Blog;
  ng = this;

  constructor(private blogService: BlogServiceClient) {
    this.newBlog = new Blog();
  }

  ngOnInit() {
    this.renderAllBlogPosts();
  }

  renderAllBlogPosts() {
    this.blogService.findAllBlogs()
      .then(response => {
        this.blogsList = response;
      }, response => alert('Error rendering blogs'));
  }

  createBlog(name) {
    this.newBlog.name = name;
    this.blogService.createBlog(this.newBlog)
      .then(response => {
        alert('Blog post created');
        this.renderAllBlogPosts();
      }, response => alert('Error creating blog post'));
  }

  // findBlogPostById(blogId) {
  //   this.blogService.findBlogById(blogId)
  //     .then(response => {
  //       this.selectedBlog = response;
  //       this.updatedBlog = response;
  //     }, response => alert('Error retrieving blog post'));
  // }

  updateBlogPost(name, description, text) {
    this.updatedBlog.name = name;
    this.updatedBlog.description = description;
    this.updatedBlog.text = text;

    this.blogService.updateBlog(this.updatedBlog)
      .then(response => {
        alert('Blog post updated');
        this.renderAllBlogPosts();
      }, response => alert('Error retrieving blog post'));
  }

  deleteBlogPost(id) {
    this.blogService.deleteBlog(id)
      .then(response => {
        alert('Blog post deleted');
        this.renderAllBlogPosts();
        this.selectedBlog = undefined;
      }, response => alert('Error deleting blog post'));
  }
}
