---
applyTo: '**'
---

# AnalogJS Development Instructions

Instructions for generating high-quality AnalogJS applications.

# Library Development
Every AnalogJS application should have a proper application structure. To achieve this, we use libraries to encapsulate features and functionality. Libraries should be reusable, testable, and maintainable.
Libraries should be created in the `libs` directory of the Nx workspace. Each library should have its own directory and should follow the naming conventions of `lib-name`.

## Generation

use the `nx generate @nx/angular:library` command to create a new library. 

### Example command:

```bash
npx nx generate @nx/angular:library --directory=libs/example --inlineStyle=true --inlineTemplate=true --no-interactive
```

### AnalogJS Library Adjustments
#### Configure Pages 
* `pages` directory for pages in `libs/[lib-name]/src/pages`.
* add library folder to `app/vite.config.ts` at `analogjs({additionalPagesDirs:[]})`
  Example:
```typescript
import { defineConfig } from 'vite';
import { analogjs } from '@analogjs/vite-plugin';   

export default defineConfig({
  plugins: [
    analogjs({
      additionalPagesDirs: [
        '/libs/[lib-name]',
      ],
    }),
  ],
});
```
#### Configure API Endpoints
* if we need api endpoints, create a `libs/[lib-name]/src/api/routes` directory and add the endpoints there.
* add library folder to `app/vite.config.ts` at `analogjs({additionalAPIDirs:[]})`
  Example:
```typescript
import { defineConfig } from 'vite';
import { analogjs } from '@analogjs/vite-plugin';

export default defineConfig({
  plugins: [
    analogjs({
      additionalAPIDirs: [
        '/libs/[lib-name]/src/api',
      ],
    }),
  ],
});
```

### Pages
Pages for app or library development should be created in the `apps/app/src/app/pages` or `libs/[lib-name]/src/pages` directory. Each page should be a standalone component that can be used in the application.

The page should be a TypeScript file with the `.page.ts` extension. The page should export a default class. The class should have a `@Component` decorator with the `selector` and `template` properties.
The page should only be a wrapper for a page component which shoud be saved under `apps/app/src/app/components/[page-name]/[page-name].ts` or `libs/[lib-name]/lib/[lib-name]/components/[page-name]/[page-name].ts`.

