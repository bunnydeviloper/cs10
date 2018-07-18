# Lesson 6
## Style
Incorporate CSS styling into your accessible web design and use accessible color schemes to improve a11y

### Working with focus styles
* use focus pseudo class to change ele when it's focused (instead of using the default focus ring)
  ```css
  :focus {
    outline: 1px dotted #FFF;
  }

  button:hover,
  button:focus {
    background: red;
    color: white;
    text-decoration: underline;
  }

  button:focus {
    outline: 0;
    box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.8);
    /* use box-shadow instead of outline to get consistent result accross diff browsers */
  }
  ```
* radio button example:
  ```css
  .radio:focus {
    outline: 0;
  }

  .radio:focus::before {
    box-shadow: 0 0 1px 2px #5b9DD9; /* blue tinted box-shadow */
  }
  ```
* if possible, leave the default focus ring behaviour
* if the ring is clashing with your page styles or ugly then you can make custom focus

### 
