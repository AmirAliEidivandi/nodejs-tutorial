const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path.utils");
const filePath = path.join(rootDir, "data", "todos.json");

class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    save(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            // if (err) return [];

            const todos = JSON.parse(fileContent);
            todos.push(this);

            fs.writeFile(filePath, JSON.stringify(todos), (err) => {
                if (err) callback(err);
                callback([]);
            });
        });
    }

    static fetchAll(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) return [];

            const todos = JSON.parse(fileContent);
            callback(todos);
        });
    }
}

module.exports = Todo;
