const Play = require("./../models/Play");

class ToPlayController {
    async store(req, res) {
        const { title, statement, instructions, answer } = await Play.create(
            req.body
        );
        return res.status(200).json({ title, statement, instructions, answer });
    }

    async index(req, res) {
        const play = await Play.findAll();
        return res.json(play);
    }

    update() {}

    destroy() {}
}

module.exports = new ToPlayController();
