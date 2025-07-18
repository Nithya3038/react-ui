import React from 'react';

const BlogList = ({ blogdata, onSelect }) => {
  return (
    <div className="grid gap-6">
      {blogdata.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-amber-800 mb-2">{blog.title}</h2>
          <p className="text-gray-600 line-clamp-2 mb-4">
            {blog.content}
          </p>
          <button
            onClick={() => onSelect(blog)}
            className="text-sm text-white bg-slate-500 hover:bg-gray-600 px-4 py-2 rounded">Read More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
