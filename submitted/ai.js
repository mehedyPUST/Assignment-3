//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) {
          if ( typeof str !== "string" || str.length == 0) {
            return "Invalid";
          }

          else {
            let splitedStr = str.split(' ');
            let longwords = '';
            let maxLength = 0 ; 

            for ( let word of splitedStr) {
            if ( word.length > maxLength) {
            maxLength = word.length;
            longwords = word;
            }
            
        }
        


            let joinedStr= splitedStr.join('');
            let token = joinedStr.length;
            return  {longwords,token};
          }
}


let result =  analyzeText("");
console.log(result);
