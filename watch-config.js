"use strict";
var config = require("@ionic/app-scripts/config/watch.config");
config.srcFiles.paths = ["{{SRC}}/**/*.(ts|js|html|s(c|a)ss)", "{{ROOT}}/node_modules/**/*.(ts|js|html|s(c|a)ss)"];
module.exports = config;
