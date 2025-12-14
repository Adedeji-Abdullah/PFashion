var burger = document.getElementById('hamburger-button');
var main = document.getElementById('main_part');
var harm = document.getElementById('harm');
var deleteBtn = document.getElementById('delete');

burger.addEventListener('click', function(){

    harm.style.color = 'white';
    main.style.display = 'none';
    harm.style.display = 'block';
    deleteBtn.style.display = 'block';
    burger.style.display = 'none';

});

deleteBtn.addEventListener('click', function() {
    harm.style.color = 'white';
    main.style.display = 'block';
    harm.style.display = 'none';
    deleteBtn.style.display = 'none';
    burger.style.display = 'block';
});

harm.addEventListener('click', function() {
    harm.style.color = 'white';
    main.style.display = 'block';
    harm.style.display = 'none';
    deleteBtn.style.display = 'none';
    burger.style.display = 'block';
});