import Preview from "../screenplay/tasks/preview";
export = function() {
  this.Given(/^that (.+?) opened the (.+?) preview$/, (name: string, component: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      Preview.the(component) // Task
    );
  });

  this.When(/^(.+?) opens? the (.+?) preview$/, (name: string, component: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      Preview.the(component) // Task
    );
  });
}