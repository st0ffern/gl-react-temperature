# gl-react-temperature ![](https://img.shields.io/npm/v/gl-react-temperature.svg) ![](https://img.shields.io/badge/gl--react->= 2.1-05F561.svg) ![](https://img.shields.io/badge/gl--react-dom%20%7C%20native-f90.svg)

## Props

- `children` **(required)**: the content to negate.
- `temp`: optionally the intensity of the effect. 0 is disabled, this input scales from 1000 to 40000 kelvin.

## Usage Examples

```js
var Temperature = require("gl-react-temperature").Temperature;
// or
import {Temperature} from "gl-react-temperature";
```

```html
<Temperature>...</Temperature>
```

```html
<Temperature temp={1500}>...</Temperature>
```
