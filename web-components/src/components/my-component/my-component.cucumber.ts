import { See, Enter } from 'serenity-js/lib/screenplay-protractor';
import { MyComponent } from './my-component.screenplay';

import { expect } from '../../testing/expects';

export = function() {  
  this.Then(/^.+? see the welcome text (.+?)$/, (text: string) => {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      See.if(
        MyComponent.Welcome_Text__Displayed,
        (actualText) => expect(actualText).to.eventually.contain(text)
      )
    );
  });

  this.When(/^(.+?) changes? the firstname to (.*?)$/, (name: string, text: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      MyComponent.EnterFirstName.with(text)
    );
  });

  this.When(/^(.+?) changes? the lastname to (.*?)$/, (name: string, text: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      MyComponent.EnterLastName.with(text)
    );
  });
};