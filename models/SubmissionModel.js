// import { Sequelize, DataTypes } from "sequelize";
// import db from "../config/Database.js";
// import UserModel from "./UserModel.js";
const db = require('../config/Database');
const Sequelize = require('sequelize');
const {DataTypes} = Sequelize;



const SubmissionModel = db.define('submission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emailSubmitter: {
        type: DataTypes.STRING, // Mengganti kolom 'email' menjadi 'emailSubmitter'
        field: 'email', // Menyamakan field pada database dengan nama yang diinginkan
    },
    judul_film: DataTypes.STRING,
    bahasa: DataTypes.STRING,
    tahun: DataTypes.STRING,
    festival: DataTypes.STRING,
    kota: DataTypes.STRING,
    penghargaan: DataTypes.STRING,
    durasi: DataTypes.STRING,
    link_film: DataTypes.STRING,
    link_cover: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    suara: DataTypes.STRING,
    nama: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    kota_sutradara: DataTypes.STRING,
    foto: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    biografi: DataTypes.STRING,
    gender: DataTypes.STRING,
    nama_produksi: DataTypes.STRING,
    alamat_produksi: DataTypes.STRING,
    no_hp_produksi: DataTypes.STRING,
    provinsi_produksi: DataTypes.STRING,
    nama_produser: DataTypes.STRING,
    no_hp_produser: DataTypes.STRING
}, {
    freezeTableName: true
});

module.exports = SubmissionModel;
(async()=>{
    await db.sync();
})();