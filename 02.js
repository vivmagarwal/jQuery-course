$(function () {
// select an element by it ID
// let gp1 = $('#gp1');
// console.log(gp1);

// select an element by its class
// let mainMenu = $('.main-menu');
// console.log(mainMenu);

// select and element by its tag
// let divs = $('div');
// console.log(divs);    

// selecting by attributes
// let fooBar = $('[foo=bar]');
// console.log(fooBar);  
  
// contains 
// let a1 = $('a[href*=like]');
// console.log(a1);

// ends with
// let a2 = $('a[href$=pdf]');
// console.log(a2);

// starts with
// let a3 = $('a[href^="mailto:"]')
// console.log(a3);

// combinations
// let a4 = $('a[href^="http"][href*="henry"]') 
// console.log(a4);
})

$(function () {
//   let gp1_parents = $('#gp1 li');
//   console.log(gp1_parents);

//   let gp1_parent1 = $('#gp1 li:eq(0)');
//   console.log(gp1_parent1);

//   let gp1_parent_odds = $('#gp1 li:odd');
//   console.log(gp1_parent_odds);

//   let gp1_parent_evens = $('#gp1 li:even');
//   console.log(gp1_parent_evens);

//   let gp1_parent3 = $('#gp1 li:contains(Parent-3)');
//   console.log(gp1_parent3);
  
  let checkboxes = $('input[type="checkbox"]');
  console.log(checkboxes);

  let checkedInput = $('input[type="checkbox"]:checked');
  console.log(checkedInput);
  
  let disabledInput = $('input[type="checkbox"]:disabled');
  console.log(disabledInput);
  
})

