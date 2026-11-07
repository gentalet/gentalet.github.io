'use strict';

// Cards and detail views share the same content. References are supplied materials.
const projects = {
  duel: {
    number: '01', name: '无限决斗', type: 'PC · 第三人称 RPG', category: 'game',
    date: '2026.08.02 — 至今', role: '个人学习实践',
    summary: '从角色移动到战斗与背包，在一个第三人称 RPG 中练习玩法系统的组织与交互表现。',
    description: 'PC 平台第三人称 RPG 学习项目。结合教程、插件和现有美术资源，实践角色控制、怪物 AI、技能表现、场景交互、伤害与背包系统。',
    details: [
      '结合 Character Controller、Animancer、NodeCanvas 与 Cinemachine，练习第三人称角色的多方向移动、闪避和跳跃。',
      '使用 Animancer 与 Behavior Designer 组织怪物 AI，实践发现、追击、攻击、巡逻及返回出生点等行为。',
      '扩展 Timeline 轨道，控制输入禁用、镜头震动和允许衔接下一段攻击的时机，配合动画与音效组织技能表现。',
      '通过 Timeline 与 Cinemachine 练习箱子开启、武器获取等场景交互与过场表现。',
      '组织攻击与受击数据，实践攻击力、防御力、暴击、免疫、受伤与死亡逻辑，通过回调更新 UI 和伤害飘字。',
      '使用 JSON 与 ScriptableObject 管理动态数据和配置，练习背包界面的数据与表现分离，并封装存档加载、保存及路径管理。'
    ],
    approach: '用状态机组织角色状态，用行为树组织敌人决策；以 Timeline 编排表现和交互时机。UI 通过回调连接数据与显示，动态存档与静态配置分别管理，减少系统之间的直接依赖。',
    tags: ['Unity', 'Animancer', 'Timeline', 'NodeCanvas', 'Behavior Designer', 'Cinemachine', 'JSON / ScriptableObject'],
    reference: '个人学习与整合实践，参考第三人称控制器、背包和 Timeline 等教程，使用现有角色、场景素材及第三方插件完成项目。',
    references: [
      { label: '参考教程 · 第三人称控制器', href: 'https://b23.tv/3AE1FVu' },
      { label: '参考教程 · Timeline', href: 'https://b23.tv/Cu60ER7' },
      { label: '参考教程 · 背包', href: 'https://b23.tv/iQhp5My' }
    ],
    link: 'https://b23.tv/D3YKmn6', linkLabel: '在 B 站观看演示',
    outletNote: '观看项目开发演示，了解玩法与交互表现。'
  },
  litvrc: {
    number: '02', name: 'Litvrc', type: 'VR · 多人交互', category: 'vr',
    date: '2026.07 — 至今', role: '个人学习实践',
    summary: '围绕多人 VR 社交体验，探索手柄输入、角色动作匹配、空间 UI 与联机交互。',
    description: '面向 VR 平台的多人语音聊天与交互学习项目。围绕 VR 输入、全身 IK、UI 和联机测试，练习将不同工具组合成可体验的功能。',
    details: [
      '结合 SteamVR、Vive Utility 与 UnityEvent 封装手柄输入，区分按键、长按、轴值与手势事件，为后续 PC 适配做准备。',
      '使用 VRIK，以头显和手柄作为头部、双手的 IK 目标，实践角色动作匹配。',
      '结合 TrackedHandUGUIInteraction 与泛型面板管理，实践 VR UI 预制体的创建、显示和关闭。',
      '使用 Mirror 进行多人射击测试，实践玩家移动、武器切换、射击与场景切换，并部署无头服务器进行多客户端测试。',
      '在项目中整合手势轮盘、在线视频播放和多人语音聊天功能。'
    ],
    approach: '通过事件把输入与具体行为连接起来，便于分别处理移动、菜单和手势。角色追踪目标驱动 IK，UI 使用面板容器管理生命周期；多人部分以状态同步和多客户端测试验证交互。',
    tags: ['SteamVR', 'Vive Utility', 'Mirror', 'VRIK', 'UnityEvent', 'VR UI'],
    reference: '个人学习与插件整合实践。VR 输入、IK、网络与视频播放依托相应第三方工具；PC 平台适配属于后续方向，不作为已完成能力展示。',
    references: [],
    link: 'mailto:3174681307@qq.com?subject=交流%20Litvrc%20项目', linkLabel: '来信交流这个项目',
    outletNote: '欢迎通过邮件交流实现细节与 VR 开发实践。'
  },
  avatar: {
    number: '03', name: 'VRChat Avatar', type: '角色开发 · 商业交付', category: 'vr',
    date: '2025.09 — 至今', role: '二次开发与交付',
    summary: '基于现有角色素材进行二次开发，从效果调整、功能制作到发布和售后，完成完整交付流程。',
    description: '基于 Unity 2022 与 VRChat 官方 SDK 的 Avatar 二次开发实践。围绕已有模型、服装、装饰与贴图素材进行调整、功能开发、测试与商业化交付。',
    details: [
      '基于现有模型素体、衣服和装饰贴图，进行角色组合、贴图调整与效果优化。',
      '处理骨骼权重修正与 BlendShape 制作，调整角色形态与穿搭表现。',
      '配置 PhysBone 参数及碰撞，调整角色动态效果。',
      '独立完成需求沟通、开发、测试发布与售后维护，积累从制作到交付的完整流程经验。'
    ],
    approach: '从需求和角色效果出发，对已有素材进行适配与调整，在 Unity 中配置功能并测试表现，结合交付后的反馈继续维护。',
    tags: ['Unity 2022', 'VRChat SDK', 'PhysBone', 'BlendShape'],
    reference: '以现有美术素材为基础的二次开发，对第三方模型、衣服与贴图进行适配、效果调整及功能配置。',
    references: [],
    link: 'https://www.goofish.com/item?id=1043972165527', linkLabel: '在闲鱼查看作品',
    outletNote: '查看 Avatar 作品的效果与功能介绍。'
  }
};

