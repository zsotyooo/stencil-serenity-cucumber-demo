import { by } from 'protractor';
import { Target, Question, Text } from 'serenity-js/lib/screenplay-protractor';

console.log(by.deepCss('my-component'));

export class MyComponent {
  static Welcome_Text = Target.the('My Component Welcome text')
    .located(by.deepCss('my-component div'));

  static Welcome_Text_Displayed: Question<PromiseLike<string>> = Text.of(MyComponent.Welcome_Text);
}