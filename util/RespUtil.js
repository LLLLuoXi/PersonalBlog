const { response } = require("express");

function writeResult(status, msg, data) {
    return JSON.stringify({ status: status, msg: msg, data: data })
}

module.exports.writeResult = writeResult