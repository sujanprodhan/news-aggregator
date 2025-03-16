
import { Provider } from "react-redux";
import store from "./store";
import NewsList from "./components/NewsList";
import { useState } from "react";
import Header from "./components/Header";
const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Provider store={store}>
      {/* <div className="container mx-auto">
        <NewsList />
      </div> */}
      <div className="flex flex-col min-h-screen">
        <Header onSearch={setSearch} />
        <main className="flex-grow container mx-auto">
          <NewsList searchTerm={search} />
        </main>
        {/* <Footer /> */}
      </div>
    </Provider>
  );
};

export default App;
