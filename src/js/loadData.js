export function getData() {

    
    fetch('https://eu-central-1.aws.data.mongodb-api.com/app/first-mongo-app-hawmy/endpoint/getAll')
    .then((response) => response.json())
    .then((json) => showData(json));

    };

    function showData(data) {
        let container = document.getElementById('container');
            

        for (let i = 0; i < data.length; i++) {
                console.log(data[i].copy);
                let card = document.createElement("div");
                let deleteBtn = document.createElement("button");
                deleteBtn.className = "btn-danger";
                deleteBtn.innerText = "Delete Pizza";
                card.className = "card";
                deleteBtn.id = data[i]._id
                card.innerHTML = `<h3>${data[i].title}</h3><p>${data[i].copy}</p>`
                container.insertBefore(card, container.firstChild);
                card.appendChild(deleteBtn);
                console.log(deleteBtn.id);
                deleteBtn.addEventListener('click', function(e) {
                    deleteData(e.target.id);

                })
        
                
            }



            function deleteData(id) {

                const options = {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'DELETE'
                };
            
                fetch(`https://eu-central-1.aws.data.mongodb-api.com/app/first-mongo-app-hawmy/endpoint/deletePizza?id=${id}`, options)
                .then(res => location.reload());
            
                }
    
    }