cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "phonegap-plugin-contentsync.ContentSync",
      "file": "plugins/phonegap-plugin-contentsync/www/index.js",
      "pluginId": "phonegap-plugin-contentsync",
      "clobbers": [
        "window.ContentSync",
        "window.Zip",
        "window.zip"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-contentsync": "1.4.2"
  };
});