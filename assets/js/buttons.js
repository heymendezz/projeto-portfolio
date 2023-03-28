let projects = "#projects-list"
let experience = "#experience-list"
let aboutme = "#aboutme"
let certificados = "#certificados"

$(experience).hide();
$(projects).hide();
$(certificados).hide();

$("#about").click(function () {
    $(aboutme).show(50);
    $(experience).hide();
    $(projects).hide();
    $(certificados).hide();
});

$("#experience").click(function () {
    $(aboutme).hide();
    $(experience).show(50);
    $(projects).hide();
    $(certificados).hide();
});

$("#projects").click(function () {
    $(aboutme).hide();
    $(experience).hide();
    $(projects).show(50);
    $(certificados).hide();
});

$("#certificado").click(function () {
    $(aboutme).hide();
    $(experience).hide();
    $(projects).hide();
    $(certificados).show(50);
});