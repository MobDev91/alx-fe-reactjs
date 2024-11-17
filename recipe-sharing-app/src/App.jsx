import useRecipeStore from './components/recipeStore'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/RecipeList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import SearchBar from './SearchBar';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar />
        <RecipeList />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          {/* Other routes */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
