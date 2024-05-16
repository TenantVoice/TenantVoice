const knex = require('knex');

class Upvote {

    static async incrementUpVote(id) {
        const query = `UPDATE upvote SET amount = amount + 1 WHERE id = ?`
        const { rows } = knex.raw(query, [id])
        return rows[0];
    }

}


module.export = Upvote;