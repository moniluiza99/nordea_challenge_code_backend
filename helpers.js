/**
 * check if there are 2 sides that are the same
 * @param {number} sideA 
 * @param {number} sideB 
 * @param {number} sideC 
 * @returns {boolean} - determine if there are
 * 2 sides that are the same
 */
function areTwoSidesSame(sideA, sideB, sideC){
    if(sideA === sideB)
        return true
    if(sideA === sideC)
        return true
    if(sideB === sideC)
        return true
    return false;
}

/**
 * This  function tells us if a triangle exist
 * given 3 sides
 * @function
 * @param {number} sideA
 * @param {number} sideB
 * @param {number} sideC
 * @return {boolean}
 * @example
 * doesTriangleExist(1,2,3);
 */

function doesTriangleExist(sideA, sideB, sideC){
    let longSide = sideA;
    let shortSides = [];

    if(longSide<sideB){
        shortSides.push(longSide);
        longSide = sideB;
        
    }else{
        shortSides.push(sideB);
    }

    if(longSide<sideC){
        shortSides.push(longSide);
        longSide = sideC;
        
    }else{
        shortSides.push(sideC);
    }
    return longSide<shortSides[0]+shortSides[1];
}
module.exports = {
    areTwoSidesSame,
    doesTriangleExist
}