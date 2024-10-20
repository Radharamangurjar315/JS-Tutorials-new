// const arr1 = ['One', 'Two', 'Three'];      // Array of strings
// console.log(arr1[2]);

//creating new array using Array() constructor

// const arr2 = Array(4);    //EMpty Array of length 4
// console.log(arr2);
// console.log(0 in arr2);    //false - no element at index 0

// const arr3 = Array("BMW", "Audi", "Mercedes");    //Array of strings using Array() constructor
// console.log(arr3);
// console.log(0 in arr3);    //true - element at index 0

// const arr4 = Array(4); 
// console.log(arr4);

// ********************************

// Static Methods of Array
// Array.from() method

// const newArray = Array.from("Hello");
// console.log(newArray);   //["H", "e", "l", "l", "o"]

// const arr5 = Array.from(["One", "Two", "Three"] , (x) => x + 1);
// console.log(arr5);   //["One1", "Two1", "Three1"]

// deletion of elements from array using pop() method

// const arr6 = Array("BMW", "Audi", "Mercedes"); 
// arr6.pop();  //deletes last element  
// console.log(arr6);   //["BMW", "Audi"]

// const arr7 = Array.from({ length: 5 }, (v, i) => i);   //generates an array of length 5 with values 0, 1, 2, 3, 4
// console.log(arr7); // v is value, i is index

// const range = (start, stop, step) =>
//     Array.from(
//       { length: Math.ceil((stop - start) / step) },
//       (_, i) => start + i * step,
//     );
// console.log(range(0, 150, 5));  

// fill method
// const arr = new Array(3);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
// }
// console.log(arr);  //[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]


//**********************************
