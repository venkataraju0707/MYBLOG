 // Card.js
import React from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog';

function Card({ username }) {
  // Example data for demonstration
  const blogData = {
    title: "Title of the Blog",
    author: "VENKATA RAJU",
    date: "June 6, 2024",
    content: "THIS BLOG CONTAINS CONTENT REQUIRED FOR PLACEMENTS."
  };

  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        {/* Image */}
        <img className="w-24 h-24 md:w-48 md:h-auto md:square-none rounded-full mx-auto" src="..." alt="" width="384" height="512" />
        
        {/* Blog Details */}
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “{blogData.title}”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              <Blog 
                title={blogData.title} 
                author={blogData.author} 
                date={blogData.date} 
                content={blogData.content} 
              />
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired
};

export default Card;
