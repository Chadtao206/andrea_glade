console.log("Hello World");

window.addEventListener('load', function(){
    document.querySelector('h1').textContent = 'BLAH BLAH BLAH'
    var h1 = document.querySelector('h1');
})

const arr = [1,18,21, 3,4,2,33,183,235,23,12, 23,232,1223,121,11];
const arr2 = ['hello', 'my', 'name', 'is', 'andreaglade', 'nice', 'to', 'meet', 'you']

const sorted = arr.sort((a,b)=> a < b ? -1 : a > b ? 1 : 0);
const sortedstr = arr2.sort((a,b)=> a.length < b.length ? -1 : a.length > b.length ? 1 : 0).map(a=> 
    a.split('').reverse().join(''));
console.log(sorted)
console.log(sortedstr)
// '1 2 3 4'
