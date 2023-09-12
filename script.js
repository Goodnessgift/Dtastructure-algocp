    //    PROBLEM 1
function findDistinctSum(set1, set2) {
    let sum = 0;
    
    for (let element of set1) {
        if (!set2.includes(element)) {
            sum += element;
        }
    }

    for (let element of set2) {
        if (!set1.includes(element)) {
            sum += element;
        }
    }

    return sum;
}

// Example usage
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

let result = findDistinctSum(set1, set2);
console.log(result); // Output: 13


    //   PROBLEM 2
//  Algorithm 1: Using Procedure for Dot Product
   // Procedure for calculating dot product
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Algorithm for determining orthogonality using procedure
function determine_orthogonality_with_procedure(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        let v1 = vectors[i][0];
        let v2 = vectors[i][1];
        let ps = dot_product(v1, v2);

        if (ps === 0) {
            console.log(`Vectors v${i+1} and v${i+2} are orthogonal`);
        } else {
            console.log(`Vectors v${i+1} and v${i+2} are not orthogonal`);
        }
    }
}

// Example usage
let v3 = [
    [[3, 1, 7, 9], [2, 4, 1, 9, 3]],
    [[1, 0, 0], [0, 1, 0]],
    [[1, 2, 3], [4, 5, 6]]
];

determine_orthogonality_with_procedure(v3);


// Algorithm 2: Using Function for Dot Product
// Function for calculating dot product
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Algorithm for determining orthogonality using function
function determine_orthogonality_with_function(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        let v1 = vectors[i][0];
        let v2 = vectors[i][1];
        let ps = dot_product(v1, v2);

        if (ps === 0) {
            console.log(`Vectors v${i+1} and v${i+2} are orthogonal`);
        } else {
            console.log(`Vectors v${i+1} and v${i+2} are not orthogonal`);
        }
    }
}

// Example usage
let v4 = [
    [[3, 1, 7, 9], [2, 4, 1, 9, 3]],
    [[1, 0, 0], [0, 1, 0]],
    [[1, 2, 3], [4, 5, 6]]
];

determine_orthogonality_with_function(v4);


// Explanation:

// 1. In both algorithms, there's a dot_product function that calculates the dot product of two vectors.

// 2.  In Algorithm 1, we have a procedure determine_orthogonality_with_procedure that iterates through pairs of vectors, calculates their dot product using the dot_product procedure, and checks if it's zero to determine orthogonality.

// 3. In Algorithm 2, the procedure is replaced with a function determine_orthogonality_with_function, and the dot_product function now returns the result. The rest of the algorithm remains the same.