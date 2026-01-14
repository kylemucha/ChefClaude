export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
       <li key={ingredient}>{ingredient}</li>
    ))


    return (
        <section>
                <h2 className="ingredients-list-header">Ingredients on hand:</h2>
                <ul className="ingredients-list-items">{ingredientsListItems}</ul>
                {props.ingredients.length > 3 && <div className="generate-recipe-section">
                    <div ref={props.ref}>
                    <p className="generate-recipe-text-1">Ready for a recipe?</p>
                    <p className="generate-recipe-text-2">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <div>
                        <button 
                        className="generate-recipe-button"
                        onClick={props.generateRecipe}
                        >Get a recipe</button>
                    </div>
                </div>}
            </section>
    )
}