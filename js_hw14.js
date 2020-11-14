<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Event Objects</title>
  </head>
  <body>
    <label for="who">Knock, knock, who's there?</label><br><br>
    <button id="tom-btn">Tom</button>
    <button id="jerry-btn">Jerry</button>

    <script>
      let buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        btn.addEventListener('click', e => {
          alert("It's " + e.target.innerHTML);
          for (p in e) {
            console.log(p);
          }
        });
      });
    </script>
  </body>
</html>