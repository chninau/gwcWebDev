# Girls Who Code Website — Local Setup Guide

Follow this once before working on the project.

This project uses:

* React (frontend)
* Node (development tools only)
* Google APIs (backend integrations)
* FileZilla (publishing to the school server)

---

## 1. Install Required Software

### Node.js (Required)

Download the **LTS version**:
https://nodejs.org

Verify installation:

```
node -v
npm -v
```

---

### Git (Required)

Download:
https://git-scm.com/downloads

Verify:

```
git --version
```

---

### VS Code (Recommended Editor)

https://code.visualstudio.com

Recommended extensions (OPTIONAL--NOT NECESSARY):

* ES7+ React/Redux Snippets
* Prettier
* Thunder Client
* GitLens

---

### FileZilla (For publishing site)

https://filezilla-project.org/

Used to upload the built site to the Lehigh server.

---

## 2. Access the Repository

Clone the project:

```
git clone git@github-chninau:chninau/gwcWebDev.git
cd gwcWebDev
```

---

## 3. Install Project Dependencies

Inside the project folder:

```
npm install
```

This installs all required React packages.

---

## 4. Run the Website Locally

```
npm run dev
```

Open:
http://localhost:5173

You should see the development version of the site.

---

## 5. Google Credentials (Only for backend features)

Ask the tech lead for:

* service account JSON key
* sheet access permissions

Place the key in the instructed backend directory (not committed to GitHub).

---

## 6. Publishing the Website (When Changes Are Ready)

Build the site:

```
npm run build
```

This creates a `dist/` folder.

Upload **contents of dist/** to the server `/html` directory using FileZilla.

Do NOT upload:

```
src/
node_modules/
package.json
```

---

## Typical Workflow

1. Pull latest code

```
git pull
```

2. Make changes

3. Test locally

```
npm run dev
```

4. Save work

```
git add .
git commit -m "describe changes"
git push
```

5. Publish site

```
npm run build
Upload dist/ via FileZilla
```

---

## Quick Concept

GitHub = code storage
Localhost = testing
FileZilla = live website





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
