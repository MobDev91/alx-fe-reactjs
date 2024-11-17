import useRecipeStore from './components/recipeStore'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/RecipeList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/recipe/:id" render={(props) => {
          const { id } = props.match.params;
          return <RecipeDetails recipeId={id} />;
        }} />
      </Switch>
    </Router>
  )
}

export default App
