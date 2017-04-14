'use strict';

describe('Restaurant Application', function() {

  it('should redirect `index.html` to `index.html#!/restaurants', function(done) {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/restaurants');
    done();
  },120000);

  describe('View list', function() {

    beforeEach(function() {
      browser.get('index.html#!/restaurants');
    });

    it('should filter the restaurants list as a user types data into the search box', function(done) {
      var restList = element.all(by.repeater('restaurant in $ctrl.restaurants'));
      var query = element(by.model('$ctrl.query'));

      expect(restList.count()).toBe(7);

      query.sendKeys('Veggie');
      expect(restList.count()).toBe(1);

      query.clear();
      query.sendKeys('Bar');
      expect(restList.count()).toBe(2);
      done();
    },600000);

    it('should be able to handle order of results via drop-down menu both Alphabetical & based on distance', function(done) {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var distOption = orderSelect.element(by.css('option[value="dist"]'));
      var restNameColumn = element.all(by.repeater('restaurant in $ctrl.restaurants').column('restaurant.name'));
      var restDistColumn = element.all(by.repeater('restaurant in $ctrl.restaurants').column('restaurant.dist'));


        function getNames() {
        return restNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

        function getNamesDist() {
            return restDistColumn.map(function(elem) {
                return elem.getText();
            });
        }
        queryField.clear();
        queryField.sendKeys('Bowl');   // Dataset narrowed

      expect(getNames()).toEqual([
          'Sunny Bowl',
          'Manilla Bowl'

      ]);
//based on Alphabetical Order
      nameOption.click();

      expect(getNames()).toEqual([
          'Manilla Bowl',
          'Sunny Bowl'
      ]);


//Based on Distance
      distOption.click();

        expect(getNames()).toEqual([
            'Sunny Bowl',
            'Manilla Bowl'

        ]);

        expect(getNamesDist()).toEqual([
            '4 miles',
            '6 miles'

        ]);
        done();
    },600000);

  });


});
