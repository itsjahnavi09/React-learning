# Student Management System

## What is map() in React?
map() is used to transform array data into JSX elements. In this project, it was used to dynamically create StudentCard components from the students array without manually writing each card. It returns a new array and does not modify the original array.

## Why do we use keys?
Keys help React identify each item uniquely while rendering a list.

In this project, I used student.id as the key because every student has a unique id.
Keys are used when rendering lists with map(). They help React uniquely identify each item and efficiently update the UI when the list changes.

## How did you implement search?

I created a search state using useState.

When the user types in the search bar, the value gets stored in the search state. Then I used filter() to show only those students whose name matches the search text.

## How did you implement filtering?

I implemented filtering using the JavaScript filter() method and React useState.

When a filter button (All, MERN Stack, React, or Node.js) is clicked, the selected course is stored in state using setFilter(). Then the filter() method is used to display only those students whose course matches the selected filter.

## What did you learn from this task?
From this task, I learned how to use reusable components, props, useState, map(), and filter() together in a real React project. I also learned how search and filter functionality can be added without manually creating cards.I understood that props are not imported separately; instead, a parent component renders a child component and passes data to it through props.