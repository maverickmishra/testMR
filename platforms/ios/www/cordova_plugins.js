cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "phonegap-plugin-media-stream.MediaDevices",
        "file": "plugins/phonegap-plugin-media-stream/www/MediaDevices.js",
        "pluginId": "phonegap-plugin-media-stream",
        "clobbers": [
            "navigator.mediaDevices"
        ]
    },
    {
        "id": "phonegap-plugin-media-stream.MediaStream",
        "file": "plugins/phonegap-plugin-media-stream/www/MediaStream.js",
        "pluginId": "phonegap-plugin-media-stream",
        "clobbers": [
            "MediaStream"
        ]
    },
    {
        "id": "phonegap-plugin-media-recorder.MediaRecorder",
        "file": "plugins/phonegap-plugin-media-recorder/www/MediaRecorder.js",
        "pluginId": "phonegap-plugin-media-recorder",
        "clobbers": [
            "MediaRecorder"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "es6-promise-plugin": "4.1.0",
    "cordova-plugin-compat": "1.1.0",
    "phonegap-plugin-media-stream": "1.1.1",
    "phonegap-plugin-media-recorder": "0.0.1"
};
// BOTTOM OF METADATA
});