const { BelongsTo } = require('sequelize');
const Matchs = require('../classes/Matchs');
const Teams = require('../classes/Teams');
const WorldCups = require('../classes/WorldCups');

module.exports = {
    async post(req, res) {
        try{
            if(req.body && Array.isArray(req.body)){
                await req.body.forEach(team => {
                    Matchs.create(team);
                });
            }else
                await Matchs.create(req.body);

            res.status(201).send('Time(s) criada!');
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
            const matchs = await Matchs.findAll({
                include:[
                    {
                        model: Teams,
                        association: new BelongsTo(Matchs, Teams, {foreignKey:"idTeam1",as:"Team1"}),
                    },
                    {
                        model: Teams,
                        association: new BelongsTo(Matchs, Teams, {foreignKey:"idTeam2",as:"Team2"}),
                    },
                    {
                        model: WorldCups,
                        association: new BelongsTo(Matchs, WorldCups, {foreignKey:"idWorldCup"}),
                    },
                ]
            });
            res.status(200).json(matchs);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getById (req, res){
        try{
            const match = await Matchs.findOne({ 
                where: { id: req.params.id },
                include:[
                    {
                        model: Teams,
                        association: new BelongsTo(Matchs, Teams, {foreignKey:"idTeam1",as:"Team1"}),
                    },
                    {
                        model: Teams,
                        association: new BelongsTo(Matchs, Teams, {foreignKey:"idTeam2",as:"Team2"}),
                    },
                    {
                        model: WorldCups,
                        association: new BelongsTo(Matchs, WorldCups, {foreignKey:"idWorldCup"}),
                    },
                ]
            });
            res.status(200).send(match);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    }
}