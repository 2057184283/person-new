import { ProjectGarden } from "./ProjectGarden";
import { ProfileEcosystem } from "./ProfileEcosystem";
import { ExperiencePath } from "./ExperiencePath";

export const scenes = [
  { name: "首页", number: "01", place: "GARDEN ENTRANCE", video: "/media/home-loop.mp4", transitionLabel: "RETURNING HOME" },
  { name: "关于我", number: "02", place: "PROFILE COURTYARD", video: "/media/home-to-profile.mp4", transitionLabel: "ENTERING THE GARDEN" },
  { name: "实习经历", number: "03", place: "EXPERIENCE PATH", video: "/media/profile-to-experience.mp4", transitionLabel: "FOLLOWING THE PATH" },
  { name: "VIBE CODING", number: "04", place: "CREATION GARDEN", video: "/media/experience-to-projects.mp4", transitionLabel: "ENTERING THE CREATION GARDEN" },
] as const;

export function ContentPanel({ scene, onNext, onNavigate }: { scene: number; onNext: () => void; onNavigate: (scene:number) => void }) {
  return (
    <div className="content-layer">
      {scene === 0 && <section className="content-panel home-panel"><p className="eyebrow">AI PRODUCT MANAGER · PORTFOLIO</p><h1>GUO<br />TIANTIAN</h1><p className="role">AI PRODUCT MANAGER</p><span className="short-rule" /><p className="statement">I turn ideas into meaningful<br />AI-powered products.</p><div className="home-portals"><button type="button" onClick={()=>onNavigate(1)}><span>01</span>认识我</button><button type="button" onClick={()=>onNavigate(2)}><span>02</span>实习经历</button><button type="button" onClick={()=>onNavigate(3)}><span>03</span>Vibe Coding</button></div></section>}
      {scene === 1 && <><section className="content-panel split-heading"><p className="panel-number">02</p><p className="eyebrow">观察 · 思考 · 创造</p><h2>ABOUT</h2><p className="role">关于我</p><span className="short-rule" /><p className="statement">把前沿技术转化为<br />有意义的产品体验。</p></section><ProfileEcosystem onNavigate={onNavigate} /></>}
      {scene === 2 && <><section className="content-panel split-heading"><p className="panel-number">03</p><p className="eyebrow">三段 AI 产品实践</p><h2>CAREER</h2><p className="role">快手 · 科大讯飞 · 百融云创</p></section><ExperiencePath onNavigate={onNavigate} /></>}
      {scene === 3 && <><section className="content-panel projects-heading"><p className="panel-number">04</p><p className="eyebrow">AI 协作的真实实践</p><h2>VIBE<br/>CODING</h2></section><ProjectGarden /></>}
      {scene < scenes.length - 1 && <button className="next-cue" type="button" onClick={onNext}><span>{scene === 0 ? "滚动进入" : "继续探索"}</span><span aria-hidden="true">⌄</span></button>}
    </div>
  );
}
