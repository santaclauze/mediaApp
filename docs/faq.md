- What is rollup-umd ? 

> It is the boilerplate for all JS project aimed to be packaged. 
It is made on top of rollup because the distribution can work everywhere.
If you are a contributor, we strongly suggest you to read [rollup-umd documentation](https://dev-tools.yeutech.com/rollup-umd/).  

- What is @yeutech/rollup-umd-scripts ? 

> It is a package containing CLIs for creating and maintaining all rollup-umd projects.  
If you are a contributor, we strongly suggest you to read [rollup-umd-scripts documentation](https://dev-tools.yeutech.com/rollup-umd-scripts/).  

- What is @rollup-umd/documentation ? 

> It is our react-styleguide configuration, it also provide UI components for the documentation and additional feature like custom layout, loaders favicons, ...
If you are a contributor, we strongly suggest you to read [their documentation](https://rollup-umd.github.io/documentation/).  

- What are external dependencies?:

> External dependencies are dependencies used by your module that you don't want to distribute with the module.
Users of your module will have to install the dependency their self in addition of your module in order for your module to work in their project.
This means they also need to appear as a `peerDependency` in your `package.json` and as a `devDependency` for `developers` of the module.
This configuration is automatically handled if you use our command line utilities.

- How can I use ES6 in browsers without @yeutech/rollup-umd, for example within a jest unit test?

> you can use `babel-polyfill` in the first line of your javascript file:

```js static  
import 'babel-polyfill';
```

> To enable ES features in older browsers, you **MUST** have in your `package.json`

```json
{
  "browserslist": ["ie >= 9", "last 2 versions"]
}
```
