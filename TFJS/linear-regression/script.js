/**
 * 线性回归
 * @author Jerry
 */

import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

window.onload = async () => {
    const xs = [1, 2, 3, 4];
    const ys = [1, 3, 5, 7];
    tfvis.render.scatterplot(
        {name: '线性回归训练集'},
        {values: xs.map((x, i) => ({x, y: ys[i]}))},
        {xAxisDomain: [0,5], yAxisDomain: [0,8] }
    );
    //初始化
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    //均方误差损失函数：meanSquaredError，优化器：optimizer，随机梯度下降(SGD), adam
    model.compile({loss: tf.losses.meanSquaredError, optimizer:tf.train.sgd(0.1)});
    //训练可视化
    const inputs = tf.tensor(xs);
    const labels = tf.tensor(ys);
    //超参数
    await model.fit(inputs, labels, {
        batchSize: 4,
        epochs: 200,
        callbacks: tfvis.show.fitCallbacks(
            {name: '训练过程'},
            ['loss']
        )
    });
    //预测
    const output = model.predict(tf.tensor([5]));
    output.print();
    console.log(output.dataSync());
}