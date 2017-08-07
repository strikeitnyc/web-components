System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Atomic Design App';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'atoms', name: 'atoms', moduleId: 'atoms', nav: true, title: 'Atoms' }, { route: 'molecules', name: 'molecules', moduleId: 'molecules', nav: true, title: 'Molecules' }, { route: 'organisms', name: 'organisms', moduleId: 'organisms', nav: true, title: 'Organisms' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
