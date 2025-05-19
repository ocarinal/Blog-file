---
layout: post
title: 星途项目app UI设计复盘
date: 2025-04-30 16:20:32
tags:   
    - UI设计
    - 项目
    - 复盘
    - 软件
keywords: 星途项目app
categories:
    - 项目
main_color: "#262626"
cover: /img/starway.png
ai: true
---
 <p>最后更新：2024年4月 | 版本：2.1.24</p>
星途是一个主打露营的社交平台，旨在帮助用户发现和分享露营的乐趣。通过地图、筛选和用户分享，用户可以快速找到适合露营的地点。同时，星途还提供了创建活动、发布日记和记录旅程的功能，让用户能够与其他露营者互动和记录自己的露营经历，作为一个三年前的项目，我对其进行了一次文档复盘。
<!-- 原始文档完整结构 -->
<h2>一、背景</h2>
<p>近年，露营作为一种融合自然体验与社交文化的生活方式，正在年轻人群体中迅速升温。相较于传统出行，露营更强调"自发组织""共建共享"与"深度陪伴"，也由此孕育出对线上组织与线下链接平台的新需求。然而，现有社交产品多以城市场景为主，缺乏对露营这种"时间密集+空间分散"的社交场景的细致支持。</p>

<h2>二、产品定位与用户画像</h2>
    <h3>1. 产品定位</h3>
    <p>我们将星途定位为"露营社交平台"，强调它既有内容社区的结构，又具备工具型产品的效率。围绕三大场景模块构建：</p>
    <ul>
        <li>发现营地：通过地图、筛选与用户分享，快速找到适合露营的地点</li>
        <li>发起同行：建立主题活动，如"一起去林间观星""亲子森林营"等</li>
        <li>记录旅程：以图文 + GPS轨迹的形式，沉淀个人露营记忆，形成专属"露营地图"</li>
    </ul>

<h3>2. 用户画像细化</h3>
    <table border="1">
        <tr><th>用户类型</th><th>主要动机</th><th>典型行为</th></tr>
        <tr><td>新手露营者</td><td>寻找安全靠谱的营地、跟队学习经验</td><td>浏览评论、报名公开活动</td></tr>
        <tr><td>熟练玩家</td><td>发起露营组队、分享露营技巧</td><td>创建活动、发布图文日记</td></tr>
        <tr><td>内容创作者</td><td>打造户外生活调性内容</td><td>拍摄、写文、建立个人主页</td></tr>
        <tr><td>城市社恐青年</td><td>想尝试但不擅社交</td><td>加入低社交门槛的公开营</td></tr>
    </table>

<h2>三、功能架构与部分UI设计</h2>
    <h3>信息架构（Information Architecture）</h3>
<p><img src="https://pic.mikon.ink/i/2025/04/30/681211ff37529.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>
<h3 style="border-left: 4px solid #3b82f6; padding-left: 0.5rem;">首页（社交 + 推荐）</h3>

<p><strong>长图瀑布流 · 分享用户笔记</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/6811f5f1ccc36.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<p><strong>分类的内容信息发布</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/6811fa9395257.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<p><strong>露营笔记流（内容流）</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/6811ff65cad4d.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<p><strong>社区达人露营活动</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/681210889a693.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<h3 style="border-left: 4px solid #3b82f6; padding-left: 0.5rem;">发现页（地图 + 标签筛选）</h3>

<p><strong>营地地图视图</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/681207dc9c877.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<p><strong>筛选功能：地理位置、营地类型、设施、热度</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/6811fff856ff5.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<h3 style="border-left: 4px solid #3b82f6; padding-left: 0.5rem;">商城</h3>

<p><strong>浏览商城首页</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/681200bf5630e.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<p><strong>商品内详情页</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/68120e4d30528.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<h3 style="border-left: 4px solid #3b82f6; padding-left: 0.5rem;">我的</h3>

<p><strong>我的星途</strong></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/6811f871b898d.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>

