export async function fetchingDataBe(url : string) {
    const response = await fetch ('http://localhost:3000/api/analyze', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({url : url,})
    });
    const data = await response.json();
    console.log(data);

    return data;
}

