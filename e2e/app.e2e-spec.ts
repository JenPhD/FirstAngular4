import { FirstangularPage } from './app.po';

describe('firstangular App', () => {
  let page: FirstangularPage;

  beforeEach(() => {
    page = new FirstangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
