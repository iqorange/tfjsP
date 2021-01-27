import * as speechCommands from '@tensorflow-models/speech-commands'

const MODEL_PATH = 'http://127.0.0.1:8080/speech'
window.onload = async() => {
    const recogenizer = speechCommands.create(
        'BROWSER_FFT',
        null,
        MODEL_PATH + '/model.json',
        MODEL_PATH + '/metadata.json'
    );
    await recogenizer.ensureModelLoaded();
    // 可识别单词
    const labels = recogenizer.wordLabels().slice(2);
    const resultl = document.getElementById("result");
    resultl.innerHTML = labels.map((la, index) => '<div>'+ la +'</div>').join(' ');
    recogenizer.listen(result => {
        const {scores} = result;
        const maxValue = Math.max(...scores);
        const index = scores.indexOf(maxValue) - 2;
        console.log(labels[index])
        resultl.innerHTML = labels.map((la, i) => '<div ' + ((i === index)? 'style="background: green;color:white;">': '>')+ la +'</div>').join(' ');
    },{
        overlapFactor: 0.3,
        probabilityThreshold: 0.9
    });
}