const header = document.querySelector('h1')
const main = document.querySelector('main')

header.onmouseover = function(event) {
    main.style.boxShadow = "14px 14px black"
  }

header.onmouseout = function(event) {
        main.style.boxShadow = "5px 5px black"
  };
