# React Mini Movie Search App

## What is useEffect?

`useEffect` is a React Hook that is used to perform side effects in a component. In this project, it is used to fetch movie data whenever the query changes.

---

## How API Data Was Fetched

The application uses the `fetch()` method to request movie data from the OMDb API. The API is called inside `useEffect()`, and the returned data is converted into JSON. The movie list is then stored in state using `setMovies()` and displayed on the screen.

---

## How Search Works

The user enters a movie name in the search box and clicks the **Search** button. The entered text is stored in state. When the search is triggered, the query state changes, causing `useEffect()` to fetch movies related to that search term from the API. The results are then displayed as movie cards.

---

## What I Learned

- How to display modal
- How to use conditional rendering for loading and error messages.
- How to display lists using `map()` and `key`.
- How to build a simple movie search application using React.
