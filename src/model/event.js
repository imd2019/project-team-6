import { notificationSound } from "../screens/startScreen.js";

export class VinduEvent {
  constructor(daysUntil, backgroundPath = "", reuseBackground = false) {
    this.daysUntil = daysUntil;
    this.backgroundPath = backgroundPath;
    this.reuseBackground = reuseBackground;
    this.firstTime = true;

    if (this.hasBackgroundImage()) {
      this.backgroundImage = loadImage(this.backgroundPath);
    }
  }

  display() {
    if (this.firstTime) {
      this.firstTime = false;
      notificationSound.play();
    }
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
