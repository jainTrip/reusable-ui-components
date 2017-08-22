function show_code() {
document.getElementById("element_desc").style.display = "none";
document.getElementById("btn_showcode").style.display = "none";
document.getElementById("element_desc2").style.display = "block";
document.getElementById("btn_hidecode").style.display = "block";
}
function hide_code() {
document.getElementById("element_desc2").style.display = "none";
document.getElementById("btn_showcode").style.display = "block";
document.getElementById("element_desc").style.display = "block";
document.getElementById("btn_hidecode").style.display = "none";
}