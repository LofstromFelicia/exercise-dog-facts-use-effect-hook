# React Dog Facts 🐾

A lightweight, responsive React application built with Vite that fetches dynamic data from an external Dog Facts API using the `useEffect` hook and passes it down via props.

## View it live
🔗 [Check out the live project here!](https://exercise-dog-facts-use-effect-hook.pages.dev)

---

## Project Purpose & Features

This project is a practical exercise focused on mastering core React Hooks and data flow architecture. 

* **State Management & Side Effects:** Utilizes `useState` to manage the API data and `useEffect` to trigger an asynchronous `fetch` request immediately when the component mounts.
* **Component Communication (Props):** Demonstrates clean data lifting and prop drilling by passing the retrieved API object from the parent `App.jsx` component down to the child `DogFact.jsx` component.
* **Conditional Rendering:** Implements a smooth loading state (`if (!fact)`) to handle asynchronous delays gracefully before the API returns data.
* **Custom Styling:** Features a custom, warm "puppy-themed" CSS layout with smooth typography, rounded cards, micro-interactions, and a loading pulse animation.

---

## Tech Stack & Tools
* **React 18 & JSX** – For component architecture and hooks (`useState`, `useEffect`)
* **Vite** – As the fast, modern frontend build tool
* **CSS3** – Tailored flexbox centering, custom animations, and layout design
* **Dog Facts API** – An external JSON REST API for retrieving random facts

---

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory. This project uses npm (Node Package Manager) to manage its dependencies.

Run the command below in your terminal to install all dependencies, open the project in VS Code, and spin up the local development server:

```bash
npm i && code . && npm run dev