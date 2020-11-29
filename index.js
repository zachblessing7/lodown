'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes a value and returns it without any changes to that value. 
 * 
 * @param {*} value: The value to be returned. 
 * 
 * @return {*}: the value to be returned.
 * 
 */

function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: takes a value and returns the data type of the value as a string. 
 * 
 * @param {*} value: the value we seek the data type of.  
 * 
 * @return {*}: the data type of the value parameter passed in as a string. 
 * 
 */
 
 function typeOf (value){
    if(Array.isArray(value)){
        return 'array';
    } else if (value === null){
        return 'null';
    }
    return typeof value;
}
module.exports.typeOf = typeOf;


/**
 * first: takes an array and number and returns the first 'number(s)' in the array. If no array, return an empty array. If the number is not a number, return the first element in the array. 
 * 
 * @param {Array} collection: the collection which to iterate over and return the <number> of elements within this array.
 * @param {number} value: The value that determines how many beginning elements in the <array> to return. 
 * 
 * @return {Array}: Depending on the value in the <number> parameter, return the first <number> of elements in the array. 
 *      If no array is given in the collection, return an empty array. If the number is not a number, return just the first element in the <array> parameter. 
 */
 
 function first (arr, num){
    var newArray = [];
    if(!Array.isArray(arr)){
        return [];
    } 
    
    if (num === undefined || typeof num !== 'number' ){
        return arr[0];
    } else if (num > arr.length) {
       return arr;
    } else {
       for (var i = 0; i < num; i++){
           newArray.push(arr[i]);
    
       }
     
    } return newArray;
     
}
module.exports.first = first;

/**
 * last: takes an array and number and returns the last <number(s)> in the array. If no array, return an empty array. If the number is not a number, return the last element in the array. 
 * 
 * @param {Array} collection: the collection which to iterate over and return the <number> of elements within this array.
 * @param {number} value: The value that determines how many ending elements in the <array> to return. 
 * 
 * @return {Array}: Depending on the value in the <number> parameter, return the last <number(s)> of elements in the array. 
 *      If no array is given in the collection, return an empty array. If the number is not a number, return just the last element in the <array> parameter. 
 */
 
 function last (arr, num){
  var newArray = [];
    if(!Array.isArray(arr)){
        return [];
    } 
    
    if (num === undefined || typeof num !== 'number' ){
        return arr[arr.length - 1];
    } else if (num > arr.length) {
       return arr;
    } else {
       for (var i = arr.length - num; i < arr.length; i++){
           newArray.push(arr[i]);
    
       }
     
    } return newArray;
}
module.exports.last = last;

/**
 * indexOf: Iterates over an <array> and searches for a match to the <value> paramater. If there is a match, return the index of that match. If there is no match, return -1
 * 
 * @param {Array} collection: the collection which to iterate over and return the index of the <value> found inside the <array>
 * @param {value}: The value used to match the elements inside of the given <array>.
 * 
 * @return {number} index value: if the <value> is found withing the given <array> return the index of that <value> within the <array>.
 *      if the <value> is not found inside the given <array>, return -1. 
 */
 
 function indexOf (arr, value){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === value){
           newArray.push(i);
            
        
        }
    }
     if(newArray.length > 0){
       return newArray[0];
   } else {
       return -1;
   }

}
module.exports.indexOf = indexOf;

/**
 * contains: Iterates over an <array> and searches for a match to the <value> paramater. If there is a match, return true. If not, return false.
 * 
 * @param {Array} collection: the collection which to iterate over and return true if the <value> is found inside the <array>
 * @param {value}: The value used to match the elements inside of the given <array>.
 * 
 * @return {boolean}: if the <value> is found withing the given <array> return true. If not, return false. 
 *    
 */
 
 function contains (arr, value){
   var input = indexOf(arr, value);
   return true ? input >= 0 : false;
}
module.exports.contains = contains;

