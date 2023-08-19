import { useState, useEffect } from 'react';
import { fetchAsyncData } from './utils/latestArticles';
import HeadlineWrapper from './Components/headlineWrapper';
import Header from './Components/header.jsx';
import Footer from './Components/footer.jsx';
import './App.css';


function App() {
  // initializing with empty array 
  const [data, setData] = useState([]);

  // retrieving data from Guardian API
  const getArticle = async () => {
    const dataBack = await fetchAsyncData();
    if (dataBack instanceof Error) {
      alert(`Sorry, operation unsuccessful`);
      console.error(dataBack.message);
      setData([]);
    } else {
      setData(dataBack);
    };
  };

  // function is triggered when app refreshes
  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <HeadlineWrapper news={data} />

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
