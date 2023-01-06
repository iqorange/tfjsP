function initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE){
    // 创建着色器
    const  vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const  fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    // 指定着色器源码
    gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE);
    gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE);
    // 编译着色器
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    // 创建程序对象
    const program = gl.createProgram();
    // 将着色器注入程序
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // 链接程序
    gl.linkProgram(program);
    // 启用程序
    gl.useProgram(program);
    // 返回程序对象
    return program;
}