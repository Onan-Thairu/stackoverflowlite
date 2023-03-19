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
exports.addAnswer = void 0;
const uuid_1 = require("uuid");
const answer_validate_1 = require("../helpers/answer.validate");
const dbConnection_1 = __importDefault(require("../dbHelper/dbConnection"));
// Add a question
const addAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = {
            id: (0, uuid_1.v4)(),
            description: req.body.description,
            question_id: req.body.question_id,
            created_at: new Date().toLocaleDateString(),
            user_id: req.body.user_id,
            isAccepted: req.body.isAccepted
        };
        const { error } = (0, answer_validate_1.validateAnswer)(answer);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (dbConnection_1.default.checkConnection()) {
            const savedAnswer = yield dbConnection_1.default.exec("sp_CreateAnswer", Object.assign({}, answer));
            if (savedAnswer) {
                res.status(201).send(savedAnswer);
            }
            else {
                res.status(422).send({ message: "Error creating answer" });
            }
        }
        else {
            res.status(500).send({ message: "Error connecting to database" });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addAnswer = addAnswer;
