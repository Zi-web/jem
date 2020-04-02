document.getElementById("btn__call1").onclick = function() {showForm()};
      function showForm() {
    document.querySelector('.overlay').classList.add("show");
    document.querySelector('.popap-wrapper').classList.add("show-form");
}

document.getElementById("closeform").onclick = function() {closeForm()};
      function closeForm() {
    document.querySelector('.overlay').classList.remove("show");
    document.querySelector('.popap-wrapper').classList.remove("show-form");
}

document.getElementById("btn__call2").onclick = function() {showForm()};
      function showForm() {
    document.querySelector('.overlay').classList.add("show");
    document.querySelector('.popap-wrapper').classList.add("show-form");
}

document.getElementById("closeform").onclick = function() {closeForm()};
      function closeForm() {
    document.querySelector('.overlay').classList.remove("show");
    document.querySelector('.popap-wrapper').classList.remove("show-form");
}

'use strict';
        var link_form = document.querySelectorAll('.btn--program-2');
        var popup_form = document.querySelector('.popap-wrapper');
        var close_form = popup_form.querySelector('.closeform');
        var overlay_form = document.querySelector('.overlay');
       var index; var button;

for (index = 0; index < link_form.length; index++) {
    button = link_form[index];
    button.addEventListener('click', function (event) {
        popup_form.classList.add('show-form');
        overlay_form.classList.add('show');
        event.preventDefault();
    });
}
