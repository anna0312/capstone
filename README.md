# Go There

Go There was inspired by my passion for travel and my plan to take a year of and travel the circumference of the world with my partner in crime. There are many travel sites out there, but I didn't find one that enabled you to plan a multi-legged journed and access the data to make decisions about where to go, when to go there, and what order to go there in.

Go There aims to give you the tools you need to get to all the places you want to go. Now all you have to do is... go there.


## Links
Deployed site: (https://anna0312.github.io/capstone/)

Deployed back end: (https://boiling-coast-87751.herokuapp.com/)

Front end repo: (https://github.com/anna0312/capstone)

Back end repo: (https://github.com/anna0312/capstone-api)


### Future Iterations
Go There is just getting started. Consider this the prototype. Future iterations will include much more data on each
location, shareable itineraries, a "got here" button that notifies family/friends of safe arrival, document sharing,
and much more. Stay tuned!

## Technologies Used

# Front end
Javascript, CSS, Sass, Handlebars

# Back end
Node, MongoDB, Mongoose

## Dependencies

Google Maps Web Services: ```npm install google-maps```

Google Maps API: ```npm install @google/maps```

Dragula (for dragging and dropping): ```npm install dragula```

Bootstrap Notify: ```npm i bootstrap-notify```

C3: ```npm install c3``` (also requires you to install D3: ```npm install d3```)



## User Stories:

As a user I want to be able to find a place on a map using autocomplete

As a user I want to be able to save that place to my list of possible destinations

As a user I want to be able to see my possible destinations

As a user I want to be able to select a possible destination and add it to my itinerary

As a user I want to be see what the year-round temperature is for my destinationcards

As a user I want to be able to see the distance between destinations on my itinerary

As a user I want to be able to see general info about my destinations

## Wireframes/ERD

Wireframes: (https://imgur.com/a/I1SbwC2)
ERD: (https://imgur.com/a/I1SbwC2)

## Challanges:

There were many ups and downs. Most of the downs involved getting google maps to work the way I want it to, and re-familiarizing myself with Express after weeks away from it. I wanted to include real weather data from an api, but could not find one that had the sort of data I was looking for that did not charge a fair amount of money. For the time being, I am using hard-coded weather data as a place holder. In part this is because showing the weather information
was important to me as that is a vital part of travel planning. And in part because I wanted to use C3!
