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
      const portionFull: boolean = (i < this.rating);
      const portionPartial: boolean = (i < this.rating && (i + 1) > this.rating);
      const classes: string = 'portion ' + (portionFull ? 'portion-full' : '');

      if (!portionPartial) {
        ret.push(<div class={classes}></div>);
      } else {
      	const width = Math.round(((this.rating % 1) * 100) / 10) * 10;
        ret.push(
					<div class="portion">
						<div class={'portion-partial partial-' + width}></div>
					</div>
        );
      }
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
