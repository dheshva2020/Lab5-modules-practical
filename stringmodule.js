// stringModule.js
export function toUpperCase(str) { return str.toUpperCase(); }    

export function toLowerCase(str) { return str.toLowerCase(); }
export function capitalize(str) { 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
}
export function reverseString(str) { 
    return str.split('').reverse().join(''); 
}
