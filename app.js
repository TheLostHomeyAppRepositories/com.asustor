'use strict';

const Homey = require('homey');
const HomeyPush = require('./lib/push');

module.exports = class ASUSTORApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('ASUSTOR app has been initialized');
    this.push = new HomeyPush(this);
    await this.push.startPush();
  }

  async onUninit() {
    this.log('ASUSTOR app is being uninitialized');
    this.push.stopPush();
  }

};
