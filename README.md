# Re-render Demo App

This simple React app visualizes how and why components in a React component tree will re-render (or will not).

The site is available online here: https://super-mermaid-52df4a.netlify.app/

You can clone and run this repo locally:
1. Clone the repo to your computer
1. `npm install`
1. `npm start`
1. Site should open at `localhost:3000` on your browser.

## What is rendering? What is re-rendering?

A React component will always render at least once, when it is "mounted" to the DOM.

After that, a component will usually **re-render** many times. You can think of re-rendering as the component renders again, or more specifically that the component's code is called again. For functional components, this means the function is called again.

## Why should I care about re-rendering?

If you want your React app to change over time, respond to user input, fetch information from the Internet, and so on, then **your app has to re-render.** In React development, re-rendering is the only way for your app to change what it displays.

Many features that we implement every day only really make sense if you understand this. For example, consider a component where a user presses a button to increment a counter. The effect we want here is actually carried out over multiple rerenders of the same component:

1. We **initially render** the component with the internal state `{ count: 0 }`, some HTML that displays the count, and a button.
1. The user clicks the button, which increments the `count` state.
1. The state change **triggers a re-render**, so the component now displays the updated `count` of `1`.

From there, every time the user clicks the button, the state will update which causes another rerender.

## What causes re-renders?

This demo app illustrates three main causes of re-renders:
1. The component's parent re-renders.
2. The component receives new props.
3. The component's internal state changes.

Notice that 1) and 2) are essentially the same situation. This is becuase in order for a component to receive new props, its parent has to rerender.

## Understanding re-renders

Take some time to play with the application. This will help solidify your understanding of renders and re-renders.

Notice that this application has the following component tree:
```
      <App />
    /        \
<Child>    <ChildTwo />
                \
            <Grandchild />

```
1. For each component, identify its parent (if any) and direct children (if any).
1. Open the developer tools console and refresh the page. Which components log `[component] rendered!` to the console? Is it what you expected?
1. Click the button to re-render the `App` component. Which component render counts changed? Which stayed the same?
1. Click the buttons to re-render the other components. Before you click, predict how the re-render counts will change. Were you correct?

## Excessive re-renders
It is fair to ask why child components have to re-render when nothing about them has changed. In very large apps, or with some heavyweight components, you may need to prevent them from re-rendering unnecessarily.

React provides a special higher-order component called `React.memo` that does this. The code for this application contains a memoized component, `<ChildThree />`, which you can import and render in the application.

1. If you do not pass any props to `<ChildThree />`, how does it behave differently from the other components?
1. If you pass the `renderCount` prop to `<ChildThree />` from its parent, how does that change its behavior? Why?


