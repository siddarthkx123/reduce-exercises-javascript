/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    
   
    

   
    namesExtracted = arr.reduce(function(total, val){
    total.push(val[key])
    return total

    }, [])
   

    return namesExtracted;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {

   str = str.toLowerCase();
   strtocompareagianst = "aeiou";
   vowelToCount = {};
   countofindividualvowel = 0
   vowel = ""
   for(let j = 0 ; j < str.length; j++){
    vowel = strtocompareagianst[j];

   for(let i =0 ; i < str.length; i++){
    if(str[i] === vowel){
        countofindividualvowel += 1;

    }

   }
   if(countofindividualvowel != 0){
   vowelToCount[vowel] = countofindividualvowel;
   }
   countofindividualvowel = 0;
 




}
console.log(vowelToCount);
return vowelToCount;




}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    for(let i = 0 ; i < arr.length; i++){

        arr[i][key] = value;
    }

    return arr;
    
}



/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    let partition1 = []
    let partition2 = []
    let combinedArray = [];

    for(let i = 0 ; i < arr.length; i++){
        if(callback(arr[i]) === true){
            partition1.push(arr[i]);

        }

        else{
           partition2.push(arr[i]);
        }
    }

combinedArray.push(partition1);
combinedArray.push(partition2);
console.log("combined array");
console.log(combinedArray);
return combinedArray;
}
