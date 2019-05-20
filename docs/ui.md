If you are willing to render JSX, **keep in mind** that you need at least the **react declination**. 

Use optional positional argument to create a module using it's most recent declination:

```bash
$ npx @yeutech/rollup-umd-scripts <name> react
```

All UI components must be written in `components/**/*.js` so they will have auto generated documentation.

All react component can get their documentation by reading `propTypes` and `defaultProps` and using styleguide convention.

> Advice: Use the documentation like if it was your application and use it as your browser sandbox for writing all you react UI components.
This will prevent mistake from the beginning, so concern are fixed, separated and correctly implemented and documented before the first integration.

Read [documenting components](https://react-styleguidist.js.org/docs/documenting.html) and [configuration](https://react-styleguidist.js.org/docs/configuration.html)

```jsx harmony
const HelloWorld = (props) => <div>Hello {props.name}!</div>;
<div>
  <HelloWorld name="world" />
  <div>The code snippet bellow support React and can be edited in live. It is written in our documentation within a markdown file.</div>
</div>
```
