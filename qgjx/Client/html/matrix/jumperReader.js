// 加载与测试端
// parcel jumper.html
// hs ../../data/speech/ --cors

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
    console.log('loaded');
    transferRecognizer = recognizer.createTransfer('DummyJerry');
    // 读取录好的数据文件
    const res = await fetch(MODEL_PATH + '/jumper/data.bin')
    const arrayBuffer = await res.arrayBuffer();
    console.log(arrayBuffer);
    // 加载数据
    transferRecognizer.loadExamples(arrayBuffer);
    console.log(transferRecognizer.countExamples())
    // 训练
    await transferRecognizer.train({epochs: 33});
    console.log('训练完成！')
}

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
            // 预测结果 TODO >>>
            console.log(labels[index]);
            var r=confirm(labels[index]);
            if (r) window.jump(labels[index]);
        }, {
            // 识别频率[0, 1)
            overlapFactor: 0,
            // 可能性阈值
            probabilityThreshold: 0.75
        });
    } else {
        transferRecognizer.stopListening();
    }
};