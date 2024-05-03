# Unitest in Javascript 🚀💡🌟 
 In this project, Unit testing in JavaScript is a crucial part of the development process, ensuring that individual parts (units) of your application work as expected. It involves writing tests for each function or module to validate that they correctly perform their intended tasks under various conditions.
Key Concepts of Unit Testing in JavaScript:

    Isolation: Unit tests are designed to cover small, isolated parts of your application, ensuring that each unit functions independently from the rest.

    Automated Testing: Tests are automated scripts that are run to ensure that the application behaves as expected after changes or updates.

    Regression Testing: Unit tests help in catching regressions in code functionality that previously worked and after changes may stop working.

    Test Driven Development (TDD): This is a development methodology where tests are written before the actual code. It ensures that the code you write is testable and meets the intended requirements right from the start.

Popular JavaScript Testing Frameworks:

    Jest: Developed by Facebook, Jest is a popular, feature-rich framework that works out of the box for any React project, supporting all JavaScript apps. It includes a test runner, assertion functions, and mocking support.

    Mocha: One of the most flexible testing frameworks, Mocha allows you to use your choice of assertion libraries (e.g., Chai, Sinon). It's used for both unit and integration testing.

    Jasmine: An older framework that comes bundled with everything you need to write tests (assertions, spies, and mocks). It’s traditionally been used in Angular projects but is suitable for any JavaScript application.

    AVA: A modern testing framework that runs tests concurrently, which speeds up the testing process. It’s considered minimalistic and often used for applications that require high performance.

    Tape: A simple, straightforward testing framework that outputs TAP, a readable and universal testing protocol. It’s great for simplicity and can be used with any CI tools.


## Tasks 🛠️
* "package.json, 0-calcul.js, 0-calcul.test.js" - This file contains creating a new file named 0-calcul.js:

    Create a function named calculateNumber. It should accepts two arguments (number) a and b
    The function should round a and b and return the sum of it

Test cases:

    Create a file 0-calcul.test.js that contains test cases of this function
    You can assume a and b are always number
    Tests should be around the “rounded” part

Tips:

    For the sake of the example, this test suite is slightly extreme and probably not needed
    However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

* "1-calcul.js, 1-calcul.test.js" - This file contains creating a new file named 1-calcul.js:

    Upgrade the function you created in the previous task (0-calcul.js)
    Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
    When type is SUM, round the two numbers, and add a and b
    When type is SUBTRACT, round the two numbers, and subtract b from a
    When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error

Test cases

    Create a file 1-calcul.test.js that contains test cases of this function
    You can assume a and b are always number
    Usage of describe will help you to organize your test cases

Tips:

    For the sake of the example, this test suite is slightly extreme and probably not needed
    However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

Requirements:

    You have to use assert
    You should be able to run the test suite using npm test 1-calcul.test.js
    Every test should pass without any warning

* "2-calcul_chai.js, 2-calcul_chai.test.js" - This file contain While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

Let’s install Chai with npm:

    Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
    Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
    Rewrite the test suite, using expect from Chai

Tips:

    Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
    The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code

Requirements:

    You should be able to run the test suite using npm test 2-calcul_chai.test.js
    Every test should pass without any warning

