let projects = "#projects-list"
let experience = "#experience-list"
let aboutme = "#aboutme"

$(experience).hide();
$(projects).hide();

$("#about").click(function () {
    $(aboutme).show(1000);
    $(experience).hide();
    $(projects).hide();
});

$("#experience").click(function () {
    $(aboutme).hide();
    $(experience).show(1000);
    $(projects).hide();
});

$("#projects").click(function () {
    $(aboutme).hide();
    $(experience).hide();
    $(projects).show(1000);
});