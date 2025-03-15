import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/newsSlice";

const NewsList = (search: any) => {
  const dispatch = useDispatch<any>();
  const { articles, status } = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNews("technology"));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading articles</p>;

  return (
    <div>
      {articles.map((article: any, index: number) => (
        <div key={index} className="p-4 border-b">
          <h2 className="text-lg font-bold">{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} className="text-blue-500">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