<p><em>＊受限篇幅，仅展示部分功能与 UI 设计</em></p>
<p><img src="https://pic.mikon.ink/i/2025/04/30/6812118f4b92f.webp" style="width:100%; max-width:100%; border-radius:10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin:1rem 0;"></p>


<h2>四、设计语言与界面风格</h2>
    <h3>1. 品牌设计语言：自然 × 专业 × 连接感</h3>
    <ul>
        <li>主色调：星夜灰、帆布色，呼应露营中的典型色彩体验</li>
        <li>元素风格：弱边框、柔光阴影、拟物渐变，强调"可亲近感"</li>
        <li>字体与排版：正文用更人文友好的字体，简约一步到达</li>
    </ul>

<h3>2. 界面设计样例</h3>
    <ul>
        <li>首页推荐区瀑布流设计注重"图强文弱"</li> 
        <li>地图页采用多层信息展示结构</li>
    </ul>

<h2>五、社交机制与信任设计</h2>
    <h3>1. 活动信任机制</h3>
    <ul>
        <li>活动发起人必须绑定实名并展示"过往活动评分"</li>
        <li>用户在完成活动后可对同行者评价，形成"露营信誉分"</li>
        <li>陌生组队前可加入临时聊天群查看成员历史露营记录</li>
    </ul>

<h3>2. 松弛社交策略</h3>
    <ul>
        <li>支持"默契组队"：加入活动无需开启私聊</li>
        <li>引入匿名活动报名（由发起人审核）</li>
        <li>活动标签机制支持个性偏好匹配</li>
    </ul>

<h2>六、设计挑战与应对方案</h2>
    <table border="1">
        <tr><th>设计挑战</th><th>应对策略</th></tr>
        <tr><td>场景分散，用户动线难统一</td><td>构建基于旅程的整合入口</td></tr>
        <tr><td>地图数据真实性难以保障</td><td>用户生成+平台审核+营地主协作三位一体机制</td></tr>
        <tr><td>露营社交可能被异化为"搭讪工具"</td><td>明确非陌聊导向、引入行为规范举报系统</td></tr>
    </table>

<h2>七、用户测试与优化反馈</h2>
    <h3>1. 内测反馈数据摘要</h3>
    <ul>
        <li>60%的用户第一次使用即点击"附近活动"</li>
        <li>发布图文日记功能使用率高，日均图文浏览达12.5篇</li>
        <li>"地图筛选营地"功能被用户评价为"比其他平台方便"</li>
    </ul>

<h3>2. 用户声音摘录</h3>
    <blockquote>
        "第一次组队去露营，没想到真的有人来，还挺好聊的。"<br>
        —— 来自广州的大学生内测用户
    </blockquote>

<h2>八、未来展望与产品迭代方向</h2>
    <h3>1. 即将上线功能</h3>
    <ul>
        <li>活动保险接入，提升用户安全感</li>
        <li>多人位置共享与活动轨迹生成</li>
        <li>"星野身份"系统（专属勋章、成长记录）</li>
    </ul>

<h3>2. 中长期目标</h3>
    <ul>
        <li>引入营地商业合作（预订、营地周边服务）</li>
        <li>开展"星途市集"计划</li>
        <li>推出"星途电台"小功能</li>
    </ul>

<h2>九、复盘总结</h2>
    <p>星途APP作为一个新兴的社交产品，面对的是一个正在迅速生长的生活方式社群。在整个设计与产品化过程中，我始终坚持「自然氛围 × 真实社交 × 内容记录」三位一体的设计理念，力求让数字产品真正服务于线下的真实体验。

这次版本的完成只是起点。真正的星途，不止于应用本身，更是一次又一次人与自然的连接尝试。在一次次帐篷支起和篝火升起的时刻里，用户才是这段旅程真正的主角</p>
 <footer>
        <hr>
        <p>星途产品团队 LEO LENG ©2025 完整保留所有内容节点</p>
