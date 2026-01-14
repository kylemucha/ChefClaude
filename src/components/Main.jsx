import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if((recipe !== "") && (recipeSection.current !== null)){
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function handleGetRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
      setRecipe(recipeMarkdown)
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                type="text"
                placeholder="e.g. salami"
                aria-label="Add Ingredient"
                name="ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>
            
            {ingredients.length > 0 && (
                <IngredientsList 
                ingredients={ingredients} 
                generateRecipe={handleGetRecipe}
                ref={recipeSection}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
            
        </main>
        
    )
}