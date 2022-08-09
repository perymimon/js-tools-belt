import {rotateArray} from "./rotate.js";

describe('Tests for rotate(Array)', function () {
    test('rotate with k positive less then array.length', function () {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const result = rotateArray(array, k);
        expect(result).toMatchObject([4, 5, 6, 7, 1, 2, 3]);
    })
    test('rotate with k negative less then array.length', function () {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const k = -3;
        const result = rotateArray(array, k);
        ;
        expect(result).toMatchObject([5,6,7,1,2,3,4]);
    })
    
    test('rotate with k positive big then array.length', function () {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const k = 10;
        const result = rotateArray(array, k);
        ;
        expect(result).toMatchObject([4, 5, 6, 7, 1, 2, 3]);
    })
  
    test('rotate with k negative big then array.length', function () {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const k = -10;
        const result = rotateArray(array, k);
        ;
        expect(result).toMatchObject([5,6,7,1,2,3,4]);
    })
})
