//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
          if ( Array.isArray(array) !==true ) {
            return "Invalid";
          }

          else {
            // return "input is processable";
            let haCount = 0;
            let naCount = 0;
            let voteCount = 0;
            let countFrequency = {};
            
            for ( let element of array ) {
              countFrequency[element] = (countFrequency[element] || 0) + 1;


            }
            // return countFrequency;

            if ( countFrequency['ha'] == countFrequency['na']) {
              return "equal";
            }
            else if ( countFrequency['ha'] > countFrequency['na'] ) {
              return true;
            }

            else {
              return false;
            }



          
          }
}


let rwsult = gonoVote(['ha','na' , 'na', 'ha' , 'ha']);
console.log(rwsult);

