var arr = [10, 11, 12, 13, 14];

function print(b, ...arr) {
    console.log(arr)
}

print(8, 9, 10, 11, 12);

/*
TODO: OUTPUT: [9, 10, 11, 12]
Because,
    - The function print is defined with a regular parameter b and a rest parameter ...arr
    - When I call print(8, 9, 10, 11, 12),
        - The first argument `8` goes into `b` &
        - The rest of the arguments [9, 10, 11, 12] are collected into the local parameter arr.
    - Even though there’s a `global variable` named `arr` 
    - it gets shadowed by the function’s parameter
    - `In JavaScript, parameter names always take precedence over outer variables within the function scope.`

    - That's why,
        - console.log(arr) prints the rest parameter array [9, 10, 11, 12]
        - not the global [10, 11, 12, 13, 14].
 */

/*
    Precise:
    - When a variable or parameter inside a smaller scope has the same name as a variable in an outer scope, the inner one takes priority. The outer one becomes hidden (invisible) inside that scope.
*/


function print(b, ...a) {
    console.log(arr)
    console.log(b)
    console.log(a)
}

print(8, 9, 10, 11, 12);

/*
    Here the rest parameter name is different 
    so the `Global scope arr` will not be invisible 
    OUTPUT: 
        - console.log(arr) => [10, 11, 12, 13, 14]
        - console.log(b) => 8
        - console.log(a) => [9, 10, 11, 12]
 */
