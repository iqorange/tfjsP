/**
 * 逻辑回归
 * @author Jerry
 */

import  * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { getData } from './data.js';

window.onload = async ()=>{
    const data = getData(500);
    // 展示数据
    tfvis.render.scatterplot(
        {name: '逻辑回归训练数据'},
        {
            values: [
                data.filter(p => p.label === 1),
                data.filter(p => p.label === 0)
            ]
        }
    );
    // 激活一个神经元
    const model = tf.sequential();
    model.add(tf.layers.dense({
        units: 1,
        inputShape: [2],
        activation: 'sigmoid'
    }));
    // 对数损失logLoss
    model.compile({loss: tf.losses.logLoss, optimizer: tf.train.adam(0.1)});
    // 转换数据模型
    const inputs = tf.tensor(data.map(p => [p.x, p.y]));
    const labels = tf.tensor(data.map(p => p.label));
    // 训练模型
    await model.fit(inputs, labels, {
        batchSize: 40,
        epochs: 50,
        callbacks: tfvis.show.fitCallbacks(
            {name: '训练过程'},
            ['loss']
        )
    });
    // 进行预测
    window.predict = (form) => {
        const pred = model.predict(tf.tensor([[form.x.value * 1, form.y.value * 1]]));
        alert('预测结果：'+pred.dataSync()[0]);
    }
};