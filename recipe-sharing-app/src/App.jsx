import recipeStore from './components/recipeStore'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/RecipeList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RecipeList/>
        <AddRecipeForm/>
      </div>
    </>
  )
}

export default App
