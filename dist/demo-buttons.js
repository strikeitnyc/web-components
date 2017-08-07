System.register([], function (_export, _context) {
  "use strict";

  var DemoButtons;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("DemoButtons", DemoButtons = function () {
        function DemoButtons() {
          _classCallCheck(this, DemoButtons);
        }

        DemoButtons.prototype.activate = function activate(model) {
          this.buttons = model;
        };

        return DemoButtons;
      }());

      _export("DemoButtons", DemoButtons);
    }
  };
});
//# sourceMappingURL=demo-buttons.js.map