const practices = {
  ui: {
    number: '01', name: 'UI 与框架', type: '基础组织与界面', icon: 'code',
    role: '课程练习 / 参考实现', date: '持续学习',
    summary: '从泛型面板管理到事件中心，练习让界面、数据与逻辑各有分工。',
    description: '在学习工程中实践 UGUI、面板管理和常见代码组织方式，理解界面创建、状态维护与数据更新之间的关系。',
    details: ['练习按面板类型加载 Prefab，维护已创建面板，管理显示与隐藏。', '结合 MVC、PureMVC 练习，理解数据、界面与控制逻辑的分工。', '学习单例、事件中心与对象池，将通用逻辑封装为可复用模块。'],
    approach: '从单个界面开始，将重复操作抽出；通过事件连接不同模块，再在背包等具体场景中实践数据与表现分离。',
    tags: ['UGUI', '泛型', 'Prefab', 'MVC / PureMVC', '事件中心', '对象池'],
    reference: '整理自学习工程的课程练习和参考实现，重点是理解与应用常见模式。', references: []
  },
  data: {
    number: '02', name: '数据与导表', type: '持久化与配置', icon: 'layers',
    role: '学习与工具尝试', date: '持续学习',
    summary: '练习 JSON、二进制存储与 Excel 读取，理解运行数据和配置数据的不同用途。',
    description: '围绕存档、数据序列化与配置表展开练习，尝试把数据读写和编辑器入口组织成便于重复使用的工具。',
    details: ['学习 JSON、XML 与二进制数据存储，并练习对数据读写接口进行封装。', '练习保存、加载和存档管理，并在 RPG 项目中继续应用。', '尝试 Excel 文件读取、行遍历及编辑器菜单入口，探索配置表的字段与数据组织。'],
    approach: '区分玩家动态数据与静态配置：前者关注保存和恢复，后者关注读取与使用。Excel 工具作为持续完善的学习尝试展示。',
    tags: ['JSON', '二进制', 'ScriptableObject', 'Excel', 'Unity Editor'],
    reference: '整理自数据持久化课程、存档练习和导表实验；部分工具仍在尝试和完善中。', references: []
  },
  resources: {
    number: '03', name: '资源与热更新', type: '加载与脚本运行', icon: 'sparkle',
    role: '方案学习 / 加载实验', date: '持续学习',
    summary: '通过 Addressables 与 xLua 练习，理解资源加载和 Lua 脚本运行的连接方式。',
    description: '学习 Addressables 资源管理、AssetBundle 加载以及 xLua 的基础运行方式，逐步理解热更新方案涉及的不同环节。',
    details: ['练习 Addressables 的资源加载与 Label 使用。', '练习 AssetBundle 资源加载，并接触 Lua 文本资源的加载方式。', '使用 LuaEnv 与自定义 Loader，练习从本地文件或 AssetBundle 读取 Lua 脚本。'],
    approach: '分别验证资源如何被找到、如何被加载，以及 Lua 脚本如何进入运行环境，再理解这些环节在热更新方案中的关系。',
    tags: ['Addressables', 'AssetBundle', 'xLua', 'LuaEnv', '自定义 Loader'],
    reference: '围绕资源管理与热更新课程进行的加载实验，持续探索资源加载和脚本运行机制。', references: []
  },
  networking: {
    number: '04', name: '网络通信', type: '协议与多人同步', icon: 'vr',
    role: '课程学习 / 框架实践', date: '持续学习',
    summary: '从 Socket、消息序列化到状态同步，在练习与联机测试中理解数据如何流动。',
    description: '学习网络通信基础与常用框架，连接协议编写、消息处理和多人客户端交互的实践经验。',
    details: ['练习 Socket、TCP / UDP、HTTP，以及消息类型区分等网络基础。', '练习 Protobuf 消息定义与序列化，理解协议数据的传递。', '使用过 Fantasy 框架，接触连接管理、客户端与服务端消息处理及 MongoDB 玩家信息存储。', '在 Litvrc 中使用 Mirror 进行状态同步与多客户端联机测试。'],
    approach: '先从消息的编码、发送和接收理解通信，再通过框架实践观察连接管理和玩家状态同步；继续学习帧同步与状态同步的差异。',
    tags: ['Socket', 'TCP / UDP', 'Protobuf', 'Fantasy', 'MongoDB', 'Mirror'],
    reference: '网络基础课程练习与框架使用经验。Mirror 的联机测试与交互应用见 Litvrc 实践。', references: []
  }
};

