class DemoController {
    constructor() {

    }

    async demo(ctx) {
        ctx.body = {
            msg: 'bodey message'
        }
    }
}

export default new DemoController();