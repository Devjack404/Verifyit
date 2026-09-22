import

export async function fetchingDataBe(url : string) {
    const response = await await("http://localhost:3000/api/analyze"),
    {
        url : string,
    }

    if (response.ok) {
        throw new Error ("Gagal Melakukan Analisis");
    }

    return response.json();
}