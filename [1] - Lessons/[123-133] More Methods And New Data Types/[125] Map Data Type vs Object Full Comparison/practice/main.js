let m = new Map();
m.set('10','a')
m.set({a:1,b:2}, 'obj')
m.set(true, 'boolean')
console.log(m.get(true))
console.log(m.get({a:1,b:2}))
console.log(m)