# Product Explorer App

## What is useEffect()?

`useEffect()` is a React Hook that lets us run code when a component loads or updates. In this project, I used it to fetch product data from an API when the page first opens.

---

## Why do we use useEffect for API calls?

API calls are usually placed inside `useEffect()` so that the data is fetched only when the component loads. This prevents the API from being called again and again every time the component re-renders.

---

## What is a Loading State?

A loading state is used to show the user that the data is still being fetched from the API.

While the products are loading, the app displays:

**"Loading Products..."**

Once the data is received, the products are shown on the screen.

---

## What is an Error State?

An error state is used to handle situations where the API request fails.

If something goes wrong while fetching the data, an error message is displayed instead of the products.

---

## How did I implement Search?

I created a search bar using React state. As the user types, the search term is stored and the products are filtered based on their titles.

The results update instantly without needing a search button.

---

## How did I implement Filtering?

I extracted all product categories from the API data and created category buttons dynamically.

When a category button is clicked, only products belonging to that category are displayed.

I also added an **All** button to show all products again.

---

## What did I learn from this assignment?

Through this assignment, I learned:

* How to use `useState()` and `useEffect()`
* How to fetch data from an API
* How to handle loading and error states
* How to create reusable React components
* How to pass data using props
* How to implement search and filtering
* How to render dynamic data using `map()`
* How React updates the UI when state changes



