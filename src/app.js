export class App {
  configureRouter(config, router) {
    config.title = 'Atomic Design App';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'atoms',         name: 'atoms',        moduleId: 'atoms',        nav: true, title: 'Atoms' },
      { route: 'molecules',     name: 'molecules',    moduleId: 'molecules',    nav: true, title: 'Molecules' },
      { route: 'organisms',     name: 'organisms',    moduleId: 'organisms',    nav: true, title: 'Organisms' }
    ]);

    this.router = router;
  }
}
