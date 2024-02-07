const player = [34, 56,66,90, 66];
const selected = player.filter(p => p>50);
console.log(selected);

const number = [21, 34, 44, 4, 65, 66 ];
const result =number.filter(n => n % 2 === 1)
console.log(result);

const friends = ['tom', 'jerry', 'oggy', 'ben-ten'];
const output = friends.filter(friend =>friend.length === 3);
console.log(output);