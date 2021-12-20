function max(a, b) {
    console.log("tools库，调用函数add,入参：%d, %d",a ,b)
    return Math.max(a, b);
}
function min(a, b) {
    console.log("tools库，调用函数min,入参：%d, %d",a ,b)
    return Math.min(a, b);
}
 
module.exports = { max, min };