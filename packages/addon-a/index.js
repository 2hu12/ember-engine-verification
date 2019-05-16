'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForVendor() {
    // console.log('running treeForVendor addon-a');

    return `${__dirname}/prebuilt_vendor`;
  }

  , included: function(app) {
    // console.log('running included');
    this._super.included.apply(this, arguments);

    // app.import(`${__dirname}/prebuilt_vendor/external_dep.js`);
    app.import('vendor/external_dep.js');
  }
};
