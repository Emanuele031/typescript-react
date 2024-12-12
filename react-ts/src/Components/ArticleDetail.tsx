// src/components/ArticleDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../types';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        const data: Article = await response.json();
        setArticle(data);
        setLoading(false);
      } catch (err) {
        setError('Errore nel recupero dei dettagli dell\'articolo');
        setLoading(false);
      }
    };

    if (id) {
      fetchArticleDetail();
    }
  }, [id]);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}><div className="spinner-border" role="status"><span className="sr-only">Caricamento...</span></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!article) {
    return <div className="alert alert-warning">Articolo non trovato.</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-sm">
            <img src={article.imageUrl} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h1 className="card-title">{article.title}</h1>
              <p className="card-text"><small className="text-muted">{new Date(article.publishedAt).toLocaleDateString()}</small></p>
              <p className="card-text">{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Leggi l'articolo completo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
