
function func_main_frame()
{
  document.getElementById("h1_main").innerHTML = "Main frame success!";
}


function func_sub_frame()
{
  document.getElementById("h1_sub").innerHTML = "Sub frame success!";
}

window.onload = function () {
  alert("A simple alert from preload script");
};
alert("qweqwe");
