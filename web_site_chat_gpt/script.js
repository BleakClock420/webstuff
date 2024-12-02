// JavaScript to change the background color when the button is clicked
document.getElementById('colorChangeButton').addEventListener('click', function() {
    // Random color generation
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });