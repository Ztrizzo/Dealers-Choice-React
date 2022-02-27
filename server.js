const express = require('express');
const app = express();
const {Movie, Director, syncAndSeed} = require('./db/db.js');
const path = require('path');

const PORT = process.env.PORT || 3000;



async function init() {
    await syncAndSeed();
    app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
}
init();

app.use(express.static('./dist'));
app.use(express.static('./src'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.get('/api/movies', async (req, res, next) => {
    try{
        const movies = await Movie.findAll({include: [Director]});
        res.send(movies);
    }
    catch(error){
        next(error);
    }

})
