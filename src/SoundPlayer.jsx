import { useEffect } from "react";
import { useSound } from "use-sound";
import beepSound from "./assets/nintendo-game-boy-startup.mp3";

export function SoundPlayer({playBeep, setPlayBeep}) {
  const [playBeepSound] = useSound(beepSound, { volume: 0.1 });

  useEffect(() => {
    if (playBeep)
    {
      setPlayBeep(false);
      playBeepSound();
    }
  }, [playBeep]);

  return (
    <div></div>
  );
}
