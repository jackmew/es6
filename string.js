// reference: http://es6.ruanyifeng.com/?search=%E7%AE%AD%E9%A0%AD&x=0&y=0#docs/string#字符的-Unicode-表示法
// 阮一峰
//

// for of
for(let codePoint of 'foo') {
    console.log(codePoint);
}
// includes(), startsWith(), endsWith() => 第二個參數，表示開始搜尋的位置
var s = 'Hello World!';
console.log(s.startsWith('Hello'));
console.log(s.endsWith('!'));
console.log(s.includes('W', 6));

// template string: 不管打 \n 或者Enter斷行，顯示的字串都會是new line
// template string symbol: ``
var str = `In JavaScript '\n' is a line-feed.`;
console.log(str);

var str2 = `In JavaScript this is
not legal.`;
console.log(str2);

console.log(`string text line 1
string text line 2`);

// variables:${} : 在括號中的，就會執行JavaScript: 可以 call function，可以計算
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// show ``
var greeting = `\`Yo\` World!`;
console.log(greeting);

/*
所有的空格和縮排 都會被保留
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());
*/
// 模板字符串${} 還可以調用function
function fn() {
    return "Hello World";
}
console.log(`foo ${fn()} bar`);

// 標籤模板(tagged template)
var a = 5 ;
var b = 10 ;
// tag`Hello ${a + b} world ${a * b}`;
tag(['Hello ', ' world', ''], 15, 50);
