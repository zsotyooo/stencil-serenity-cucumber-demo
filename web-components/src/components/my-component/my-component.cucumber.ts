import { See } from 'serenity-js/lib/screenplay-protractor';
import { MyComponent } from './my-component.screenplay';

import { expect } from '../../testing/expects';

export = function() {  
  this.Then(/^.+? see the welcome text (.+?)$/, (text: string) => {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      See.if(
        MyComponent.Welcome_Text_Displayed,
        (actualText) => expect(actualText).to.eventually.contain(text)
      )
    );
  });
};