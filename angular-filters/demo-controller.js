app.controller('DemoCtrl', function () {
  this.instructor = { name: 'Chris Davies' };
  this.ta = { name: 'Tom Rau' };

  this.staff = [{
    name: 'Clinton',
    role: 'instructor'
  }, {
    name: 'Mason',
    role: 'instructor'
  }, {
    name: 'Chris',
    role: 'instructor'
  }, {
    name: 'Jessica',
    role: 'director'
  }, {
    name: 'Kelly',
    role: 'director'
  }];
});
