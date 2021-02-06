import Cards from './components/Cards';
import articles from './data/data.js';

function App() {
  return (
    <Cards articles={articles}/>
  );
}

export default App;
