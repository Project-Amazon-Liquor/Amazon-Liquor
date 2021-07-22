
const API_BASE_URL = "https://express-api-cm.herokuapp.com";
const URL =`${API_BASE_URL}/destinations`;

const bannerAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

loadBanner();
loadFeatureCards();

function loadFeatureCards(){

    fetch(URL)
        .then((response)=> response.json())
        .then((features) => {
            //for (let index = 0; index <= 5; index++) {
                for (const _id in features){

                let {name, location, photo, description} = features[_id];
                
                
                if (name ==="") {
                    name = "Jack Daniel's"; 
                }

                if (photo ==="") {
                    photo = ""; 
                }

                const featureCard = document.createElement("a")
                featureCard.href = "single-product.html";
                featureCard.innerHTML = `
                <div class="featured-item">
                <img src= ./Image/item-01.jpg alt="Item1">
                    <h4>${name}</h4>
                    <h6>$${location}</h6>
                    </div>
                    `;

                    document.getElementById("featureBanner").appendChild(featureCard);
            }
        })
        
}

  function loadBanner(){

    fetch(bannerAPI)
        .then((response)=> response.json())
        .then((banner) => {
            let strDrinkThumb;             
            for (const str in banner.drinks[0]) {
                if(str =="strDrinkThumb"){
                   strDrinkThumb = banner.drinks[0][str];
                   break;
                }
                
            }
            
           // document.getElementsByClassName("banner").appendChild(strDrinkThumb);
        })
        
}

