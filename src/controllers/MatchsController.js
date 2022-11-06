const Matchs = require('../classes/Matchs');

module.exports = {
    async post(req, res) {
        try{
            await Matchs.create(req.body);

            res.status(201).send('Partida criada!');
        }catch(e){
            res.status(500).send(e);
        }
    },
    
    async put(req, res){
        try{
            await Matchs.update(req.body, {
                where: {
                  id: req.params.id
                }
            });

            res.status(200).send("Sucesso!");
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async delete (req, res){
        try{
            await Matchs.destroy({
                where: {
                  id: req.params.id
                }
            });

            res.status(200).send("Sucesso!");
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getAll(req, res){
        try{
            const matchs = await Matchs.findAll();
            res.status(200).json(matchs);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getById (req, res){
        try{
            const match = await Matchs.findOne({ where: { id: req.params.id } });
            res.status(200).send(match);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    }
}