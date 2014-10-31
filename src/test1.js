define(function(require, exports, module) {
    var test1 = {
        changeColor: function($dom) {
            $dom.css('color', 'blue');
        }
    };
    module.exports = test1;
});
