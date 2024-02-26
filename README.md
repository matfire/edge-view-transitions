# Edge View Transitions

![NPM Version](https://img.shields.io/npm/v/%40matfire%2Fedge-view-transitions)
![GitHub Release](https://img.shields.io/github/v/release/matfire/edge-view-transitions)

utilities to handle view transitions when using [edge.js](https://edgejs.dev/)

## Installation

## Usage

- register the plugin with your edge instance

```js
import edge from "edge.js";
import { edgeViewTransitions } from "@matfire/edge-view-transitions";

edge.use(edgeViewTransitions);
```

### Transition Name

To add a `view-transition-name` css property to the element, you can add `{{transitionName('name_of_the_transition')}}` to an element's `style` property. For instance:

```html
<p style="{{transitionName('para')}}">this is a paragraph</p>
```

renders to:

```html
<p style="view-transition-name: para;">this is a paragraph</p>
```

### Transition Group

Useful when you need to write styles for view transitions, it will be replaced with the right ::view-transition selector. You can use it like this: `{{transitionGroup('name_of_element', 'old|new')}}`

These lines:
```html
{{transitionGroup()}}
{{transitionGroup('para')}}
{{transitionGroup('para', 'new')}}
```

renders to:
```css
::view-transition-old(root)
::view-transition-old(para)
::view-transition-new(para)
```