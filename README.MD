# [Gradient Methods App](https://qqingvarqq.github.io/gradient-methods-app/#/) [![CircleCI](https://circleci.com/gh/qqingvarqq/gradient-methods-app/tree/master.svg?style=svg)](https://circleci.com/gh/qqingvarqq/gradient-methods-app/tree/master)
The purpose of this app is the ability to compare the performance of the difference-gradient method and two-step modification of the difference-gradient method on different unconstrained optimization problems.

## Difference-gradient method

The main difference between the regular gradient method and the difference-gradient method is that instead of using derivatives in the explicit form we use an approximation of finite differences.

![alt text](./__readme-md-assets/gradient-method.png "Difference-gradient method")

## Two-step difference-gradient method

Here we calculate the next iteration based on two steps, which allows us to chose the direction in which we moved more precisely.

![alt text](./__readme-md-assets/two-step-gradient-method.png "Two-step difference-gradient method")

## Extending the app
In case if you want to fork the app, and possibly add new optimization methods or new test functions it is easy to do.
* Adding new test functions:

  Add `FunctionMetadata` object to `src/functions.index.ts`, so your function will inside `functionsToOptimize` hashmap, after that your function will automatically appear on the main page.
* Adding new optimization methods:

  Add `OptimizationAlgoMetadata` object to `src/optimization-algorithms/index.ts` so your method will be inside `optimizationMethods` hashmap, After that when you click 'Optimize' button on the optimization page you will see the result produced by your optimization algorithm.
------
### App Light/Dark modes.

Almost every os now supports dark mode, so this app will automatically set the corresponding theme to your os preferences.

![alt text](./__readme-md-assets/theming.gif "Themes")