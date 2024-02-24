/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer = -1){
  switch(timer){
    case 0 :
      return 'Lasagna is done.';
    case -1:
      return 'You forgot to set the timer.'
    default :
      return 'Not done, please wait.'
    
  }
}

export function preparationTime(layers , time = 2){
  let totalTime= 0;
  for(let index of layers){
    totalTime += time;
  }
  return totalTime
}

export function quantities(arr){
  return {
    noodles: arr.filter(value => value === 'noodles').length * 50,
    sauce: arr.filter(value => value === 'sauce').length *0.2
  }
}

export function addSecretIngredient(arr1 , arr2){
  arr2.push(arr1[arr1.length - 1]);
  console.log(arr2)
  return;
}

export function scaleRecipe(recipe, amounts = 2){
  let newAmounts = amounts/2
  let copy = {...recipe};
  if(newAmounts !== 1){
    for(let key in copy){
      copy[key] = newAmounts * copy[key]
    }
    return copy;
  }
  console.log(recipe)
  return copy;
  
}
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
