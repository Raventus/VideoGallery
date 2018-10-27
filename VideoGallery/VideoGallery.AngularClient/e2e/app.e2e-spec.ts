import { VideoGallery.AngularClientPage } from './app.po';

describe('video-gallery.angular-client App', () => {
  let page: VideoGallery.AngularClientPage;

  beforeEach(() => {
    page = new VideoGallery.AngularClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
