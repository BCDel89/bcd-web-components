import {Component, ComponentInterface, Host, h, Prop} from '@stencil/core';

@Component({
	tag: 'bcd-rating-circle',
	styleUrl: 'bcd-rating-circle.scss',
	shadow: true,
})
export class BcdRatingCircle implements ComponentInterface {

	/**
	 * The rating
	 */
	@Prop() size: string = 'md';

	/**
	 * The rating
	 */
	@Prop() rating: number;

	/**
	 * The max rating
	 */
	@Prop() max: number = 100;

	/**
	 * show as percentage
	 */
	@Prop() fraction: boolean;

	render() {
		const perc = Math.round(((this.rating / this.max) * 100) / 10) * 10;
		const sizeVar = 'p' + perc;
		const classes = 'c100 ' + this.size + ' ' + sizeVar;

		console.log('rating-cirlce: ', this.rating, this.max, perc, sizeVar, classes);

		const asFraction = <span>
      <span>{this.rating}</span> <span>/</span> <span>{this.max}</span>
  	</span>;
		const asPercentage = <span>
      <span>{perc}%</span>
    </span>;

		const innerValue = this.fraction ? asFraction : asPercentage;

		return (
		<Host>
			<slot>
				<div class={classes}>
					{innerValue}
					<div class="slice">
						<div class="bar"></div>
						<div class="fill"></div>
					</div>
				</div>
			</slot>
		</Host>
		);
	}
}
