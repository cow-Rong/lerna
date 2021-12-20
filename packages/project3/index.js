const { min } = require('project1');
const ui = require("project2");
 
function app() {
    console.log("app主入口");
    let minNum = min(2, 5);
    ui(minNum);
}
 
app();