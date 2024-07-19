import React from 'react';
import Blog from './Blog';
import blogs from '../data/blogs';

const BlogContainer = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Blog</h1>
      {blogs.map((blog) => (
        <Blog 
          key={blog.id}
          title={blog.title}
          author={blog.author}
          date={blog.date}
          content={blog.content}
        />
      ))}
    </div>
  );
}

export default BlogContainer;
