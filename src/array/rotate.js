export function rotateArray(array, k) {
    let len = array.length;
    // normalize the k between 0 to array.length
    let nk =  ((k % len) + len) % len;
    array = [...array];
    // remove the rotation part
    const splice = array.splice(0, nk); //... for make a clone;
    // add reversed version of what left
    return array.concat(splice);
}