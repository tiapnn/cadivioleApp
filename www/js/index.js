(function () {
  "use strict";

  document.addEventListener('deviceready', onDeviceReady, false);

  function onDeviceReady() {
    // Gestire gli eventi di sospensione e ripresa di Cordova
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);
    document.addEventListener('backbutton', onBackbutton, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);


    // TODO: Cordova è stato caricato. Eseguire qui eventuali operazioni di inizializzazione richieste da Cordova.


    //se é settato il localstorage ita carica index italiano 
    if (localStorage.language == "ita") {
      $("#canvas").load("ita/index.html", () => {
        console.log('loaded italian index')
      })

      //se é settato il localstorage eng carica index inglese
    } else if (localStorage.language == "eng") {
      $("#canvas").load("eng/index.html", () => {
        console.log('loaded english index')
      })

      //se non sono settati localstorages di langs carica il welcome
    } else {
      $("#canvas").load("welcome.html", () => {
        console.log("loaded welcome")

        //se cliccano su ita carica ita
        $('#ita').on('click', () => {
          console.log('setting language')
          localStorage.language = "ita"

          $("#canvas").load("ita/index.html", () => {
            console.log('loaded italian index')
          })

        })

        //se cliccano su eng carica eng
        $('#eng').on('click', () => {
          console.log('setting language')
          localStorage.language = "eng"

          $("#canvas").load("eng/index.html", () => {
            console.log('loaded english index')
          })

        })

      })
    }

  };

  function onPause() {
    // TODO: questa applicazione è stata sospesa. Salvarne lo stato qui.
  };

  function onResume() {
    // TODO: questa applicazione è stata riattivata. Ripristinarne lo stato qui.
  };

  function onBackbutton() {
    // TODO: premuto il backbutton
  };

  function onMenuKeyDown() {
    // Handle the menubutton event
  }


})();