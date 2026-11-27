# QA Bootcamp Week 2 – Playwright Test Suite

This repository contains automated UI and API tests developed during Week 2 of the QA Bootcamp.

The project uses TypeScript and Playwright to practise software testing against the Practice Software Testing (Toolshop) application and REST API.

## Technologies Used

- TypeScript
- Playwright
- Node.js
- Postman (API testing)
- Toolshop REST API

## Prerequisites

Before getting started, install:

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

Clone the repository and open the project folder before following the setup instructions.

## Setup and Running Tests

Follow these three steps to set up and run the test suite.

### Step 1: Install dependencies and Chromium

Run the following commands from the project root directory:

```bash
npm install
npx playwright install chromium
```

### Step 2: Configure environment variables

Copy `.env.example` to `.env`.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

On macOS/Linux:

```bash
cp .env.example .env
```

The `.env.example` file contains the default Toolshop website and API URLs. Update them only if necessary.

### Step 3: Run the complete test suite

Execute:

```bash
npm test
```

This runs all Playwright tests configured in the project using Chromium.

## Test Coverage

The suite contains six automated tests across four test files.

| Test file | Test coverage |
|---|---|
| `homepage.spec.ts` | Homepage title verification |
| `invalid login.spec.ts` | Invalid login error message |
| `search pliers.spec.ts` | Product search using the Page Object Model |
| `products-api.spec.ts` | GET products, POST cart and GET invalid cart |

## Project Structure

```text
qa-bootcamp-week2-starter/
│
├── pages/
│   └── search.page.ts
│
├── tests/
│   ├── homepage.spec.ts
│   ├── invalid login.spec.ts
│   ├── search pliers.spec.ts
│   └── products-api.spec.ts
│
├── scripts/
│   └── check.ts
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Available Scripts

| Command | Description |
|---|---|
| `npm test` | Runs the complete Playwright test suite |
| `npm run check` | Checks environment configuration and API connectivity |

## Important

Never commit your `.env` file to GitHub. It may contain sensitive configuration values and credentials. The file is already included in `.gitignore`.

Always use `.env.example` as the template when setting up the project on a new machine.