

## What is React?

React is a free and open-source JavaScript library developed by Meta for building user interfaces. It helps developers create fast, interactive, and reusable web applications using components.

---

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It makes React code easier to read and write.

Example:

```jsx
const heading = <h1>Hello React</h1>;
```

---

## What is a Component?

A component is a reusable piece of UI in React. Components help divide an application into smaller, manageable parts.

Example:

```jsx
function Header() {
  return <h1>Welcome</h1>;
}
```

---

## What are Props?

Props (Properties) are used to pass data from a parent component to a child component. They make components reusable and dynamic.

Example:

```jsx
<StudentCard name="Rahul" />
```

---

## What is State?

State is a built-in React feature used to store and manage data that can change over time. When state changes, React automatically updates the UI.

Example:

```jsx
const [count, setCount] = useState(0);
```

---

## What is Virtual DOM?

The Virtual DOM is a lightweight copy of the real DOM maintained by React. When data changes, React first updates the Virtual DOM, compares it with the previous version, and then updates only the necessary parts of the real DOM. This improves performance.

---

## What Did I Learn From This Assignment?

Through this assignment, I learned:

- How to create a React project using Vite
- The basics of React and JSX
- Creating and using reusable components
- Passing data using props
- Understanding state and Virtual DOM
- Rendering components dynamically using map()
- Building Student, Product, and Employee Card components
- Applying CSS styling using Flexbox, card layouts, spacing, and hover effects
- Organizing React projects using folders and components

This assignment helped me understand the fundamentals of React and how modern web applications are built using reusable and dynamic components.