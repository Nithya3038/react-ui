import React from 'react';

const BlogDetail = ({ blog, onBack }) => {

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <button 
        onClick={onBack}
        className="mb-4 text-sm text-white bg-slate-600 hover:bg-gray-700 px-10 py-2 rounded">Back</button>
      <h2 className="text-xl font-bold text-amber-800 mb-4">{blog.title}</h2>
      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );

};
export default BlogDetail;
