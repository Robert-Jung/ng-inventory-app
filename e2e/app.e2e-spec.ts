import { NgInventoryAppPage } from './app.po';

describe('ng-inventory-app App', () => {
  let page: NgInventoryAppPage;

  beforeEach(() => {
    page = new NgInventoryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
