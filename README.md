# 🎬 Movie Library App

A simple Angular application for browsing and managing a collection of films.
Users can explore movies, view detailed information, and mark favorites.

---

🌐 Live Demo

The app is deployed and available here:

👉 https://rocketreel-liart.vercel.app

---

## 🚀 Features

- 📚 View a grid of films with poster, title, and rating
- 🔍 Search films by title (real-time filtering)
- ⭐ Add/remove films from favorites
- 🎬 View detailed film information
- 🧭 Breadcrumb navigation
- ⚡ Built using Angular Signals for state management

---

## 🛠 Tech Stack

- Angular (Standalone Components + Signals)
- TypeScript
- CSS

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Oto-Gelashvili/RocketReel
cd RocketReel
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the development server

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200
```

---

### 4. Build the project

```bash
ng build
```

Build output will be in:

```
dist/
```

---

## 📁 Project Structure (simplified)

```
src/
 ├── app/
 │   ├── core/          # services (film, breadcrumbs)
 │   ├── features/      # pages (home, film-details)
 │   ├── shared/        # reusable components, pipes, directives
 │   └── models/        # interfaces
```

---

## 💡 Notes

- State is managed using Angular Signals (no external state library)
- Components are designed to be reusable (e.g., FilmCard)
- Routing is fully client-side

---

## 👤 Author

GitHub: https://github.com/Oto-Gelashvili
