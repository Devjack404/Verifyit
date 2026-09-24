export async function fetchingDataBE(url : string) {
    const response = await fetch ('http://localhost:3000/api/analyze', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({url : url,})
    });

    if(!response.ok){
        throw new Error("Gagal mengambil data analysis URL")
    }

    return response.json();
}

