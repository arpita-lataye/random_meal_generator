const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
    fetch ('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0])
    });

});

function createMeal(meal){
    const ingredients = [];     
    for(i=1; i<=20; i++){
        if(meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} -${meal[`strMeasure${i}`]}`
            )
        }
        else{
            break;
        }
    }
console.log(ingredients);

    mealContainer.innerHTML = `
    <div class ="container-fluid">
        <div class ="row" id="firstrow">
            <div class="col-lg-5 col-md-5 ">
            <figure>
                <img class="imgMeal" src=" ${meal.strMealThumb}" alt= "Meal Img"/>
                <figcaption>
                    <div class= "especifications">
                    <p style="display: inline-block;"><strong>Category: </strong>${meal.strCategory}</p>
                    <p style="display: inline-block;"><strong>Area: </strong>${meal.strArea}</p>
                    <p style="display: inline-block;"><strong>Tags: </strong>${meal.strTags.split(',').join(', ')}</p>
                    </div>  

                </figcaption>
            </div>  
           </figure
            </div>
            <div class="col-lg-7 col-md-9" id ="instructions">
                <h4 class="subtittle">${meal.strMeal}</h4>
                <p> ${meal.strInstructions}</p> 
            </div>
        </div>   

        <div class ="row" id="secndrow">
  
            <ul  class="col-md-6" id="ingredients">
                <h5 class="subtittle">Ingredients</h5>
                ${ingredients.map(ingredients =>
                `<li>${ingredients}</li>`).join(' ')}
            </ul>
            <div class="col-md-6" id="VideoCont" >
                <h5 class="subtittle" >Video Recipe</h5>
                <iframe class="embed-responsive-item" width="600" height="400" src="https://www.youtube.com/embed/${meal.strYoutube.split("=").pop()}"></iframe>
            </div>
        </div>
            
        </div>
    </div
    `
    ;
   
}