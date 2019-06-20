
## v-radio-checkbox
An vue radio/checkbox components

## Demo
[Live Demo](https://webharry.github.io/v-radio-checkbox/)

## Installation：
```shell
npm install --save-dev v-radio-checkbox
```

## How to use
### 1、To include this project you need to require the module by using CommonJS syntax or ES6 Modules Syntax (recommended).For example，in main.js file:
```js
import vRadio from 'v-radiio-checkbox'
import vCheckbox from 'v-radiio-checkbox'

Vue.use(vRadio)
Vue.use(vCheckbox)
```

### 2、In the .vue file to use：
```html
<template>
    <div>
        <vRadio id="myradio" name="myradio" value="1">
            I'm a robot
        </vRadio>
        <vRadio id="myradio2" name="myradio2" value="0">
            I'm not a robot
        </vRadio>
    </div>
</template>
```
