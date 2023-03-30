const uri = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
 async function fetchData() 
 {

    const food = document.getElementById("header")

    let photo = document.getElementById("images")
    
    let details = document.getElementById("content")
        
    
    const response = await fetch(uri);
        const data = await response.json();
        food.innerText =  data.meals[0].strMeal

        photo.innerHTML=`<img id="imagess" src ="${data.meals[0].strMealThumb}">`
      
        details.innerHTML = `<h4>cuisine :${data.meals[0].strArea}</h4>
         <p><span style='color:blue;font-weight:bold'>ingredience 1:</span>${data.meals[0].strIngredient1} - ${data.meals[0].strMeasure1}  </p>
       <p><span style='color:blue;font-weight:bold'>ingredience 2:</span>${data.meals[0].strIngredient2} - ${data.meals[0].strMeasure2} </p>
        <p><span style='color:blue;font-weight:bold'>ingredience3:</span>${data.meals[0].strIngredient3} - ${data.meals[0].strMeasure3} </p>
         <p><span style='color:blue;font-weight:bold'>ingredience 4:</span>${data.meals[0].strIngredient4}- ${data.meals[0].strMeasure4} </p> 
        <p><span style='color:blue;font-weight:bold'>ingredience 5:</span>${data.meals[0].strIngredient5}- ${data.meals[0].strMeasure5} </p>
        <p id ='preparation'><span style='color:red;font-weight:bold'>preparation instruction</span>:
        <br>${data.meals[0].strInstructions}</p>
        <a href='${data.meals[0].strYoutube}' target='blank'>for  here for youtube making video</a>
        `
         //
        console.log(data)
      
    }
    fetchData()
    
    

