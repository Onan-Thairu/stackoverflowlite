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
const mssql_1 = __importDefault(require("mssql"));
const db_config_1 = __importDefault(require("../config/db.config"));
class DatabaseConnection {
    constructor() {
        this.pool = mssql_1.default.connect(db_config_1.default);
    }
    createRequest(request, inputParams) {
        let keys = Object.keys(inputParams);
        keys.map(keyName => request.input(keyName, inputParams[keyName]));
        return request;
    }
    exec(sp, inputParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let emptyRequest = yield (yield this.pool).request();
            let request = this.createRequest(emptyRequest, inputParams);
            let result = yield (yield request.execute(sp)).recordset;
            return result;
        });
    }
    checkConnection() {
        return this.pool.then(() => {
            return true;
        }).catch(() => false);
    }
}
let DB = new DatabaseConnection();
exports.default = DB;