/**
 * unique: Iterates over an <array> and removes dupicate data types. 
 * 
 * @param {Array} collection: the collection which to iterate over and remove duplicates. 
 * 
 * 
 * @return {Array}: returns a new array after removing duplicates from the <array> input/parameter. 
 *    
 */
 
 function unique (arr){
 var newArray = [];
 for (var i = 0; i < arr.length; i++){
     if(contains(newArray, arr[i]) ){
         newArray.push(arr[i]);
    }
  } 
  return newArray;
}
module.exports.unique = unique;

/**
 * filter: iterates over an <array> and calls <function> when an element within the <array> returns true for that <function>. returns a new array of elements that proved true for the called <function>.
 * 
 * @param {Array} collection: the collection which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over the array for elements that return true for the function. 
 * 
 * @return {Array}: returns a new array of elements that returned true for the call <function>.
 *    
 */
 
 function filter (arr, func){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){
            newArray.push(arr[i]);
        }    
    }
    return newArray;
}
module.exports.filter = filter;

/**
 * reject: iterates over an <array> and calls <function> when an element within the <array> returns false for that <function>. returns a new array of elements that proved false for the called <function>.
 * 
 * @param {Array} collection: the collection which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over the array for elements that return false for the function. 
 * 
 * @return {Array}: returns a new array of elements that returned false for the call <function>.
 *    
 */
 
 function reject (arr, func){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if(!func(arr[i], i, arr) === true){
            newArray.push(arr[i]);
        }    
    }
    return newArray;
}
module.exports.reject = reject;

/**
 * partition: iterates over an <array> and calls <function> when an element within the <array> returns something truthy or falsy for that <function>. returns two new arrays within an array. the first array is of elements that proved something truthy for the called <function>.
 *      the second array is of elements that proved something falsy for the called <function>
 * 
 * @param {Array} collection: the collection which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over the array for elements that returns two new arrays with truthy elements in one array and falsy elements in the other array.
 * 
 * @return {Array}: Returns two arrays within an array. The first array will contain elements that returned something truthy when the function is called. 
 *      The second array will contain elements that returned something falsy when the function is called. 
 */
 
 function partition (arr, func){
    
    var output = [[] , []];
    

    for (var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            output[0].push(arr[i]);
        } else {
            output[1].push(arr[i]);
        }
        
    }  
       
        return output;
      
  
    
}
module.exports.partition = partition;

/**
 * map: iterates over a collection and calls the <function> for each element within the collection. 
 *     
 * 
 * @param {Array or Object} collection: the collection which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over each element in the collection. The function's output will fill a new array. 
 * 
 * @return {Array}: returns a new array that contains the output elements after the <function> is called on the elements within the input/parameter collection. 
 *      
 */
 
 function map (coll, func){
  var newArray = [];
    if (Array.isArray(coll)){
        for (var i = 0; i < coll.length; i++){
            newArray.push(func(coll[i], i, coll));
        }
    } else {
        for (var k in coll)
            newArray.push(func(coll[k], k, coll));
    
    }
        
        return newArray;
}
module.exports.map = map;


/**
 * pluck: iterates over an array of objects and returns a new array with the value of the <property> parameter. 
 *     
 * 
 * @param {Array of Objects} collection: the collection which to iterate over and find the values of the given <property> parameter.  
 * @param {property} key: the string given to represent the key in the objects housed in the array. 
 * 
 * @return {Array}: returns a new array that contains the value of the <property> parameter within each object within the array of objects. 
 *      
 */
 
 function pluck (arrObj, prop){
    var newArray = [];
    for(var i = 0; i < arrObj.length; i++){
        newArray.push(arrObj[i][prop]);
    }
    return newArray;
}
module.exports.pluck = pluck;

