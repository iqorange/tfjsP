import * as tf from '@tensorflow/tfjs';
import { IMAGENET_CLASSES } from './imagenet_classes';
import { file2img } from './utils';

const MOBILENET_MODEL_PATH = 'http://127.0.0.1:8080/mobilenet/web_model/model.json';
window.onload = async () => {
    // 加载与训练模型
    const model = await tf.loadLayersModel(MOBILENET_MODEL_PATH);
    // 进行预测
    window.predict = async (file) => {
            // 将图片文件转换为utiltyelement
            const img = await file2img(file);
            // 转换为tenser
            // tidy方法用于清除部分tenser，优化内存防止内存泄漏
            const pred = tf.tidy(() => {
                // 归一化与训练
                const input = tf.browser.fromPixels(img)
                .toFloat()
                .sub(255 / 2)
                .div(255 / 2)
                .reshape([1, 224, 224, 3]);
                return model.predict(input);
            });
            // 进行预测
            const index = pred.argMax(1).dataSync()[0];
            setTimeout(() => {
                alert('预测结果：'+IMAGENET_CLASSES[index]);
            }, 0);
    };
};