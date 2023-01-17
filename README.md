# Progress Steps

Progress Steps is a reusable library of code, which can be used to add a progress bar to forms within websites.

## Authors

- [@anonymousMornach](https://www.github.com/anonymousMornach)

## Tech Stack

**Client:** HTML, CSS, Javascript

## Support

For support, email techmornach@gmail.com.

## Documentation

**index.html :** Contains Html used to show the Effects of the library

**styles.css :** Contains Supplementary Style code for added aesthetics

**progress_steps.css :** Main library that Contains Style code

**progress_steps.js :** Main library containing javascript code for progress step functionality

### Classes in panel.css

**progress_container :** Used for parent element that Contains every step

**progress_step :** Each individual step in the parent container

**progress_meter :** For Meter that fills up(!Very Important)

**next_btn :** For the next button, going to the next step

**prev_btn :** For the previous button

## FAQ

#### Can I copy this code?

Yes, this code is open source and can be copied and modified for any use.

## Contributing

Contributions are always welcome!

## Usage/Examples

To use simply add the external stylesheet "progress_step.css" inside the head element and the external script "progress_step.js" at the bottom of the body element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="progress_steps.css" />
    <title>Progress Steps</title>
  </head>
  <body>
    <!-- Contains The Progress Steps -->
    <div class="progress_container">
      <!-- It is important to add a div with the class progress_meter for the meter which fills up -->
      <div class="progress_meter"></div>
      <!-- Each progress step, the active step can be specified with the class active_step-->
      <div class="progress_step active_step">1</div>
      <div class="progress_step">2</div>
      <div class="progress_step">3</div>
      <div class="progress_step">4</div>
    </div>

    <!-- Previous button you can add the disabled button as a starter-->
    <button class="prev_btn" disabled>Prev</button>
    <!-- Next button -->
    <button class="next_btn">Next</button>
    <script src="progress_steps.js"></script>
  </body>
</html>
```
