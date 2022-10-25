const WorldCups = require('../classes/WorldCups');

module.exports = {
    post(req, res) {
        try{
            const worldCup = WorldCups.create(req.body);

            res.status(201).send('Copa do mundo criada!');
        }catch(e){
            res.status(500).send(e);
        }
    },
    
    put(req, res){
        let id = req.params.id;
        
        res.status(201).send(`Rota PUT com ID! --> ${id}`);
    },

    delete (req, res){
        let id = req.params.id;
        res.status(200).send(`Rota DELETE com ID! --> ${id}`);
    },

    getAll(req, res){
        const worldCups = WorldCups.findAll();
        res.status(200).send(worldCups);
    },

    getById (req, res){
        let id = req.params.id;
        res.status(200).send(`Rota GET com ID! ${id}`);
    }
}