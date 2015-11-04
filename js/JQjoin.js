var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

$(function() {
    $('#signup').attr('novalidate', true);
});

$('#submit').click(function(event) {
        var pass = 0;
        event.preventDefault();

    if ($('[name="name"]').val().length < 1) {
        window.alert("Type in your name!");
        pass++; 
    };

    if ($('[name="username"]').val().length < 1) {
        window.alert("Type in your username!");
        pass++;
    };


    if (emailCheck.test($('[name="email"]').val()) === false) {
        window.alert('Type in a valid email!!!');
        pass++;
    };

    if (pass === 0) {
        var $name = $('[name="name"]').val();
        window.location.href = "gallery.html?" + $name;
    };
});

