seajs.config({
    base: "/dist",
    alias: {
        "jquery": "/util/jquery"
    },
    preload: [
        window.jQuery ? "" : "jquery"
    ]
})
