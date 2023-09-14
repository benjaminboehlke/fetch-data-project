export function getData() {
    
    fetch('https://eu-central-1.aws.data.mongodb-api.com/app/first-mongo-app-hawmy/endpoint/members')
    .then((response) => response.json())
    .then((json) => showData(json));

    };

    function showData(data) {
        let container = document.getElementById('container');
            
       /*  for (let i = 0; i < data.length; i++) {
            container.innerHTML = `
            <h2>${data[i].name}</h2>
            <img id="portrait">
            </img>
            `  
            let portrait = document.getElementById('portrait');
            //portrait.style.backgroundImage = "url(" + data[i].imageurl + ")";
        } */

        for (let i = 0; i < data.length; i++) {
                console.log(data[i].copy);
                let card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<h3>${data[i].title}</h3><p>${data[i].copy}</p>`
                container.insertBefore(card, container.firstChild);
        
                
            }
    
    }