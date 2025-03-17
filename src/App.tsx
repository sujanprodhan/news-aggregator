
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "./components/NewsList";
import { fetchNews } from "./store/newsSlice";
import Header from "./components/Header";


const App = () => {
  const dispatch = useDispatch<any>();
  const { articles, status } = useSelector((state: any) => state.news || []);

  // const [query, setQuery] = useState("technology");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const handleCategoryMenuClick = (item: string) => {
    setSelectedCategory(item);
  };

  useEffect(() => {
    dispatch(fetchNews(selectedCategory));
    console.log("technology ")
  }, [dispatch, selectedCategory]);

  return (<>
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearch} onItemCategorySelect={handleCategoryMenuClick} selectedCategory={selectedCategory}/>
      <main className="flex-grow container mx-auto">
        <div className="min-h-8 pl-4">{status === "loading" && <p>Loading...</p>}
        </div>
        {status === "failed" && <p className="text-red-500">Error loading articles</p>}
        {articles && Array.isArray(articles) && articles.length > 0 ? (
          <NewsList articles={articles} />
        ) : (
          <p>No articles found</p>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  </>
  );
};

export default App;
