import net from 'node:net';


function checkUsesIP(urlText : string): string {
    try {
        const urlObject = new URL(urlText);
        const domain = urlObject.hostname;

        const ipVersion = net.isIP(domain)
        
        if(ipVersion !== 0) {
            console.log(`Warning: Hostname "${domain}" terdeteksi menggunakan alamat IP.`)
            return "Peringatan : URL ini menggunakan Alamat IP, bukan domain resmi !"
        }    

        console.log(`[LOG] Info: Hostname '${domain}' menggunakan domain biasa.`);
        return "Aman : URL menggunakan domain biasa";
    }

    catch {
        console.error(`[LOG] Error: Format URL '${urlText}' tidak valid! Khusus URL wajib menggunakan protokol (contoh: http:// atau https://).`);
        return "Error : Format URL tidak valid";
    }

}

console.log(checkUsesIP("http://1.1.1.1"));
