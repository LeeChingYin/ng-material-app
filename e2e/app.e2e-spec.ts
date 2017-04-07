import { NgMaterialAppPage } from './app.po';

describe('ng-material-app App', () => {
  let page: NgMaterialAppPage;

  beforeEach(() => {
    page = new NgMaterialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
