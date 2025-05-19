hexo.extend.tag.register('timeline', function (args, content) {
  const title = args.join(' ');
  return `<div class="timeline"><h2>${title}</h2>${hexo.render.renderSync({text: content, engine: 'markdown'})}</div>`;
}, { ends: true });
