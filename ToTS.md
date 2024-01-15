## 1. Install TypeScript Dependencies

bash

### Using npm

npm install --save-dev typescript @types/react @types/react-dom

### Or using yarn

yarn add --dev typescript @types/react @types/react-dom

## 2. Create tsconfig.json File

```json
{
"compilerOptions": {
"target": "es5",
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"module": "esnext",
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"jsx": "react"
},
"include": ["src/**/*"],
"exclude": ["node_modules"]
}
```

## 3. Rename Files to .ts or .tsx


Gradually change the file extensions of JavaScript files to `.ts` or `.tsx`. Ensure using `.tsx` for files containing JSX.

## 4. Type Declarations

```tsx
import React, { FC } from 'react';

interface Props {
name: string;
}

const MyComponent: FC = ({ name }) => {
return Hello, {name}!;
};

export default MyComponent;
```


## 5. Fix Errors and Warnings

markdown
Copy code
During the migration process, the TypeScript compiler may report errors or warnings. Address them step by step.

## 6. Include Type Definitions

markdown
Copy code
If your project uses third-party libraries, ensure having the appropriate `@types` packages installed or find/create corresponding `.d.ts` type definition files.

## 7. Run TypeScript Compilation

bash
Copy code

# Using npm

npx tsc

# Or using yarn

yarn tsc
These steps provide a basic guide, and the specifics of migration may vary based on the project structure, dependencies, and codebase size. It's recommended to proceed incrementally, ensuring each step's changes do not introduce major issues to the entire project
