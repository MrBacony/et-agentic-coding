# AnalogJS Starter with Auth

Welcome to the **AnalogJS Starter** project! This repository provides a modern kickstart for building AnalogJS applications, including a ready-to-use authentication setup. It is designed to help you quickly bootstrap new projects with best practices and a robust foundation.

## Features

- **AnalogJS**: Modern meta-framework for building fullstack applications with Angular.
- **Authentication**: Built-in authentication flow to get you started securely.
- **Vite**: Fast build and development server.
- **Nx**: Powerful monorepo tooling for scalable development.
- **TypeScript**: Type-safe codebase for reliability and maintainability.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm, npm, or yarn

### Installation

Clone the repository and install dependencies:

```sh
git clone <your-repo-url>
cd analog-starter
pnpm install # or npm install or yarn install
```

### Running the App

Start the development server:

```sh
npx nx serve app
```

The app will be available at `http://localhost:4200` (or the port shown in your terminal).

### Building for Production

```sh
npx nx build app
```

### Running Tests

```sh
npx nx test app
```

## Project Structure

- `apps/app/` - Main AnalogJS application
- `apps/app-e2e/` - End-to-end tests (Playwright)
- `apps/app/src/server/routes/api/v1/hello.ts` - Example API route

## Authentication

This starter includes a basic authentication setup. You can extend or replace it to fit your needs. Look for auth-related files and logic in the `apps/app/src/app/` directory.

## Resources
- [AnalogJS Documentation](https://analogjs.org/)
- [Nx Documentation](https://nx.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

Kickstart your next AnalogJS project with built-in auth and best practices!
