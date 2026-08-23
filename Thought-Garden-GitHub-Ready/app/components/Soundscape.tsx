"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_START = 7;
const MUSIC_VOLUME = 0.36;
const ENABLED_KEY = "thought-garden-music-enabled";
const POSITION_KEY = "thought-garden-music-position";

export default function Soundscape() {
  const [on, setOn] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const stopFade = () => {
    if (fadeTimer.current !== null) window.clearInterval(fadeTimer.current);
    fadeTimer.current = null;
  };

  const fadeTo = (target: number, after?: () => void) => {
    const player = audio.current;
    if (!player) return;
    stopFade();
    fadeTimer.current = window.setInterval(() => {
      const distance = target - player.volume;
      if (Math.abs(distance) < 0.015) {
        player.volume = target;
        stopFade();
        after?.();
        return;
      }
      player.volume = Math.max(0, Math.min(1, player.volume + Math.sign(distance) * 0.04));
    }, 30);
  };

  const play = async () => {
    const player = audio.current;
    if (!player) return;
    if (player.currentTime < MUSIC_START) player.currentTime = MUSIC_START;
    player.volume = 0;
    try {
      await player.play();
      fadeTo(MUSIC_VOLUME);
      localStorage.setItem(ENABLED_KEY, "true");
      setOn(true);
    } catch {
      setOn(false);
    }
  };

  const toggle = () => {
    const player = audio.current;
    if (!player) return;
    if (on) {
      localStorage.setItem(ENABLED_KEY, "false");
      sessionStorage.setItem(POSITION_KEY, String(player.currentTime));
      fadeTo(0, () => player.pause());
      setOn(false);
    } else {
      void play();
    }
  };

  useEffect(() => {
    const player = audio.current;
    if (!player) return;

    const restore = () => {
      const saved = Number(sessionStorage.getItem(POSITION_KEY));
      player.currentTime = Number.isFinite(saved) && saved >= MUSIC_START && saved < player.duration ? saved : MUSIC_START;
      if (localStorage.getItem(ENABLED_KEY) === "true") void play();
    };
    const save = () => sessionStorage.setItem(POSITION_KEY, String(player.currentTime));
    const restart = () => {
      player.currentTime = MUSIC_START;
      if (localStorage.getItem(ENABLED_KEY) === "true") void player.play();
    };

    player.addEventListener("loadedmetadata", restore, { once: true });
    player.addEventListener("timeupdate", save);
    player.addEventListener("ended", restart);
    window.addEventListener("pagehide", save);

    return () => {
      stopFade();
      save();
      player.removeEventListener("timeupdate", save);
      player.removeEventListener("ended", restart);
      window.removeEventListener("pagehide", save);
    };
  }, []);

  return (
    <>
      <audio ref={audio} src="/media/green-to-blue.mp3" preload="metadata" />
      <button className={`sound-toggle ${on ? "active" : ""}`} onClick={toggle} aria-label={on ? "关闭背景音乐" : "播放背景音乐"}>
        <i>{on ? "◉" : "○"}</i>
        <span>{on ? "音乐播放中" : "播放音乐"}</span>
      </button>
    </>
  );
}
