import { byDeepCss } from '../../testing/protractor';
import { Target, Text, Enter, Is, Scroll, Task, Wait, Clear } from 'serenity-js/lib/screenplay-protractor';

/*
 * Targets
 */
const Welcome_Message = Target.the('My Component Welcome message')
  .located(byDeepCss('my-component >>> .my-component__greet'));

const Firtname_Field = Target.the('My Component Fisrtname field')
  .located(byDeepCss('my-component >>> #firstname'));

const Lastname_Field = Target.the('My Component Lastname field')
  .located(byDeepCss('my-component >>> #lastname'));

/**
 * Task services
 */
const EnterName = ({
  into: (target: Target) => ({
    using: (text: string): Task => Task.where(`#actor enters their name as ${text}`,
      Wait.until(target, Is.visible()), // Interaction
      Scroll.to(target), // Interaction
      Clear.theValueOf(target), // Interaction
      Enter.theValue(text).into(target) // Interaction
    )
  })
});

export const EnterTheFirstName = EnterName.into(Firtname_Field);

export const EnterTheLastName = EnterName.into(Lastname_Field);

/*
 * Questions
 */
export const Text_of_the_Welcome_Message = Text.of(Welcome_Message);
