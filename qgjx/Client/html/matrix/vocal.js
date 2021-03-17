// 录制端
// parcel base.html // 1234
// hs ../../data/speech/ --cors // (http-server) 8080

import * as speechCommands from '@tensorflow-models/speech-commands'
import * as tfvis from '@tensorflow/tfjs-vis'

const MODEL_PATH = 'http://127.0.0.1:8080';
let transferRecognizer;
window.onload = async () =>{
    // 识别器
    const recognizer = speechCommands.create(
        'BROWSER_FFT',
        null,
        MODEL_PATH + '/model.json',
        MODEL_PATH + '/metadata.json'
    );
    await recognizer.ensureModelLoaded();
    // 创建迁移学习器
    transferRecognizer = recognizer.createTransfer('DummyJerry');
};

// 构建数据集
window.collect = async (btn) => {
    btn.disabled = true;
    const label = btn.innerText;
    await transferRecognizer.collectExample(
        label === '环境音' ? '_background_noise_' : label
    );
    btn.disabled = false;
    console.log(transferRecognizer.countExamples())
    document.querySelector('#count').innerHTML = JSON.stringify(transferRecognizer.countExamples(), null, 2);
};

// 训练语音
window.train = async () => {
    await transferRecognizer.train({
        epochs: 33,
        callback: tfvis.show.fitCallbacks(
            { name: '训练效果' },
            ['loss', 'acc'], // 准确度
            { callbacks: ['onEpochEnd'] }
        )
    });
};

// 监听开关
window.toggle = async (checked) => {
    console.log(checked)
    if (checked) {
        await transferRecognizer.listen(result => {
            // 回调函数
            const { scores } = result;
            // 获取所有的labels
            const labels = transferRecognizer.wordLabels();
            // 获取最大可能性index
            const index = scores.indexOf(Math.max(...scores));
            console.log(labels[index]);
        }, {
            // 识别频率[0, 1)
            overlapFactor: 0,
            // 可能性阈值
            probabilityThreshold: 0.5
        });
    } else {
        transferRecognizer.stopListening();
    }
};

// 保存
window.save = () => {
    const arrayBuffer = transferRecognizer.serializeExamples();
    const blob = new Blob([arrayBuffer]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.bin';
    link.click();
};
