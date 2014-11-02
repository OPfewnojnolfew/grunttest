define(function(require, exports, module) {
    var test1 = require('./test1'),
        test2 = require('./test2'),
        test3 = require('./test3');

    function init() {
        $(function() {
            var $p = $('p');
            $('.changeblue').on('click', function() {
                test1.changeColor($p);
            });
            $('.changered').on('click', function() {
                test2.changeColor($p);
            });
            $('.changeblack').on('click', function() {
                test3.changeColor($p);
            });
        });
    }
    exports.init = init;
});
