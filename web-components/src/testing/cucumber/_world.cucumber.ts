import { serenity } from 'serenity-js';
import { Actors } from '../serenity/actors';

export = function() {
  this.setDefaultTimeout(60 * 1000);

  this.World = () => {
    this.stage = serenity.callToStageFor(new Actors());
  };
};