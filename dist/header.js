System.register(['aurelia-framework', '../molecules/nav'], function (_export, _context) {
  "use strict";

  var useView, Nav, _dec, _class, Header;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      useView = _aureliaFramework.useView;
    }, function (_moleculesNav) {
      Nav = _moleculesNav.Nav;
    }],
    execute: function () {
      _export('Header', Header = (_dec = useView('header.html'), _dec(_class = function Header() {
        _classCallCheck(this, Header);
      }) || _class));

      _export('Header', Header);
    }
  };
});
//# sourceMappingURL=header.js.map
