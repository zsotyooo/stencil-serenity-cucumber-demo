import { Component, Prop, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The first name
   */
  @State() stateFirst: string;

  /**
   * The last name
   */
  @State() stateLast: string;

  private getText(): string {
    return format(this.stateFirst, this.stateLast);
  }

  private handleNameChange(field, e: Event) {
    const value = e.target ? (e.target as any).value : '';
    if (field == 'first') {
      this.stateFirst = value;
    } else {
      this.stateLast = value;
    }
  }

  componentDidLoad() {
    this.stateFirst = this.first;
    this.stateLast = this.last;
  }

  render() {
    return (
      <div class="my-component">
        <div class="my-component__form">
          <label>Firstname</label><input id="firstname" value={this.stateFirst} onInput={(e) => this.handleNameChange('first', e)}/><br/>
          <label>Lastname</label><input id="lastname" value={this.stateLast} onInput={(e) => this.handleNameChange('last', e)} /><br/>
        </div>
        <div class="my-component__greet">Hello, World! I'm {this.getText()}</div>
      </div>
    );
  }
}
