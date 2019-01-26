import Preview from "../serenity/tasks/preview";
export = function() {
  this.Given(/^(.+?) opened the (.+?) preview$/, (name: string, component: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      Preview.the(component)
    );
  });

  this.When(/^(.+?) opens? the (.+?) preview$/, (name: string, component: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      Preview.the(component)
    );
  });
}