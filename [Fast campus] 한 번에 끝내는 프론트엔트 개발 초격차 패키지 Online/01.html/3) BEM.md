## BEM

Block Element Modifier  
HTML 클래스 속성의 작명법

- 요소\_\_일부분: Underscore(Lodash) 기호로 요소의 일부분을 표시
- 요소--상태: Hyphen(Dash) 기호로 요소의 상태를 표시

```html
<div class="container">
  <div class="name"></div>
  <div class="item">
    <div class="name"></div>
  </div>
</div>

<div class="btn primary"></div>
<div class="btn success"></div>
<div class="btn error"></div>
```

⬇️

```html
<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name"></div>
  </div>
</div>

<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```
