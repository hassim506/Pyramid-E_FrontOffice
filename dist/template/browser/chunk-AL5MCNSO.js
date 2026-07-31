import{a as _}from"./chunk-VA6Y6ECT.js";import{a as $}from"./chunk-JNSTIPOK.js";import{a as u}from"./chunk-VPW6IMXH.js";import{c as v}from"./chunk-RJY34IVQ.js";import{fa as h,ja as x}from"./chunk-3FZDVSC7.js";import{a as s,f as C,g as f}from"./chunk-GAL4ENT6.js";var b=C($());var F={entreprise_nom:"",entreprise_sous_titre:"Learning Management System",logo_url:"",couleur_principale:"#059669",accroche:"a compl\xE9t\xE9 avec succ\xE8s la formation",signataire_nom:"",signataire_role:"Responsable RH",duree_validite:"1 an",show_score:!0,show_duree:!0,show_formateur:!0,show_qr:!0,show_numero:!0,show_date_expiration:!0,bg_couleur:"#FAFBFF"},y=class c{constructor(t){this.http=t}static baseUrl=u.apiUrl.replace(/\/api$/,"");apiUrl=u.apiUrl;getCertificats(){return this.http.get(`${this.apiUrl}/certificats`)}downloadPdf(t,e){return f(this,null,function*(){let i=s({},F);if(t.modele?.config)i=s(s({},i),t.modele.config),console.log("\u2705 Config du mod\xE8le appliqu\xE9e:",i);else if(t.modele?.template_html)try{let o=JSON.parse(t.modele.template_html);o&&typeof o=="object"&&(i=s(s({},i),o),console.log("\u2705 Config du template_html appliqu\xE9e:",i))}catch(o){console.warn("\u26A0\uFE0F Impossible de parser le mod\xE8le de certificat",o)}if(e&&(i=s(s({},i),e)),i.logo_url){console.log("\u{1F4CB} Logo URL avant traitement:",i.logo_url);try{let o=i.logo_url;if(o.startsWith("http://")||o.startsWith("https://")){let n=o.match(/\/storage\/(.+)$/);n&&(o=n[1])}else o.startsWith("/storage/")&&(o=o.substring(9));console.log("\u{1F4C2} Chemin extrait pour le proxy:",o);let a=`${this.apiUrl}/certificats/logo-proxy?path=${encodeURIComponent(o)}`;console.log("\u{1F517} URL du proxy:",a),i.logo_url=yield this.imageToBase64(a),console.log("\u2705 Logo converti en Base64 (taille:",i.logo_url.length,"caract\xE8res)")}catch(o){console.error("\u274C Impossible de convertir le logo en Base64:",o),console.error("URL du logo originale:",i.logo_url),i.logo_url=""}}else console.log("\u26A0\uFE0F Pas de logo_url dans la config");let d=this.buildCertHtml(t,i),r=document.createElement("div");r.style.cssText="position:fixed;top:-9999px;left:-9999px;z-index:-1;pointer-events:none;",r.innerHTML=d,document.body.appendChild(r);try{let o=r.firstElementChild,a=yield(0,b.default)(o,{scale:2,useCORS:!0,logging:!1,backgroundColor:i.bg_couleur||"#FAFBFF"}),n=new _({orientation:"landscape",unit:"mm",format:"a4"}),p=n.internal.pageSize.getWidth(),l=n.internal.pageSize.getHeight(),m=a.height/a.width,g=p*m,w=Math.max(0,(l-g)/2);n.addImage(a.toDataURL("image/jpeg",.95),"JPEG",0,w,p,Math.min(g,l)),n.save(`certificat-${t.code_unique}.pdf`)}finally{document.body.removeChild(r)}})}fmt(t){return t?new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"}):"\u2014"}initials(t){return(t||"").split(" ").map(e=>e[0]).slice(0,2).join("").toUpperCase()||"?"}imageToBase64(t){return f(this,null,function*(){try{console.log("\u{1F5BC}\uFE0F T\xE9l\xE9chargement du logo via HttpClient:",t);let e=yield this.http.get(t,{responseType:"blob"}).toPromise();if(!e)throw new Error("Failed to download image");return console.log("\u2705 Image t\xE9l\xE9charg\xE9e:",e.size,"bytes, type:",e.type),new Promise((i,d)=>{let r=new FileReader;r.onloadend=()=>{let o=r.result;console.log("\u2705 Image convertie en Base64 (",o.substring(0,50),"...)"),i(o)},r.onerror=o=>{console.error("\u274C Erreur lors de la conversion en Base64:",o),d(o)},r.readAsDataURL(e)})}catch(e){throw console.error("\u274C Erreur lors du t\xE9l\xE9chargement de l'image:",e),new Error(`Failed to load image: ${t}`)}})}buildCertHtml(t,e){let i=e.couleur_principale,d=i+"20",r=[t.employe?.prenom,t.employe?.nom].filter(Boolean).join(" ")||t.employe?.name||"\u2014",o=[t.formateur?.prenom,t.formateur?.nom].filter(Boolean).join(" ")||t.formateur?.name||"\u2014",a=e.logo_url?`<img src="${e.logo_url}" style="width:44px;height:44px;object-fit:contain;border-radius:8px;">`:`<div style="width:44px;height:44px;border-radius:8px;background:${i};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0;">${this.initials(e.entreprise_nom||"E")}</div>`,n=e.show_numero?`<div style="font-size:10px;color:#6c757d;letter-spacing:1px;font-family:monospace;">N\xB0 ${t.code_unique}</div>`:"",p=e.show_score||e.show_duree?`
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;margin:16px 0 20px;">
        ${e.show_score?`<div style="text-align:center;">
          <div style="font-size:26px;font-weight:800;color:${i};">${t.score_final||"\u2014"}%</div>
          <div style="font-size:11px;color:#6c757d;letter-spacing:.5px;">Score obtenu</div>
        </div>`:""}
        ${e.show_score&&e.show_duree?'<div style="width:1px;height:40px;background:#dee2e6;"></div>':""}
        ${e.show_duree?`<div style="text-align:center;">
          <div style="font-size:26px;font-weight:800;color:#1a1a2e;">${t.formation?.duree_totale||"\u2014"}h</div>
          <div style="font-size:11px;color:#6c757d;letter-spacing:.5px;">Dur\xE9e totale</div>
        </div>`:""}
      </div>`:"",l=[];(e.signataire_nom||e.signataire_role)&&l.push(`
        <div style="text-align:center;min-width:140px;">
          <div style="height:1px;background:#6c757d;margin-bottom:8px;"></div>
          <div style="font-size:12px;font-weight:600;color:#1a1a2e;">${e.signataire_nom||"\u2014"}</div>
          <div style="font-size:11px;color:#6c757d;">${e.signataire_role}</div>
        </div>`),e.show_formateur&&l.push(`
        <div style="text-align:center;min-width:140px;">
          <div style="height:1px;background:#6c757d;margin-bottom:8px;"></div>
          <div style="font-size:12px;font-weight:600;color:#1a1a2e;">${o}</div>
          <div style="font-size:11px;color:${i};">Formateur \xB7 ${t.formation?.titre||""}</div>
        </div>`);let m=l.length?`<div style="display:flex;align-items:flex-end;justify-content:center;gap:48px;margin:16px 0;">${l.join("")}</div>`:"",g=`D\xE9livr\xE9 le ${this.fmt(t.date_delivrance)}`+(e.show_date_expiration&&t.date_expiration?` \xB7 Valide jusqu'au ${this.fmt(t.date_expiration)} (${e.duree_validite})`:"");return`
      <div style="
        width:820px;
        background:${e.bg_couleur||"#FAFBFF"};
        border-radius:12px;
        overflow:hidden;
        font-family:'Segoe UI',Arial,sans-serif;
        box-shadow:0 4px 32px rgba(0,0,0,0.12);
      ">
        <div style="height:6px;background:${i};"></div>

        <div style="padding:24px 36px 0;display:flex;align-items:center;gap:14px;">
          ${a}
          <div style="flex:1;">
            <div style="font-size:17px;font-weight:700;color:#1a1a2e;line-height:1.2;">${e.entreprise_nom||"Entreprise"}</div>
            <div style="font-size:11px;color:#6c757d;">${e.entreprise_sous_titre}</div>
          </div>
          ${n}
        </div>

        <div style="padding:20px 36px 28px;text-align:center;">
          <div style="display:inline-block;background:${d};color:${i};font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:4px 16px;border-radius:20px;margin-bottom:14px;">
            CERTIFICAT DE R\xC9USSITE
          </div>
          <div style="font-size:30px;font-weight:800;color:#1a1a2e;margin-bottom:8px;">${r}</div>
          <div style="font-size:13px;color:#6c757d;margin-bottom:6px;">${e.accroche}</div>
          <div style="font-size:18px;font-weight:700;color:${i};margin-bottom:4px;">${t.formation?.titre||"\u2014"}</div>

          ${p}
          ${m}

          <div style="font-size:11px;color:#6c757d;border-top:1px solid #dee2e6;padding-top:12px;margin-top:8px;">
            ${g}
          </div>
        </div>

        <div style="height:4px;background:${d};"></div>
      </div>`}static \u0275fac=function(e){return new(e||c)(x(v))};static \u0275prov=h({token:c,factory:c.\u0275fac,providedIn:"root"})};export{F as a,y as b};
