
const API_BASE_URL = "https://amazonliquor.herokuapp.com";
const URL =`${API_BASE_URL}/products`;


loadFeatureCards();

function loadFeatureCards(){

    fetch(URL)
        .then((response)=> response.json())
        .then((products) => {
            for (let index = 0; index <= 5; index++) {
                let {_id, Brand, Retail_Price, URL, } = products[index];

                const featureCard = document.createElement("a")
                featureCard.href = "single-product.html";
                featureCard.innerHTML = `
                <div class="featured-item">
                <img src= ${URL} alt="Item1">
                    <h4>${Brand}</h4>
                    <h6>$${Retail_Price}</h6>
                    </div>
                    `;

                    document.getElementById("featureBanner").appendChild(featureCard);
            }
        })
        
}