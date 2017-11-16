# unit-testing

## Before you start

### Forking & cloning
First step is to `fork` this repo to your account, then `clone` it locally.

After you do that, [`add a remote`](https://help.github.com/articles/adding-a-remote/) to point to CodeYourFuture repo, that will allow you to update you forked copy when we update the repo with more exercises.

Example command:
`git remote add cyf git@github.com:CodeYourFuture/unit-testing-london.git`

### Installing

Run `npm install`

## How to run the tests
To run the tests from the console, run the command: `npm test`.

To keep the tests running (auto updating when you save files), run the command: `npm test -- --watch` then press `a` to run all the tests and keep watching the files for changes. To quit the tests, type `q`.

To run a specifc test from the command line, do: `npm test -- filname` for example `npm test -- find-alive` (that will run only the files that matches find-alive, i.e. findAlive.test.js).

## Exercise 1

Edit `test/sum.test.js`. Move the actual sum function to a different file (`src/sum.js`) and export it from there. The go back to your test file and import the sum function from `src/sum.js`.

## Exercise 2

Run `npm test`.

To begin with export the functions object from `src/functions.js` and import it into `test/functions.test.js`. Run `npm test` again. You should have 10 failing tests.

Implement all the functions in `src/functions.js` so all the unit test pass when you run `npm test`.

## Exercise 3

Create a function `src/functions.js` that accepts 2 arrays as arguments and returns a new array which contains all the items from the two inputs. Write a test for that function in `test/functions.test.js`.
