import {test, expect} from '@playwright/test'
const API = 'https://api.practicesoftwaretesting.com';
const headers = { Accept: 'application/json' };

let createdCartId: string | undefined;

test.afterEach(async ({ request }) => {
  if (createdCartId) {
    const deleteResponse = await request.delete(
      `${API}/carts/${createdCartId}`,
      { headers }
    );

    expect(deleteResponse.status()).toBe(204);

    createdCartId = undefined;
  }
});

test('C4 - Add a product to cart and verify the cart contents', async ({ request }) => {

  const productsResponse = await request.get(`${API}/products`, { headers });

  expect(productsResponse.status()).toBe(200);

  const productsBody = await productsResponse.json();

  const productId = productsBody.data[0].id;

  expect(productId).toBeTruthy();


 const cartResponse = await request.post(`${API}/carts`, { headers });

 expect(cartResponse.status()).toBe(201);

 const cartBody = await cartResponse.json();

 createdCartId = cartBody.id;

 expect(createdCartId).toBeTruthy();
 const addProductResponse = await request.post(
  `${API}/carts/${createdCartId}`,
  {
    headers,
    data: {
      product_id: productId,
      quantity: 1
    }
  }
);

expect(addProductResponse.status()).toBe(200);
 const getCartResponse = await request.get(
  `${API}/carts/${createdCartId}`,
  { headers }
);

expect(getCartResponse.status()).toBe(200);

const getcartBody = await getCartResponse.json();

expect(getcartBody.cart_items).toEqual(
  expect.arrayContaining([
    expect.objectContaining({
      product_id: productId,
      quantity: 1
    })
  ])
);
});