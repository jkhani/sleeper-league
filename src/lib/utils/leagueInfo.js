/*   STEP 1   */
export const leagueID = "919415855291715584"; // your league ID
export const leagueName = "Work from Homies"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p><b>Established in 2019, Crafting Gridiron Legends Since Day One</b></p>
  <p>In the world of fantasy football, where gridiron dreams are woven, "Work from Homies" stands as a testament to camaraderie and competition. 
  Founded in 2019, our league has seen it all – from the exhilarating triumphs to the agonizing defeats, and everything in between.</p>
  <p><b>Redraft League to Keeper League: The Evolution Begins</p></b>
  <p>For the past three seasons, we've been a redraft league, where every year is a fresh start. However, the winds of change are upon us. 
  While the whispers of becoming a keeper league grew louder, it was not to be for 2023. Some passionate managers' voices carried the day, and so, 
  the journey to our first keeper league season begins in 2024.</p>
  <p><b>The Trophy: Where Legends Are Etched in Silver</p></b>
  <p>Our coveted league trophy tells the tale of champions past and present. "imakhanman" etched his name three times as the champion in 2020, 2021, 
  and shared glory with "rastafasta" in 2022. Not content with just a trophy, "rastafasta" commemorated his victory with a champion's ring. But it's 
  not just about the bling; it's about the bragging rights that last for a year, the prize pot that awaits the victor, and the sweet taste of success.</p>
  <p><b>Competition with a Twist: Toilet Bowl or Triumph</p></b>
  <p>While the champions soar, someone must bear the weight of ignominy. The "Toilet Bowl" is a battle of wits and misfortune, where the worst-performing 
  manager faces excruciating humiliation. It's a reminder that in fantasy football, every decision counts.</p>
  <p><b>Strategies and Traditions: Tales of Drafts and Dynasties</p></b>
  <p>In our league, strategy is king. "JulesOZ" has made it a tradition to secure Travis Kelce, demonstrating that some strategies stand the test of time.</p>
  <p><b>Generational Bonds: Passing the Torch</p></b>
  <p>Our league is not just about football; it's about family. Daddies make sure the young'uns watch the games for good luck every week, passing on the torch of tradition and fanaticism.</p>
  <p><b>Ever-Changing Dynamics: From Dues to Delight</p></b>
  <p>Over the years, our league has evolved. Dues increased, "SmokeytheCalBear" took over for "scottdelly" in 2021, "mobossmed" plays spoiler, and the unforgettable
  2022 season ended in an unprecedented manner, thanks to an act of God and split votes.</p>
  <p><b>Strength in Diversity: From Casual to Die-Hard</p></b>
  <p>Half the league watches every game, dissecting every play. The other half enjoys a more casual approach, but when it comes to fantasy, they bring their A-game.</p>
  <p><b>The Ultimate Prizes: Money, Glory, and Shame</p></b>
  <p>While the ultimate prize is the glory of victory, the spoils of war include a prize pot of $400 for 1st place, $100 for 2nd place, and $50 for 3rd place. 
  The winner carries the league's bragging rights for a year, while the loser of the Toilet Bowl faces the sting of humiliation.</p>
  <p>Here at "Work from Homies," we're not just a fantasy football league; we're a community bound by the love of the game, the thrill of competition, and 
  the pursuit of gridiron glory. So, buckle up, because in this league, every touchdown, fumble, and trade can change your destiny.</p>
  <p><b>May your fantasy dreams become a reality, and may the best manager win!</p></b>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "609129556900667392",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "John",
      "location": "Seattle", // (optional)
      "bio": "Silicon Slicer",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Sleepers", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "609134772970672128",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kamran",
      "location": "Oakland", // (optional)
      "bio": "Bay Baby Bump",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win?", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Hope and a prayer", // (optional)
      "tradingScale": 1, // 1 - 10 (optional)
      "preferredContact": "WhatsApp",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "609135086822023168",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Bryan",
      "location": "New York", // (optional)
      "bio": "Radiological Gridder",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Always", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "imakhanman", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Get gud", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
