/**
 * @fileoverview Compact reporter
 * @author Allan Hortle
 */

"use strict";

var chalk = require('chalk');
var Table = require('cli-table');

module.exports = function(errors) {
    return errors.map(function(error){
        var table = new Table({
            chars: {
                "top": "",
                "top-mid": "",
                "top-left": "",
                "top-right": "",
                "bottom": "",
                "bottom-mid": "",
                "bottom-left": "",
                "bottom-right": "",
                "left": "",
                "left-mid": "",
                "mid": "",
                "mid-mid": "",
                "right": "",
                "right-mid": "",
                "middle": ""
            }
        });

        error.messages.forEach(function(message){
            table.push([
                chalk.reset("[" + message.line + "]"),
                chalk.yellow(message.message),
                chalk.black(message.ruleId)
            ]);
        });

        return table.toString();
    }).join("\n") + "\n";
};
