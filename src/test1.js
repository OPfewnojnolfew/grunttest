define(function(require, exports, module) {
    var test4 = require('./test4');
    var test1 = {
        changeColor: function($dom) {
            $dom.css('color', 'blue');
            test4.changeColor();
        }
    };
    module.exports = test1;
});
