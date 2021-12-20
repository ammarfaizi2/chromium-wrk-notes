
function __preloaded_javascript_func()
{
        window.addEventListener("load", function () {
                let main = document.getElementById("h1_main");
                if (main) {
                        main.innerHTML = "Main frame success!";
                }

                let sub = document.getElementById("h1_sub");
                if (sub) {
                        sub.innerHTML = "Sub frame success!";
                }
        });
}
