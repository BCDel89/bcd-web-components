![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![npm][npm]][npm-url]
[![size][size]][size-url]

# BCDel89 Web Components

This is a web component library from BCDel89 that includes the following web-components:

- bcd-rating
- bcd-rating-circle


## Installation


```html
<script type="module" src="https://unpkg.com/bcd-web-components@latest/dist/bcd-web-components/bcd-web-components.esm.js"></script>
```

## Usage

```html
<script type="module" src="https://unpkg.com/bcd-web-components@latest/dist/bcd-web-components/bcd-web-components.esm.js"></script>
<bcd-rating rating="3" max="5"></bcd-rating>
```

## Customization
Web components can be styled using the following CSS variables:

```CSS
bcd-rating {
    --bcd-rating-margin-left: 2px;
    --bcd-rating-border-color: #38bbe0;
    --bcd-rating-background-fill-color: black;
    --bcd-rating-background-empty-color: white;
    --bcd-rating-hover-border-color: #30a0c0;
    --bcd-rating-size: 15px;
    --bcd-rating-border-radius: 50%;
    --bcd-rating-border-width: 2px;
    --bcd-rating-border-type: solid;
}

bcd-rating-circle {
    --bcd-rating-circle-fill-color: #38bbe0;
    --bcd-rating-circle-empty-color: rgb(219, 219, 219);
    --bcd-rating-circle-bg-color: white;
}
```

## Demo

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/bcd-web-components@latest/dist/bcd-web-components/bcd-web-components.esm.js"></script>

    <div>
        <bcd-rating rating="3" max="5"></bcd-rating>
    </div>
    <div>
        <bcd-rating rating="8" max="10"></bcd-rating>
    </div>
    <div>
        <bcd-rating rating="6" max="10"></bcd-rating>
    </div>
    <div>
        <bcd-rating rating="5" max="10"></bcd-rating>
    </div>
    <div>
        <bcd-rating rating="1" max="5"></bcd-rating>
    </div>

    <br> <br> <br>

    <div>
        <bcd-rating-circle rating="3" max="5" size="xl" fraction="true"></bcd-rating-circle>
        <bcd-rating-circle rating="8" max="10" size="lg" fraction="false"></bcd-rating-circle>
        <bcd-rating-circle rating="6" max="10" size="md" fraction="true"></bcd-rating-circle>
        <bcd-rating-circle rating="5" max="10" size="sm"></bcd-rating-circle>
        <bcd-rating-circle rating="1" max="5" size="xs" fraction="true"></bcd-rating-circle>
    </div>

  </template>
</custom-element-demo>
```
-->
```html
<div>
    <bcd-rating rating="3" max="5"></bcd-rating>
</div>
<div>
    <bcd-rating rating="8" max="10"></bcd-rating>
</div>
<div>
    <bcd-rating rating="6" max="10"></bcd-rating>
</div>
<div>
    <bcd-rating rating="5" max="10"></bcd-rating>
</div>
<div>
    <bcd-rating rating="1" max="5"></bcd-rating>
</div>

<br> <br> <br>

<div>
    <bcd-rating-circle rating="3" max="5" size="xl" fraction="true"></bcd-rating-circle>
    <bcd-rating-circle rating="8" max="10" size="lg" fraction="false"></bcd-rating-circle>
    <bcd-rating-circle rating="6" max="10" size="md" fraction="true"></bcd-rating-circle>
    <bcd-rating-circle rating="5" max="10" size="sm"></bcd-rating-circle>
    <bcd-rating-circle rating="1" max="5" size="xs" fraction="true"></bcd-rating-circle>
</div>
```

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/copy-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/copy-webpack-plugin
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=bcd-web-components
[size-url]: https://packagephobia.now.sh/result?p=bcd-web-components
