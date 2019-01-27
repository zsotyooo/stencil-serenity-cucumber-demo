import stage from '../screenplay/stage';

export = function() {
  this.setDefaultTimeout(60 * 1000);

  this.World = () => {
    this.stage = stage;
  };
};