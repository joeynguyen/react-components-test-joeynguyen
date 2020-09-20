# react-components-test-joeynguyen

A library of React components created in Creating Reusable React Components on Pluralsight.

## install

```sh
npm install react-components-test-joeynguyen
```

## docs

[Component documentation](https://www.joeynguyen.com/react-components-test-joeynguyen/)

## steps for publishing

To support a shorter `import` syntax for apps that use this library, i.e., `import ps-react/lib/Label` --> `import ps-react/Label`, we need to use a slightly more involved way of publishing our package

1. Copy files to **lib** directory and generate new package.json inside there as well
  - Run `npm run build:lib` from the root of the repo
3. Run `npm publish` from the **lib** directory instead of from project root
