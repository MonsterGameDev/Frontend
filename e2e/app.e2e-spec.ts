import { FooddataPage } from './app.po';

describe('fooddata App', function() {
  let page: FooddataPage;

  beforeEach(() => {
    page = new FooddataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
