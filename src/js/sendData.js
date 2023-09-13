export function sendData() {
    
    let btn = document.getElementById('btn');
    let copy = document.getElementById('copy');
    let title = document.getElementById('title');
    
    btn.addEventListener('click', function(event){
        event.preventDefault();
        postData(title.value, copy.value);
        copy.value = "";
        title.value = "";
        location.reload();
    })

    
function postData(title, copy) {

        const data = { title, copy };
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        };
    
        fetch('https://eu-central-1.aws.data.mongodb-api.com/app/first-mongo-app-hawmy/endpoint/members', options)
        .then(res => console.log(res));
    
        }







    }