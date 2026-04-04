import { useEffect, useState } from "react";

export default function Mario({ triggerAnim }) {
  const messages = ['Found me!', 'Hi!', 'It´s a Me!'];
  const [index, setIndex] = useState(0);
  const audio = new Audio('easter_egg/assets/sfx/stompswim.wav');

  useEffect(() => {
    if (triggerAnim)
      audio.play().catch(error => console.log("Autoplay blocked:", error));
  }, [triggerAnim]);

  function handleInteract() {
    setIndex((prev) => (prev + 1) % messages.length);
    audio.play();
  }

  if (!triggerAnim) 
    return null;

  return (
    <div className="flex flex-row top-[16vh] cursor-pointer pointer-events-auto gap-8" onClick={handleInteract} >
      <h2 className="text-white fixedsys-text animate-bounce">
        {messages[index]}
      </h2>
      <div id="mario_sprite" className="sprite scale-250 mr-4" alt="mario" />
    </div>
  );
}