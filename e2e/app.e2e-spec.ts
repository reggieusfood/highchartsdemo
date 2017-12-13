import { HighchartsdemoPage } from './app.po';

describe('highchartsdemo App', () => {
  let page: HighchartsdemoPage;

  beforeEach(() => {
    page = new HighchartsdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
