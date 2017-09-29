import { MomentoPage } from './app.po';

describe('momento App', () => {
  let page: MomentoPage;

  beforeEach(() => {
    page = new MomentoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
