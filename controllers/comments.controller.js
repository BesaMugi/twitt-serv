// создание коомента
// удаление коммента
// показ всех комментариев твитта
const Comment = require("../models/Comment.model");

module.exports.commentController = {
    getComment: async (req, res) => {
        const data = await Comment.find(req.body.id).populate("twitt userId");
        res.json(data);
    },
    createComment: async (req, res) => {
        Comment.create({
            text: req.body.text,
            twitt: req.body.twitt,
            userId: req.body.userId
        }).then(() => {
            res.json("Коммент добавлен!")
        })
    },
    deleteComment: async (req, res) => {
        const data = await Comment.findByIdAndRemove(req.params.id);
        res.json("Коммент удален!")
    }
}