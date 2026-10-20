const $ = id => document.getElementById(id);
const birthday = new Date('2026-11-17T00:00:00');
function updateCountdown(){
  let diff = birthday - new Date();
  if(diff <= 0){$('countdown').innerHTML='<div><b>IT’S</b><small>your day</small></div><div><b>YOUR</b><small>birthday</small></div><div><b>♡</b><small>shine on</small></div>';$('countdown-caption').textContent='Happy birthday, Jhalak! ✦';return;}
  const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  $('days').textContent=d;$('hours').textContent=String(h).padStart(2,'0');$('minutes').textContent=String(m).padStart(2,'0');$('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);
$('startBtn').addEventListener('click',()=>{document.querySelector('#intro').scrollIntoView({behavior:'smooth'});burst(22);});
$('menuToggle').addEventListener('click',()=>$('navLinks').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('navLinks').classList.remove('open')));

const letters={
 happy:{title:'For when you’re happy ♡',text:'Meriii pyariii Jhalakkkk, I hope you know how much I love seeing you happy. I hope you get a thousand more reasons to smile, and I hope I get to be there for a lot of them. Save this feeling, take a deep breath, and let yourself enjoy every little bit of today. You deserve the good things.'},
 sad:{title:'For when things feel heavy ☾',text:'Hey, my favourite girl. You don’t have to be cheerful every second, and you never have to pretend with me. Take things one little step at a time, okay? I hope you give yourself the same kindness you give to everyone else. I’m in your corner, always rooting for you, even on the days you don’t feel like your brightest self.'},
 miss:{title:'For when you miss me ✧',text:'Look up at the sky for a second. Somewhere above all our busy little days, the same moon is shining. Imagine me sending you the biggest hug through it. Until I can tell you this in person, let this tiny corner remind you that you matter to me a whole lot. Now smile a little for me, cutie. ♡'}
};
$('letterModal').addEventListener('click',e=>{if(e.target===$('letterModal'))closeLetter()});
document.querySelectorAll('[data-letter]').forEach(btn=>btn.addEventListener('click',()=>{const l=letters[btn.dataset.letter];$('modalTitle').textContent=l.title;$('modalText').textContent=l.text;$('letterModal').classList.remove('hidden');document.body.style.overflow='hidden'}));
function closeLetter(){$('letterModal').classList.add('hidden');document.body.style.overflow=''}
$('closeModal').addEventListener('click',closeLetter);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLetter()});

document.querySelectorAll('[data-photo]').forEach(input=>input.addEventListener('change',()=>{
 const file=input.files[0];if(!file)return;const target=$(input.dataset.photo);const url=URL.createObjectURL(file);target.innerHTML='';const img=document.createElement('img');img.src=url;img.alt='Your chosen memory';target.appendChild(img);
}));
const reasons=[
'The way you make even the most ordinary day feel special.',
'Your little expressions and the tiny things you do without noticing.',
'How there is always something new to learn about you.',
'The way you can make me smile just by being yourself.',
'Your kindness, including the kindness you sometimes forget to give yourself.',
'The sound of your laugh and the happiness behind it.',
'The memories we have already made, and the ones still waiting for us.',
'Because you are you — and that is already a pretty wonderful reason.'
];
let reasonIndex=0;
function renderReason(){$('reasonText').textContent=reasons[reasonIndex];$('reasonNumber').textContent=String(reasonIndex+1).padStart(2,'0')+' / '+String(reasons.length).padStart(2,'0');$('reasonDots').innerHTML=reasons.map((_,i)=>`<span class="${i===reasonIndex?'active':''}"></span>`).join('')}
function moveReason(dir){reasonIndex=(reasonIndex+dir+reasons.length)%reasons.length;renderReason()}
$('prevReason').addEventListener('click',()=>moveReason(-1));$('nextReason').addEventListener('click',()=>moveReason(1));renderReason();
$('giftBtn').addEventListener('click',()=>{$('surpriseMessage').classList.remove('hidden');$('giftBtn').classList.add('hidden');burst(55);$('surpriseMessage').scrollIntoView({behavior:'smooth',block:'center'})});
$('confettiBtn').addEventListener('click',()=>{burst(100);$('toast').classList.remove('hidden');setTimeout(()=>$('toast').classList.add('hidden'),2500)});
function burst(count){const colors=['#f1a6c4','#f9dfeb','#c2cafa','#fff0d9','#a6c9ed'];for(let i=0;i<count;i++){const el=document.createElement('i');el.className='confetti';el.textContent=['✦','♡','✧','·'][Math.floor(Math.random()*4)];el.style.left=Math.random()*100+'vw';el.style.color=colors[Math.floor(Math.random()*colors.length)];el.style.fontSize=(10+Math.random()*18)+'px';el.style.animationDuration=(2+Math.random()*3)+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),5200)}}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
$('audioFile').addEventListener('change',()=>{const file=$('audioFile').files[0];if(file){$('audioPlayer').src=URL.createObjectURL(file);$('audioPlayer').load()}});
$('loadUrl').addEventListener('click',()=>{const url=$('audioUrl').value.trim();if(!url)return;try{const parsed=new URL(url);if(!['http:','https:'].includes(parsed.protocol))throw new Error();$('audioPlayer').src=parsed.href;$('audioPlayer').load()}catch(e){$('toast').textContent='Please paste a valid direct audio URL.';$('toast').classList.remove('hidden');setTimeout(()=>$('toast').classList.add('hidden'),2500)}});
