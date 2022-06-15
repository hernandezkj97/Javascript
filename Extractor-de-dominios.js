
dominios = ['.com', '.org', '.net', '.edu', '.gov', '.mil', '.int' , '.info', '.ve', '.co', '.com.ve', '.net.ve', '.org.ve', '.edu.ve', '.gov.ve', '.mil.ve', '.int.ve', '.info.ve', '.co.ve'];

function extractor(dom) {
    for (i = 0; i < dominios.length; i++) {
        if (dom.includes(dominios[i])) {
            return dominios[i];
        }
    }
}

console.log(extractor('www.google.org'));
console.log(extractor('www.google.com'));
console.log(extractor('www.google.co'));
console.log(extractor('www.google.co.ve'));
console.log(extractor('www.google.co.ve.ve'));
console.log(extractor('www.google.co.ve.ve.ve'));
