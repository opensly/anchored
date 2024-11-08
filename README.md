# Anchored.js
Anchored.js is a lightweight JavaScript library for transforming plain URLs in text into clickable links. The function uses a regex-based approach to identify URLs, creating a DocumentFragment containing both links and plain text, suitable for DOM manipulation.

## Features
- Transforms plain URLs (e.g., https://example.com) into clickable links.
- Supports common URL formats (http://, https://, www, etc.).
- Can be used in various environments: browser, ES6 modules, and Node.js.

## Usage Guide

### In a browser (Global Script)
Include the `anchored.js` script in an HTML file:

```
<script src="path/to/anchored.js"></script>
<script>
  const text = "Check this out: https://example.com and also http://test.com.";
  const result = anchored(text);
  document.body.appendChild(result);
</script>
```

### In a Module (ES6/JavaScript Module)

```
import anchored from './path/to/anchored.js';

const text = "Visit https://example.com and http://test.com!";
const result = anchored(text);
document.body.appendChild(result);
```

### In a Node.js (CommonJS Module)

```
const anchored = require('./path/to/anchored.js');

const text = "Find more at https://example.com!";
const result = anchored(text);
document.body.appendChild(result);
```

### In a Webpack or Babel Environment (ES6 Module)
After installing the module using Webpack/Babel:

```
import anchored from './path/to/anchored.js';

const text = "Here is https://example.com, check it out!";
const result = anchored(text);
document.getElementById("content").appendChild(result);
```

## Support
Your support inspires & encourage us more. If you are interested to make a donation to us, please click the below PayPal button.

[![PayPal.me](https://img.shields.io/badge/paypal-donate-119fde.svg)](https://www.paypal.me/LakshmikanthV)

## License
This project is licensed under the MIT License.
