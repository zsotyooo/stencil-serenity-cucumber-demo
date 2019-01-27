import { Open, PerformsTasks, Task, step, Wait, Duration } from 'serenity-js/lib/screenplay-protractor';

export default class Preview implements Task {

  static the(component: string): Preview {
    return new Preview(component);
  }

  constructor(private component: string) {}

  @step('{0} previews the #component component')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      Open.browserOn(`components/preview/${this.component}`), // Interaction
      Wait.for(Duration.ofSeconds(3)) // Interaction
    );
  }
}