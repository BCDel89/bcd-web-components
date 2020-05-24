import { newSpecPage } from '@stencil/core/testing';
import { BcdRating } from './bcd-rating';

describe('bcd-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcdRating],
      html: `<bcd-rating></bcd-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <bcd-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bcd-rating>
    `);
  });
});
