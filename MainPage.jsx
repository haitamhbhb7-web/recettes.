import RecipeList from './RecipeList';
import Help from './Help';
function MainPage() {
    return (
        <div>
            <h1>Creative Recipe Builder</h1>
            <p>Créez, modifiez et organisez vos recettes.</p>
            <Help />
            <RecipeList />
            
        </div>
    )
}
export default MainPage;