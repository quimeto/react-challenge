# React Pair Programming Test

This project is a simple React application designed for pair programming exercises. It includes basic components, custom hooks, and services to help candidates demonstrate their skills in React development.

## Project Structure

```text
react-pair-programming-test
├── src
│   ├── components
│   │   ├── counter
│   │   │   ├── Counter.tsx
│   │   │   ├── Counter.css
│   │   │   └── Counter.test.tsx
│   │   ├── helloworld
│   │   │   ├── HelloWorld.tsx
│   │   │   └── HelloWorld.css
│   │   ├── itemfilter
│   │   │   ├── ItemFilter.tsx
│   │   │   ├── ItemFilter.css
│   │   │   └── ItemFilterProps.tsx
│   │   └── todolist
│   │       ├── TodoList.tsx
│   │       ├── TodoList.css
│   │       └── TodoList.test.tsx
│   ├── fixtures
│   │   └── todoitem.mock.ts
│   ├── hooks
│   │   ├── useStorageService.ts
│   │   └── useTodoItemService.ts
│   ├── services
│   │   ├── StorageService.ts
│   │   └── TodoItemService.ts
│   ├── styles
│   │   ├── app.css
│   │   └── main.css
│   ├── App.tsx
│   ├── main.tsx
│   └── setupTests.ts
├── eslint.config.js
├── mise.toml
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Components

- **HelloWorld.tsx**: A simple component that displays a greeting message using local state.
- **Counter.tsx**: A component that implements a counter with increment, decrement, and reset functionality, utilizing custom hooks for local storage persistence.
- **TodoList.tsx**: A component that fetches and displays a list of tasks asynchronously, allowing the user to filter the items interactively.
- **ItemFilter.tsx**: A reusable input component for filtering lists based on text.

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

This project uses [mise](https://mise.jdx.dev/) as a version manager and task runner to guarantee a reproducible and seamless development environment. `mise` automatically manages the Node.js installation and dependencies.

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd react-pp-challenge
   ```

2. **Install environment and dependencies**:
   `mise` will automatically detect the Node.js version defined in `mise.toml` and download it if necessary, along with all project packages.
   ```bash
   mise run install
   ```

3. **Run the application**:
   ```bash
   mise run dev
   ```

4. **Run tests**:
   ```bash
   mise run test
   ```

5. **Lint the project**:
   ```bash
   mise run lint
   ```

6. Open your browser and navigate to the URL provided in your terminal (usually `http://localhost:5173`) to see the application in action.

## Key React Concepts Used

The project makes use of the following core React features and patterns:

- **Hooks for State & Side Effects**: 
  - `useState` for managing local component state (like the counter value and the filter input).
  - `useEffect` for handling side effects such as asynchronous data fetching and synchronizing state with external sources (like `localStorage`).
  - `useRef` to maintain stable references across renders, particularly for instantiating and keeping track of object-oriented service classes.
  - `useCallback` to memoize functions and prevent unnecessary re-renders of dependencies.
- **Custom Hooks**: Encapsulating reusable logic, such as `useStorageService` and `useTodoItemService`, to cleanly separate business logic from the UI components.
- **Component Composition**: Splitting the UI into smaller, reusable pieces (e.g., passing callbacks via props to `ItemFilter`).
- **Asynchronous Data Handling**: Managing loading states and promises when interacting with mock services to fetch data asynchronously.
- **Testing**: Using `Vitest` and `React Testing Library` to test component rendering, user interactions (`fireEvent`), and asynchronous DOM updates (`waitFor`).

## Usage

This application serves as a foundation for pair programming sessions. Candidates can be asked to modify existing components, add new features, or fix bugs as part of the exercise.

## License

This project is licensed under the MIT License.