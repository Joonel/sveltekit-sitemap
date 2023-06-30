var R=Object.defineProperty;var w=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(t,s,e)=>s in t?R(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,c=(t,s)=>{for(var e in s||(s={}))D.call(s,e)&&f(t,e,s[e]);if(w)for(var e of w(s))$.call(s,e)&&f(t,e,s[e]);return t};var S=(t,s,e)=>new Promise((i,a)=>{var r=o=>{try{l(e.next(o))}catch(m){a(m)}},n=o=>{try{l(e.throw(o))}catch(m){a(m)}},l=o=>o.done?i(o.value):Promise.resolve(o.value).then(r,n);l((e=e.apply(t,s)).next())});import p from"fs";var g=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),d=(t,s,e)=>{let i=Object.keys(e).reduce((a,r)=>(r.includes("[")||Object.assign(a,{[r]:{path:r}}),a),{});return Object.entries(e).forEach(([a])=>{let r=t[a];r&&(Array.isArray(r)?r.forEach(n=>{Object.assign(i,{[n.path]:n})}):Object.assign(i,{[(r==null?void 0:r.path)||a]:r}))}),`<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.entries(i).map(([a,{path:r,changeFreq:n,image:l,lastMod:o}])=>{var m,u;return`  <url>
    <loc>${s}${r||a}</loc>
  
  ${o?`<lastmod>${o}</lastmod>`:""}
  ${n?`<changefreq>${n}</changefreq>`:""}
  ${l?`
    <image:image>
      <image:loc>${g(l.url)}</image:loc>
      <image:title>${g((m=l.title)!=null?m:" ")}</image:title>
      <image:caption>${g((u=l.altText)!=null?u:" ")}</image:caption>
    </image:image>`:""}
  </url>
  `}).join(`
`)}
</urlset>`},y=(t,s)=>{let e=[],i=a=>{let r=Object.entries(a.paths).reduce((n,[l,o])=>(o?n.allow.push(l):n.disallow.push(l),n),{allow:[],disallow:[]});Array.isArray(a.userAgent)?a.userAgent.forEach(n=>{e.push(c({agent:n,crawlDelay:a.crawlDelay},r))}):e.push(c({agent:a.userAgent||"*",crawlDelay:a.crawlDelay},r))};return typeof t=="boolean"?e.push({agent:"*",allow:t===!0?["/"]:[],disallow:t===!1?["/"]:[]}):Array.isArray(t)?t.forEach(i):i(t),`${e.map(({agent:a,crawlDelay:r,allow:n,disallow:l})=>`User-agent: ${a}
Sitemap: ${s}/sitemap.xml
${r?`Crawl-delay: ${r}`:""}
${n.map(o=>`Allow: ${o}`).join(`
`)}
${l.map(o=>`Disallow: ${o}`).join(`
`)}
`.replace(/\n\n/g,`
`).replace(/\n\n/g,`
`)).join(`
`)}
`.trim()},h=t=>{let s=p.readdirSync(t);return s.some(e=>e==="+page.svelte")?!0:s.some(e=>{let i=t+"/"+e;return p.statSync(i).isDirectory()?h(i):!1})},x=t=>{let s={},e=i=>{let a=p.statSync(i).isDirectory(),r=a&&h(i);a&&r&&p.readdirSync(i).forEach(m=>e(i+"/"+m));let n=i.replace(t,"").replace("/+page.svelte",""),l=i.replace("/+page.svelte",""),o=p.statSync(l).isDirectory()&&p.readdirSync(i.replace("/+page.svelte","")).some(m=>p.statSync(l+"/"+m).isDirectory());!i.endsWith("+page.svelte")&&!o||Object.assign(s,{[n||"/"]:o})};return p.readdirSync(t).forEach(i=>e(t+"/"+i)),s};var k=(t,s={})=>a=>S(void 0,[a],function*({event:e,resolve:i}){if(e.url.pathname==="/sitemap.xml"){let r=s.getRoutes?yield s.getRoutes(e):{};return new Response(d(r,e.url.origin,t),{status:200,headers:{"Content-Type":"application/xml"}})}if(e.url.pathname==="/robots.txt"){let r=s.getRobots?yield s.getRobots(e):!0;return new Response(y(r,e.url.origin),{headers:{"content-type":"text/plain","cache-control":`max-age=${60*60*24}`}})}return i(e)});import b from"fs";var T=({routesDir:t="./src/routes",sitemapFile:s="./src/sitemap.ts"}={})=>{function e(){b.writeFileSync(s,`import type { RO_Sitemap } from 'sveltekit-sitemap';

export const sitemap = (<const>${JSON.stringify(x(t),null,3).replace(/\uFFFF/g,'\\"')}) satisfies RO_Sitemap

export type Sitemap = typeof sitemap
`)}return e(),{name:"sveltekit-sitemap",configureServer(i){i.watcher.add([t]).on("add",e).on("unlink",e).on("unlinkDir",e)}}};export{g as encodeXML,y as generateRobots,d as generateSitemap,x as getRoutes,k as sitemapHook,T as sitemapPlugin};
//# sourceMappingURL=index.mjs.map