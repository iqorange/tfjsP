import * as tf from "@tensorflow/tfjs";

const input = [1, 2, 3, 4];
const w = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]];
const output = [0, 0, 0, 0];
tf.tensor(w).dot(tf.tensor(input)).
print();