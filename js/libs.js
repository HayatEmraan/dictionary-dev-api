const x = z => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${z}`)
        .then(res => res.json())
        .then(data => local(data[0]));
};
const local = xy => {
    const { word, phonetic, sourceUrls, meanings, phonetics } = xy;
    document.getElementById("innerPull").innerHTML = `
    <section class="d-flex justify-content-center mt-2">
        <input type="text" id="search-field" class="form-control w-50 me-2">
        <button onclick = "xml()" class="btn btn-primary rounded-lg">Search</button>
    </section>
    <section class="mt-2">
        <div class="container d-flex justify-content-between mx-auto align-items-center">
            <div class="title-container">
                <h3 class="mb-0 fw-bold">${word ? word : "not available"}</h3>
                <p class="text-danger-emphasis fw-semibold">${
                  phonetic ? phonetic : 'not available'
                }</p>
            </div>
            <div>
                <audio controls>
                <source src=${
                  phonetics[1].audio ? phonetics[1].audio : phonetics[2].audio
                } type="audio/mpeg">
                Your browser does not support the audio tag.
                </audio>
            </div>
        </div>
    </section>
    <section class="container mx-auto">
        <div class="d-flex align-items-center gap-3">
            <p class="fw-semibold" style="font-family: 'Roboto', sans-serif;">${
              meanings[0].partOfSpeech
                ? meanings[0].partOfSpeech
                : "not available"
            }</p>
            <p style="border: 1px solid gray; width: 100%;"></p>
        </div>
        <div class="mt-3">
            <p class="text-secondary">Meaning</p>
            <ul>
                <li>${
                  meanings[0].definitions[0].definition
                    ? meanings[0].definitions[0].definition
                    : "not available"
                }</li>
            </ul>
            <div class="d-flex gap-5 align-items-center">
                <h6 class="order-1 text-danger-emphasis">${
                  meanings[0].synonyms[0]
                    ? meanings[0].synonyms[0]
                    : "not available"
                }</h6>
                <h6 class="text-secondary">Synonyms</h6>
            </div>
            <div class="d-flex align-items-center gap-3">
                <p class="fw-semibold" style="font-family: 'Roboto', sans-serif;">${
                  meanings[1].partOfSpeech
                    ? meanings[1].partOfSpeech
                    : "not available"
                }</p>
                <p style="border: 1px solid gray; width: 100%;"></p>
            </div>
            <div>
                <p class="text-secondary">Meaning</p>
                <ul>
                    <li>${
                      meanings[1].definitions[0].definition
                        ? meanings[1].definitions[0].definition
                        : "not available"
                    }</li>
                </ul>
            </div>
            <p class="text-secondary">Source: <a class="ms-3 text-secondary" href=${sourceUrls} target="_blank">${
      sourceUrls ? sourceUrls : "not available"
    } <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>   
        </div>
    </section>
    `;
};
const xml = () => {
    const res = document.getElementById('search-field').value;
    x(res);
};