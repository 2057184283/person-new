"use client";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const phases=[
  {n:"01",label:"需求定义",title:"先决定为什么做",copy:"明确目标访客、核心信息与体验边界，把“漂亮网站”转化为可验证的产品目标。",deliverable:"信息架构 / 体验目标"},
  {n:"02",label:"视觉探索",title:"让影像与信息共存",copy:"锁定现有花园视频，用编辑式排版与有限的场景动效承载个人信息和经历。",deliverable:"视觉系统 / 动效原则"},
  {n:"03",label:"AI 协作",title:"用对话驱动实现",copy:"将需求拆成组件、状态与交互，通过连续反馈推动 AI 生成、检查和修正代码。",deliverable:"交互原型 / React 实现"},
  {n:"04",label:"测试迭代",title:"把不满意变成依据",copy:"从实际浏览感受中识别层级、清晰度和交互问题，记录决策并持续发布新版本。",deliverable:"问题清单 / 线上版本"},
] as const;

export function ProjectGarden(){
  const[open,setOpen]=useState(false);const[entering,setEntering]=useState(false);const[active,setActive]=useState(0);const[flip,setFlip]=useState(false);const[log,setLog]=useState(0);const[compare,setCompare]=useState(58);const[hotspot,setHotspot]=useState(0);const[progress,setProgress]=useState(0);const gallery=useRef<HTMLElement>(null);const field=useRef<HTMLCanvasElement>(null);const cursor=useRef({x:-500,y:-500});
  useEffect(()=>{const fn=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",fn);return()=>window.removeEventListener("keydown",fn)},[]);
  useEffect(()=>{const c=field.current;if(!c)return;const ctx=c.getContext("2d");if(!ctx)return;let frame=0;const dots=Array.from({length:54},(_,i)=>({x:(i*73%101)/101,y:(i*47%97)/97,z:.35+(i%7)/10,v:.00015+(i%5)*.00004}));const render=(time:number)=>{const r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio,2);if(c.width!==r.width*d||c.height!==r.height*d){c.width=r.width*d;c.height=r.height*d;ctx.setTransform(d,0,0,d,0,0)}ctx.clearRect(0,0,r.width,r.height);dots.forEach((p,i)=>{p.y=(p.y+p.v)%1;const wave=Math.sin(time*.00035+i)*12*p.z,x=p.x*r.width+wave,y=p.y*r.height,dist=Math.hypot(cursor.current.x-x,cursor.current.y-y),force=Math.max(0,1-dist/170);for(let j=i+1;j<dots.length;j++){const q=dots[j],qx=q.x*r.width+Math.sin(time*.00035+j)*12*q.z,qy=q.y*r.height,dd=Math.hypot(x-qx,y-qy);if(dd<92){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(qx,qy);ctx.strokeStyle=`rgba(244,239,202,${(1-dd/92)*.13})`;ctx.stroke()}}ctx.beginPath();ctx.arc(x,y,1+p.z*1.3+force*2,0,Math.PI*2);ctx.fillStyle=`rgba(255,246,199,${.18+p.z*.28+force*.38})`;ctx.fill()});frame=requestAnimationFrame(render)};frame=requestAnimationFrame(render);return()=>cancelAnimationFrame(frame)},[]);
  const phase=phases[active];
  const move=(e:PointerEvent<HTMLElement>)=>{const r=gallery.current?.getBoundingClientRect();if(!r)return;cursor.current={x:e.clientX-r.left,y:e.clientY-r.top};gallery.current?.style.setProperty("--gx",`${((e.clientX-r.left)/r.width-.5)*18}px`);gallery.current?.style.setProperty("--gy",`${((e.clientY-r.top)/r.height-.5)*13}px`)};
  const enter=()=>{if(entering)return;setEntering(true);window.setTimeout(()=>{setOpen(true);setEntering(false)},620)};
  return <>
    <section ref={gallery} className={`layered-project ${entering?"is-entering":""}`} onPointerMove={move} aria-label="Vibe Coding 项目入口">
      <canvas ref={field} className="project-tech-field" aria-hidden="true" />
      <div className="gallery-spotlight" aria-hidden="true" />
      <div className="layered-project__meta"><span>THOUGHT GARDEN EXHIBITION / ROOM 04</span><span>2026</span></div>
      <button className="project-slice project-slice--main" type="button" onClick={enter} aria-label="进入 Thought Garden 项目"><img src="/thought-garden-preview.png" alt="Thought Garden 网站首页" /></button>
      <button className="project-slice project-slice--detail" type="button" onClick={enter} aria-label="查看设计细节"><img src="/thought-garden-preview.png" alt="" /><span>SCENE / 01</span></button>
      <button className="project-slice project-slice--prompt" type="button" onClick={enter}><small>PROMPT LOG / 028</small><strong>“背景视频保持不变，<br/>让项目从场景中自然出现。”</strong><i>AI COLLABORATION</i></button>
      <div className="project-slice project-slice--process"><span>DISCOVER</span><i/><span>DESIGN</span><i/><span>BUILD</span><i/><span>REFINE</span></div>
      <div className="layered-project__title"><p>DIGITAL INSTALLATION · NO. 01</p><h3>Thought<br/>Garden</h3><blockquote>一座由影像、产品思考与 AI 协作共同生成的数字花园。</blockquote><button type="button" onClick={enter}>进入展厅 <span>→</span></button></div>
      <span className="layered-project__hint">移动光线观察作品 · 点击进入展厅</span>
      {entering&&<div className="project-transition" aria-hidden="true"><img src="/thought-garden-preview.png" alt="" /></div>}
    </section>
    {open&&<section className="case-world exhibition-world" onScroll={e=>{const el=e.currentTarget;setProgress(el.scrollTop/(el.scrollHeight-el.clientHeight)*100)}} aria-label="Thought Garden 数字展览">
      <header className="case-world__nav"><strong>THOUGHT GARDEN / DIGITAL EXHIBITION</strong><span>ROOM 01—04</span><button type="button" onClick={()=>setOpen(false)} aria-label="离开展厅">离开展厅 ×</button><i style={{width:`${progress}%`}} /></header>
      <main className="case-world__body">
        <section className="case-hero exhibition-hero"><p>ROOM 01 / PROLOGUE</p><h2>人与 AI，如何共同<br/>培育一座思想花园？</h2><div><span>艺术家 / 产品设计者<br/><b>Guo Tiantian</b></span><span>媒介<br/><b>动态影像 / 代码 / 对话</b></span><span>年份<br/><b>2026</b></span></div><figure className="case-hero__media museum-frame"><img src="/thought-garden-preview.png" alt="Thought Garden 数字作品" /><figcaption>THOUGHT GARDEN, INTERACTIVE WEBSITE, 2026</figcaption></figure><i aria-hidden="true">01</i></section>
        <nav className="case-phase-nav" aria-label="项目阶段">{phases.map((p,i)=><button key={p.n} type="button" className={active===i?"is-active":""} onClick={()=>setActive(i)}><span>{p.n}</span>{p.label}</button>)}</nav>
        <section className="case-modules">
          <article className="phase-feature" key={phase.n}><span>PHASE {phase.n}</span><h3>{phase.title}</h3><p>{phase.copy}</p><footer><small>DELIVERABLE</small><strong>{phase.deliverable}</strong></footer></article>
          <button type="button" className={`method-flip ${flip?"is-flipped":""}`} onClick={()=>setFlip(!flip)}><span className="method-flip__front"><small>METHOD CARD · 点击翻转</small><strong>AI 不是替我决定，<br/>而是帮助我更快验证。</strong><i>↻</i></span><span className="method-flip__back"><small>WORKING PRINCIPLE</small><strong>判断由人完成<br/>执行与反馈由 AI 加速</strong><i>↻</i></span></button>
          <article className="tool-console"><header><span/><span/><span/><b>AI COLLABORATION LOG</b></header><p><em>01</em> 描述目标，而不是只描述样式</p><p><em>02</em> 每轮只验证一个核心假设</p><p><em>03</em> 保留版本，允许方向被推翻</p><div><i/><span>GENERATING NEXT ITERATION</span></div></article>
          <article className="decision-log"><p>DECISION LOG</p>{["为什么保留视频？","为什么重新规划信息？","为什么需要独立案例页？"].map((q,i)=><button key={q} type="button" onClick={()=>setLog(log===i?-1:i)}><span>0{i+1}</span><strong>{q}</strong><i>{log===i?"−":"+"}</i>{log===i&&<small>{i===0?"视频已经建立独特的空间记忆，问题在于信息层而不是场景。":i===1?"作品集必须首先证明真实经历和产品判断，而不是展示装饰能力。":"复杂项目需要自己的阅读空间，不能一直附着在背景视频之上。"}</small>}</button>)}</article>
        </section>
        <section className="iteration-compare"><header><p>ITERATION / BEFORE & AFTER</p><span>拖动查看设计从“场景展示”到“内容系统”的变化</span></header><div className="compare-stage"><img className="compare-before" src="/thought-garden-preview.png" alt="早期版本"/><div className="compare-after" style={{width:`${compare}%`}}><img src="/thought-garden-preview.png" alt="当前版本"/></div><span style={{left:`${compare}%`}}><i>↔</i></span><small className="compare-label compare-label--before">EARLY EXPLORATION</small><small className="compare-label compare-label--after">CURRENT SYSTEM</small><input type="range" min="5" max="95" value={compare} onChange={e=>setCompare(Number(e.target.value))} aria-label="拖动比较前后版本"/></div></section>
        <section className="design-anatomy"><div><p>INTERACTIVE ANATOMY</p><h3>每一层交互，<br/>都对应一个产品目的。</h3><ol>{["场景保持沉浸感","导航保证可控性","项目入口建立期待","案例页承载深度"].map((x,i)=><li key={x}><button type="button" className={hotspot===i?"is-active":""} onClick={()=>setHotspot(i)}><span>0{i+1}</span>{x}</button></li>)}</ol></div><figure><img src="/thought-garden-preview.png" alt="网站交互结构解析"/>{["场景","导航","项目","内容"].map((x,i)=><button key={x} type="button" className={`anatomy-dot anatomy-dot--${i+1} ${hotspot===i?"is-active":""}`} onClick={()=>setHotspot(i)}><span>{i+1}</span><b>{x}</b></button>)}</figure></section>
      </main>
    </section>}
  </>;
}
