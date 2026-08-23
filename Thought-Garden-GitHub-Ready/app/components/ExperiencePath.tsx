"use client";
import { useState } from "react";

const companies = [
  {number:"01",name:"快手 · 快影",label:"KUAISHOU",role:"AI 营销 AIGC 产品",date:"2026.03 — 2026.07",context:"用 AI 降低电商带货视频制作门槛，覆盖数字人、服饰模板与商业化策略。",metrics:["转化率 8.5%","ROI 13:1","次月 DAU 4万"],projects:[["AI 数字人带货短视频","五类商品差异化 Prompt、三段式视频结构与自动化评测，使 Badcase 率由 20% 降至 8%。"],["AI 服饰带货模板体系","五类热门模板、多模型选型和分阶段生成，使生图到生视频转化率由 59% 提升至 75%。"],["商业化定价与免费策略","拆解原子能力成本并完成四维定价，合并月收入 4.5 万，LTV 636。"]]},
  {number:"02",name:"科大讯飞",label:"iFLYTEK",role:"AI 助手平台产品",date:"2025.08 — 2026.01",context:"负责输入法内 UGC 智能体平台的使用侧与创建侧，让助手在需要时出现，并降低创建门槛。",metrics:["渗透率 32%","成功率 53%","DAU 12万"],projects:[["键盘端场景化主动推荐","两阶段语义标准化、向量匹配、频控与阈值 AB，使推荐点击率达到 35%。"],["AI 助手创建流程优化","实时渲染、异步执行和主动召回，使创建流失率从 58% 降至 27%。"],["折叠式创建","默认一句话生成，高阶配置渐进披露，普通用户首创成功率达到 56%。"]]},
  {number:"03",name:"百融云创",label:"BAIRONG",role:"AI 对话产品",date:"2025.04 — 2025.08",context:"为券商搭建智能外呼，从 ASR、TTS、RAG 到评测体系优化完整对话链路。",metrics:["挂断率 43%","识别率 89%","首包 0.8s"],projects:[["对话全链路优化","方言标注、TTS 口语感、三层 RAG 与合规兜底共同降低挂断和响应延时。"],["双维度评测闭环","建立技术指标与业务指标体系，落实灰度、AB、抽检、全量与日度巡检 SOP。"]]},
] as const;

export function ExperiencePath({onNavigate}:{onNavigate:(scene:number)=>void}) {
  const [active,setActive]=useState(0); const [expanded,setExpanded]=useState(0); const item=companies[active];
  const choose=(i:number)=>{setActive(i);setExpanded(0)};
  return <section className="career-timeline" aria-label="实习经历">
    <div className="career-list">{companies.map((company,index)=><button key={company.name} type="button" className={active===index?"is-active":""} onClick={()=>choose(index)}><span>{company.number}</span><strong>{company.name}</strong><small>{company.label}</small></button>)}</div>
    <article className="career-detail career-case" key={item.name}><header><p>INTERNSHIP / {item.label}</p><div className="career-date">{item.date}</div></header><h3>{item.role}</h3><div className="career-question"><small>BUSINESS QUESTION</small><p>{item.context}</p></div><div className="career-metrics">{item.metrics.map((x,i)=><strong key={x}><span>0{i+1}</span>{x}</strong>)}</div><div className="career-case__label"><span>SELECTED WORK</span><span>点击展开项目档案</span></div><div className="career-projects">{item.projects.map((project,i)=><button type="button" key={project[0]} className={expanded===i?"is-open":""} onClick={()=>setExpanded(i)}><span>0{i+1}</span><b>{project[0]}</b><i>{expanded===i?"−":"+"}</i>{expanded===i&&<small>{project[1]}</small>}</button>)}</div><button className="career-to-project" type="button" onClick={()=>onNavigate(3)}>继续：Vibe Coding 项目 →</button></article>
  </section>;
}
