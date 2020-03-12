export function file2img(f) {
    // About Promise: https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.width = 224;
            img.height = 224;
            img.onload = () => resolve(img);
        }
    });
}