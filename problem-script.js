

document.addEventListener("DOMContentLoaded", () => { //since javascript is in head of html, makes it so that all html loads before js
    const nextBtn = document.getElementById("btnnext"); //finds btnnext in html code and assigns it to nextBtn
    const pageType = document.body.dataset.pageType;

    if (!nextBtn) return;

    nextBtn.addEventListener("click", () => { //makes button clickable with results
        
        const nextPage = nextBtn.dataset.next; //reads data-next in html to find next page

        if (pageType === "scene") {   //scene pages
            window.location.href = nextPage; //goes to said next page
            return;
        }

        if (pageType === "problem") {  //problem pages
            const answerInput = document.getElementById("ans-input");
            if (!answerInput) return;
            
            const userAnswer = answerInput.value.trim();

            // SET THE CORRECT ANSWER FOR THIS PAGE
            const correctAnswer = nextBtn.dataset.answer;  // <-- from HTML

            if (userAnswer === correctAnswer) {
                window.location.href = nextPage;   // correct --> next scene
            } else {
                window.location.href = "incorrect.html"; // wrong --> incorrect page
            }
        }
    });
});
