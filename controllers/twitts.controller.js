//создание твитта
//удаление твитта
//изменение твитта
//показ всех твиттов
//лайки
const Twitt = require("../models/Twitt.model");

module.exports.twittController = {
    getTwitt: async (req, res) => {
        const data = await Twitt.find({});
        res.json(data);
    },
    createTwitt: async (req, res) => {
        Twitt.create({
            twitt: req.body.twitt,
            userId: req.body.user,
            like: req.body.like
        }).then(() => {
            res.json("Твитт создан!")
        })
    },
    deleteTwitt: async (req, res) => {
        const data = await Twitt.findByIdAndRemove(req.params.id);
        res.json("Твитт удален!")
    },
    patchTwitt: async (req, res) => {
        const data = await Twitt.findByIdAndUpdate(req.params.id,{
            twitt: req.body.twitt,
            userId: req.body.userId,
            like: req.body.like
        }).then(() =>{
            res.json("Твитт изменен!")
        });
    },
    patchLike: async (req, res) => {
        const data = await Twitt.findByIdAndUpdate(req.params.id, {$push: {like: req.params.userId}});
        res.json(data);
    }
}