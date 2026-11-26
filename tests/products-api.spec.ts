
import { test, expect } from '@playwright/test';

const API = 'https://api.practicesoftwaretesting.com';
const headers = { Accept: 'application/json' };

let createdCartId: string | undefined;

// Delete the created cart after each test
test.afterEach(async ({ request }) => {
  if (createdCartId) {
    await request.delete(`${API}/carts/${createdCartId}`, { headers });
    createdCartId = undefined;
  }
});

// Existing test: GET products
test('GET products API returns products successfully', async ({ request }) => {
  const response = await request.get(`${API}/products`);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.data[0]).toHaveProperty('name');
});

// Test 1: Create a cart and add a product
test('POST cart API creates a cart and adds a product', async ({ request }) => {
  const cartResponse = await request.post(`${API}/carts`, { headers });

  expect(cartResponse.status()).toBe(201);

  const cartId = (await cartResponse.json()).id

  const addProductResponse = await request.post(
    `${API}/carts/${cartId}`,
    {
      headers,
      data: {
        product_id: '01M8BHDGE6E9QXN4KDWMATM8TD',
        quantity: 1
      }
    }
  );

  expect(addProductResponse.status()).toBe(200);

  const body = await addProductResponse.json();

  expect(body).toHaveProperty('result');
});

// Test 2: Request a non-existent cart
test('GET cart API returns 404 for a non-existent cart', async ({ request }) => {
  const response = await request.get(
    `${API}/carts/INVALID_CART_ID_123`,
    { headers }
  );

  expect(response.status()).toBe(404);
});
