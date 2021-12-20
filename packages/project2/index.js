const { max } = require('project1');
 
function ui(result) {
    console.log("ui库，result入参:", result);
    console.log("ui库, 结果为："+ max(result, 10));
}
 
module.exports = ui;