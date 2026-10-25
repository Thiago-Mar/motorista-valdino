
(function(){
var d=document;d.documentElement.classList.add('js');
var calmo=matchMedia('(prefers-reduced-motion:reduce)').matches;
var els=d.querySelectorAll('main h2,.card,.fotos img,.estrada,.leg,.passos li,.final p,.final .btn');
els.forEach(function(e){e.classList.add('rev');var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.style.transitionDelay=(i*0.12)+'s';});
if(calmo||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on');});}
else{var io=new IntersectionObserver(function(l){l.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target);}});},{threshold:.15});els.forEach(function(e){io.observe(e);});}
var f=d.querySelector('.flut'),h=d.querySelector('.hero');
function t(){f.classList.toggle('show',h.getBoundingClientRect().bottom<80);}
addEventListener('scroll',t,{passive:true});t();
var w=d.getElementById('palavra'),p=['segurança','conforto','agilidade'],n=0;
if(w&&!calmo)setInterval(function(){w.style.opacity=0;setTimeout(function(){n=(n+1)%p.length;w.textContent=p[n];w.style.opacity=1;},300);},2600);
})();



(function(){
var tr=document.getElementById('trilho'),dots=document.getElementById('dots'),ss=[].slice.call(tr.children),i=0,t=null;
var calmo=matchMedia('(prefers-reduced-motion:reduce)').matches;
function marca(k){i=k;[].forEach.call(dots.children,function(d,j){d.classList.toggle('on',j===k);});}
function ir(k){k=(k+ss.length)%ss.length;tr.scrollTo({left:k*tr.clientWidth,behavior:calmo?'auto':'smooth'});marca(k);}
ss.forEach(function(s,k){s.style.backgroundImage='url('+s.querySelector('img').src+')';var b=document.createElement('button');b.setAttribute('aria-label','Foto '+(k+1));b.onclick=function(){ir(k);};dots.appendChild(b);});
tr.addEventListener('scroll',function(){marca(Math.round(tr.scrollLeft/tr.clientWidth));},{passive:true});
document.getElementById('ant').onclick=function(){ir(i-1);};
document.getElementById('prox').onclick=function(){ir(i+1);};
function ligar(){if(!calmo&&!t)t=setInterval(function(){ir(i+1);},4000);}
function parar(){clearInterval(t);t=null;}
var c=document.querySelector('.car');
c.addEventListener('pointerenter',parar);c.addEventListener('pointerleave',ligar);c.addEventListener('touchstart',parar,{passive:true});
marca(0);ligar();
})();
