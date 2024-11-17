import useRecipeStore from './components/recipeStore'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/RecipeList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import SearchBar from './SearchBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <SearchBar />
        <RecipeList />
        <Routes>
          {/* Other routes */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
