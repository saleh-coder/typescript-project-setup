# TypeScript Project Setup

This repository contains the setup for a TypeScript project, including a development environment using `ts-node-dev`. The project demonstrates the configuration and usage of TypeScript in Node.js.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- TypeScript compilation to JavaScript.
- Development server with automatic restart on file changes.
- Basic TypeScript configuration with `tsconfig.json`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saleh-coder/typescript-project-setup.git
   cd typescript-project-setup
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- **`npm run build`**: Compiles the TypeScript code to JavaScript and outputs it to the `dist` folder.
- **`npm start`**: Runs the compiled JavaScript code from the `dist` folder.
- **`npm run dev`**: Starts the development environment using `ts-node-dev`, automatically restarting on file changes.

## Usage

- **To compile your TypeScript code, run:**
  ```bash
  npm run build
  ```
- **To execute the compiled code, run:**
  ```bash
  npm start
  ```
- **To start the development server, run:**
  ```bash
  npm run dev
  ```

## Example Code

Here is a simple example of TypeScript code you can use in `src/index.ts`:

```typescript
// Simple code example
const x: number = 3;
console.log(x);
```

## Expected Output

When running the compiled JavaScript code, you should see the following output in your terminal:

```bash
3
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
