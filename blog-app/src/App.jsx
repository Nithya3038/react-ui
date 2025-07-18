import React, { useState, useEffect} from 'react';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import { blogdata } from './components/blogdata';


const App = () => {
  const [blogs,setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState('');
  
   useEffect(() => {
    setBlogs(blogdata);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">Travel Blog</h1>
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      ) : (
        <BlogList blogdata={blogdata} onSelect={setSelectedBlog} />
      )}
    </div>
    </div>
  );
};

export default App;
