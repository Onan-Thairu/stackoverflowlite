"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
const user_router_1 = __importDefault(require("./routers/user.router"));
const question_router_1 = __importDefault(require("./routers/question.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/users', user_router_1.default);
app.use('/api/questions', question_router_1.default);
const PORT = process.env.PORT || 5052;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
// async function testConnection() {
//   try {
//     const pool = await mssql.connect(sqlConfig)
//     const result = await pool.request().query('SELECT 1 as result')
//     console.log(result.recordset[0].result)
//   } catch (error) {
//     console.log(error)
//   }
// }
// testConnection()
