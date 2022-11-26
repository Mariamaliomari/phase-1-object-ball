function gameObject(){
    return {
        home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
            "Alan Anderson" : {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans" : {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez" : {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee" : {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
              },
              "Jason Terry" : {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
          }
        },
        away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
            "Jeff Adrien" : {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2
          },
          "Bismak Biyombo" : {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10
          },
          "DeSagna Diop" : {
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5
          },
          "Ben Gordon" : {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0
            },
            "Brendan Haywood" : {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12
            }
          }
        }
      }
    }
    function numPointsScored(playerName){
        const games = gameObject()
        for(const team in games){
            for(const player in games[team]["players"]){
              if(player === playerName){
                return games[team]["players"][player]["points"]
              }
            }
        }
    }
    
    function shoeSize(playerName){
        const games = gameObject();
        for(const team in games){
            for(const player in games[team]["players"]){
              if(player === playerName){
                return games[team]["players"][player]["shoe"]
              }
            }
        }
    }
    
    function teamColors(teamName) {
        const games = gameObject()
        for(const team in games){
            if(games[team].teamName === teamName){
                return games[team]["colors"]
            }
        }
    }
    
    function teamNames() {
        const games = gameObject()
        let names = []
        for(const team in games){
            names.push(games[team].teamName)
        }
    
        return names
    }
    
    function playerNumbers(teamName){
        const games = gameObject()
        let jerseyNumber = []
        for(const team in games){
            if(games[team].teamName === teamName){
                for(const player in games[team]["players"]){
                    jerseyNumber.push(games[team]["players"][player].number)
                }
                return jerseyNumber
            }
        }
    }
    
    function playerStats(playerName){
        const games = gameObject();
        for(const team in games){
            for(const player in games[team]["players"]){
              if(player === playerName){
                return games[team]["players"][player]
              }
            }
        }
    }
    
    function bigShoeRebounds(){
        const game = gameObject();
        let playerWithLargestShoe = ""
        let largestShoe = 0
        for(const team in game){
            for(const player in game[team]["players"]){
              if(shoeSize(player)>largestShoe){
                largestShoe = shoeSize(player)
                playerWithLargestShoe = player
              }
            }
        }
    
        return playerStats(playerWithLargestShoeSize).rebounds
    }