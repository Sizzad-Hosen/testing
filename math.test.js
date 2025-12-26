import {it,expect} from 'vitest';
import {add} from './math.js';


it('should return the correct sum of the numbers',()=>{
 
// Arrange 
    const numbers = [1,2,3,4,5]
    const expectedResult = numbers.reduce((acc,cur)=>acc + cur)
   
// Actions
    const result = add([1,2,3,4,5]);

// Assertion
    expect (result).toBe(15);

})




it('should return the correct results',()=>{
 
// Arrange 
    const eualOrNot = false;

// Actions
    const result =false;
    
// Assertion
    expect (result).toBe(false);

})

it('it should throw an error if no arguments are passed',()=>{
 
const resultFN = ()=>{
    add();
}    
// Assertion
    expect (resultFN).toThrow()

}) 