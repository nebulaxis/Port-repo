// Blog.js
import React from 'react';
import '../styles/Blog.css';

const blogPosts = [
  {
    title: 'Getting Started with MERN Stack Development',
    date: 'April 5, 2023',
    content: 'Learn how to build a full-stack web application using the MERN stack. Explore MongoDB for the database, Express.js for the backend, React for the frontend, and Node.js to tie it all together.',
    image: 'mern.webp', // Ensure this matches the actual filename in the public folder
    tags: ['MERN Stack', 'Web Development', 'Full Stack'],
  },
  {
    title: 'Java Best Practices for Web Application Development',
    date: 'May 20, 2023',
    content: 'Discover Java best practices for building robust and scalable web applications. Explore topics such as object-oriented programming, design patterns, and performance optimization.',
    image: 'java.jpg', // Ensure this matches the actual filename in the public folder
    tags: ['Java', 'Web Development', 'Best Practices'],
  },
  {
    title: 'Building RESTful APIs with Node.js and Express',
    date: 'June 15, 2023',
    content: 'Learn how to design and implement RESTful APIs using Node.js and Express. Explore routes, middleware, and data validation to create a scalable backend for your web applications.',
    image: 'api.png', // Ensure this matches the actual filename in the public folder
    tags: ['Node.js', 'Express.js', 'APIs', 'Web Development'],
  },
  {
    title: 'Introduction to Database Management Systems (DBMS)',
    date: 'July 10, 2023',
    content: 'Understand the fundamentals of Database Management Systems. Explore relational databases, SQL queries, and the role of DBMS in building data-driven applications.',
    image: 'dbms.png', // Ensure this matches the actual filename in the public folder
    tags: ['DBMS', 'Database Management', 'Data-driven Applications'],
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h3>{post.title}</h3>
          <p className="post-date">{post.date}</p>
          <img
            src={`/${post.image}`} // Path to the image in the public folder
            alt={`Blog Post ${index + 1}`}
            className="blog-image"
            onError={(e) => {
              console.error(`Error loading image: ${e.target.src}`);
              e.target.style.display = 'none'; // Hide the image on error
            }}
          />
          <p>{post.content}</p>
          {post.tags && (
            <div className="post-tags">
              Tags: {post.tags.map((tag, tagIndex) => <span key={tagIndex}>{tag}</span>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;