const $ = selector => document.querySelector(selector);
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function icon(name) {
  const node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  node.setAttribute('class', 'icon');
  node.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#i-' + name);
  node.append(use);
  return node;
}
function externalLink(href, label, className = '') {
  const link = el('a', className, label);
  link.href = href;
  if (href.startsWith('https://')) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', label + '（在新标签页打开）');
  }
  return link;
}
function tags(values) {
  const group = el('div', 'tags');
  group.append(...values.map(value => el('span', '', value)));
  return group;
}

document.querySelectorAll('[data-project-card]').forEach(card => {
  const key = card.dataset.projectCard;
  const p = projects[key];
  const top = el('div', 'project-topline');
  top.append(el('span', '', p.type), el('time', '', p.date));
  const title = el('h3', '', p.name);
  title.append(el('span', '', '/' + p.number));
  const button = el('button', 'project-detail', '查看实践详情');
  button.type = 'button';
  button.dataset.project = key;
  button.setAttribute('aria-label', '查看 ' + p.name + ' 实践详情');
  const arrow = el('span');
  arrow.append(icon('arrow'));
  button.append(arrow);
  const outlet = externalLink(p.link, p.linkLabel, 'project-outlet');
  outlet.append(icon('arrow'));
  card.replaceChildren(top, title, el('p', 'project-role', p.role), el('p', 'project-description', p.summary), tags(p.tags.slice(0, 4)), button, outlet);
});

Object.entries(practices).forEach(([key, p]) => {
  const card = el('article', 'practice-card');
  const top = el('div', 'practice-topline');
  const badge = el('span', 'practice-icon');
  badge.append(icon(p.icon));
  top.append(badge, el('span', '', 'EXPLORATION / ' + p.number));
  const button = el('button', 'practice-detail', '展开学习记录');
  button.type = 'button';
  button.dataset.practice = key;
  button.setAttribute('aria-label', '展开' + p.name + '学习记录');
  button.append(icon('right'));
  card.append(top, el('h3', '', p.name), el('p', 'practice-summary', p.summary), el('p', 'practice-kind', p.role), button);
  $('#practice-grid').append(card);
});

const nav = $('#navigation');
const menu = $('.menu-toggle');
function closeMenu() {
  nav.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', '展开导航');
  menu.querySelector('use').setAttribute('href', '#i-menu');
}
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? '关闭导航' : '展开导航');
  menu.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

let rotation = 0;
$('.rotate-button').addEventListener('click', () => {
  rotation += 90;
  $('.scene-core').style.transform = `rotate(${rotation}deg)`;
});

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  document.querySelectorAll('.project').forEach(p => {
    p.hidden = button.dataset.filter !== 'all' && p.dataset.category !== button.dataset.filter;
    if (!p.hidden) count++;
  });
  $('.project-count').textContent = String(count).padStart(2, '0') + ' 项作品与实践';
}));

