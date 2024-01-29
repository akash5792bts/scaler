const self = {
	// let num = 10;
	// countFactors = 3 i.e 1,2,5
	// 10/1 === 0, // 10/2 === 0, 10/5 === 0
	countFactors: (num) => {
		let count = 0;
		for(let i = 0; i * i <= num; i++) {
			count += i * i === num ? 1 : num % i  === 0 ? 2 : 0;
		}
		return count;
	},
	// Exact count of factors is 2 
	isPrime: (num) => {
		return self.countFactors(num) === 2 ? 1 : 0;
	},
	// Square root of number 
	isPerfectSquare: (num) => {
		for(let i = 0; i * i <= num; i++) {
			if(i*i === num) return i;
		}
		return -1;
	},
	// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
	isPerfectNumber: (num) => {
	    let sum = 0;
        for(let i = 0; i <= Math.floor(num/2); i++) {
            if(num % i === 0) {
                sum += `${i}`;
            }
        }

        return sum;
	},
	// Easy Solution brute force
	countPrimes: (num) => {
        if(num <= 2) return 0;
		let count = 0;
		for(let i = 0; i <= num; i++) {
			if(self.isPrime(i)) {
			    count += 1;
			}
		}
		return count;
	},
	// Count the number of elements that have at least 1 elements greater than itself.
	countElements: () => {
        let n = arr.length;
        let max = -Infinity;
        maxCount = 0;
        for(let i = 0; i < n; i++) {
            if(max <= arr[i]) {
                maxCount = max === arr[i] ? maxCount + 1 : 1;
                max = arr[i];
            } 
        }

        return n-maxCount;
    },
    // Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.
    goodPair: (arr, target) => {
        let n = arr.length;
        let i = 0;
        let j = i+1;
        for(let i = 0; i < n-1; i++) {
            for(let j = i+1; j < n; j++) {
                if(arr[i] + arr[j] === target) {
                    return 1;
                }
            }
        }
        return 0;
	},
	swap: (i, j, arr) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    },
    // Given an array A of N integers and also given two integers B and C. Reverse the elements of the array A within the given inclusive range [B, C].
	reverseRange: (arr, startIndex, endIndex) => {
        const len = endIndex - startIndex;

        if (len === 0) return arr;

        let i = startIndex;
        let j = endIndex;
        
        while (i < j) {
            self.swap(i, j, arr);
            i++;
            j--;
        }

        return arr;
    },
    // You are required to return another array which is the reversed form of the input array.
    reverse: (arr) => {
        const n = arr.length;

        let i = 0;
        let j = n-1;
        
        self.reverseRange(arr, i, j)

        return arr;
    },

    // left rotate -> last element to first element
    leftRotate: (arr, k) => {
    	const n = arr.length;

        let i = 0;
        let j = n-1;
        // Entire array
    	self.reverseRange(arr, 0, n-1);
    	// Partial First Part
    	self.reverseRange(arr, 0, k-1);
    	// Partial Second Part
    	self.reverseRange(arr, k, n-1);

    	return arr;
    },
    // Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.
    sumOfMinMax : function(arr){
        let n = arr.length;
        let max = -Infinity;
        let min = Infinity;
        for(let i = 0; i < n; i++) {
            if(max < arr[i]) {
                max = arr[i];
            }

            if(min > arr[i]) {
                min = arr[i]
            }
        }

        return Number(max) + Number(min);
	},
    createPrefixSum: (pf, index, arr) => {
        return index > 0 ? pf[index-1] + arr[index] : arr[index];
    },
    getPrefixSum: (pf, start, end) => {
        return start > 0 ? pf[end] - pf[start-1] : pf[end];
    },
    // You are given an integer array A of length N.
    // You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
    rangeSum : function(arr, queries){
        let pf = [];
        for(let i = 0; i < arr.length; i++) {
            pf[i] = self.createPrefixSum(pf, i, arr)
        }
        
        let n = queries.length;
        let newArr = []
        for(let i = 0; i < n; i++) {
            newArr[i] = self.getPrefixSum(pf, queries[i][0], queries[i][1])
        }
        return newArr;
    },
    //  Equilibrium index of an array
    equilibriumArray : function(arr){
        let n = arr.length;
        let pf = [];
        for(let i = 0; i < n; i++) {
            pf[i] = self.createPrefixSum(pf, i, arr)
        }
        let count = 0;
        leftSum = [];
        rightSum = [];
        for(let i = 0; i < n; i++) {
            leftSum[i] = i-1 > 0 ? self.getPrefixSum(pf, 0, i-1) : 0;
            rightSum[i] = i+1 < n ? self.getPrefixSum(pf, i + 1, n-1) : 0;
            if(leftSum[i] === rightSum[i]) {
                return i
            }
        }
        return -1;
    },
    // count of even numbers in a range
    countOfEvenNumber : function(arr, queries){
        let n = arr.length;
        let pf = [];
        for(let i = 0; i < n; i++) {
            pf[i] = Number(arr[i])%2 === 0 ? 1 : 0;
        }
        
        for(let i = 0; i < n; i++) {
            pf[i] = self.createPrefixSum(pf, i, pf);
        }

        let newArr = []
        for(let i = 0; i < queries.length; i++) {
            newArr[i] = self.getPrefixSum(pf, queries[i][0], queries[i][1]);
        }
        
        return newArr;
    }

    solve: (arr, k) => {
        return self.leftRotate(num);
    }
}
// console.log(self.solve(20))

module.exports = self;