class Player {
  private audio: HTMLAudioElement;

  public constructor(AudioPlayer = Audio) {
    this.audio = new AudioPlayer();
  }

  public play(src: string): void {
    this.audio.pause();
    this.audio.setAttribute("src", src);
    this.audio.play();
  }

  public stop(): void {
    this.audio.pause();
  }
}

export default Player;
