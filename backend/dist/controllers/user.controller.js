"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.loginUser = exports.registerUser = void 0;
// import User from '../models/user.model'
const uuid_1 = require("uuid");
const dbConnection_1 = __importDefault(require("../dbHelper/dbConnection"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const user = {
            id: (0, uuid_1.v4)(),
            username: username,
            email: email,
            password: hashedPassword
        };
        if (dbConnection_1.default.checkConnection()) {
            const newUser = yield dbConnection_1.default.exec('sp_InsertOrUpdateUser', { id: user.id, username: user.username, email: user.email, password: user.password });
            if (newUser) {
                const token = jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET, { expiresIn: '1d' });
                res.status(201).json({ token });
            }
            else {
                res.status(422).json({ message: 'Error creating user' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.registerUser = registerUser;
// Log in User
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (dbConnection_1.default.checkConnection()) {
            const user = yield dbConnection_1.default.exec('sp_GetUserByEmail', { email: email });
            if (user.length > 0) {
                const validPassword = yield bcrypt_1.default.compare(password, user[0].password);
                if (validPassword) {
                    const token = jsonwebtoken_1.default.sign(user[0], process.env.JWT_SECRET, { expiresIn: '1d' });
                    res.status(201).json({ 'token': token, user: { id: user[0].id, username: user[0].username, email: user[0].email, isAdmin: user[0].isAdmin } });
                }
                else {
                    res.status(500).json({ message: 'Invalid password' });
                }
            }
            else {
                res.status(500).json({ message: 'Invalid email' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.loginUser = loginUser;
// Get user
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (dbConnection_1.default.checkConnection()) {
            const user = yield dbConnection_1.default.exec('sp_GetUserById', { id: id });
            if (user) {
                res.status(200).json({ id: user[0].id, username: user[0].username, email: user[0].email, isAdmin: user[0].isAdmin });
            }
            else {
                res.status(404).json({ message: 'User found' });
            }
        }
        else {
            res.status(500).json({ message: 'Error connecting to database' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUserById = getUserById;
