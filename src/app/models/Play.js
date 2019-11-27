const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Play extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                statement: Sequelize.TEXT,
                instructions: Sequelize.TEXT,
                answer: Sequelize.STRING
            },
            {
                sequelize
            }
        );
        return this;
    }
}

module.exports = Play;
