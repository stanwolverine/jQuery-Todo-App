//Add new todos by pressing "ENTER" key.
$("input").on("keypress", function (event) {
    if (event.which === 13) {
        let newTodo = $(this).val();
        console.log(newTodo);
        $(this).val("");
        $("ul").append("<li class='todos'><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});

// Check off specific Todos by clicking.
$("ul").on("click", "li", function () {
    $(this).toggleClass("doneTodos");
});

// Click X to delete a todo.
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$(".fa-plus").click(function () {
    $("input").fadeToggle(200);
});