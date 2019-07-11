class Player {
  private audio: HTMLAudioElement;

  constructor(AudioPlayer = Audio) {
    this.audio = new AudioPlayer();
  }

  play(src: string) {
    this.audio.pause();
    this.audio.setAttribute("src", src);
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }
}

export default Player;
