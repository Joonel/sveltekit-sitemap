var D=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var S=(t,r,e)=>r in t?D(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,m=(t,r)=>{for(var e in r||(r={}))h.call(r,e)&&S(t,e,r[e]);if(f)for(var e of f(r))$.call(r,e)&&S(t,e,r[e]);return t};var y=(t,r,e)=>new Promise((s,n)=>{var i=o=>{try{l(e.next(o))}catch(p){n(p)}},a=o=>{try{l(e.throw(o))}catch(p){n(p)}},l=o=>o.done?s(o.value):Promise.resolve(o.value).then(i,a);l((e=e.apply(t,r)).next())});import c from"fs";var g=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),d=(t,r,e)=>{let s=Object.keys(e).reduce((n,i)=>(i.includes("[")||Object.assign(n,{[i]:{path:i}}),n),{});return Object.entries(e).forEach(([n])=>{let i=t[n];i&&(Array.isArray(i)?i.forEach(a=>{Object.assign(s,{[a.path]:a})}):Object.assign(s,{[(i==null?void 0:i.path)||n]:i}))}),`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(s).map(([n,{path:i,changeFreq:a,image:l,lastMod:o}])=>{var p,u;return`  <url>
    <loc>${r}${i||n}</loc>
  
  ${o?`<lastmod>${o}</lastmod>`:""}
  ${a?`<changefreq>${a}</changefreq>`:""}
  ${l?`
    <image:image>
      <image:loc>${g(l.url)}</image:loc>
      <image:title>${g((p=l.title)!=null?p:" ")}</image:title>
      <image:caption>${g((u=l.altText)!=null?u:" ")}</image:caption>
    </image:image>`:""}
  </url>
  `}).join(`
`)}
</urlset>`},w=(t,r)=>{let e=[],s=n=>{let i=Object.entries(n.paths).reduce((a,[l,o])=>(o?a.allow.push(l):a.disallow.push(l),a),{allow:[],disallow:[]});Array.isArray(n.userAgent)?n.userAgent.forEach(a=>{e.push(m({agent:a,crawlDelay:n.crawlDelay},i))}):e.push(m({agent:n.userAgent||"*",crawlDelay:n.crawlDelay},i))};return typeof t=="boolean"?e.push({agent:"*",allow:t===!0?["/"]:[],disallow:t===!1?["/"]:[]}):Array.isArray(t)?t.forEach(s):s(t),`${e.map(({agent:n,crawlDelay:i,allow:a,disallow:l})=>`User-agent: ${n}
Sitemap: ${r}/sitemap.xml
${i?`Crawl-delay: ${i}`:""}
${a.map(o=>`Allow: ${o}`).join(`
`)}
${l.map(o=>`Disallow: ${o}`).join(`
`)}
`.replace(/\n\n/g,`
`).replace(/\n\n/g,`
`)).join(`
`)}
`.trim()},R=t=>{let r=c.readdirSync(t);return r.some(e=>e==="+page.svelte")?!0:r.some(e=>{let s=t+"/"+e;return c.statSync(s).isDirectory()?R(s):!1})},x=t=>{let r={},e=s=>{let n=c.statSync(s).isDirectory(),i=n&&R(s);n&&i&&c.readdirSync(s).forEach(p=>e(s+"/"+p));let a=s.replace(t,"").replace("/+page.svelte",""),l=s.replace("/+page.svelte",""),o=c.statSync(l).isDirectory()&&c.readdirSync(s.replace("/+page.svelte","")).some(p=>c.statSync(l+"/"+p).isDirectory());!s.endsWith("+page.svelte")&&!o||Object.assign(r,{[a||"/"]:o})};return c.readdirSync(t).forEach(s=>e(t+"/"+s)),r};var k=(t,r={})=>n=>y(void 0,[n],function*({event:e,resolve:s}){if(e.url.host.startsWith("www."))return new Response(null,{status:301,headers:{location:e.url.href.replace("//www.","//")}});if(e.url.pathname==="/sitemap.xml"){let i=r.getRoutes?yield r.getRoutes(e):{};return new Response(d(i,e.url.origin,t),{status:200,headers:{"Content-Type":"application/xml"}})}if(e.url.pathname==="/robots.txt"){let i=r.getRobots?yield r.getRobots(e):!0;return new Response(w(i,e.url.origin),{headers:{"content-type":"text/plain","cache-control":`max-age=${60*60*24}`}})}return s(e)});import O from"fs";var T=({routesDir:t="./src/routes",sitemapFile:r="./src/sitemap.ts"}={})=>{function e(){O.writeFileSync(r,`import type { RO_Sitemap } from 'sveltekit-sitemap';

export const sitemap = (<const>${JSON.stringify(x(t),null,3).replace(/\uFFFF/g,'\\"')}) satisfies RO_Sitemap

export type Sitemap = typeof sitemap
`)}return e(),{name:"sveltekit-sitemap",configureServer(s){s.watcher.on("add",e).on("unlink",e).on("unlinkDir",e)}}};export{g as encodeXML,w as generateRobots,d as generateSitemap,x as getRoutes,k as sitemapHook,T as sitemapPlugin};
//# sourceMappingURL=index.mjs.map