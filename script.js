let title = document.getElementById("title");
        let btnStart = document.getElementById("start");


        btnStart.onclick = _ =>
    {
        btnStart.disabled = true;

        let counter = 0;
        let phase = 1;
        btnStart.style.background = "#9e9a9a"

        function UpdateMessage()
        {
            counter++;

        if(phase == 1)
        {
            title.textContent = "سبحان الله - " + counter;
            title.style.color = "white";

            if(counter == 33)
        {
            phase = 2;
            counter = 0;
        }
        }
        else if(phase == 2)
        {
            title.textContent = "الحمد لله - " + counter;
            title.style.color = "red";

            if(counter == 33)
        {
            phase = 3;
            counter = 0;
        }
        }
        else if(phase == 3)
        {
            title.textContent = "الله أكبر - " + counter;
            title.style.color = "yellow";

            if(counter == 33)
        {
            phase = 4;
            counter = 0;
        }
        }
        else if(phase == 4)
        {
            title.textContent = "لا حول ولا قوة الا بالله" ;
            title.style.color = "green";

            btnStart.disabled = false;
            btnStart.style.background = "yellow";
            clearInterval(intervalID);

            setTimeout(() => alert("جزاكم الله خيرا"), 1000);
        }

    }


        let intervalID = setInterval(UpdateMessage, 500);
    }
