# Notes

## localStorage

**target & currentTarget** => define targeted element

```javascript
// undefined the element
console.log(e); // value=> {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// defined the element due to you used target or currentTarget
console.log(e.target); // value =>  <li data-color="green"></li>
console.log(e.currentTarget); // value =>  <li data-color="green"></li>
```
