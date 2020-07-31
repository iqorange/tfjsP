import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import {getData} from './data.js';

window.onload = async () => {
    const data = getData(500);
    console.log(data);
    tfvis.render.scatterplot(
        {name: 'XOR 训练数据'},
        {
            values: [
                data.filter(p => p.label === 1),
                data.filter(p => p.label ===0)
            ]
        }
    );
    // 初始化神经网络模型
    const model = tf.sequential();
    // 设计隐藏层
    model.add(tf.layers.dense({
        units: 4,
        inputShape: [2],
        activation: 'relu'
    }));
    // model.add(tf.layers.dense({
    //     units: 2,
    //     activation: 'relu'
    // }));
    // 设计输出层
    model.add(tf.layers.dense({
        units: 1,
        activation: 'sigmoid'
    }));
    // 损失函数和优化器
    model.compile({
        loss: tf.losses.logLoss,
        optimizer: tf.train.adam(0.1)
    });
    // 训练与预测
    const inputs = tf.tensor(data.map(p => [p.x, p.y]));
    const labels = tf.tensor(data.map(p => p.label));
    await model.fit(inputs, labels, {
        epochs: 10,
        callbacks: tfvis.show.fitCallbacks(
            {name: '训练过程'},
            ['loss']
        )
    });
    window.predict = async (form) => {
        const pred = await model.predict(tf.tensor([[form.x.value * 1, form.y.value * 1]]));
        alert('预测结果：'+pred.dataSync()[0]);
    }
};