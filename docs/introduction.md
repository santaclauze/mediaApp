[![build status](https://git.kopaxgroup.com/kopaxgroup/openldap-v2/badges/v2.0.3/build.svg)](https://git.kopaxgroup.com/kopaxgroup/openldap-v2/commits/v2.0.3)
[![coverage report](https://git.kopaxgroup.com/kopaxgroup/openldap-v2/badges/v2.0.3/coverage.svg)](https://git.kopaxgroup.com/kopaxgroup/openldap-v2/commits/v2.0.3)

![package version](https://img.shields.io/badge/version-2.0.3-green.svg)
![node version](https://img.shields.io/badge/node-v11.9.0-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm-6.5.0-red.svg)
![pr welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![publishing](https://img.shields.io/badge/publishing-private-red.svg)

![rollup-umd banner](docs/banner-sm.png)

Create [UMD](https://github.com/umdjs/umd)/[CJS](http://requirejs.org/docs/commonjs.html)/[ES6](http://exploringjs.com/es6/ch_modules.html) packages in a few minutes.

@yeutech/rollup-umd is the adaptive module boilerplate used at YeuTech.

It provide the following features:

- **@yeutech/rollup-umd command line interface**

  - It contains a collection of CLI packages to transform, maintain and automate repetitive tasks.
  - Anyone can create a rollup with CLIs, just use the **cli** declination.
 
- **JS packaging**

  - Write in [ecmascript 6](http://exploringjs.com/es6/ch_modules.html) standards, Babel 7 is pre configured.
  - All modules have preconfigured distributed for **CJS**, **ES module**, and legacy **UMD**.
  - [Unit testing](https://facebook.github.io/jest/) with code coverage reports.
  - Improved dependency management and allow the maximum semver compatibility for all your users.
  
- **Documentation**

  - Generated website deployed with Gitlab page or Github page automatically.
  - Capability to generate documentation from:
    - your React UI components thanks to [styleguide](https://react-styleguidist.js.org/).
    - javascript functions using [documentationjs](https://github.com/documentationjs/documentation)
  - In addition to unit test, highlight code can be rendered and edited giving a complete sandbox like if you where in a real React app.
  - Layouts and themes made with [bootrap-styled](https://bootstrap-styled.github.io/bootstrap-styled).
  - Themes and layouts can be shared as describe by the [bootrap-styled](https://bootstrap-styled.github.io/) community.
  - [@rollup-umd/documentation](https://rollup-umd.github.io/documentation) can be customized without limits and across multiple projects.
  
- **Continuous integration**

  - OpenSource is our priority, the CI can do automatic release to GitHub and public registry, it include:
    - rules of publishing can be configured for private, protected and public (open source).
    - an automated pipeline that configure and transfer your project from GitLab to GitHub.
  - @yeutech/rollup-umd is using team comment with commitizen.
  - Changelog and release are automatic thanks to [semantic-release](http://semantic-release.gitbooks.io/semantic-release).
  - The code coverage is published on a centralized code monitoring tool [sonarqube](https://sonar.kopaxgroup.com) or [sonarcloud](https://sonarcloud.io/) (public)
  - Releasing is as simple as merging branch `dev` into `master`.   
  
- **Declination**

  - Because a boilerplate is not enough, you can create as much declination as you need.
  - We have created many declinations: no-js, static, react, styled, bootstrap-styled...
  - Write declination in bash file starting any @yeutech/rollup-umd or declination version.
  - Declinations get automatic dependencies update and a new release is made every time @yeutech/rollup-umd get released.
  - Declination scripts support blocks to run in parallel
  - Customization of declinations can be done per company basis.
