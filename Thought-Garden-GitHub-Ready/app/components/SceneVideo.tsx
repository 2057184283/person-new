import { scenes } from "./ContentPanels";

export function SceneVideo({ scene, muted, onReady }: { scene: number; muted: boolean; onReady: () => void }) {
  const current = scenes[scene];
  return (
    <video
      key={current.video}
      className="scene-video"
      autoPlay
      muted={muted}
      loop={scene === 0}
      playsInline
      preload="auto"
      aria-hidden="true"
      onEnded={onReady}
      onLoadedData={scene === 0 ? onReady : undefined}
      onError={onReady}
    >
      <source src={current.video} type="video/mp4" />
    </video>
  );
}
