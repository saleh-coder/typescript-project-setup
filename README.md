# 🌐 Configuring TypeScript in Node.js Project

## 📚 Step-by-Step Guide to Configure TypeScript

- **🎯 Goal:** Set up a Node.js project to use TypeScript.
- **❓ Why Convert?**: TypeScript needs to be transpiled into JavaScript because Node.js and browsers don't understand TypeScript.

### 1. 📁 Create the Project Folder

1. Open the terminal.
2. Run the following commands to create the project folder and the `package.json` file:

   ```bash
   cd Desktop
   mkdir typescript
   cd typescript
   npm init -y
   ```

   The command `npm init -y` generates a basic `package.json`:

   ```json
   {
     "name": "typescript",
     "version": "1.0.0",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     }
   }
   ```

### 2. 🖥️ Open the Project in VSCode

Open the project in VSCode by running:

```bash
code .
```

### 3. 📂 Create Folder Structure and TypeScript File

In VSCode, create a `src` folder. Inside `src`, create `index.ts` and add:

```typescript
const x: number = 3;
console.log(x);
```

### 4. 🚀 Attempt to Execute the File with Node.js

Try running the TypeScript file directly:

```bash
node src/index.ts
```

**💡 Expected Result:** You’ll see an error like:

```bash
SyntaxError: Missing initializer in const declaration
```

**🔍 Why?** Node.js doesn’t understand TypeScript. We need to set up TypeScript to compile the code.

### 5. 📦 Install Necessary Dependencies

Install the required packages:

```bash
npm install -D typescript ts-node-dev
```

- **📜 typescript:** TypeScript compiler.
- **🔄 ts-node-dev:** Runs TypeScript directly on Node.js with hot-reloading.

### 6. ⚙️ Configure TypeScript

Initialize TypeScript configuration:

```bash
npx tsc --init
```

Open `tsconfig.json` and replace:

```json
// "outDir": "./",
```

with:

```json
"outDir": "dist",
```

**📝 Explanation:** This tells TypeScript to output compiled files to the `dist` folder.

### 7. 🛠️ Add Scripts in package.json

Update your `package.json`:

```json
"scripts": {
  "build": "tsc",
  "dev": "ts-node-dev --respawn src/index.ts"
}
```

- **🛠️ build:** Compiles TypeScript to JavaScript.
- **🔄 dev:** Runs the code with ts-node-dev for hot-reloading.

### 8. ✅ Test the Configuration

Compile the code:

```bash
npm run build
```

**💡 Expected Result:** A `dist` folder with the compiled `index.js`.

Run the compiled code:

```bash
node dist/index.js
```

**💬 Expected Output:** `3` is displayed in the terminal.

Run the development environment:

```bash
npm run dev
```

**💡 Expected Result:** Code runs, with auto-reload on file changes.

**📖 Command Explanation:**

- **🔄 ts-node-dev:** Runs TypeScript with Node.js and hot-reloading.
- **⏩ --respawn:** Restarts the process on file changes.
- **📂 src/index.ts:** The main file to run.

## 🧪 Configuring Jest for TypeScript Testing

### 🎯 Goal:

Set up Jest to run tests in a TypeScript project.

### Steps:

1. 🛠️ Install testing dependencies:

   ```bash
   npm i -D jest ts-jest
   ```

   - **🧪 jest:** Testing framework.
   - **⚙️ ts-jest:** Adapter to use Jest with TypeScript.

2. 📝 Create Jest configuration:

   Create a `jest.config.js` file:

   ```javascript
   module.exports = {
     preset: "ts-jest",
     testEnvironment: "node",
   };
   ```

3. 📥 Install Jest type definitions:

   ```bash
   npm i -D @types/jest
   ```

### 🧩 Creating and Running Tests

1. 💻 Create code to be tested:

   In `src/calc.ts`, add:

   ```typescript
   export function sum(a: number, b: number): number {
     return a + b;
   }
   ```

2. 🧪 Create test file:

   In `tests/calc.test.ts`:

   ```typescript
   import { sum } from "../src/calc";

   test("It should add up correctly", () => {
     const result = sum(12, 20);
     expect(result).toBe(32);
   });
   ```

3. ✏️ Update test script:

   In `package.json`, add:

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

4. 🏃 Run the tests:

   ```bash
   npm test
   ```

   **💡 Expected Result:** Tests are executed and Jest shows the results.

## 📊 Summary

- **🚀 TypeScript Setup:** You now have a working TypeScript environment in Node.js with hot-reloading.
- **🧪 Testing Setup:** Jest is set up to run tests on TypeScript code.

## 📚 Additional Resources:

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ts-jest Documentation](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)
