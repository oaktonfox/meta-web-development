const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
const fruits3 = fruits1;
fruits1.push('bananas');
console.log(fruits1, "and", fruits3);
fruits1.pop();
console.log(fruits1, "and", fruits3);