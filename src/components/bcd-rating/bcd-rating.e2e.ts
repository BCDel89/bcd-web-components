import { newE2EPage } from '@stencil/core/testing';

describe('bcd-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcd-rating></bcd-rating>');

    const element = await page.find('bcd-rating');
    expect(element).toHaveClass('hydrated');
  });
});
