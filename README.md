# User Registration Form

## What are reusable components?

Reusable components are pieces of code that can be used multiple times instead of writing the same thing again and again.

In this project, I created an `InputField` component and a `Button` component. This made the code cleaner, easier to manage, and more organized.

---

## Why do we use props?

Props help us pass information from a parent component to a child component.

For example, the same `InputField` component is used for Full Name, Email, Password, and Confirm Password. The only thing that changes is the data passed through props, such as the label, placeholder, and input type.

Without props, I would have had to create separate components for every field.

---

## How did you reuse the InputField component?

Instead of creating four different input fields manually, I created a single `InputField` component and reused it throughout the form.

I used it for:

- Full Name
- Email Address
- Password
- Confirm Password

By passing different props each time, the same component was able to display different fields while keeping the code short and organized.

---

## How did you manage state?

I used React's `useState()` hook to store and manage the form data.

Whenever the user enters information into an input field, the corresponding value is updated in the state using the `handleChange()` function.

I also used state to store validation errors so that appropriate messages can be shown if the user enters invalid information.


## What did you learn from this task?

From this task, I learned how to create reusable components in React and pass data using props.

I also learned how to manage form input values using `useState()` and how to validate user input before submitting a form.

This task helped me understand parent-child communication, controlled inputs, and basic form handling in React.
