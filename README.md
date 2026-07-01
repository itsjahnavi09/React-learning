1. What is Prop Drilling?

Prop Drilling means passing data from one component to another through many components. Sometimes the middle components do not need the data, but they still have to pass it. This makes the code longer and confusing.

2. What is Context API?

Context API is a React feature that helps us share data between many components without passing props again and again.

3. What is Provider?

Provider is a component that stores the data and shares it with all the components inside it.

4. What is useContext()?

useContext() is a React Hook that is used to get data from Context. It lets us use shared data directly inside a component.

5. Why is Context API useful?

Context API is useful because it saves time and removes the need to pass props through many components. It makes the code clean and easy to manage.

6. When should we avoid Context API?

We should avoid Context API when only one or two components need the data. In that case, using props is easier.

7. Difference between Props and Context API
Props	Context API
Props pass data from parent to child.	Context API shares data with many components.
Data is passed manually.	Data is accessed directly using useContext().
Good for small applications.	Good for large applications or shared data.
8. What did you learn from this assignment?

In this assignment, I learned what Prop Drilling is and how Context API solves it. I learned how to create a Context, use a Provider, and access data with useContext(). I also learned that when the user data changes, all the components update automatically.
