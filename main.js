fetch('https://fakestoreapi.com/products?limit=10')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data', error));


function createCards(products) {
    let container = document.getElementById('user-cards-container');
    // console.log(products);

    products.forEach(user => {


        let card = document.createElement('div');
        card.className = 'user-card';

        let img = document.createElement('img');
        img.src = user.image

        img.style.width = "50px"
        img.style.height = "50px"

        let id = document.createElement('p');
        id.textContent = 'id:' + user.id;

        let price = document.createElement('p');
        price.textContent = "price:" + user.price;

        let category = document.createElement('p');
        category.textContent = "category:" + user.category;

        let caunt = document.createElement('p');
        caunt.textContent = "caunt:" + user.rating.count;

        card.appendChild(img)
        card.appendChild(id)
        card.appendChild(category)
        card.appendChild(price)
        card.appendChild(caunt)


        container.appendChild(card)
    });
}