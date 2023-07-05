import React from "react";

export const useAudio = (url: string | undefined) => {
  const audioRef = React.useRef(new Audio());
  const [playing, setPlaying] = React.useState(false);

  const toggle = React.useCallback(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (playing) {
      audio.pause();
    } else {
      console.log("trying to play");
      audio.play();
    }
    setPlaying(!playing);
  }, [playing]);

  const endAudio = React.useCallback(() => {
    audioRef.current.pause();
    setPlaying(false);
  }, []);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!url) {
      return;
    }

    console.log(url);
    audio.src = url;
    audio.load();
  }, [url]);

  React.useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", endAudio);
    return () => {
      audio.removeEventListener("ended", endAudio);
    };
  }, [endAudio]);

  return [playing, toggle] as const;
};
