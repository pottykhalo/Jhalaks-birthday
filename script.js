const $ = id => document.getElementById(id);
const birthday = new Date('2026-11-17T00:00:00');
function updateCountdown(){const diff=birthday-new Date();if(diff<=0){$('countdown').innerHTML='<div><b>IT’S</b><small>your day</small></div><div><b>YOUR</b><small>birthday</small></div><div><b>♡</b><small>shine on</small></div>';$('countdown-caption').textContent='Happy birthday, Jhalak! ✦';return;}const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);$('days').textContent=d;$('hours').textContent=String(h).padStart(2,'0');$('minutes').textContent=String(m).padStart(2,'0');$('seconds').textContent=String(s).padStart(2,'0');}
updateCountdown();setInterval(updateCountdown,1000);
$('startBtn').addEventListener('click',()=>{document.querySelector('#intro').scrollIntoView({behavior:'smooth'});burst(22)});
$('menuToggle').addEventListener('click',()=>$('navLinks').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('navLinks').classList.remove('open')));
const letters={
 happy:{title:'For when you’re happy ♡',text:'Meriii pyariii Jhalakkkk, I hope you know how much I love seeing you happy. I hope you get a thousand more reasons to smile, and I hope I get to be there for a lot of them. Save this feeling, take a deep breath, and let yourself enjoy every little bit of today. You deserve the good things.'},
 sad:{title:'For when things feel heavy ☾',text:'Hey, my favourite girl. You don’t have to be cheerful every second, and you never have to pretend with me. Take things one little step at a time, okay? I hope you give yourself the same kindness you give to everyone else. I’m in your corner, always rooting for you, even on the days you don’t feel like your brightest self.'},
 miss:{title:'For when you miss me ✧',text:'BABYYYY 😭🫶🏻 if i could teleport to you rn i literally would, no questions asked. imagine your ghonchu giving u the biggest hug right now. until i can do that in person, consider this your little reminder that i miss u too, cutie. 💗'},
 reassurance:{title:'For when you need reassurance ♡',text:'meri pyari Jhalak, u don’t have to be perfect or have everything figured out to be loved, okayyy? 💗 you are allowed to have hard days, to learn as you go, and to take your time. your ghonchu is rooting for you, always.'},
 sleep:{title:'For when you can’t sleep ☾',text:'sweeetieieie 😭 it’s late and your ghonchu has a tiny reminder for you… unclench your shoulders, get comfy, and let tomorrow wait until tomorrow. you don’t have to solve everything tonight. sending you the softest hug and so many mwahhhhs 💗'},
 overthinking:{title:'For when you’re overthinking ✧',text:'okay bhondu, pause for a second and take things one at a time, okay? 🫶🏻 you don’t need to figure everything out all at once. breathe, be kind to yourself, and remember that one thought doesn’t have to decide how the whole day goes. i’m rooting for u, sweetie.'},
 smile:{title:'For when you need to smile ♡',text:'CUTIIIEEE 😭 emergency happiness delivery. u are legally required to smile at least a tiny bit now. imagine your ghonchu trying to act normal about how cute u are and failing miserably 🤏🏻💗 okay mission complete, mwahhhhh.'},
 random:{title:'For a random day ✉',text:'there is literally no occasion for this letter. i just woke up and chose to be obsessed with you again 💗 meri pyari Jhalakkk, i hope something lovely happens to u today. and if nothing special happens, this is your reminder that you are still very, very special to me. 🫶🏻'}
};
function openLetter(key){const l=letters[key];if(!l)return;$('modalTitle').textContent=l.title;$('modalText').textContent=l.text;$('letterModal').classList.remove('hidden');document.body.style.overflow='hidden'}
document.querySelectorAll('[data-letter]').forEach(btn=>btn.addEventListener('click',()=>openLetter(btn.dataset.letter)));
$('letterModal').addEventListener('click',e=>{if(e.target===$('letterModal'))closeLetter()});function closeLetter(){$('letterModal').classList.add('hidden');document.body.style.overflow=''}$('closeModal').addEventListener('click',closeLetter);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLetter()});
const reasons=['The way you make even the most ordinary day feel special.','Your little expressions and the tiny things you do without noticing.','How there is always something new to learn about you.','The way you can make me smile just by being yourself.','Your kindness, including the kindness you sometimes forget to give yourself.','The sound of your laugh and the happiness behind it.','The memories we have already made, and the ones still waiting for us.','Because you are you — and that is already a pretty wonderful reason.'];let reasonIndex=0;
function renderReason(){$('reasonText').textContent=reasons[reasonIndex];$('reasonNumber').textContent=String(reasonIndex+1).padStart(2,'0')+' / '+String(reasons.length).padStart(2,'0');$('reasonDots').innerHTML=reasons.map((_,i)=>`<span class="${i===reasonIndex?'active':''}"></span>`).join('')}
function moveReason(dir){reasonIndex=(reasonIndex+dir+reasons.length)%reasons.length;renderReason()}$('prevReason').addEventListener('click',()=>moveReason(-1));$('nextReason').addEventListener('click',()=>moveReason(1));renderReason();
$('giftBtn').addEventListener('click',()=>{$('surpriseMessage').classList.remove('hidden');$('giftBtn').classList.add('hidden');burst(55);$('surpriseMessage').scrollIntoView({behavior:'smooth',block:'center'})});$('confettiBtn').addEventListener('click',()=>{burst(100);showToast('A little wish for you ✨')});
function showToast(message){$('toast').textContent=message;$('toast').classList.remove('hidden');setTimeout(()=>$('toast').classList.add('hidden'),2500)}
function burst(count){const colors=['#f1a6c4','#f9dfeb','#c2cafa','#fff0d9','#a6c9ed'];for(let i=0;i<count;i++){const el=document.createElement('i');el.className='confetti';el.textContent=['✦','♡','✧','·'][Math.floor(Math.random()*4)];el.style.left=Math.random()*100+'vw';el.style.color=colors[Math.floor(Math.random()*colors.length)];el.style.fontSize=(10+Math.random()*18)+'px';el.style.animationDuration=(2+Math.random()*3)+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),5200)}}
const starMessages=[
'CUTIIIEEEEE 😭😭 how are u literally so adorable all the time, like hello??? who gave u permission to be this cuteeeee 🤏🏻💗',
'meri pyari Jhalakkk 🧿🫶🏻 i could listen to u yap about literally ANYTHING and still want u to keep talkingggg 😭',
'GHONCHUUUU 😭🤏🏻 do u even realise how happy the tiniest things u do make me??? LIKE HOW AM I SUPPOSED TO ACT NORMAL ABOUT U 💗',
'my babyyyyyyyy 🫶🏻 i genuinely miss u even when we’ve literally JUST stopped talking, this is getting embarrassing for me personally 😭💗',
'bhonduuuuu 😭 i love our little conversations, our random laughs, and just being around u. i wish i could pause those moments sometimes 🧿💗',
'sweeetieieieieie 😭🫶🏻 in case nobody has told u today, YOUR GHONCHU IS SO SO SO PROUD OF U AND LOVES U A WHOLE LOTTTT 💗',
'HOW ARE U THIS CUTE CUTIeee 😭🤏🏻 like genuinely explain urself rn 💗',
'every time ur name pops up on my screen i get SO EXCITEDDD 😭🫶🏻',
'sometimes i just wanna look at u and forget whatever i was about to say 😭💗',
'i need one of ur hugs rn. actually no, i need approximately a million of them 🫂💗',
'ur laugh is so precious to meeeee 😭 i wanna hear it a thousand more times 🫶🏻',
'never stop being ur random little self, bhonduuu 😭 that’s one of my favourite things about u 💗',
'u make me feel so comfortable being myself and i hope u know how much that means to me 🧿🫶🏻',
'school is SO much better when i get to see u. why can’t every day have more jhalak time 😭🤏🏻',
'i notice the little ways u care about people, sweetie. those things matter more than u think 💗',
'i hope u always remember how capable u are, my babyyyy. i’m rooting for u ALWAYS 🫶🏻',
'our tiny conversations and stupid jokes mean so much more to me than u probably realise 😭💗',
'if missing u was a subject i’d have topped the entire school by now, no competition 😭',
' there’s only one u in this entire universe and somehow i got lucky enough to know u 🧿💗',
'MERIII PYARIII JHALAKKKK 😭🫶🏻 I LOVE YOU SO SO SO MUCHHHH. okay that’s the star. go drink water now cutie 🤏🏻💗'
];
const openedStars=new Set();const starContainer=$('constellationStars');
starMessages.forEach((message,index)=>{const button=document.createElement('button');button.type='button';button.className='constellation-star';button.style.setProperty('--star-delay',`${(index%7)*.18}s`);button.setAttribute('aria-label',`Open star ${index+1}`);button.innerHTML=`<span>✦</span><small>${String(index+1).padStart(2,'0')}</small>`;button.addEventListener('click',()=>{if(openedStars.has(index)){showToast('you already opened this little star, cutie 💗');return}openedStars.add(index);button.classList.add('opened');button.setAttribute('aria-label',`Star ${index+1} opened`);$('starProgress').textContent=`${openedStars.size} / 20 stars opened`;$('progressFill').style.width=`${openedStars.size/20*100}%`;burst(5);openStarMessage(index,message);if(openedStars.size===20){$('finalStar').disabled=false;$('finalStar').classList.remove('locked');$('finalStar').classList.add('unlocked');$('finalStar').querySelector('small').textContent='your final birthday star is ready ♡';showToast('ALL TWENTY STARS!!! your big star is ready, cutie 💗');burst(35)}});starContainer.appendChild(button)});
function openStarMessage(index,message){$('modalTitle').textContent=`A tiny star for you ✦ ${String(index+1).padStart(2,'0')}/20`;$('modalText').textContent=message;$('letterModal').classList.remove('hidden');document.body.style.overflow='hidden'}
$('finalStar').addEventListener('click',()=>{if(openedStars.size!==20)return;$('finalStarMessage').classList.remove('hidden');$('finalStar').classList.add('hidden');burst(90);$('finalStarMessage').scrollIntoView({behavior:'smooth',block:'center'})});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
$('audioFile').addEventListener('change',()=>{const file=$('audioFile').files[0];if(file){$('audioPlayer').src=URL.createObjectURL(file);$('audioPlayer').load()}});$('loadUrl').addEventListener('click',()=>{const url=$('audioUrl').value.trim();if(!url)return;try{const parsed=new URL(url);if(!['http:','https:'].includes(parsed.protocol))throw new Error();$('audioPlayer').src=parsed.href;$('audioPlayer').load()}catch(e){showToast('Please paste a valid direct audio URL.')}});
