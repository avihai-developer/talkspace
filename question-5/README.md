# Question 5

Consider the following React Component:

This implementation holds a potential performance issue, can you suggest improvements?

    There are few problems with this implementation:
    1 - We create new instance of UserApi instaid of use singleton design pattern for the instance.
    2 - We create a new function each time userAPI is change instaid of define one function outside the effect and then call the function inside the effect.
    3 - We get the users instaid of subscribe to them that can lead to diffrent data on each component
    4 - We don't use key to the elements that will lead rerender the whole component on every change in users.

    Improvments:
    1 - Create singletone instance of UserAPI.
    2 - Subscribe to the users instaid of fetching them each time (and unsubscribe when the componrnt is destroyed).
    3 - Use key to the p elements to reduce the rendering time.

Consider the following code:
what will happen when the “Increment” (or “Decrement”) button is clicked?
Please explain why that is and if there is a way to improve the code?

    When we click on the "Increment" / "Decrement" button we will call the increment / decrement function,
    That function will update the count state and then rerender all the components becouse they all part of the same provider
    To improve the performance we should create a diffrent content for each of the components
    Or just use redux and services and in each component subscribe to the relevent component
