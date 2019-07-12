class Player {
  private audio: HTMLAudioElement;

  constructor(AudioPlayer = Audio) {
    this.audio = new AudioPlayer();
  }

  play(src: string): void {
    this.audio.pause();
    this.audio.setAttribute("src", src);
    this.audio.play();
  }

  stop(): void {
    this.audio.pause();
  }
}

export default Player;
