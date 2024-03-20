// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
    let empty ;
    for(let i=0;i<numbers.length;i++){
        for(let j =i+1 ;j<numbers.length;j++ ){
            if(numbers[i]<numbers[j]){
                empty=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=empty;
            }
        }
    }
    let top2Max  =[]
    top2Max.push(numbers[0])
    top2Max.push(numbers[1])
    return top2Max
};


console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]))