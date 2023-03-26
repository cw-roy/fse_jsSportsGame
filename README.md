# A Simple JavaScript Sports Game

Using what we know about HTML, CSS, and JavaScript. Let's build a simple sports game. The game will have 2 teams. Each team can shoot causing the shot counter to increase. There is a random chance you may score when you shoot. If you score, the score should increase for the team. If the reset button is clicked, each team's shot count and score should be reset to 0 and the reset counter should increase by 1. There are some bonus features you can add as well like playing a sound when shooting and scoring.

1. File/folder structure:

```text
    js_sports_game/
    ├── index.html
    └── assets/
        ├── css/
        |   └── style.css
        └── javascript/
            └── game.js
     
```

## Game Instructions

## How should this game work?

1. Clicking either "SHOOT" button represents a shot for that team.
    - Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
    - The number of shots taken should increase for every click of the "SHOOT" button.
    - The number of goals should only increase when the shot is successful.
2. Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.

## Bonus

1. Play a sound when someone clicks the "Shoot" button. You'll need to [read about the HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) and how to use it in JS. You will also need to find a sound file to use.
2. Use what you know about HTML and CSS to make the page look better!
3. Upon reset, display *who* won the game.
