
async function getDummyJson() {
  try {
    const response = await fetch('https://dummyjson.com/products/?limit=10');
    console.log(response);
    if (!response.ok) {
      console.log('Ошибка');
    } else {
      const json_data = await response.json();
      console.log(json_data);
      // Вызываем функцию createProductCards с json_data.products
      createProductCards(json_data.products);
    }
  } catch (error) {
    console.log('Произошла ошибка:', error);
  }
}

getDummyJson();

const container = document.createElement('div');
container.classList.add('card-container');

function createProductCards(products) {
  const container = document.createElement('div');
  container.classList.add('container');

  const cards = products.map((product) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = product.images[0];

    const title = document.createElement('h2');
    title.classList.add('titleCard');
    title.textContent = product.title;

    const description = document.createElement('p');
    description.classList.add('descriptionCard');
    description.textContent = product.description;

    const price = document.createElement('p');
    price.classList.add('priceCard');
    price.textContent = `Цена: $${product.price}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);

    return card;
  });

  cards.forEach((card) => {
    container.appendChild(card);
  });

  document.body.appendChild(container);
}
