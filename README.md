# Workflow Repository for the Course Assignment

This repository contains the **Workflow Course Assignment**, showcasing how to configure and maintain a modern frontend project with code-quality tools, testing, and automation.

---

## Tech Stack & Tools

* **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
* **ESLint** – JavaScript linter for identifying and fixing code issues.
* **Prettier** – Code formatter for consistent style across files.
* **Husky** – Git hooks for enforcing linting and formatting before commits.
* **Vitest** – Unit testing framework for JavaScript.
* **Playwright** – End-to-end browser testing framework.

---

## Setup

### Installation

Clone your fork and create a `workflow` branch:

```bash
git clone <your-fork-url>
cd <project-folder>
git checkout -b workflow
npm install
```

### Environment Variables

Create a `.env` file (based on `.env.example`) in the project root:

```env
BASE_URL=http://localhost:5500
TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=yourpassword
```

Add `.env` to `.gitignore` so sensitive information is not committed.

---

## Usage & Commands

### Development

Start Tailwind and the local server in watch mode:

```bash
npm run dev:full
```

### Linting

Run ESLint to check your code:

```bash
npx eslint .
```

Fix issues automatically:

```bash
npx eslint . --fix
```

### Formatting

Format files with Prettier:

```bash
npx prettier --write .
```

### Unit Tests (Vitest)

Run unit tests:

```bash
npm test
```

Test cases include:

* `isActivePath` function logic for different paths.
* `getUserName` function reading from storage or returning `null`.

### End-to-End Tests (Playwright)

Run Playwright tests:

```bash
npx playwright test tests/login.e2e.test.js
npx playwright test tests/navigaton.e2e.test.ja
```

Optional commands:

```bash
npx playwright test --ui      # Interactive mode
npx playwright test --headed  # Show browser during tests
npx playwright show-report    # Open HTML report
```

E2E tests cover:

* **Login flow**: Valid and invalid credentials.
* **Navigation**: Visiting the homepage, opening the first venue, and verifying “Venue details” appears.

---

## Recommended Workflow

* Run `npm run dev:full` during development to keep Tailwind updated.
* Use `npm run lint` and `npm run format` to maintain code quality.
* Run `npm test` and `npx playwright test` before committing.
* Husky will automatically lint and format staged files on each commit.




