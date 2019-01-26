import Preview from "../screenplay/tasks/preview";
export = function() {
  this.When(/^(.+?) opens? the (.+?) preview$/, (name: string, component: string) => {
    return this.stage.theActorCalled(name).attemptsTo(
      Preview.the(component)
    );
  });
}