var problem_element = document.getElementById('problem');
var input = document.getElementById('ans-input');
var next_btn = document.getElementById('next-btn');

var params = new URLSearchParams(window.location.search);
var nextUrl = window.sessionStorage.getItem('nextAct');

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcd(a, b) {
  a = Math.abs(a); 
  b = Math.abs(b);
  while (b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function simplify(n, d) {
  var g = gcd(n, d);
  return { 
    n: n / g, 
    d: d / g };
}

function properFraction() {
  var den = randInt(2, 10);
  var num = randInt(1, den - 1); 
  return { 
    n: num, 
    d: den };
}

var f1 = properFraction();
var f2 = properFraction();
var product = simplify(f1.n * f2.n, f1.d * f2.d); 

problem_element.textContent = 'Problem: ' + f1.n + '/' + f1.d + ' × ' + f2.n + '/' + f2.d;

function goError() {
  if (nextUrl) {
    window.sessionStorage.setItem('nextAct', nextUrl);
  }
  window.location.href = 'error.html?next=' + encodeURIComponent(nextUrl || '');
}

next_btn.addEventListener('click', function (e) {
  // prevent default navigation
  if (e && e.preventDefault) e.preventDefault();

  //user input
  var raw = (input.value || '').trim();
  var parts = raw.split('/');

  // Must be "p/q"
  if (parts.length !== 2) {
    goError();
    return;
  }

  var p = Number(parts[0]);
  var q = Number(parts[1]);

  if (!Number.isInteger(p) || !Number.isInteger(q) || q === 0) {
    goError();
    return;
  }

  var user = simplify(p, q);

  if (user.n === product.n && user.d === product.d) {
    if (!nextUrl) 
      { 
        goError(); 
        return; 
      }
    window.location.href = nextUrl;
  } 
  else 
  {
    goError();
  }
  });

  
  
  