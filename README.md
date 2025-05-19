<blockquote data-start="120" data-end="226">
<p data-start="122" data-end="226" class="">🛠️ <strong data-start="126" data-end="141">Hexo 博客源码仓库</strong><br data-start="141" data-end="144">
本仓库用于管理 Hexo 博客的全部源文件，包括 Markdown 文章、主题、配置文件及静态资源。结合 GitHub Actions 实现博客自动构建与部署。</p>
</blockquote>
<h3 data-start="228" data-end="240" class="">📁 项目结构：</h3>
<ul data-start="242" data-end="366">
<li data-start="242" data-end="272" class="">
<p data-start="244" data-end="272" class=""><code data-start="244" data-end="253">source/</code>：存放博客正文内容（Markdown）</p>
</li>
<li data-start="273" data-end="309" class="">
<p data-start="275" data-end="309" class=""><code data-start="275" data-end="284">themes/</code>：使用 Anzhiyu 主题并已本地化（非子模块）</p>
</li>
<li data-start="310" data-end="332" class="">
<p data-start="312" data-end="332" class=""><code data-start="312" data-end="325">_config.yml</code>：站点全局配置</p>
</li>
<li data-start="333" data-end="366" class="">
<p data-start="335" data-end="366" class=""><code data-start="335" data-end="341">Qexo</code>：接入 Qexo 面板以支持文章的图形化管理与发布</p>
</li>
</ul>
<h3 data-start="368" data-end="380" class="">🔄 自动部署：</h3>
<ul data-start="382" data-end="546">
<li data-start="382" data-end="461" class="">
<p data-start="384" data-end="461" class="">配合部署仓库 <a data-start="391" data-end="461" rel="noopener" target="_new" class="" href="https://github.com/ocarinal/ocarinal.github.io"><code data-start="392" data-end="412">ocarinal.github.io</code></a></p>
</li>
<li data-start="462" data-end="546" class="">
<p data-start="464" data-end="546" class="">每次提交或通过 Qexo 面板发布后，GitHub Actions 会自动运行 Hexo 编译命令，将生成的静态页面部署至界面仓库并发布到 GitHub Pages</p>
</li>
</ul>
