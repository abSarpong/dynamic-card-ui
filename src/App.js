import Cards from './components/Cards';
import articles from './utils/data.js';

function App() {
  return (
    <Cards articles={articles}/>
  );
}

export default App;
