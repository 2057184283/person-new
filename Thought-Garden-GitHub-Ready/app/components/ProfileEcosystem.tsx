"use client";
import { useState } from "react";

const chapters=[
 {id:"01",tab:"自我介绍",label:"INTRODUCTION",title:"你好，我是郭甜甜。",body:"我是一名金融背景的 AI 产品经理。三段重点实习覆盖 AI 生成、场景化智能体与对话式 AI，让我形成了从用户问题出发、把模型能力拆成产品方案，再用数据验证结果的工作方式。",notes:["C 端与 B 端产品经验","3 段重点 AI 产品实习","关注 AIGC 与 Agent"]},
 {id:"02",tab:"教育路径",label:"EDUCATION",title:"金融训练，产品表达。",body:"四川大学经济学院金融硕士在读；本科毕业于中南财经政法大学金融工程专业。金融训练让我习惯以数据、成本和收益理解业务，也让我更关注 AI 产品能否产生真实价值。",notes:["四川大学 · 985 · 硕士","中南财经政法大学 · 211 · 本科","2021 — 2027"]},
 {id:"03",tab:"产品能力",label:"PRODUCT CRAFT",title:"从问题到上线闭环。",body:"能够完成用户与竞品调研、需求拆解、PRD、交互原型、指标体系和上线复盘；使用 SQL、Python 分析数据，使用 Axure、Figma 完成原型与协作。",notes:["需求洞察 / PRD","Axure / Figma","SQL / Python"]},
 {id:"04",tab:"AI 工作流",label:"AI NATIVE",title:"不只使用 AI，也设计 AI。",body:"能够拆解 Agent 节点、设计提示词与评测集，并使用 Dify、n8n 搭建自动化工作流；通过 Codex、Claude 进行 Vibe Coding，把产品构想快速变成可交互原型。",notes:["Dify / n8n","Prompt / Evaluation","Codex / Claude"]},
] as const;

export function ProfileEcosystem({onNavigate}:{onNavigate:(scene:number)=>void}){
 const[active,setActive]=useState(0);const item=chapters[active];
 return <section className="profile-dossier" aria-label="郭甜甜个人档案">
  <div className="profile-dossier__rail"><p>PERSONAL DOSSIER</p><div className="portrait-mark"><strong>GT</strong><span>AI PRODUCT<br/>MANAGER</span></div>{chapters.map((x,i)=><button key={x.id} type="button" className={active===i?"is-active":""} onClick={()=>setActive(i)}><span>{x.id}</span><b>{x.tab}</b><i>↗</i></button>)}</div>
  <article className="profile-dossier__page" key={item.id}><header><span>{item.label}</span><span>{item.id} / 04</span></header><p className="profile-hello">GUO TIANTIAN · 郭甜甜</p><h3>{item.title}</h3><p className="profile-story">{item.body}</p><div className="profile-notes">{item.notes.map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div><footer><a href="tel:19385991689">193 8599 1689</a><a href="mailto:2057184283@qq.com">2057184283@qq.com</a><button type="button" onClick={()=>onNavigate(2)}>进入职业展厅 →</button></footer></article>
 </section>
}
