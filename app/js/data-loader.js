var JSContext = require("./common/jscontext.js");

var buildDummyJSContext = function(profileType){
    var profile = {};
    switch(profileType){
        case("optimal"):
            profile = require("../fixtures/profile-optimal.json");
            break;
        case("minimal"):
            profile = require("../fixtures/profile-minimal.json");
            break;
        case("edge"):
            profile = require("../fixtures/profile-edge-cases.json");
            break;
        default:
            profile = require("../fixtures/profile-optimal.json");
            break;
    }
    var JSContext = {
        base_link: "test",
        org_link: "test",
        posts : require("../fixtures/posts.json"),
        events : require("../fixtures/events.json"),
        theme_data : require("../fixtures/theme-data.json"),
        profile : profile
    }
    return JSContext;
}

var initJSContext = function(){
    var profileType = "edge";
    if (!window.JSContext){
        JSContext.loadData(buildDummyJSContext("optimal"))
    }
}

module.exports = {
    init: function(){
        initJSContext();
    }
}
