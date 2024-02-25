# Edge View Transitions

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
