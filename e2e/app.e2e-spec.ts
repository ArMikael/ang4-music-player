import { Ang4MusPlayerPage } from './app.po';

describe('ang4-mus-player App', function() {
  let page: Ang4MusPlayerPage;

  beforeEach(() => {
    page = new Ang4MusPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
