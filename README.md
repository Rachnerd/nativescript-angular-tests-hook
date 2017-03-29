# NativeScript tests hook
Workaround for running unit tests located in source code (according to Angular style guide)

Currently NativeScript runs spec files located in app/tests. This hook copies all source code (in app) to
a .tmp folder inside app/tests, so NativeScript can run unit tests that follow the [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

### Example
~~~
app
|-- feature
     |- feature.component.html
     |- feature.component.ts
     |- feature.component.spec.ts
~~~

## Installation

### Npm

```bash
npm install nativescript-tests-hook --save-dev
```

## Usage
Unfortunately the test runner fetches the files before the hook is finished.
To get around this you'll have to prepare before executing the test command.
```bash
tns prepare [platform] && tns test [platform]
```