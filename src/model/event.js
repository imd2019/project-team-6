export class VinduEvent {
  constructor(daysUntil, backgroundPath = "", reuseBackground = false) {
    this.daysUntil = daysUntil;
    this.backgroundPath = backgroundPath;
    this.reuseBackground = reuseBackground;

    if (this.hasBackgroundImage()) {
      this.backgroundImage = loadImage(this.backgroundPath);
    }
  }

  display() {
    console.log("not implemented");
  }

  mouseClicked() {
    console.log("not implemented");
  }

  hasBackgroundVideo() {
    return this.backgroundPath.endsWith("mp4");
  }

  hasBackgroundImage() {
    return this.backgroundPath.endsWith("png");
  }
}
