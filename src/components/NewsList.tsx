

interface Article {
  imageUrl?: string;
  title: string;
  description: string;
  url: string;
}

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  console.log('props ************',articles);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    {articles && articles.map((article: any, index: number) => (
      <div
        key={index}
        className="border rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group duration-300 ease-in-out"
      >
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-40 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors duration-300 ease-in-out">{article.title}</h2>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    ))}
  </div>
  );
};

export default NewsList;
