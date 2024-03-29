'use strict';
describe("Feature Test", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("planes can land at an airport", function() {
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  });
});
