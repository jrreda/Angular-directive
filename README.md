# Directives Deep Dive

An Angular 18 demo app for exploring custom directives with standalone components, signals, and template-driven forms.

## What This Project Shows

The app focuses on two directive patterns:

- `appSafeLink`: an attribute directive applied to anchor tags that asks for confirmation before leaving the app and appends a `from` query parameter to the destination URL.
- `*appAuth`: a structural directive that conditionally renders content based on the active user permission.

The demo also includes a small authentication flow powered by `AuthService`, which stores the current permission in a signal.

## Demo Roles

Use these credentials in the login form:

- `admin@example.com` / `admin`
- `user@example.com` / `user`

Any other credentials are treated as `guest`.

After logging in, the page reveals different protected content for:

- `admin`
- `user`
- `guest`

## Tech Stack

- Angular 18
- Standalone components and directives
- Angular signals
- Template-driven forms
- Karma + Jasmine for unit testing

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open [http://localhost:4200](http://localhost:4200).

## Available Scripts

- `npm start`: run the Angular dev server
- `npm run build`: create a production build in `dist/`
- `npm run watch`: rebuild on file changes in development mode
- `npm test`: run unit tests with Karma

## Key Files

- `src/app/safe-link-directive.ts`
- `src/app/auth/auth.directive.ts`
- `src/app/auth/auth.service.ts`
- `src/app/learning-resources/learning-resources.component.html`
- `src/app/app.component.html`
