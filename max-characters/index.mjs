// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
   
    const group ={}
    let maxCount =0
    let maxChar =""
    let split = str.split('');
    for(let i=0;i<split.length;i++){
        if(!group[split[i]]){
            group[split[i]] = 0
        }group[split[i]]= group[split[i]]+1;
    }for (const key in group){
       if(group[key]>maxCount){
        maxCount=group[key];
        maxChar=key;
       }
    }
return  maxChar;
};

console.log(getMaxCharacters("abcccccccd"));