function checkUseIP(urlText : string) {
    const urlObject = new URL(urlText);
    const domain = urlObject.hostname;

    const splitDomain = domain.split(".");

    const isFourPart = splitDomain.length === 4;
    const isAllNumbers = splitDomain.every(item => !isNaN(Number(item)));
        

    if(isFourPart && isAllNumbers) {
        return "Peringatan : URL ini menggunakana Alamat IP, bukan domain resmi !"
    }

    return "Aman : URL menggunakan domain biasa"

}