const dialog = $('#project-dialog');
let lastTrigger = null;
let previousOverflow = '';
function openDetail(p, trigger, practice) {
  lastTrigger = trigger;
  $('#dialog-eyebrow').textContent = `${practice ? 'EXPLORATION' : 'PROJECT'} ${p.number} / ${p.type}`;
  $('#dialog-title').textContent = p.name;
  $('#dialog-date').textContent = p.role + ' · ' + p.date;
  $('#dialog-description').previousElementSibling.textContent = practice ? '学习主题' : '项目简介';
  $('#dialog-description').textContent = p.description;
  $('#dialog-details-heading').textContent = practice ? '练习内容' : '完成的实践';
  $('#dialog-details').replaceChildren(...p.details.map(text => el('li', '', text)));
  $('#dialog-approach').textContent = p.approach;
  $('#dialog-tags').replaceChildren(...p.tags.map(text => el('span', '', text)));
  $('#dialog-reference').textContent = p.reference;
  $('#dialog-references').replaceChildren(...p.references.map(ref => {
    const item = el('li');
    item.append(externalLink(ref.href, ref.label));
    return item;
  }));
  $('#dialog-references').hidden = p.references.length === 0;
  $('#dialog-link-heading').textContent = practice ? '继续交流' : '作品入口';
  $('#dialog-outlet-note').textContent = p.outletNote || '这些记录来自持续学习，欢迎交流相关实现与想法。';
  const link = $('#dialog-link');
  link.href = p.link || 'mailto:3174681307@qq.com?subject=' + encodeURIComponent('交流' + p.name + '学习实践');
  link.querySelector('span').textContent = p.linkLabel || '来信交流这个主题';
  const external = link.getAttribute('href').startsWith('https://');
  if (external) link.target = '_blank';
  else link.removeAttribute('target');
  link.setAttribute('aria-label', (p.linkLabel || '来信交流这个主题') + (external ? '（在新标签页打开）' : ''));
  // A previous detail may have been closed while scrolled near its end.
  dialog.scrollTop = 0;
  previousOverflow = document.body.style.overflow;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openDetail(projects[button.dataset.project], button, false)));
document.querySelectorAll('[data-practice]').forEach(button => button.addEventListener('click', () => openDetail(practices[button.dataset.practice], button, true)));
$('.dialog-close').addEventListener('click', () => dialog.close());
let pointerStartedOutside = false;
function outsideDialog(e) {
  const r = dialog.getBoundingClientRect();
  return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
}
dialog.addEventListener('pointerdown', e => { pointerStartedOutside = e.target === dialog && outsideDialog(e); });
dialog.addEventListener('click', e => {
  if (pointerStartedOutside && e.target === dialog && outsideDialog(e)) dialog.close();
  pointerStartedOutside = false;
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = previousOverflow;
  if (lastTrigger) lastTrigger.focus({ preventScroll: true });
});

let toastTimer;
function toast(text) {
  $('#toast').textContent = text;
  $('#toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 3500);
}
$('#copy-email').addEventListener('click', async () => {
  const email = '3174681307@qq.com / 3166523356@qq.com';
  let copied = false;
  try {
    if (navigator.clipboard) {
      await Promise.race([navigator.clipboard.writeText(email), new Promise((_, reject) => setTimeout(() => reject(new Error('Clipboard timeout')), 1200))]);
      copied = true;
    }
  } catch { /* Local files and denied clipboard permissions use the fallback. */ }
  if (!copied) {
    const field = el('textarea');
    field.value = email;
    field.setAttribute('aria-label', '待复制的邮箱');
    field.style.cssText = 'position:fixed;opacity:0;left:-9999px';
    document.body.append(field);
    field.select();
    try { copied = document.execCommand('copy'); } catch { /* Show manual-copy guidance. */ }
    field.remove();
    $('#copy-email').focus({ preventScroll: true });
  }
  toast(copied ? '两个邮箱已复制，期待与你交流' : '复制未完成，请手动选择下方邮箱');
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) nav.querySelectorAll('a').forEach(a => {
        const current = a.hash === '#' + e.target.id;
        a.classList.toggle('active', current);
        if (current) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}
