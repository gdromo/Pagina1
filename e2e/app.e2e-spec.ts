import { Html5AngularPage } from './app.po';

describe('html5-angular App', function() {
  let page: Html5AngularPage;

  beforeEach(() => {
    page = new Html5AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
