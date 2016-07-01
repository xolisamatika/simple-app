"use strict";
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () {
            return 'http://localhost:80/simple-app/backend/services/api.php?';
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
exports.AppSettings = AppSettings;
//# sourceMappingURL=app.settings.js.map