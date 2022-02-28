const {Sequelize, STRING, INTEGER, UUID, UUIDV4, TEXT} = require('sequelize');
const sequelize = new Sequelize('postgres://localhost/react_db');
const faker = require('faker');

const Movie = sequelize.define('Movie', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING
    },
    yearCreated: {
        type: INTEGER
    },
    description: {
        type: TEXT
    }
})

const Director = sequelize.define('Director', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING
    },
    country: {
        type: STRING
    }
})

Movie.belongsTo(Director);
Director.hasMany(Movie);


async function syncAndSeed() {
    await sequelize.sync({force: true});
    const qt = await Director.create({name: 'Quentin Tarantino', country: 'United States'});
    const ms = await Director.create({name: 'Martin Scorsese', country: 'United States'});
    const lvt = await Director.create({name: 'Lars von Trier', country: 'Denmark'});

    await Movie.create({name: 'Melancholia', yearCreated: 2011, DirectorId: lvt.id, description: faker.lorem.paragraph(3)});
    await Movie.create({name: 'Taxi Driver', yearCreated: 1976, DirectorId: ms.id, description: faker.lorem.paragraph(3)});
    await Movie.create({name: 'Goodfellas', yearCreated: 1990, DirectorId: ms.id, description: faker.lorem.paragraph(3)});
    await Movie.create({name: 'Pulp Fiction', yearCreated: 1994, DirectorId: qt.id, description: faker.lorem.paragraph(3)});


}

module.exports = {
    syncAndSeed,
    Movie,
    Director
}