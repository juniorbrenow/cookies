
    const cookieBox = document.querySelector(".wrapper"),
     buttons = document.querySelectorAll(".button");

    const executecodes = () => {
        if(document.cookie.includes("codinglab")) return;
       
        cookieBox.classList.add("show");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                cookieBox.classList.remove("show");


                if(button.id == "acceptBtn"){
                document.cookie = "cookieBy= codinglab; max-age=" + 60 *24 *30;
                }
            });
        });
    };

    window.addEventListener("load", executecodes);

