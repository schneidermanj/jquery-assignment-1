// Do your work in this file.


function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

for (var index = 1; index <= 196; index++) {
    var box = document.createElement('div');
    if (isEven(index)) {
        box.className = "box type-1";
    } else if (isOdd(index)) {
        box.className = "box type-2";
    }
    $('body').append(box);
}

$('.box').click(function() {
    $(this).toggleClass('clicked');
});
