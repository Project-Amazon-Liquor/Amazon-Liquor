
const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const URL =`${API_BASE_URL}/products`;
const bannerAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


loadFeatureCards();

function loadFeatureCards(){

    fetch(URL)
        .then((response)=> response.json())
        .then((products) => {
            //for (let index = 0; index <= 5; index++) {
                for (const _id in products){

                let {_id, Brand, Retail_Price, URL, } = products[_id];


                const featureCard = document.createElement("a")
                featureCard.href = "single-product.html";
                featureCard.innerHTML = `
                <div class="featured-item">
                <img src= ${photo} alt="Item1">
                    <h4>${brand}</h4>
                    <h6>$${Retail_Price}</h6>
                    </div>
                    `;

                    document.getElementById("featureBanner").appendChild(featureCard);
            }
        })
        
}