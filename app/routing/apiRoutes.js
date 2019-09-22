var friendsArray = require("../data/friends.js");

module.exports = function(app) {
    

    app.get("/api/friends", function(req, res) {
      res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {

      var bestMatch ={
        name : "",
        picture : "",
        friendsDiffernce :1000

      }
        var userInput = req.body;
        var newUserScore = userInput.scores;
        var totDifference = 0;
    

        for (let i = 0; i < friendsArray.length; i++) {
          totDifference =0

          for (let j = 0; j < newUserScore.length; j++) {
           
            totDifference += Math.abs(parseInt(newUserScore[j]) - parseInt(friendsArray[i].scores[j])); 

              if(totDifference <= bestMatch.friendsDiffernce){

                bestMatch.name= friendsArray[i].name;
                bestMatch.picture = friendsArray[i].photo;

              }
          }
          
        }
        friendsArray.push(userInput);

        res.json(bestMatch);
        }
        
      );
    
}