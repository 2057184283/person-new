import { scenes } from "./ContentPanels";

export function SiteNavigation({ scene, onNavigate }: { scene: number; onNavigate: (scene: number) => void }) {
  return (
    <>
      <header className="site-header">
        <button className="brand" type="button" onClick={() => onNavigate(0)}>
          <span className="brand__mark" aria-hidden="true" /> THOUGHT GARDEN
        </button>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {scenes.map((item, index) => (
              <li key={item.name}>
                <button className={scene === index ? "nav-link is-active" : "nav-link"} type="button" onClick={() => onNavigate(index)}>
                  {item.name}
                </button>
              </li>
            ))}
            <li><button className="nav-link" type="button" onClick={() => onNavigate(1)}>联系</button></li>
          </ul>
        </nav>
      </header>
      <nav className="space-rail" aria-label="Scene navigation">
        {scenes.map((item, index) => (
          <button key={item.number} type="button" onClick={() => onNavigate(index)} data-active={scene === index} aria-label={`Go to ${item.name}`}>
            {item.number}
          </button>
        ))}
      </nav>
    </>
  );
}
