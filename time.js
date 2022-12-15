// date.js
const moment = require('moment')

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
// console.log(moment().format("MMM Do YY"));
// console.log(moment().format('YYYY [escaped] YYYY'));
// console.log(moment().format());
// console.log(moment(1389878466730).toString());
// console.log(moment([2020, 1, 1]).fromNow());

const dateA = moment([2022, 1, 1])
const dateB = moment([2022, 2, 1])
const diff = dateB.diff(dateA, 'days')
console.log('difference', diff, 'days') 

// const dateC = moment([2022, 2, 5])
// const dateD = moment([2022, 2, 1])
// const diff = dateD.diff(dateC, 'days')
// console.log('difference', diff, 'days') 