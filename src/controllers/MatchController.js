const Matches = require('../classes/Match');

module.exports = {
    post(req, res) {
        try{
            const match = Matches.create(req.body);

            res.status(201).send('Partida criada!');
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
        const matches = Matches.findAll();
        res.status(200).send(matches);
    },

    getById (req, res){
        let id = req.params.id;
        res.status(200).send(`Rota GET com ID! ${id}`);
    }
}