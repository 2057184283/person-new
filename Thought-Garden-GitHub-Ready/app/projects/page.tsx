"use client";
const projects=[
 ["digital-human","快手 · 快影","数字人带货视频","AIGC"],["fashion-video","快手 · 快影","服饰带货模板体系","生成工作流"],["monetization-strategy","快手 · 快影","商业化定价与免费策略","商业化"],
 ["ai-keyboard","科大讯飞","键盘端场景化推荐","智能体增长"],["assistant-builder","科大讯飞","AI 助手创建流程","漏斗优化"],["dify-workflow","科大讯飞","折叠式创建","交互策略"],
 ["hangup-optimization","百融云创","对话全链路优化","对话式 AI"],["rag-loop","百融云创","双维度评测闭环","评测体系"],
 ["shiguang-intent","个人创作","时光意图","VIBE CODING"],["reborn-market","个人创作","Reborn Market","VIBE CODING"]
];
export default function Projects(){return <main className="content-page"><header className="page-nav"><a href="/garden">← 返回空间</a><b>THOUGHT GARDEN</b><a href="/profile">关于我</a></header><header className="projects-head"><span>03 / PROJECTS</span><h1>10 个项目，<br/>从产品判断到真实结果。</h1><p>八个实习项目覆盖 AI 生成、场景化智能体和对话式 AI；两个独立项目则记录我如何用 Vibe Coding 把个人观察快速做成真实产品。</p></header><section className="projects-index">{projects.map((p,i)=><a href={`/projects/${p[0]}`} key={p[0]} className={p[3]==="VIBE CODING"?"is-vibe":""}><span>{String(i+1).padStart(2,"0")}</span><small>{p[1]} · {p[3]}</small><b>{p[2]}</b><i>→</i></a>)}</section></main>}
