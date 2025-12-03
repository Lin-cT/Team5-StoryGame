document.addEventListener("DOMContentLoaded", () => {
    const nextBtn = document.getElementById("btnnext"); //connects button
    const pageType = document.body.dataset.pageType; //scene or problem
    
    const params = new URLSearchParams(window.location.search);
    const nextScene = params.get("next");  

    //if (!nextBtn) return;

    let correct=null;  // comes back later to store numerator and denominator of correct answer

    if (pageType === "problem") { //before clicking next button, so everything is preloaded

        const prob = document.getElementById("problem"); //the printed problem
        const inputBox = document.getElementById("ans-input"); //the answer box

        // all the random generating 
        function randInt(min, max) { //gets random integer between min and max???
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function gcd(a, b) {  //for simplifying, finding GCD???
            while (b !== 0) {
                let t = b;
                b = a % b;
                a = t;
            }
            return a;
        }

        function simplify(n, d) { //simplifies fraction???
            let g = gcd(n, d); //calls function above
            return { n: n / g, d: d / g };
        }

        function makeFraction() { //d-denom, n-numer, makes random fraction
            let d = randInt(2, 7); //denominator between 2 and 10
            let n = randInt(1, d - 1); //numerator between 1 and d-1 (numer<denom)
            return { n, d };
        }

        let f1 = makeFraction(); //making both fractions with function above
        let f2 = makeFraction();

        let lcd = f1.d * f2.d / gcd(f1.d, f2.d); //finding the simplified sum
        let num = f1.n * (lcd / f1.d) + f2.n * (lcd / f2.d);

        correct = simplify(num, lcd); //the correct answer produced above

        prob.textContent = `${f1.n}/${f1.d} + ${f2.n}/${f2.d}`; //this prints the actual problem on screen
    }


    if (pageType === "incorrect") { //this makes it so that the order of pages isnt broken

        const btn = document.getElementById("btnnext");
        const originalNext = params.get("next");

        const returnTo =
            "Huntrix_Prac_Prob.html" +
            (originalNext ? `?next=${originalNext}` : "");

        btn.addEventListener("click", () => {
            window.location.href = returnTo;
        });

        return; // stop the rest
    }


    nextBtn.addEventListener("click", () => {
        const nextPage = nextScene || nextBtn.dataset.next;


        if (pageType === "scene" || pageType === "completedScene") { //checks if next page is a scene
            window.location.href = nextPage;
            return;
        }
        

        if (pageType === "problem") { //checks if user inputted right answer
            const inputBox = document.getElementById("ans-input"); //user's answer
            const raw = inputBox.value.trim();

            const parts = raw.split("/"); //checks if user put answer in "n/d" format
            if (parts.length !== 2) { //???
                adjustPoints(-1)
                window.location.href = `Incorrect.html?next=${nextScene}`;
                return;
            }

            const p = Number(parts[0]); //if any of the numbers are not a number, incorrect
            const q = Number(parts[1]);
            if (!Number.isInteger(p) || !Number.isInteger(q) || q === 0) {
                adjustPoints(-1)
                window.location.href = `Incorrect.html?next=${nextScene}`;
                return;
            }

            function gcd(a, b) { while (b !== 0) [a, b] = [b, a % b]; return a; } //simplifies users answer incase they put a simplified version
            const g = gcd(p, q);
            const one = 1;
            const user = { n: p / g, d: q / g };

            // Compare with correct answer
            //((correct.n === correct.d) && (user === 1))||
            
            if (((correct.n === correct.d) && (inputBox===1))) { 
                adjustPoints(3) // This adds 3 points for correct answer (We can see if they got more Saja Boy or Huntrix right)
                window.location.href = nextScene;
            } else if (user.n === correct.n && user.d === correct.d) { //if numer and denom are both right
                adjustPoints(3)
                window.location.href = nextScene;
            }else {
                adjustPoints(-1)
                window.location.href = `Incorrect.html?next=${nextScene}`;
            }
        }
    });

    function adjustPoints(number) {
        let current = parseInt(localStorage.getItem("huntrixPoints") || "0", 10);
        current += number;
        localStorage.setItem("huntrixPoints", current.toString());
    }

});
