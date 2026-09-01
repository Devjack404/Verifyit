import net from 'node:net';


function checkUsesIP(urlText : string): string {
    try {
        const urlObject = new URL(urlText);
        const domain = urlObject.hostname;
        const ipAddres = domain.replace(/^\[|\]$/g, "")

        const ipVersion = net.isIP(ipAddres)
        
        if(ipVersion === 4) {
            console.log(`Warning : Hostname "${domain}" terdeteksi sebagai IPV4.`)
            return "Peringatan : URL ini menggunakan Alamat IP, bukan domain resmi !"
        }
        if(ipVersion === 6) {
            console.log(`Warning : Hostname "${domain}" terdeteksi sebagai IPV6.`)
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

console.log(checkUsesIP("http://[2001:4860:4860::8888]"));
