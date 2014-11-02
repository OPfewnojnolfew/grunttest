define(function(require, exports, module) {
    var test4 = require('./test4');
    var test2 = {
        changeColor: function($dom) {
            $dom.css('color', 'red');
            test4.changeColor($dom);
        }
    };
    module.exports = test2;
});
