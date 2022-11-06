const WorldCups = require('../classes/WorldCups');

module.exports = {
    async post(req, res) {
        try{
            await WorldCups.create(req.body);

            res.status(201).send('Copa do mundo criada!');
        }catch(e){
            res.status(500).send(e);
        }
    },
    
    async put(req, res){
        try{
            await WorldCups.update(req.body, {
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
            await WorldCups.destroy({
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
            const worldcups = await WorldCups.findAll();
            res.status(200).json(worldcups);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getById (req, res){
        try{
            const worldcup = await WorldCups.findOne({ where: { id: req.params.id } });
            res.status(200).send(worldcup);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    }
}