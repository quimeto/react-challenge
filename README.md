# React Pair Programming Test

This project is a simple React application designed for pair programming exercises. It includes basic components and functionality to help candidates demonstrate their skills in React development.

## Project Structure

```
react-pair-programming-test
├── src
│   ├── components
│   │   ├── HelloWorld.tsx
│   │   ├── HelloWorld.css
│   │   ├── Counter.tsx
│   │   └── Counter.css
│   ├── styles
│   │   ├── main.css
│   │   └── app.css
│   ├── App.tsx
│   └── main.tsx
├── public
│   └── favicon.ico
├── index.html
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

## Components

- **HelloWorld.tsx**: A simple component that displays a greeting message using `useState`.
- **Counter.tsx**: A component that implements a counter with increment and decrement functionality using `useState`.

## Pair Programming Exercise

### Feature 1: List + Filter
- Add a list of 5 items to the app (in `Counter.tsx` or a new `TodoList.tsx`).
- Add a text input to filter items as the user types.
- Add a "no results" message when the filter matches nothing.

### Feature 2: Persistence + Reset
- Store the counter value (or list state) in `localStorage` whenever it changes.
- On mount, initialize state from `localStorage` using `useEffect`.
- Add a "Reset" button that clears saved state and restores defaults.

### Bonus
- Extract filter input and behavior into a reusable component (e.g., `ItemFilter.tsx`).
- Add a simple test (unit or integration) validating:
  - counter increments / decrements,
  - filter updates results correctly,
  - reset works.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd react-pair-programming-test
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Key React Concepts Used

| Vue Concept | React Equivalent |
|---|---|
| `ref()` | `useState()` |
| `onMounted()` | `useEffect(() => {}, [])` |
| `watch()` | `useEffect(() => {}, [dep])` |
| `<template>` | JSX `return (...)` |
| `@click` | `onClick` |
| `v-model` | `value` + `onChange` |
| `scoped styles` | CSS Modules or component CSS files |

## Usage

This application serves as a foundation for pair programming sessions. Candidates can be asked to modify existing components, add new features, or fix bugs as part of the exercise.

## License

This project is licensed under the MIT License.