const home = (req, res) => {
     res.json({
          status: true,
          message: "Movie Api is fully functional",
     });
}

const offline = (req, res) => {
     const movie = [{
               "_id": "62fc8a6cbe0998e8ed9fe94b",
               "title": "Day Shift",
               "description": "Day Shift is a 2022 American vampire film directed by J. J. Perry in his directorial debut, with a screenplay by Tyler Tice and Shay Hatten, based on a story by Tice.[2] The film stars Jamie Foxx, Dave Franco, Natasha Liu Bordizzo, Meagan Good, Karla Souza, Steve Howey, Scott Adkins, and Snoop Dogg.",
               "year": 2022,
               "rating": 4.8,
               "image": "https://cdn.justjared.com/wp-content/uploads/headlines/2022/07/day-shift-trailer.jpg",
               "time": "114 minutes",
               "link": "<iframe width='727' height='409' src='https://www.youtube.com/embed/iHh3KwMLz_s' title='Day Shift - Action Movie 2022 full movie english Action Movies 2022' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
               "category": [],
               "createdAt": "2022-08-17T06:27:56.819Z",
               "updatedAt": "2022-08-17T09:32:05.018Z",
               "__v": 0
          },
          {
               "_id": "62fc901f15ce16d78edc2bb1",
               "title": "Carter",
               "description": "A man wakes up missing his memories. Directed by a mysterious voice from a device in his ear, he sets off on a hostage rescue mission rife with danger.",
               "year": 2022,
               "rating": 4.8,
               "image": "https://m.media-amazon.com/images/M/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
               "time": "134 minutes",
               "link": "<iframe width='727' height='409' src='https://www.youtube.com/embed/7yAICZnJxhY' title='Carter FuLLMovie HD (QUALITY)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
               "category": [],
               "createdAt": "2022-08-17T06:52:15.780Z",
               "updatedAt": "2022-08-17T06:52:15.780Z",
               "__v": 0
          },
          {
               "_id": "62fcb7d382ba9f0052bf011b",
               "title": "The Gray Man",
               "description": "The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney.",
               "year": 2022,
               "rating": 4.5,
               "image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/The_Gray_Man_poster.png/220px-The_Gray_Man_poster.png",
               "time": "129 minutes",
               "link": "<iframe width='727' height='409' src='https://www.youtube.com/embed/2hDPHUzTOOk' title='The Gray Man FuLLMovie HD (QUALITY)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
               "category": [],
               "createdAt": "2022-08-17T09:41:39.696Z",
               "updatedAt": "2022-08-17T09:41:39.696Z",
               "__v": 0
          }
     ]
     res.json(movie);
}

const lost = (req, res) => {
     res.json({
          status: false,
          message: "Sorry, You've completely lost your way",
     });
}

module.exports = {
     home,
     offline,
     lost
}