import { See, Text } from 'serenity-js/lib/screenplay-protractor';
import { EnterTheFirstName, EnterTheLastName, Text_of_the_Welcome_Message } from './my-component.screenplay';

import { expect } from '../../testing/assertions';

export = function() {  
  
  this.When(/^(.+?) changes? the firstname to (.*?)$/, (name: string, text: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      EnterTheFirstName.using(text) // Task
    );
  });

  this.When(/^(.+?) changes? the lastname to (.*?)$/, (name: string, text: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      EnterTheLastName.using(text) // Task
    );
  });

  this.Then(/^.+? sees? the welcome text (.+?)$/, (text: string) => {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      See.if(
        Text_of_the_Welcome_Message, // Question
        (actualText) => expect(actualText).to.eventually.contain(text) // Assertion
      )
    );
  });
};