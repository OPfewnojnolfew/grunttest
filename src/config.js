seajs.config({
    alias: {
        "test1": "/assets/src/test1",
        "test2": "/assets/src/test2",
        "test3": "/assets/src/test3",
        "maintest": "/assets/src/maintest",
        "jquery": "/assets/util/jquery"
    },
    preload: [
        window.jQuery ? "" : "jquery"
    ]
});
