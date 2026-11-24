const reviewsCntDisplay = document.querySelector("#reviewsCnt");
let reviewsCnt = Number(window.localStorage.getItem("reviewsCnt")) || 0;
reviewsCnt++;
localStorage.setItem("reviewsCnt", reviewsCnt);
reviewsCntDisplay.textContent = reviewsCnt;
