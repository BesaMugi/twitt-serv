//создание пользователя
//удаление пользователя
//изменение пользователя
//вывод всех пользователей
//сохраненки
const User = require("../models/User.model");

module.exports.UserController = {
    getUser: async (req, res) => {
        const data = await User.find({});
        res.json(data);
    },
    getUserId: async (req, res) => {
        const data = await User.findById(req.body.id);
        res.json(data)
    },
    createUser: async (req, res) => {
        User.create({
            user: req.body.user,
            saves: req.body.saves
        }).then(() => {
            res.json("Пользователь создан!")
        })
    },
    deleteUser: async (req, res) => {
        const data = await User.findByIdAndRemove(req.params.id);
        res.json("Пользователь удален!")
    },
    patchUser: async (req, res) => {
        const data = await User.findByIdAndUpdate(req.params.id, {
            user: req.body.user,
            saves: req.body.saves
        }).then(() => {
            res.json("Пользователь изменен")
        })
    },
    patchUserSaves: async (req, res) => {
        const data = await User.findByIdAndUpdate(req.params.id, {$push: {saved: req.body.twittId}}, {new: true});
        res.json(data);
    },
    // getUserSaves: async (req, res) => {
    //     const data = await UserSaves.find(req.body.id).populate("saves");
    //     res.json(data);
    // }
}
