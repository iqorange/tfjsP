/**
 * 归一化
 * @author Jerry
 */
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

window.onload = async() =>{
    const heights = [150, 160, 170];
    const weights = [40, 50, 60];

    tfvis.render.scatterplot(
        {name: '升高体重训练数据'},
        {values: heights.map((x, i) => ({x, y: weights[i]}))},
        {
            xAxisDomain: [140, 180],
            yAxisDomain: [30, 70]
        }
    );

    const inputs = tf.tensor(heights).sub(150).div(20);
    const labels = tf.tensor(weights).sub(40).div(20);

    //初始化
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    //均方误差损失函数：meanSquaredError，优化器：optimizer，随机梯度下降(SGD), adam
    model.compile({loss: tf.losses.meanSquaredError, optimizer:tf.train.sgd(0.1)});
    //训练可视化
    //超参数
    await model.fit(inputs, labels, {
        batchSize: 3,
        epochs: 200,
        callbacks: tfvis.show.fitCallbacks(
            {name: '训练过程'},
            ['loss']
        )
    });
    //预测
    const output = model.predict(tf.tensor([180]).sub(150).div(20));
    output.print();
    alert(output.mul(20).add(40).dataSync()[0])
};