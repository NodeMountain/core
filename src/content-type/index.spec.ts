/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let ContentType;

module.exports = class ContentTypeSpec extends Spec {
  beforeEach(subject) {
    ContentType = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};