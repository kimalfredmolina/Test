## Frontend Installation Guide (React JS)

### Important Installations

- 🛠️ NodeJs ([Install here if you dont have](https://nodejs.org/en/download))

### 1.0. ReactJS Installation

```bash
npm create vite@latest ./ -- --template react
```
### 1.2. Tailwind Autoprefixer Installation
```bash
npm install -D tailwindcss postcss autoprefixer
```
### 1.3. Tailwind Installation
```bash
npm install tailwindcss @tailwindcss/vite
```

### 1.4. After Installation, Setup or add this codes in vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),  //add this line 
    react()],
})
```
### 1.5. Add a file name (tailwind.config.js) if the installation dont work and copy this code

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### 1.6. Add this code in index.css (file path src)
```css
@import "tailwindcss";
```

---
## Other FrontEnd Installation & Free Soure Codes :notebook_with_decorative_cover:

- It allows to navigate between different components and manage the browser history.
```
npm install react-router-dom
```
- Free React.js Icons
https://lucide.dev/guide/packages/lucide-react

```
npm install lucide-react
```

- For Animation in React.js
https://www.framer.com/motion/introduction/

```
npm install framer-motion
```

Free React Templates

- https://ui.shadcn.com/

Free Background for Website (Tailwind CSS, Vanilla CSS)

- https://bg.ibelick.com/

Free Buttons for Website (Tailwind CSS)

- https://buttons.ibelick.com/
---

# Git sheet

### Branch Management
```bash
git branch                    # To check all branches
git checkout branch_name      # To move to another branch
git checkout -b new_branch    # To Create ne branch
```

### Status & Updates
```bash
git status      # To check the file changes
git pull        # To get the latest git commit
git pull origin branch_name   # To get the latest git commit in speciic branch
```

### Add, Commit, Push
```bash
git add .                       # To stage the all changes
git commit -m "message here"    # To create committ message
git push origin branch_name     # Push to remote repo (GitHub)
```


### Merge Workflow
```bash
git checkout master
git pull origin master          # To ensure the master is updated
git merge home_page             # Merge feature branch in master
git push origin master          # Push updated master in GitHub
```