/**
 * every: tests if the collection is an array or object then iterates over a collection and tests the elements in the collection using a given function. 
 *     
 * 
 * @param {Array or Object} collection: the collection which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over each element in the collection. The function's output will return true or false.  
 * 
 * @return {boolean}: Returns true if every element in the collection returns true for the called function. returns false if just one element in the collection returns false for the called function. 
 *      
 */
 
 function every (coll, func){
 var results = [];
 var falsy = [false, null, undefined, NaN, 0, -0, ""];
  
    if (typeof func !== "function"){
       let counter = 0;
       for(let i = 0; i < coll.length; i++){
           for(let j = 0; j < coll.length; j++){
               if(coll[i] === falsy[j]){            
                   counter++;
               }
           }
        } if(counter > 1){                        
            return false;
            } else {
                return true;
            }
   } else {
       if(Array.isArray(coll)){
           for (var i = 0; i < coll.length; i++){
               results[i] = func(coll[i], i, coll); 
            }
        } else {
            let k =0;
            for(var prop in coll){
                results[k] = func(coll[prop], prop, coll); 
                k++;
            }
        }
       if(results.length > 0){
           if (contains(results, false)){                    
               results = false;
           } else {
               results = true;
           }
       } else {
           results = false;
       }
   }
    return results;
} 
module.exports.every = every;

/**
 * some: tests if the collection is an array or object then iterates over a collection and tests the elements in the collection using a given function. 
 *     
 * 
 * @param {Array or Object} collection: the collection which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over each element in the collection. The function's output will return true or false.  
 * 
 * @return {boolean}: Returns true if at least one element in the collection returns true for the called function. returns false if every element in the collection returns false for the called function. 
 *      
 */
 
function some (coll, func){
var results = [];
var falsy = [false, null, undefined, NaN, 0, -0, ""];
   
    if (typeof func !== "function"){
       let counter = 0;
       for(let i = 0; i < coll.length; i++){
           for(let j = 0; j < coll.length; j++){
               if(coll[i] === !falsy[j]){           
                   counter++;
               }
           }
        } if(counter > 1){                         
            return true;
            } else {
                return false;
            }
   } else {
       if(Array.isArray(coll)){
           for (var i = 0; i < coll.length; i++){
               results[i] = func(coll[i], i, coll); 
            }
        } else {
            let k =0;
            for(var prop in coll){
                results[k] = func(coll[prop], prop, coll); 
                k++;
            }
        }
       if(results.length > 0){
           if (contains(results, true)){                    
               results = true;
           } else {
               results = false;
           }
       } else {
           results = true;
       }
   }
    return results;
}
module.exports.some = some;


/**
 * reduce: iterates over an array and calls the function for every element in the array starting with the seed. If no seed is given, use the first element within the array as the initial value. 
 *     
 * 
 * @param {Array}: the array which to iterate over and call the <function> on.  
 * @param {function} action: function used to iterate over each element in the array.
 * @param {value} seed: a value given/or not given that represents the "previous result" of the function. also known as the initial value. 
 * 
 * @return {value}: Returns the return value of the final function call after iterating over the entire array. 
 *      
 */
 
 function reduce (arr, action, seed){
  
  // we have two routes
  
  // if the seed/initial value is given
  if(seed !== undefined){     //if seed value passed, create a new var called result and initialize it to the seed value
    let result = seed;
                                //loop through the array starting at index 0 with the each function
    each(arr, function(element, index, array){ //assign the result of passing each element to the action function to the result var
         result = action(result, element, index);
    });
    
    
    return result; //return result to the next iteration
  } else {   //if the seed/initial value is NOT given
      
      //create new result variable and initialize it to the first element in the input array
       let result = arr[0];
      
      //with a loop for (let i = 1)
      //loop through the array starting at index 0 with the each function
      each(arr, function(element, index, array){
          if(index !== 0){
              result = action(result, element, index); //assign the result of passing each element to the action function to the result variable. 
          }
      });
      return result;
      
      
      
  }
 }
module.exports.reduce = reduce;

/**
 * extend: Takes the input objects and copies all properties to the first input object. 
 *     
 * 
 * @param {Object} collection: the collection that will take in the newly copied properties  
 * @param {Object} collection: the collection(s) that will be copied from and moved to the first input object. 
 * 
 * @return {Object}: Returns the updated Object that has all the other object's properties copied. 
 *      
 */
 
  function extend (...obj){
  return Object.assign(...obj);
  
}
module.exports.extend = extend;