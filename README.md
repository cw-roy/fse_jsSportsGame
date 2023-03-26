# A Simple JavaScript Sports Game

Using HTML, CSS, and JavaScript, build a simple hatchet throwing game. The game will have 2 throwers. Each throw will cause the throw counter to increase. There is a random chance you may hit when you throw. If you hit, the score should increase. If the reset button is clicked, each thrower's count and score should be reset to 0 and the reset counter should increase by 1.

Bonus:  play a sound when throwing and hitting.

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

1. Clicking either "THROW" button represents a throw for that team.
    - throws should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
    - The number of throws taken should increase for every click of the "THROW" button.
    - The number of hits should only increase when the throw is successful.
2. Clicking the "RESET" button should reset all the throw and hit counters and add 1 to the number of resets.

## Bonus

1. Play a sound when someone clicks the "THROW" button. You'll need to [read about the HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) and how to use it in JS. You will also need to find a sound file to use.
2. Use what you know about HTML and CSS to make the page look better!
3. Upon reset, display *who* won the game.
