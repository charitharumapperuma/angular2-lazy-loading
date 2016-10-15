import { Angular2LazyLoadingPage } from './app.po';

describe('angular2-lazy-loading App', function() {
  let page: Angular2LazyLoadingPage;

  beforeEach(() => {
    page = new Angular2LazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
