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
exports.deleteComment = exports.updateComment = exports.addComment = exports.getAnswerComments = void 0;
const uuid_1 = require("uuid");
const comment_validate_1 = require("../helpers/comment.validate");
const dbConnection_1 = __importDefault(require("../dbHelper/dbConnection"));
const getAnswerComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (dbConnection_1.default.checkConnection()) {
            const answer_id = req.params.answer_id;
            const comments = yield dbConnection_1.default.exec("sp_GetCommentsByAnswer", { answer_id });
            if (comments) {
                if (comments.length > 0) {
                    res.status(200).json(comments);
                }
                else {
                    res.status(200).json({ message: "No comments found!" });
                }
            }
            else {
                res.status(500).json({ message: "Error getting comments" });
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
exports.getAnswerComments = getAnswerComments;
// Add a comment
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = {
            id: (0, uuid_1.v4)(),
            description: req.body.description,
            answer_id: req.body.answer_id,
            created_at: new Date().toLocaleDateString(),
            user_id: req.body.user_id,
        };
        const { error } = (0, comment_validate_1.validateComment)(comment);
        if (error)
            return res.status(400).send(error.details[0].message);
        if (dbConnection_1.default.checkConnection()) {
            const savedComment = yield dbConnection_1.default.exec("sp_CreateComment", Object.assign({}, comment));
            if (savedComment) {
                res.status(201).send(savedComment);
            }
            else {
                res.status(422).send({ message: "Error creating comment" });
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
exports.addComment = addComment;
// Update a comment
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.comment_id;
        const commentToUpdate = yield dbConnection_1.default.exec("sp_GetCommentById", { id });
        if (commentToUpdate) {
            if (commentToUpdate.length > 0) {
                const updatedComment = Object.assign(Object.assign(Object.assign({}, commentToUpdate[0]), req.body), { created_at: new Date().toLocaleDateString() });
                const { error } = (0, comment_validate_1.validateComment)(updatedComment);
                if (error)
                    return res.status(400).json({ message: error.details[0].message });
                if (dbConnection_1.default.checkConnection()) {
                    const updated = yield dbConnection_1.default.exec("sp_UpdateComment", {
                        id: updatedComment.id,
                        description: updatedComment.description,
                        created_at: updatedComment.created_at,
                    });
                    if (updated) {
                        res.status(200).json(updated);
                    }
                    else {
                        res.status(500).json({ message: "Error updating comment" });
                    }
                }
                else {
                    res.status(500).json({ message: "Error connecting to database" });
                }
            }
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateComment = updateComment;
// Delete a comment
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (dbConnection_1.default.checkConnection()) {
            const result = yield dbConnection_1.default.exec("sp_DeleteComment", { id });
            if (result && result[0].success) {
                res.status(200).json({ message: "Comment Deleted" });
            }
            else {
                res.status(200).json({ message: "Comment not found" });
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
exports.deleteComment = deleteComment;
