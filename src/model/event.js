export class VinduEvent {
  constructor(daysUntil, backgroundPath = "") {
    this.daysUntil = daysUntil;
    this.backgroundPath = backgroundPath;
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
