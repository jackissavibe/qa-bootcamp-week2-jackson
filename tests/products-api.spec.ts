import { test, expect } from '@playwright/test';

test('GET products API returns products successfully', async ({ request }) => {
  const response = await request.get(
    'https://api.practicesoftwaretesting.com/products'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.data[0]).toHaveProperty('name');
});