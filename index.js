const chp = require("child_process")
const fs = require("fs")


module.exports = {
    run  : function (JavaScript, ...option) {
        if (JavaScript instanceof Array || JavaScript instanceof Object) throw Error("JavaScriptCode must be String")
        fs.writeFileSync("runjs.temp", JavaScript)
        const out = chp.execSync("node runjs.temp")
        if (option[0] === true) {
            return out.toString()
        }else {
            fs.unlinkSync("runjs.temp")
            return out.toString()
        }
    },
    runFile : function (FilePath) {
        if (!fs.existsSync(FilePath)) {
            console.log("no such file")
            return
        }
        return chp.execSync("node " + FilePath).toString()
    }
}