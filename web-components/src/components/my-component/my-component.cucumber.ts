import { See, Text } from 'serenity-js/lib/screenplay-protractor';
import { MyComponent } from './my-component.screenplay';

import { expect } from '../../testing/expects';

export = function() {  
  
  this.When(/^(.+?) changes? the firstname to (.*?)$/, (name: string, text: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      MyComponent.EnterFirstName.using(text) // Task
    );
  });

  this.When(/^(.+?) changes? the lastname to (.*?)$/, (name: string, text: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      MyComponent.EnterLastName.using(text) // Task
    );
  });

  this.Then(/^.+? see the welcome text (.+?)$/, (text: string) => {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      See.if(
        MyComponent.Text_of_Welcome_Message, // Question
        (actualText) => expect(actualText).to.eventually.contain(text) // Assertion
      )
    );
  });
};