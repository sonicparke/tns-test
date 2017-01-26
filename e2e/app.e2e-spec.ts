import { TnsTestPage } from './app.po';

describe('tns-test App', function() {
  let page: TnsTestPage;

  beforeEach(() => {
    page = new TnsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
