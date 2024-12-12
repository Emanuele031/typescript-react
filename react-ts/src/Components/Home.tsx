import React, { useState, useEffect } from 'react';


interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  published_at: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.results); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-light">Loading...</div>;
  }

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: 'black', 
        minHeight: '100vh',
        paddingTop: '3rem',
        maxWidth: "100%",
      }}
    >
      <h1 className="text-light mb-4 text-center">Latest Spaceflight News</h1>
      <div className="row g-4">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4">
            <div className="card bg-dark text-light h-100 shadow-lg">
             
              <img
                src={article.image_url}
                className="card-img-top"
                alt={article.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  <small>{new Date(article.published_at).toLocaleDateString()}</small>
                </p>
                <div className="mt-auto">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-100 border border-white">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
