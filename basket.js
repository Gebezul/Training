let cart = {}; // Объект, представляющий корзину

// Функция для добавления товара в корзину
function addToCart(product) {
  // Проверяем, есть ли товар уже в корзине
  if (cart[product.id]) {
    // Если товар уже присутствует, увеличиваем его количество на 1
    cart[product.id].count++;
  } else {
    // Если товар отсутствует, добавляем его в корзину с начальным количеством 1
    cart[product.id] = {
      title: product.title,
      description: product.description,
      price: product.price,
      count: 1
    };
  }

  console.log('Товар добавлен в корзину:', product);

  // Обновляем объект корзины в localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

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

  products.forEach((product) => {
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

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Добавить в корзину';

    // Добавляем обработчик события при нажатии на кнопку "Добавить в корзину"
    addToCartButton.addEventListener('click', () => {
      addToCart(product);
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(addToCartButton);

    container.appendChild(card);
  });

  document.body.appendChild(container);
}
