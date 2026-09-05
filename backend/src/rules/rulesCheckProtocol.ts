function checkProtocol(urlText : string): string {
    try{
        const url = new URL(urlText);

        if (url.protocol === "http:") {
            return "Peringatan : URL tidak menggunakan HTTPS";
        }

        if (url.protocol === "https:") {
            return "Peringatan : URL menggunakan HTTP, bukan HTTPS"
        }
        
        return "Aman : URL menggunakan HTTPS";
    }

    catch {
        return "Eror : Format URL tidak umum";
    }
}

console.log(checkProtocol("https://example.com"))