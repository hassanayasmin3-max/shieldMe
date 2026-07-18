function checkLink(){

    let link = document.getElementById("linkInput").value;

    let result = document.getElementById("result");

    if(link.includes("http")){

        if(link.includes("@") || link.includes("free") || link.includes("login")){

            result.innerHTML = "⚠️ Warning! This link looks suspicious.";

            result.style.color = "red";

        }

        else{

            result.innerHTML = "✅ This link appears safe.";

            result.style.color = "green";

        }

    }

    else{

        result.innerHTML = "Please enter a valid link.";

        result.style.color = "orange";

    }

}