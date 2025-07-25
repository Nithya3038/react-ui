import React, { useEffect, useState } from 'react';

const App = () => {
  const [news, setNews] = useState([]);
  const apikey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(()=>{
    const getNews=async()=>{
      const api= `https://newsapi.org/v2/everything?q=apple&from=2025-07-21&to=2025-07-21&sortBy=popularity&apiKey=${apikey}`;

      try{
        const response=await fetch(api);
        const data=await response.json();
        setNews(data.articles);
      }catch(error){
        console.log('unable to fetch news',error);
      }
    };
      getNews();
    },[]);

  return (
    <div className="bg-gray-50 p-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-700">Tech News - INDIA</h1>
        <p className="text-gray-500">Stay updated with the latest tech news</p>
      </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border p-4 ">
             
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-sm line-clamp-3 text-gray-600 flex-1">{item.description}</p>
              <div className="text-xs text-gray-500 mt-2">{item.source?.name}</div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-indigo-600 hover:underline text-sm font-medium">Read more </a>
            </div>
          ))}
        </div>
    </div>
  );
};

export default App;
