'use strict';

describe('Service: skills', function () {

  // load the service's module
  beforeEach(module('deve.rsApp'));

  // instantiate service
  var skills;
  beforeEach(inject(function (_skills_) {
    skills = _skills_;
  }));

  it('should do something', function () {
    expect(!!skills).toBe(true);
  });

});
