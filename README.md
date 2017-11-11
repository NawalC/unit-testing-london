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