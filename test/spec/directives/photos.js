'use strict';

describe('Directive: photos', function () {

  // load the directive's module
  beforeEach(module('cctApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<photos></photos>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the photos directive');
  }));
});
