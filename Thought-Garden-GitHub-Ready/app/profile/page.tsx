const facts = [
  ["职业方向", "AI 产品经理"],
  ["联系电话", "193 8599 1689"],
  ["电子邮箱", "2057184283@qq.com"],
  ["硕士", "四川大学（985） · 金融专业 · 2025.09—2027.06"],
  ["本科", "中南财经政法大学（211） · 金融工程 · 2021.09—2025.06"],
  ["英语", "大学英语六级，具备良好的听说读写能力"],
];

const skills = [
  ["数据分析", "SQL、Python"],
  ["产品设计", "Axure、Figma"],
  ["内容制作", "Photoshop、剪映、AIGC"],
  ["AI 工作流", "Dify、n8n"],
  ["AI 协作开发", "Codex、Claude"],
];

export default function Profile() {
  return (
    <main className="content-page">
      <header className="page-nav">
        <a href="/garden">← 返回空间</a><b>THOUGHT GARDEN</b><a href="/experience">实习经历</a>
      </header>

      <header className="content-hero profile-hero">
        <span>01 / PROFILE</span>
        <h1>关于我</h1>
        <p>我本科和硕士都学习金融，后来逐渐把兴趣转向 AI 产品。三段重点实习覆盖 AI 生成、场景化智能体与对话式 AI，积累了从需求分析、方案设计到上线复盘的完整经验。</p>
        <div className="profile-portrait">
          <img src="/media/editorial/guo-tiantian-cutout.png" alt="郭甜甜人物肖像" />
          <span>GUO TIANTIAN · AI PRODUCT MANAGER</span>
        </div>
      </header>

      <figure className="editorial-media editorial-media--wide">
        <img src="/media/editorial/profile-studio.png" alt="自然庭院中的产品工作台" />
        <figcaption><span>我的工作方式</span><p>我习惯先把用户、场景和业务目标弄清楚，再判断 AI 适合解决哪一部分问题。方案完成后，我会通过评测和数据持续检查效果。</p></figcaption>
      </figure>

      <section className="content-facts">{facts.map((item) => <div key={item[0]}><span>{item[0]}</span><b>{item[1]}</b></div>)}</section>

      <section className="skill-atlas">
        <header><span>我的技能</span><h2>能够使用的工具</h2></header>
        <div>{skills.map((item, i) => <article key={item[0]}><span>0{i + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
      </section>

      <section className="content-statement"><span>我的优势</span><h2>既能梳理业务和用户需求，<br />也能深入工作流、评测和数据分析。</h2></section>

      <section className="content-columns">
        {[
          ["01", "先把问题说清楚", "通过访谈、数据和竞品分析，判断用户究竟卡在哪里，以及什么结果才算有效。"],
          ["02", "把模型能力做成产品", "不仅设计界面，也会考虑提示词、工作流、评测标准和异常情况下的处理方式。"],
          ["03", "尽快做出可用版本", "先用原型或 Vibe Coding 做出可以体验的版本，再根据反馈继续调整。"],
        ].map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
      </section>

      <section className="video-chapter">
        <video autoPlay muted loop playsInline src="/media/profile-to-experience.mp4" />
        <div><span>下一部分</span><h2>接下来可以查看<br />我的三段实习经历</h2><a href="/experience">查看实习经历 →</a></div>
      </section>

      <section className="content-contact"><span>联系方式</span><h2>如果你想进一步了解项目，<br />欢迎随时联系我。</h2><a href="tel:19385991689">19385991689</a><br /><a href="mailto:2057184283@qq.com">2057184283@qq.com →</a></section>
    </main>
  );
}
