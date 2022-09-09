// Write a JavaScript file with at least 5 Date methods and 1-2 sentences 
// reflection. Hint: Use console.log function for output
const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);

const birthday = new Date('August 19, 1975 23:15:30');

const date3 = birthday.getDate();

console.log(date3);

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getMonth()); // (January gives 0)

const yearLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());