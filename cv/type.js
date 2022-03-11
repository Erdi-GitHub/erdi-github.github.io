const onMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if(!onMobile()) {
    for(const element of document.getElementsByClassName("typing")) {
        const letters = element.dataset.text.replace(/\\n/g, "\n").split("");
        delete element.dataset.text;
        
        for(const i in letters) {
            const letterElement = document.createElement("span");

            letterElement.innerText = letters[i];

            setTimeout(() => {
                element.append(letterElement);
            }, i * 50);
        }

        setTimeout(() => {
            element.innerHTML = "";
            element.innerText = letters.join("");
        }, (letters.length + 4) * 50);
    }
} else {
    for(const element of document.getElementsByClassName("typing")) {
        element.innerText = element.dataset.text;
        delete element.dataset.text;
    }

    alert("Rekomandohet që të jetë përdorur një kompjuter, jo telefon, për kualitet më të lartë në këtë faqe");
}
