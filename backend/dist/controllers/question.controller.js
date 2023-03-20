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
exports.deleteQuestion = exports.updateQuestion = exports.getQuestionById = exports.addQuestion = exports.getAllQuestions = void 0;
const uuid_1 = require("uuid");
const question_validate_1 = require("../helpers/question.validate");
const dbConnection_1 = __importDefault(require("../dbHelper/dbConnection"));
// Get all questions
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (dbConnection_1.default.checkConnection()) {
            const questions = yield dbConnection_1.default.exec("sp_GetAllQuestions", {});
            if (questions) {
                if (questions.length > 0) {
                    res.status(200).json(questions);
                }
                else {
                    res.status(200).json({ message: "No questions found" });
                }
            }
            else {
                res.status(500).json({ message: "Error getting answers" });
            }
        }
        else {
            res.status(500).json({ message: "Error connecting to database" });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllQuestions = getAllQuestions;
// Add a question
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = {
            id: (0, uuid_1.v4)(),
            title: req.body.title,
            description: req.body.description,
            tried: req.body.tried,
            created_at: new Date().toLocaleDateString(),
            user_id: req.body.user_id
        };
        const { error } = (0, question_validate_1.validateQuestion)(question);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (dbConnection_1.default.checkConnection()) {
            const savedQuestion = yield dbConnection_1.default.exec("sp_CreateQuestion", Object.assign({}, question));
            if (savedQuestion) {
                res.status(201).send(savedQuestion);
            }
            else {
                res.status(422).send({ message: "Error creating question" });
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
exports.addQuestion = addQuestion;
// Get question by id
const getQuestionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (dbConnection_1.default.checkConnection()) {
            const question = yield dbConnection_1.default.exec("sp_GetQuestionById", { id });
            if (question) {
                if (question.length > 0) {
                    res.status(200).send(question);
                }
                else {
                    res.status(200).send("Question does not exist");
                }
            }
            else {
                res.status(500).send("Error getting question");
            }
        }
        else {
            res.status(500).send("Error connecting to database");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getQuestionById = getQuestionById;
// Update a question
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const questionToUpdate = yield dbConnection_1.default.exec("sp_GetQuestionById", { id });
        if (questionToUpdate) {
            if (questionToUpdate.length > 0) {
                const updatedQuestion = Object.assign(Object.assign(Object.assign({}, questionToUpdate[0]), req.body), { created_at: new Date().toLocaleDateString() });
                const { error } = (0, question_validate_1.validateQuestion)(updatedQuestion);
                if (error)
                    return res.status(400).json({ message: error.details[0].message });
                if (dbConnection_1.default.checkConnection()) {
                    const updated = yield dbConnection_1.default.exec("sp_UpdateQuestion", {
                        id: updatedQuestion.id,
                        title: updatedQuestion.title,
                        description: updatedQuestion.description,
                        tried: updatedQuestion.tried,
                        created_at: updatedQuestion.created_at
                    });
                    if (updated) {
                        res.status(200).json(updated);
                    }
                    else {
                        res.status(500).json({ message: "Error updating question" });
                    }
                }
                else {
                    res.status(500).json({ message: "Error connecting to product" });
                }
            }
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateQuestion = updateQuestion;
// Delete a question
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (dbConnection_1.default.checkConnection()) {
            const result = yield dbConnection_1.default.exec("sp_DeleteQuestion", { id });
            if (result && result[0].success) {
                res.status(200).json({ message: "Question Deleted" });
            }
            else {
                res.status(200).json({ message: "Question not found" });
            }
        }
        else {
            res.status(500).json({ message: "Error connecting to database" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteQuestion = deleteQuestion;
