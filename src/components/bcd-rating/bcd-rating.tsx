import {Component, ComponentInterface, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'bcd-rating',
  styleUrl: 'bcd-rating.css',
  shadow: true,
})
export class BcdRating implements ComponentInterface {

  /**
   * The rating
   */
  @Prop() rating: number;

  /**
   * The max rating
   */
  @Prop() max: number;

  getPortions() {
    let ret: any[] = [];

    for (let i = 0; i < this.max; i++) {
      const portionFull: boolean = i < this.rating;
      const classes: string = 'portion ' + (portionFull ? 'portion-full' : '');
      ret.push(<div class={classes}></div>);
    }

    return ret;
  }

  render() {
    return (
			<Host>
        <slot>
          {this.getPortions()}
        </slot>
      </Host>
    );
  }

}
