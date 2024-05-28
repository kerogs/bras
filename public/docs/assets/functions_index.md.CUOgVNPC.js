import{_ as a,E as n,c as l,m as s,a as e,J as t,a4 as p,o as h}from"./chunks/framework.C5rzuSi5.js";const C=JSON.parse('{"title":"Liste des fonctions","description":"","frontmatter":{},"headers":[],"relativePath":"functions/index.md","filePath":"functions/index.md"}'),o={name:"functions/index.md"},r=p(`<h1 id="liste-des-fonctions" tabindex="-1">Liste des fonctions <a class="header-anchor" href="#liste-des-fonctions" aria-label="Permalink to &quot;Liste des fonctions&quot;">​</a></h1><p>Une fonction est une séquence d’instructions réalisant un calcul ou une tâche. Une fonction peut posséder des paramètres d’entrée (des arguments) et peut également retourner des valeurs de sortie. <a href="https://arduino.blaisepascal.fr/les-fonctions/#:~:text=Une%20fonction%20est%20une%20s%C3%A9quence,peut%20%C3%AAtre%20appel%C3%A9e%20plusieurs%20fois." target="_blank" rel="noreferrer">en savoir plus</a></p><p>Une fonction doit être déclarée une seule fois, et peut être appelée plusieurs fois.</p><h3 id="exemple-d-utilisation" tabindex="-1">Exemple d&#39;utilisation <a class="header-anchor" href="#exemple-d-utilisation" aria-label="Permalink to &quot;Exemple d&#39;utilisation&quot;">​</a></h3><p>Voici un exemple simple d&#39;une fonction pour additionner 2 valeurs. (en c++)</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculFonction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> valeurA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> valeurB</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(valeurA </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> valeurB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Serial.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Aucune valeur.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> calcul </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> valeurA </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> valeurB;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> calcul;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="liste-des-versions" tabindex="-1">Liste des versions <a class="header-anchor" href="#liste-des-versions" aria-label="Permalink to &quot;Liste des versions&quot;">​</a></h2>`,7),k=s("a",{href:"/functions/configset.html"},"configset()",-1),d=s("a",{href:"/functions/logspc.html"},"logsPc()",-1),c=s("a",{href:"/functions/searchArray.html"},"searchArray()",-1),u=s("a",{href:"/functions/tamponReset.html"},"tamponReset()",-1),E=s("a",{href:"/functions/sendColorHMI.html"},"sendColorHMI()",-1),g=s("a",{href:"/functions/getValue.html"},"getValue()",-1),f=s("a",{href:"/functions/numDigits.html"},"numDigits()",-1),y=s("a",{href:"/functions/imprimante.html"},"imprimante()",-1);function _(m,F,A,x,v,D){const i=n("Badge");return h(),l("div",null,[r,s("ul",null,[s("li",null,[k,e(),t(i,{type:"tip",text:"^1.1.8"})]),s("li",null,[d,e(),t(i,{type:"danger",text:"< 1.1.24-alpha"})]),s("li",null,[c,e(),t(i,{type:"tip",text:"^1.1.28"})]),s("li",null,[u,e(),t(i,{type:"tip",text:"^1.1.30"})]),s("li",null,[E,e(),t(i,{type:"tip",text:"^1.1.31"})]),s("li",null,[g,e(),t(i,{type:"tip",text:"^1.1.31"})]),s("li",null,[f,e(),t(i,{type:"tip",text:"^1.1.31"})]),s("li",null,[y,e(),t(i,{type:"tip",text:"^1.1.35"})])])])}const q=a(o,[["render",_]]);export{C as __pageData,q as default};