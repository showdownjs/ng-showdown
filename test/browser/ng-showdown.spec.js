describe('Showdown', function () {
  var expect = window.expect,
    showdownProvider;
  beforeEach(function () {

    module('ng-showdown', function ($showdownProvider) {
      showdownProvider = $showdownProvider;
    });

  });

  afterEach(function () {

  });

  describe('Showdown directive', function () {
    var scope,
      compile,
      element,
      validTemplate = '<div sd-model-to-html="someData"></div>',
      markdown = '# Title',
      htmlExpeted = '<h1 id="title">Title</h1>';

    beforeEach(function () {
      // Inject in angular constructs otherwise,
      //  you would need to inject these into each test
      inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
      });
    });

    // JavaScript
    it('should have expected isolated scope', function () {
      element = createDirective(markdown);
      var isolated = element.isolateScope();
      expect(isolated.model).to.be.equal(markdown);
    });

    it('should parse markdown', function () {
      element = createDirective(markdown);
      expect(element.html()).to.be.equal(htmlExpeted);
    });

    function createDirective(data, template) {
      var elm;

      // Setup scope state
      scope.someData = data;

      // Create directive
      elm = compile(template || validTemplate)(scope);

      // Trigger watchers
      scope.$apply();

      // Return
      return elm;
    }
  });

  describe('Showdown Provider', function () {

    it('should not have a test variable', function () {
      expect(showdownProvider.$get().test).to.be.an('undefined');
    });

  });

  describe('Showdown filter', function () {
    var sdStripHtmlFilter;

    beforeEach(function () {

      inject(function ($filter) {
        sdStripHtmlFilter = $filter('sdStripHtml');
      });

    });

    it('should exist', function () {
      expect(!!sdStripHtmlFilter).to.be.equal(true);
    });

    //Not testing full functionality here, the showdown provider gets those tests
    it('should strip html', function () {
      expect(sdStripHtmlFilter('<p>Foo bar</p>')).to.be.equal('Foo bar');
    });

  });

});
