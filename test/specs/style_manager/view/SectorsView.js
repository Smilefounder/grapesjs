const SectorsView = require('style_manager/view/SectorsView');
const Sectors = require('style_manager/model/Sectors');

module.exports = {
  run : function(){

      describe('SectorsView', function() {

        var $fixtures;
        var $fixture;
        var model;
        var view;

        before(function () {
          $fixtures  = $("#fixtures");
          $fixture   = $('<div class="sectors-fixture"></div>');
        });

        beforeEach(function () {
          model = new Sectors([]);
          view = new SectorsView({
            collection: model
          });
          $fixture.empty().appendTo($fixtures);
          $fixture.html(view.render().el);
        });

        afterEach(function () {
          view.collection.reset();
        });

        after(function () {
          $fixture.remove();
        });

        it("Collection is empty", function (){
          view.el.innerHTML.should.be.empty;
        });

        it("Add new sectors", function (){
          view.collection.add([{}, {}]);
          view.el.children.length.should.equal(2);
        });

    });
  }
};
