describe('Showdown', function () {
  var expect = window.expect,
    someProvider,
    somefilter;

  beforeEach(function () {

    module('ng-showdown');

    module(function ($showdownProvider) {
      someProvider = $showdownProvider;
    });

    inject(function ($filter) {
      somefilter = $filter('sdStripHtml');
    });
  });

  afterEach(function () {

  });

  describe('Showdown Provider', function () {
    it('should fail', function () {
      console.log(someProvider);
      expect(someProvider.$get().test).to.be.equal('test');
    });
  });

  describe('Showdown filter', function () {
    it('should exist', function () {
      expect(!!somefilter).to.be.equal(true);
    });

    //Not testing full functionality here, the showdown provider gets those tests
    it('should strip html', function () {
      expect(somefilter('<p>Foo bar</p>')).to.be.equal('Foo bar');
    });
  });
});
