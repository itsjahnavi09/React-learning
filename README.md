# React Router Basics

## What is React Router?

React Router is a library used in React to create multiple pages and navigate between them without reloading the website.

## What is BrowserRouter?

BrowserRouter enables routing in a React application. It keeps the URL and the displayed page in sync.

Example:

<BrowserRouter>
  <App />
</BrowserRouter>
What is Link?

Link is used to move from one page to another without refreshing the browser.

Example:

<Link to="/about">About</Link>
What is NavLink?

NavLink works like Link but can also highlight the currently active page.

Example:

<NavLink to="/about">About</NavLink>

This helps users know which page they are currently viewing.

## What is useParams()?

useParams() is a React Router hook used to get values from the URL.

Example URL:

/student/1

Code:

const { id } = useParams();

Output:

1

It is useful for creating dynamic pages like student details, product details, or user profiles.

## What I Learned
How to install and set up React Router.
How to create multiple pages in a React application.
How to use BrowserRouter, Routes, and Route.
How to navigate between pages using Link and NavLink.
How to highlight the active page using NavLink.
How to create dynamic routes.
How to use useParams() to get data from the URL.
How React Router helps build Single Page Applications (SPAs) with smooth navigation.
