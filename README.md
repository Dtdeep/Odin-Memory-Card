# Pseudo Code

There will be an array of Uma-musume names 24 names in total. (Names should be descriptive so that Giphy knows them accurately)
An algorithm will randomly choose 12 names
Then I will fetch an image or GIF from Giphy based on the name

The 12 names will be used to fetch GIF from giphy

Randomly render the 12 card components

#Components

- App component pieces them all together.
  Will send the onClick event to the Main component, unto the card component

- Header Component which has the

1. name of the game,
2. score and
3. best score
   This component is controlled by the root or App parent component where the parent will store its state which will be the currentScore and bestScore.

- Main Component which will have:

1. Description on how to play the game
2. The 12 card components
   I think diria nice ibutang ang logic sa pag randomize sa placement sa card components.

- Card Component- which will have the GIF or image and the name of the Uma
  The main component will provide
