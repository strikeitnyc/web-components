System.register([], function (_export, _context) {
  "use strict";

  var Atoms;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Atoms', Atoms = function Atoms() {
        _classCallCheck(this, Atoms);

        this.heading = 'Atoms';

        this.buttons = {
          type: [['c-button--primary c-button--pill', 'Primary Pill Button'], ['c-button--secondary c-button--pill', 'Secondary Pill Button'], ['c-button--primary c-button--hollow', 'Primary Hollow Button'], ['c-button--secondary c-button--hollow', 'Secondary Hollow Button']]
        };
      });

      _export('Atoms', Atoms);
    }
  };
});
//# sourceMappingURL=atoms.js.map
