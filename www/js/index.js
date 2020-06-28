$(document).ready(function () {
  if (localStorage.language == "ita") {
    $("#canvas").load("ita/index.html", () => {
      console.log('loaded italian index')
    })
  } else {
    $("#canvas").load("welcome.html", () => {
        console.log("loaded welcome")
        $('#ita').on('click',() => {
          console.log('setting language')
          localStorage.language = "ita"

          $("#canvas").load("ita/index.html", () => {
            console.log('loaded italian index')
          })

        })
        
    })
  }
});


