const { query } = require('express');
const knex = require('../knex');


class Location {
    constructor(id, borough, neighborhood, complex, building) {
        this.id = id;
        this.borough = borough;
        this.neighborhood = neighborhood;
        this.complex = complex;
        this.building = building;
    }

    static async getAllBorough() {
        const query = `SELECT borough FROM location;`
        const { rows } = await knex.raw(query);

        return rows[0];
    }

    static async getAllNeighborhoodsBasedOnBorough(borough) {
        const query = `
        SELECT neighborhood FROM location
        WHERE borough = ?
        `
        const { rows } = await knex.raw(query, [borough]);
        return rows[0];
    }

    static async getAllComplexBasedOnNeighborhoods(neighborhood) {
        const query = `
        SELECT complex FROM location
        WHERE neighborhood = ?;
        `
        const { rows } = await knex.raw(query, [neighborhood])
        return rows[0];
    }
}

module.exports = Location;