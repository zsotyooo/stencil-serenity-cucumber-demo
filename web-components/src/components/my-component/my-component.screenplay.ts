import { element } from 'protractor';
import { byDeepCss } from '../../testing/protractor';
import { Target, Question, Text, Enter, Is, Scroll, Task, Wait, Clear, Click } from 'serenity-js/lib/screenplay-protractor';

const EnterName = ({
  to: (target: Target) => ({
    with: (text: string): Task => Task.where(`#actor enters their name as ${text}`,
      Wait.until(target, Is.visible()),
      Scroll.to(target),
      Clear.theValueOf(target),
      Enter.theValue(text).into(target)
    )
  })
});

export class MyComponent {

  /*
   * Elements
   */
  static Welcome_Message = Target.the('My Component Welcome message')
    .located(byDeepCss('my-component::sr .my-component__greet'));

  static Firtname_Field = Target.the('My Component Fisrtname field')
    .located(byDeepCss('my-component::sr #firstname'));

  static Lastname_Field = Target.the('My Component Lastname field')
    .located(byDeepCss('my-component::sr #lastname'));
  
  /**
   * Tasks
   */
  static EnterFirstName = EnterName.to(MyComponent.Firtname_Field);

  static EnterLastName = EnterName.to(MyComponent.Lastname_Field);

  /*
   * Questions
   */
  static Text_of_Welcome_Message = Text.of(MyComponent.Welcome_Message);
}