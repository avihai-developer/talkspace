# Question 2

# How to run

    npm run question-two
    npm run question-two-2

What is the output of this code?

    The output of this code will be console log of the follwing array
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

    When we call doSomting it pass 10 - the default parameter to the function
    After that we create array with length of 10 (with undefined values)
    Using es6 spread syntax to create a new array (with new refrence)
    Then we map the function and change the vaule (undefined) to the index plus one
    At this point sampleData equal to [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Then we call doParallel and "wait" until we get response 
    doParallel get function, args, parallelism with default value of 10
    In our case the inputs are:
    sampleFunction, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10
    call the function with each value of args
    and return promise of new object with the value that we get from the function
    in our case: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
    sample function just get number and retuen promise of the square of the number
    After that doSomting print the array and retuen promise of undefined becouse its async function with no return


Write a function to replace ‘sampleFunction’ - that receives an object with 3 numbers and returns the minimal (this function should be typeScript valid!)

    In get-minimal.ts

Refactor ‘doParallel’ to handle the ‘TODO’ comment properly
i.	Note: consider that some task instances can be significantly slower than otherss

    In do-parallel.ts
