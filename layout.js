const drawspace = document.getElementById("Drawspace")
    for(i = 0 ; i<16; i++){
        div = document.createElement("div");
        div.classList.toggle("row")
        for(j = 0; j<16; j++){
            div2 = document.createElement("div");
            div2.classList.toggle("pixel");
            div2.classList.toggle("column")
            div.appendChild(div2)
        }
        drawspace.appendChild(div);
    }

