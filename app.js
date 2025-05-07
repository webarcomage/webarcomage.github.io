"use strict";(()=>{var y=class{constructor(){this.subscribers=[]}subscribe(e){return this.subscribers.push(e),()=>this.unsubscribe(e)}unsubscribe(e){this.subscribers=this.subscribers.filter(r=>r!==e)}unsubscribeAll(){this.subscribers=[]}notify(e){this.subscribers.forEach(r=>r(e))}};function v(t,e,r){return Math.min(Math.max(t,e),r)}function L(t){return Math.floor(Math.random()*t)}function te(t){for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}var i=class{constructor(e={}){this._name=e.name??"",this._cost=e.cost?[Math.max(0,e.cost[0]),e.cost[1]]:[0,"bricks"],this._desc=e.desc??"",this._isUndiscardable=e.isUndiscardable??!1,this._applyFn=e.applyFn??(()=>{})}get cost(){return this._cost}get name(){return this._name}get isUndiscardable(){return this._isUndiscardable}apply(e,r){return this.subtractCost(e)?(this._applyFn(e,r)||(e.isActive=!1,r.isActive=!0),!0):!1}getData(){return{name:this._name,cost:this._cost,desc:this._desc,isUndiscardable:this._isUndiscardable}}subtractCost(e){return e[this._cost[1]]>=this._cost[0]?(e[this._cost[1]]-=this._cost[0],!0):!1}};var d=(t,e)=>{let r=Math.max(0,e),s=Math.max(0,r-t.wall);t.wall-=r,t.tower-=s},z=[new i({name:"Brick Shortage",desc:`-8 Bricks
for each player`,cost:[0,"bricks"],applyFn:(t,e)=>{t.bricks+=-8,e.bricks+=-8}}),new i({name:"Earthquake",desc:`-1 Quarry
for each player`,cost:[0,"bricks"],applyFn:(t,e)=>{t.quarries+=-1,e.quarries+=-1}}),new i({name:"Lucky Cache",desc:`+2 Bricks
+2 Gems
Play again`,cost:[0,"bricks"],applyFn:(t,e)=>(t.bricks+=2,t.gems+=2,!0)}),new i({name:"Strip Mine",desc:`-1 Quarry
+10 Wall
+5 Gems`,cost:[0,"bricks"],applyFn:t=>{t.quarries+=-1,t.wall+=10,t.gems+=5}}),new i({name:"Rock Garden",desc:`+1 Wall
+1 Tower
+2 Recruits`,cost:[1,"bricks"],applyFn:t=>{t.wall+=1,t.tower+=1,t.recruits+=2}}),new i({name:"Friendly Terrain",desc:`+1 Wall
Play again`,cost:[1,"bricks"],applyFn:(t,e)=>(t.wall+=1,!0)}),new i({name:"Work Overtime",desc:`+5 Wall
-6 Gems`,cost:[2,"bricks"],applyFn:t=>{t.wall+=5,t.gems+=-6}}),new i({name:"Basic Wall",desc:"+3 Wall",cost:[2,"bricks"],applyFn:t=>{t.wall+=3}}),new i({name:"Innovations",desc:`+1 Quarry
for each player
+4 Gems`,cost:[2,"bricks"],applyFn:(t,e)=>{t.quarries+=1,t.gems+=4,e.quarries+=1}}),new i({name:"Foundations",desc:`If wall = 0
+6 Wall
else
+3 Wall`,cost:[3,"bricks"],applyFn:t=>{t.wall+=t.wall===0?6:3}}),new i({name:"Miners",desc:"+1 Quarry",cost:[3,"bricks"],applyFn:t=>{t.quarries+=1}}),new i({name:"Sturdy Wall",desc:"+4 Wall",cost:[3,"bricks"],applyFn:t=>{t.wall+=4}}),new i({name:"Mother Lode",desc:`If quarry < enemy quarry
+2 Quarry
else
+1 Quarry`,cost:[4,"bricks"],applyFn:(t,e)=>{t.quarries+=t.quarries<e.quarries?2:1}}),new i({name:"Collapse!",desc:"-1 Enemy quarry",cost:[4,"bricks"],applyFn:(t,e)=>{e.quarries+=-1}}),new i({name:"Big Wall",desc:"+6 Wall",cost:[5,"bricks"],applyFn:t=>{t.wall+=6}}),new i({name:"Copping the Tech",desc:`If quarry < enemy quarry
quarry = enemy quarry`,cost:[5,"bricks"],applyFn:(t,e)=>{t.quarries<e.quarries&&(t.quarries=e.quarries)}}),new i({name:"Flood Water",desc:`Player(s)
with lowest wall
-1 Dungeon
-2 Tower`,cost:[6,"bricks"],applyFn:(t,e)=>{t.wall<=e.wall&&(t.dungeons+=-1,t.tower+=-2),e.wall<=t.wall&&(e.dungeons+=-1,e.tower+=-2)}}),new i({name:"New Equipment",desc:"+2 Quarry",cost:[6,"bricks"],applyFn:t=>{t.quarries+=2}}),new i({name:"Forced Labor",desc:`+9 Wall
-5 Recruits`,cost:[7,"bricks"],applyFn:t=>{t.wall+=9,t.recruits+=-5}}),new i({name:"Dwarven Miners",desc:`+4 Wall
+1 Quarry`,cost:[7,"bricks"],applyFn:t=>{t.wall+=4,t.quarries+=1}}),new i({name:"Tremors",desc:`-5 Wall
for each player
Play again`,cost:[7,"bricks"],applyFn:(t,e)=>(t.wall+=-5,e.wall+=-5,!0)}),new i({name:"Secret Room",desc:`+1 Magic
Play again`,cost:[8,"bricks"],applyFn:(t,e)=>(t.magic+=1,!0)}),new i({name:"Reinforced Wall",desc:"+8 Wall",cost:[8,"bricks"],applyFn:t=>{t.wall+=8}}),new i({name:"Porticulus",desc:`+5 Wall
+1 Dungeon`,cost:[9,"bricks"],applyFn:t=>{t.wall+=5,t.dungeons+=1}}),new i({name:"Crystal Rocks",desc:`+7 Wall
+7 Gems`,cost:[9,"bricks"],applyFn:t=>{t.wall+=7,t.gems+=7}}),new i({name:"Barracks",desc:`+6 Recruits
+6 Wall
If dungeon < enemy dungeon
+1 Dungeon`,cost:[10,"bricks"],applyFn:(t,e)=>{t.recruits+=6,t.wall+=6,t.dungeons<e.dungeons&&(t.dungeons+=1)}}),new i({name:"Harmonic Ore",desc:`+6 Wall
+3 Tower`,cost:[11,"bricks"],applyFn:t=>{t.wall+=6,t.tower+=3}}),new i({name:"Mondo Wall",desc:"+12 Wall",cost:[12,"bricks"],applyFn:t=>{t.wall+=12}}),new i({name:"Battlements",desc:`+7 Wall
6 Damage`,cost:[14,"bricks"],applyFn:(t,e)=>{t.wall+=7,d(e,6)}}),new i({name:"Focused Designs",desc:`+8 Wall
+5 Tower`,cost:[15,"bricks"],applyFn:t=>{t.wall+=8,t.tower+=5}}),new i({name:"Great Wall",desc:"+15 Wall",cost:[16,"bricks"],applyFn:t=>{t.wall+=15}}),new i({name:"Shift",desc:`Switch you wall
with enemy wall`,cost:[17,"bricks"],applyFn:(t,e)=>{[t.wall,e.wall]=[e.wall,t.wall]}}),new i({name:"Rock Launcher",desc:`+6 Wall
10 Damage`,cost:[18,"bricks"],applyFn:(t,e)=>{t.wall+=6,d(e,10)}}),new i({name:"Dragon's Heart",desc:`+20 Wall
+8 Tower`,cost:[24,"bricks"],applyFn:t=>{t.wall+=20,t.tower+=8}}),new i({name:"Bag of Baubles",desc:`If tower < enemy tower
+2 Tower
else
+1 Tower`,cost:[0,"gems"],applyFn:(t,e)=>{t.tower+=t.tower<e.tower?2:1}}),new i({name:"Rainbow",desc:`+1 Tower
for each player
+3 Gems`,cost:[0,"gems"],applyFn:(t,e)=>{t.tower+=1,t.gems+=3,e.tower+=1}}),new i({name:"Quartz",desc:`+1 Tower
Play again`,cost:[1,"gems"],applyFn:(t,e)=>(t.tower+=1,!0)}),new i({name:"Smoky Quartz",desc:`-1 Enemy tower
Play again`,cost:[2,"gems"],applyFn:(t,e)=>(e.tower+=-1,!0)}),new i({name:"Amethyst",desc:"+3 Tower",cost:[2,"gems"],applyFn:t=>{t.tower+=3}}),new i({name:"Prism",desc:`Draw 1 card
Discard 1 card
Play again`,cost:[2,"gems"],applyFn:(t,e)=>(t.isDiscardMode=!0,!0)}),new i({name:"Gemstone Flaw",desc:"-3 Enemy tower",cost:[2,"gems"],applyFn:(t,e)=>{e.tower+=-3}}),new i({name:"Spell Weavers",desc:"+1 Magic",cost:[3,"gems"],applyFn:t=>{t.magic+=1}}),new i({name:"Ruby",desc:"+5 Tower",cost:[3,"gems"],applyFn:t=>{t.tower+=5}}),new i({name:"Power Burn",desc:`-5 Tower
+2 Magic`,cost:[3,"gems"],applyFn:t=>{t.tower+=-5,t.magic+=2}}),new i({name:"Gem Spear",desc:"-5 Enemy tower",cost:[4,"gems"],applyFn:(t,e)=>{e.tower+=-5}}),new i({name:"Solar Flare",desc:`+2 Tower
-2 Enemy tower`,cost:[4,"gems"],applyFn:(t,e)=>{t.tower+=2,e.tower+=-2}}),new i({name:"Quarry's Help",desc:`+7 Tower
-10 Bricks`,cost:[4,"gems"],applyFn:t=>{t.tower+=7,t.bricks+=-10}}),new i({name:"Apprentice",desc:`+4 Tower
-3 Recruits
-2 Enemy tower`,cost:[5,"gems"],applyFn:(t,e)=>{t.tower+=4,t.recruits+=-3,e.tower+=-2}}),new i({name:"Lodestone",desc:"+3 Tower. This card can't be discarded without playing it",cost:[5,"gems"],isUndiscardable:!0,applyFn:t=>{t.tower+=3}}),new i({name:"Discord",desc:`-7 Tower and
-1 magic
for each player`,cost:[5,"gems"],applyFn:(t,e)=>{t.tower+=-7,t.magic+=-1,e.tower+=-7,e.magic+=-1}}),new i({name:"Crystal Matrix",desc:`+1 Magic
+3 Tower
+1 Enemy tower`,cost:[6,"gems"],applyFn:(t,e)=>{t.magic+=1,t.tower+=3,e.tower+=1}}),new i({name:"Emerald",desc:"+8 Tower",cost:[6,"gems"],applyFn:t=>{t.tower+=8}}),new i({name:"Crumblestone",desc:`+5 Tower
-6 Enemy bricks`,cost:[7,"gems"],applyFn:(t,e)=>{t.tower+=5,e.bricks+=-6}}),new i({name:"Harmonic Vibe",desc:`+1 Magic
+3 Tower
+3 Wall`,cost:[7,"gems"],applyFn:t=>{t.magic+=1,t.tower+=3,t.wall+=3}}),new i({name:"Parity",desc:`All player's magic
equals the highest
player's magic`,cost:[7,"gems"],applyFn:(t,e)=>{t.magic=e.magic=Math.max(t.magic,e.magic)}}),new i({name:"Crystallize",desc:`+11 Tower
-6 Wall`,cost:[8,"gems"],applyFn:t=>{t.tower+=11,t.wall+=-6}}),new i({name:"Shatterer",desc:`-1 Magic
-9 Enemy tower`,cost:[8,"gems"],applyFn:(t,e)=>{t.magic+=-1,e.tower+=-9}}),new i({name:"Pearl of Wisdom",desc:`+5 Tower
+1 Magic`,cost:[9,"gems"],applyFn:t=>{t.tower+=5,t.magic+=1}}),new i({name:"Sapphire",desc:"+11 Tower",cost:[10,"gems"],applyFn:t=>{t.tower+=11}}),new i({name:"Lightning Shard",desc:`If tower > enemy wall
-8 Enemy tower
else
8 Damage`,cost:[11,"gems"],applyFn:(t,e)=>{t.tower>e.wall?e.tower+=-8:d(e,8)}}),new i({name:"Crystal Shield",desc:`+8 Tower
+3 Wall`,cost:[12,"gems"],applyFn:t=>{t.tower+=8,t.wall+=3}}),new i({name:"Fire Ruby",desc:`+6 Tower
-4 Enemy tower`,cost:[13,"gems"],applyFn:(t,e)=>{t.tower+=6,e.tower+=-4}}),new i({name:"Empathy Gem",desc:`+8 Tower
+1 Dungeon`,cost:[14,"gems"],applyFn:t=>{t.tower+=8,t.dungeons+=1}}),new i({name:"Sanctuary",desc:`+10 Tower
+5 Wall
+5 Recruits`,cost:[15,"gems"],applyFn:t=>{t.tower+=10,t.wall+=5,t.recruits+=5}}),new i({name:"Diamond",desc:"+15 Tower",cost:[16,"gems"],applyFn:t=>{t.tower+=15}}),new i({name:"Lava Jewel",desc:`+12 Tower
6 Damage`,cost:[17,"gems"],applyFn:(t,e)=>{t.tower+=12,d(e,6)}}),new i({name:"Phase Jewel",desc:`+13 Tower
+6 Recruits
+6 Bricks`,cost:[18,"gems"],applyFn:t=>{t.tower+=13,t.recruits+=6,t.bricks+=6}}),new i({name:"Dragon's Eye",desc:"+20 Tower",cost:[21,"gems"],applyFn:t=>{t.tower+=20}}),new i({name:"Mad Cow Disease",desc:`-6 Recruits
for each player`,cost:[0,"recruits"],applyFn:(t,e)=>{t.recruits+=-6,e.recruits+=-6}}),new i({name:"Full Moon",desc:`+1 Dungeon
for each player
+3 Recruits`,cost:[0,"recruits"],applyFn:(t,e)=>{t.dungeons+=1,t.recruits+=3,e.dungeons+=1}}),new i({name:"Faerie",desc:`2 Damage
Play again`,cost:[1,"recruits"],applyFn:(t,e)=>(d(e,2),!0)}),new i({name:"Moody Goblins",desc:`4 Damage
-3 Gems`,cost:[1,"recruits"],applyFn:(t,e)=>{t.gems+=-3,d(e,4)}}),new i({name:"Spearman",desc:`If wall > enemy wall
3 Damage
else
2 Damage`,cost:[2,"recruits"],applyFn:(t,e)=>{d(e,t.wall>e.wall?3:2)}}),new i({name:"Gnome",desc:`3 Damage
+1 Gem`,cost:[2,"recruits"],applyFn:(t,e)=>{t.gems+=1,d(e,3)}}),new i({name:"Elven Scout",desc:`Draw 1 card
Discard 1 card
Play again`,cost:[2,"recruits"],applyFn:(t,e)=>(t.isDiscardMode=!0,!0)}),new i({name:"Orc",desc:"5 Damage",cost:[3,"recruits"],applyFn:(t,e)=>{d(e,5)}}),new i({name:"Minotaur",desc:"+1 Dungeon",cost:[3,"recruits"],applyFn:t=>{t.dungeons+=1}}),new i({name:"Goblin Mob",desc:`6 Damage
You take 3 damage`,cost:[3,"recruits"],applyFn:(t,e)=>{d(t,3),d(e,6)}}),new i({name:"Berserker",desc:`8 Damage
-3 Tower`,cost:[4,"recruits"],applyFn:(t,e)=>{t.tower+=-3,d(e,8)}}),new i({name:"Goblin Archers",desc:`-3 Enemy tower
You take 1 damage`,cost:[4,"recruits"],applyFn:(t,e)=>{e.tower+=-3,d(t,1)}}),new i({name:"Dwarves",desc:`4 Damage
+3 Wall`,cost:[5,"recruits"],applyFn:(t,e)=>{t.wall+=3,d(e,4)}}),new i({name:"Imp",desc:`6 Damage
-5 Bricks, gems
and recruits
for each player`,cost:[5,"recruits"],applyFn:(t,e)=>{t.bricks+=-5,t.gems+=-5,t.recruits+=-5,e.bricks+=-5,e.gems+=-5,e.recruits+=-5,d(e,6)}}),new i({name:"Slasher",desc:"6 Damage",cost:[5,"recruits"],applyFn:(t,e)=>{d(e,6)}}),new i({name:"Shadow Faerie",desc:`-2 Enemy tower
Play again`,cost:[6,"recruits"],applyFn:(t,e)=>(e.tower+=-2,!0)}),new i({name:"Ogre",desc:"7 Damage",cost:[6,"recruits"],applyFn:(t,e)=>{d(e,7)}}),new i({name:"Little Snakes",desc:"-4 Enemy tower",cost:[6,"recruits"],applyFn:(t,e)=>{e.tower+=-4}}),new i({name:"Rabid Sheep",desc:`6 Damage
-3 Enemy recruits`,cost:[6,"recruits"],applyFn:(t,e)=>{e.recruits+=-3,d(e,6)}}),new i({name:"Troll Trainer",desc:"+2 Dungeon",cost:[7,"recruits"],applyFn:(t,e)=>{t.dungeons+=2}}),new i({name:"Tower Gremlin",desc:`2 Damage
+4 Wall
+2 Tower`,cost:[8,"recruits"],applyFn:(t,e)=>{t.wall+=4,t.tower+=2,d(e,2)}}),new i({name:"Spizzer",desc:`If enemy wall = 0
10 Damage
else
6 Damage`,cost:[8,"recruits"],applyFn:(t,e)=>{d(e,e.wall===0?10:6)}}),new i({name:"Unicorn",desc:`If magic > enemy magic
12 Damage
else
8 Damage`,cost:[9,"recruits"],applyFn:(t,e)=>{d(e,t.magic>e.magic?12:8)}}),new i({name:"Werewolf",desc:"9 Damage",cost:[9,"recruits"],applyFn:(t,e)=>{d(e,9)}}),new i({name:"Elven Archers",desc:`If wall > enemy wall
-6 Enemy tower
else
6 Damage`,cost:[10,"recruits"],applyFn:(t,e)=>{t.wall>e.wall?e.tower+=-6:d(e,6)}}),new i({name:"Corrosion Cloud",desc:`If enemy wall > 0
10 Damage
else
7 Damage`,cost:[11,"recruits"],applyFn:(t,e)=>{d(e,e.wall>0?10:7)}}),new i({name:"Rock Stompers",desc:`8 Damage
-1 Enemy quarry`,cost:[11,"recruits"],applyFn:(t,e)=>{e.quarries+=-1,d(e,8)}}),new i({name:"Thief",desc:`-10 Enemy gems and
5 bricks
+1/2 From
enemy losses`,cost:[12,"recruits"],applyFn:(t,e)=>{let r=Math.min(e.gems,10),s=Math.min(e.bricks,5);t.gems+=Math.floor(r/2),t.bricks+=Math.floor(s/2),e.gems+=-r,e.bricks+=-s}}),new i({name:"Warlord",desc:`13 Damage
-3 Gems`,cost:[13,"recruits"],applyFn:(t,e)=>{t.gems+=-3,d(e,13)}}),new i({name:"Succubus",desc:`-5 Enemy tower
-8 Enemy recruits`,cost:[14,"recruits"],applyFn:(t,e)=>{e.tower+=-5,e.recruits+=-8}}),new i({name:"Stone Giant",desc:`10 Damage
+4 Wall`,cost:[15,"recruits"],applyFn:(t,e)=>{t.wall+=4,d(e,10)}}),new i({name:"Vampire",desc:`10 Damage
-5 Enemy recruits
-1 Enemy dungeon`,cost:[17,"recruits"],applyFn:(t,e)=>{e.recruits+=-5,e.dungeons+=-1,d(e,10)}}),new i({name:"Pegasus Lancer",desc:"-12 Enemy tower",cost:[18,"recruits"],applyFn:(t,e)=>{e.tower+=-12}}),new i({name:"Dragon",desc:`20 Damage
-10 Enemy gems
-1 Enemy dungeon`,cost:[25,"recruits"],applyFn:(t,e)=>{e.gems+=-10,e.dungeons+=-1,d(e,20)}})],re=new Map;z.forEach(t=>re.set(t.name,t));function k(t){return re.get(t)}var q=class{constructor(e=z){this.cards=te(e.slice())}getRandomCards(e){let r=new Set;for(;r.size<e;)r.add(L(this.cards.length));return Array.from(r,s=>this.cards[s])}getRandomCard(e){let r=new Set(e),s;do s=this.cards[L(this.cards.length)];while(r.has(s));return s}};var ke={isActive:!1,isWinner:!1,isDiscardMode:!1,quarries:1,magic:1,dungeons:1,bricks:0,gems:0,recruits:0,tower:1,wall:0},w=class t{constructor(e={},r=[]){this.params={};this.setParams(Object.assign({},ke,e)),this.cards=r.slice()}static diff(e,r){let s=e.getParams(),a=r.getParams(),n={},o=Object.keys(s);for(let c of o)s[c]!==a[c]&&(n[c]=a[c]);return n}get isActive(){return this.params.isActive}set isActive(e){this.params.isActive=e}get isDiscardMode(){return this.params.isDiscardMode}set isDiscardMode(e){this.params.isDiscardMode=e}get isWinner(){return this.params.isWinner}set isWinner(e){this.params.isWinner=e}get quarries(){return this.params.quarries}set quarries(e){this.params.quarries=Math.max(e,1)}get magic(){return this.params.magic}set magic(e){this.params.magic=Math.max(e,1)}get dungeons(){return this.params.dungeons}set dungeons(e){this.params.dungeons=Math.max(e,1)}get bricks(){return this.params.bricks}set bricks(e){this.params.bricks=Math.max(e,0)}get gems(){return this.params.gems}set gems(e){this.params.gems=Math.max(e,0)}get recruits(){return this.params.recruits}set recruits(e){this.params.recruits=Math.max(e,0)}get tower(){return this.params.tower}set tower(e){this.params.tower=Math.max(e,0)}get wall(){return this.params.wall}set wall(e){this.params.wall=Math.max(e,0)}clone(){return new t(this.params,this.cards)}hasCard(e){return 0<=e&&e<this.cards.length}setCard(e,r){this.cards[e]=r}getCard(e){return this.cards[e]}getCards(){return this.cards}getParams(){return{...this.params}}setParams(e){for(let[r,s]of Object.entries(e))this[r]=s}getData(){return{params:this.getParams(),cards:this.cards.map(e=>e.getData())}}};var x=class{constructor(e){this.victoryConditions={...e}}check(e,r){let{bricks:s,gems:a,recruits:n,tower:o}=e,{resource:c,tower:l}=this.victoryConditions;return r.tower===0||s>=c||a>=c||n>=c||o>=l}getVictoryConditions(){return{...this.victoryConditions}}};var R=class t{constructor(e,r,s,a){this.lastUsedCardIndex=null;this.players=[e,r],this.deck=s,this.victoryChecker=a,this.produceResources()}static create(e,r,s=6){let a=new q,n=new x(r),o=new w({...e,isActive:!0,isWinner:!1,isDiscardMode:!1},a.getRandomCards(s)),c=new w({...e,isActive:!1,isWinner:!1,isDiscardMode:!1},a.getRandomCards(s));return new t(o,c,a,n)}get player(){return this.players.find(e=>e.isActive)}get enemy(){return this.players.find(e=>!e.isActive)}useCard(e,r=!1){if(this.hasWinner())throw new Error("The game is ended");let{player:s,enemy:a}=this;if(!s.hasCard(e))throw new Error(`Invalid card index: ${e}`);let n=s.getCard(e),o=s.isDiscardMode||r;if(o&&n.isUndiscardable)throw new Error(`"${n.name}" can't be discarded`);let c=this.players[0].clone(),l=this.players[1].clone();if(o)s.isDiscardMode||(s.isActive=!1,a.isActive=!0),s.isDiscardMode=!1;else{if(!n.apply(s,a))throw new Error(`"${n.name}" can't be used`);this.checkWinner()}let u=this.players.indexOf(s),m=this.players.indexOf(a),p={};p.usedCard={cardIndex:e,playerIndex:u,data:n.getData(),isDiscarded:o},p.params=[w.diff(c,this.players[0]),w.diff(l,this.players[1])];let{lastUsedCardIndex:g}=this;if(s.isActive){let b=this.deck.getRandomCard(s.getCards());s.setCard(e,b),p.newCard={cardIndex:e,playerIndex:u,data:b.getData()}}else this.lastUsedCardIndex=e;if(a.isActive&&!this.hasWinner()){let b=this.players[0].clone(),B=this.players[1].clone();if(this.produceResources(),this.checkWinner(),p.nextRound={params:[w.diff(b,this.players[0]),w.diff(B,this.players[1])]},g!=null){let F=this.deck.getRandomCard(a.getCards());a.setCard(g,F),p.nextRound.newCard={cardIndex:g,playerIndex:m,data:F.getData()}}}return p}getData(){return{players:[this.players[0].getData(),this.players[1].getData()],victoryConditions:this.victoryChecker.getVictoryConditions()}}hasWinner(){return this.players[0].isWinner||this.players[1].isWinner}checkWinner(){let[e,r]=this.players;e.isWinner=this.victoryChecker.check(e,r),r.isWinner=this.victoryChecker.check(r,e)}produceResources(){let{player:e}=this;e.bricks+=e.quarries,e.gems+=e.magic,e.recruits+=e.dungeons}};var P=class extends y{constructor(e){super();let[r,s]=e.players,a=r.cards.map(n=>k(n.name));this.player=new w(r.params,a),this.enemy=new w(s.params),this.victoryChecker=new x(e.victoryConditions)}init(){this.tryPickCard()}destroy(){this.unsubscribeAll()}update(e){let{params:r,newCard:s,nextRound:a}=e;this.player.setParams(r[0]),this.enemy.setParams(r[1]),s?.playerIndex===0&&this.player.setCard(s.cardIndex,k(s.data.name)),a&&(this.player.setParams(a.params[0]),this.enemy.setParams(a.params[1])),a?.newCard?.playerIndex===0&&this.player.setCard(a.newCard.cardIndex,k(a.newCard.data.name)),this.tryPickCard()}tryPickCard(){this.player.isActive&&this.player.isWinner===!1&&this.enemy.isWinner===!1&&queueMicrotask(()=>this.notify(this.pickCard()))}};var I=new Map([["Default",{tower:20,wall:10,quarries:2,magic:2,dungeons:2,bricks:5,gems:5,recruits:5,towerVictory:50,resourceVictory:100}],["On The House - Harmondale",{tower:15,wall:5,quarries:2,magic:2,dungeons:2,bricks:10,gems:10,recruits:10,towerVictory:30,resourceVictory:100}],["Griffin's Rest - Erathia / Emerald Inn - Tularean Forest",{tower:20,wall:5,quarries:2,magic:2,dungeons:2,bricks:5,gems:5,recruits:5,towerVictory:50,resourceVictory:150}],["Snobbish Goblin - Deyja",{tower:25,wall:10,quarries:3,magic:3,dungeons:3,bricks:5,gems:5,recruits:5,towerVictory:75,resourceVictory:200}],["Familiar Place - Bracada Desert",{tower:20,wall:10,quarries:3,magic:3,dungeons:3,bricks:5,gems:5,recruits:5,towerVictory:75,resourceVictory:200}],["The Blessed Brew - Celeste / The Vampyre Lounge - The Pit",{tower:30,wall:15,quarries:4,magic:4,dungeons:4,bricks:10,gems:10,recruits:10,towerVictory:100,resourceVictory:300}],["The Laughing Monk - Evermorn Island",{tower:20,wall:10,quarries:5,magic:5,dungeons:5,bricks:25,gems:25,recruits:25,towerVictory:150,resourceVictory:400}],["Fortune's Folly - Nighon",{tower:20,wall:10,quarries:1,magic:1,dungeons:1,bricks:15,gems:15,recruits:15,towerVictory:200,resourceVictory:500}],["Miner's Only - Barrow Downs",{tower:20,wall:50,quarries:1,magic:1,dungeons:5,bricks:5,gems:5,recruits:25,towerVictory:100,resourceVictory:300}],["The Loyal Mercenary - Tatalia / The Potted Pixie - Avlee",{tower:10,wall:20,quarries:3,magic:1,dungeons:2,bricks:15,gems:5,recruits:10,towerVictory:125,resourceVictory:350}],["Grogg's Grog - Stone City",{tower:50,wall:50,quarries:5,magic:3,dungeons:5,bricks:20,gems:10,recruits:20,towerVictory:100,resourceVictory:300}]]);function E(t){return I.has(t)?{...I.get(t)}:null}function se(t){let e=Object.keys(t);for(let[r,s]of I)if(e.every(a=>t[a]===s[a]))return r;return"Custom"}function ae(t){I.forEach(t)}function H(t){return t.towerVictory=v(t.towerVictory||0,30,1e3),t.tower=v(t.tower||0,5,Math.min(50,t.towerVictory-1)),t.wall=v(t.wall||0,0,50),t.quarries=v(t.quarries||0,1,5),t.magic=v(t.magic||0,1,5),t.dungeons=v(t.dungeons||0,1,5),t.bricks=v(t.bricks||0,0,50),t.gems=v(t.gems||0,0,50),t.recruits=v(t.recruits||0,0,50),t.resourceVictory=v(t.resourceVictory||0,100,1e3),t}function ie(t){let{victoryConditions:e}=t,[r,s]=t.players,a={params:{...r.params},cards:r.cards.map(()=>null)},n={params:{...s.params},cards:s.cards.map(()=>null)};return[{players:[r,n],victoryConditions:e},{players:[s,a],victoryConditions:e}]}function ne(t){let{usedCard:e,newCard:r,params:s,nextRound:a}=t,n={},o={};if(n.params=s,o.params=[{...s[1]},{...s[0]}],n.usedCard=e,o.usedCard={...e,playerIndex:e.playerIndex===0?1:0},r&&(n.newCard=G(r,0),o.newCard=G(r,1)),a){let{params:c,newCard:l}=a;n.nextRound={params:c},o.nextRound={params:[{...c[1]},{...c[0]}]},l&&(n.nextRound.newCard=G(l,0),o.nextRound.newCard=G(l,1))}return[n,o]}function G(t,e){return t.playerIndex===e?{...t,playerIndex:0}:{...t,playerIndex:1,data:null}}var V=class{constructor(e,r,s,a){this.modelFactory=e;this.viewFactory=r;this.botFactory=s;this.settingsStorage=a;this.model=null;this.view=null;this.bot=null}start(){this.destroy();let e=this.settingsStorage.get(),{preset:r}=e;H(r),this.model=this.modelFactory.create({tower:r.tower,wall:r.wall,quarries:r.quarries,magic:r.magic,dungeons:r.dungeons,bricks:r.bricks,gems:r.gems,recruits:r.recruits},{resource:r.resourceVictory,tower:r.towerVictory});let[s,a]=ie(this.model.getData());this.view=this.viewFactory.create(s,e),this.bot=this.botFactory.create(a),this.view.subscribe(n=>{n.type===1?this.start():n.type===2?this.settingsStorage.set(n.settings):n.type===0&&this.handleCard(n)}),this.bot.subscribe(n=>this.handleCard(n)),this.view.init(),this.bot.init()}destroy(){this.view?.destroy(),this.bot?.destroy(),this.model=this.view=this.bot=null}handleCard(e){let[r,s]=ne(this.model.useCard(e.cardIndex,e.isDiscarded));this.view.update(r),this.bot.update(s)}};var Pe={res:1.01,wall:2.01,tower:3.01,prod:18,dmg:1},A=class t extends P{static create(e){return new t(e)}pickCard(){let e=this.applyCards();if(this.player.isDiscardMode===!1){let r=this.findCardToPlay(e);if(r>=0)return{type:0,isDiscarded:!1,cardIndex:r}}return{type:0,isDiscarded:!0,cardIndex:this.findCardToDiscard(e)}}applyCards(){return this.calcCoefs(),this.player.getCards().map((e,r)=>{let[s,a]=this.applyCard(e),n=this.calcValue(this.getDiff(s,this.player)),o=this.calcValue(this.getDiff(a,this.enemy),!0);return{index:r,isUndiscardable:e.isUndiscardable,isUsable:this.isUsableCard(e),state:this.getState(s,a),value:n-o}}).sort((e,r)=>e.state===r.state?r.value-e.value:e.state-r.state)}applyCard(e){let r=this.player.clone(),s=this.enemy.clone();return r[e.cost[1]]=Math.max(r[e.cost[1]],e.cost[0]),e.apply(r,s),r.isWinner=this.victoryChecker.check(r,s),s.isWinner=this.victoryChecker.check(s,r),[r,s]}calcCoefs(){let{tower:e}=this.victoryChecker.getVictoryConditions();return this.coefs={...Pe},this.player.tower<=12?this.coefs.tower=1e3:(this.enemy.tower<=12||e-this.enemy.tower<=10)&&(this.coefs.dmg=2),this.coefs}calcValue(e,r=!1){let{coefs:s}=this,a=0;return a+=e.bricks*s.res,a+=e.gems*s.res,a+=e.recruits*s.res,a+=e.quarries*s.prod,a+=e.magic*s.prod,a+=e.dungeons*s.prod,a+=e.tower*s.tower*(r?s.dmg:1),a+=e.wall*s.wall*(r?s.dmg:1),a}getDiff(e,r){return{isWinner:e.isWinner,isActive:e.isActive,isDiscardMode:e.isDiscardMode,bricks:e.bricks-r.bricks,gems:e.gems-r.gems,recruits:e.recruits-r.recruits,quarries:e.quarries-r.quarries,magic:e.magic-r.magic,dungeons:e.dungeons-r.dungeons,tower:e.tower-r.tower,wall:e.wall-r.wall}}isUsableCard(e,r=this.player){if(r[e.cost[1]]<e.cost[0])return!1;switch(e.name){case"Brick Shortage":return r.bricks>this.enemy.bricks;case"Innovations":return r.quarries>=this.enemy.quarries;case"Tremors":return r.wall>=this.enemy.wall&&this.enemy.wall>=5;case"Earthquake":return r.quarries>this.enemy.quarries;case"Strip Mine":return r.quarries===1||r.wall===0;case"Discord":return r.tower>=this.enemy.tower&&r.magic>=this.enemy.magic;case"Mad Cow Disease":return r.recruits>this.enemy.recruits;case"Full Moon":return r.dungeons>this.enemy.dungeons;case"Power Burn":return r.tower>17}return!0}getState(e,r){switch(!0){case(e.isWinner&&!r.isWinner):return 0;case(e.isWinner&&r.isWinner):return 1;case(!e.isWinner&&r.isWinner):return 2;case e.isActive:return 3;case e.isDiscardMode:return 4;default:return 5}}findCardToPlay(e){for(let r of e)if(!(r.isUsable===!1||r.state===2||r.state===5&&r.value<0))return r.index;return-1}findCardToDiscard(e){for(let r=e.length-1;r>=0;--r)if(e[r].isUndiscardable===!1)return e[r].index;return-1}};var h=class t{constructor(e,r){this.src=e;this.sprite=r;this.soundsToPlay=new Set;window.AudioContext?this.audioCtx=new AudioContext:window.webkitAudioContext&&(this.audioCtx=new window.webkitAudioContext),this.gainNode=this.audioCtx?.createGain()}static instance(){return t._instance||(t._instance=new t("/assets/sounds.mp3",{0:[0,.221],1:[2,1.495],2:[5,1.164],3:[8,1.508],4:[11,1.152],5:[14,1.368],6:[17,1.434],7:[20,1.1]})),t._instance}static play(e){t.instance().play(e)}static mute(e){t.instance().mute(e)}play(e){this.audioCtx&&(this.audioBuffer===void 0&&(this.audioBuffer=null,this.loadAudioFile().then(r=>{r?(this.audioBuffer=r,this.gainNode.connect(this.audioCtx.destination)):this.audioCtx=this.gainNode=void 0})),this.soundsToPlay.add(e),this.soundsToPlay.size===1&&queueMicrotask(()=>{this.soundsToPlay.forEach(r=>this.playSound(r)),this.soundsToPlay.clear()}))}playSound(e){if(!this.audioCtx||!this.audioBuffer||!this.gainNode)return;let r=this.audioCtx.createBufferSource();r.buffer=this.audioBuffer,r.connect(this.gainNode),r.start(0,this.sprite[e][0],this.sprite[e][1])}mute(e=!0){this.gainNode?.gain.setValueAtTime(+!e,0)}async loadAudioFile(){let e=await fetch(this.src);return e.ok?await this.audioCtx.decodeAudioData(await e.arrayBuffer()):null}};var W=class{constructor(){this.commands=[];this.isExecuting=!1}async add(e){if(this.commands.push(e),!this.isExecuting){for(this.isExecuting=!0;this.commands.length;)await this.commands.shift().execute();this.isExecuting=!1}}clear(){this.commands.length=0}};var ce=`<div class="card__name"></div>\r
<div class="card__img"></div>\r
<div class="card__desc"></div>\r
<div class="card__cost"></div>\r
`;var Me="/assets/cards",C=class extends HTMLElement{constructor(r){super();this.name="";this.desc="";this._cost=[0,"bricks"];this.isInited=!1;this._isDisabled=!1;this._isUndiscardable=!1;this.eventEmitter=new y;this.onRemoveFns=[];r&&(this.name=r.name,this.desc=r.desc,this._cost=r.cost,this._isUndiscardable=r.isUndiscardable)}cost(){return this._cost}connectedCallback(){if(!this.isInited){if(this.isInited=!0,this.isUnknown()){this.classList.add("card","card--unknown");return}this.createHTML(),this.addEventListeners()}}subscribe(r){return this.eventEmitter.subscribe(r)}markAsPlayed(){this.classList.add("card--played")}markAsDiscarded(){this.classList.add("card--discarded")}setDisabled(r){this._isDisabled=r,this.classList.toggle("card--disabled",r)}isDisabled(){return this._isDisabled}isUndiscardable(){return this._isUndiscardable}isUnknown(){return!this.name}getCoords(){return this.getBoundingClientRect()}onRemove(r){this.onRemoveFns.push(r)}remove(){this.onRemoveFns.forEach(r=>r()),this.onRemoveFns=[],super.remove()}moveTo(r,s={}){let{duration:a=500,easing:n="ease-out",fadeOut:o=!1}=s,c=this.getCoords();this.remove(),r.addCard(this);let l=this.getCoords(),u={x:l.x-c.x,y:l.y-c.y};return this.classList.add("card--animated"),this.animate([{transform:`translateX(${-u.x}px) translateY(${-u.y}px)`},o?{transform:"none",opacity:0}:{transform:"none"}],{duration:a,easing:n,fill:"both"}).finished.then(()=>this.classList.remove("card--animated"))}createHTML(){this.classList.add("card",`card--${this._cost[1]}`),this.innerHTML=ce;let r=this.querySelector(".card__name"),s=this.querySelector(".card__img"),a=this.querySelector(".card__desc"),n=this.querySelector(".card__cost");r.textContent=this.name,a.textContent=this.desc,n.textContent=String(this._cost[0]);let o=this.name.replace(/[!']/g,"").replace(/\s+/g,"-").toLowerCase();s.style.backgroundImage=`url(${Me}/${o}.webp)`}addEventListeners(){this.addEventListener("pointerup",r=>{r.button===0&&this.eventEmitter.notify({isDiscarded:!1}),r.button===2&&this.eventEmitter.notify({isDiscarded:!0})})}};customElements.define("am-card",C);var le=`<div class="controls__container">\r
  <button\r
    type="button"\r
    class="controls__btn controls__restart-btn"\r
    title="Restart"\r
  >\r
    <svg viewBox="0 0 512 512">\r
      <path\r
        d="M478.291 255.492c-16.133.143-29.689 12.161-31.765 28.16-15.37 105.014-112.961 177.685-217.975 162.315S50.866 333.006 66.236 227.992 179.197 50.307 284.211 65.677a192.168 192.168 0 0 1 96.907 43.959l-24.107 24.107c-8.33 8.332-8.328 21.84.004 30.17a21.333 21.333 0 0 0 15.142 6.246h97.835c11.782 0 21.333-9.551 21.333-21.333V50.991c-.003-11.782-9.556-21.331-21.338-21.329a21.333 21.333 0 0 0-15.078 6.246l-28.416 28.416C320.774-29.34 159.141-19.568 65.476 86.152S-18.415 353.505 87.304 447.17s267.353 83.892 361.017-21.828a255.752 255.752 0 0 0 61.607-132.431c2.828-17.612-9.157-34.183-26.769-37.011a32.265 32.265 0 0 0-4.868-.408z"\r
      />\r
    </svg>\r
  </button>\r
  <button\r
    type="button"\r
    class="controls__btn controls__mute-btn"\r
    title="Toggle Mute"\r
  >\r
    <svg viewBox="0 0 24 24">\r
      <path\r
        d="M2 5.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.214L13 23.635V.365L5.214 5.5Zm8 .436v12.128L6.114 15.5H3v-7h3.114ZM15 8.821v7.364a3.682 3.682 0 0 0 0-7.364Z"\r
      />\r
      <path\r
        d="M14.863 3.367v3a6.137 6.137 0 1 1 0 12.273v3a9.137 9.137 0 1 0 0-18.273Z"\r
      />\r
    </svg>\r
    <svg viewBox="0 0 24 24">\r
      <path\r
        d="M2.123 5.5A2.125 2.125 0 0 0 0 7.623v8.754C0 17.548.952 18.5 2.123 18.5h3.144L13 23.609V.391L5.267 5.5H2.123ZM10 5.969v12.062L6.168 15.5H3v-7h3.168L10 5.969ZM21.146 12l2.453 2.453-2.121 2.121-2.453-2.453-2.453 2.453-2.121-2.121L16.904 12l-2.453-2.453 2.121-2.121 2.453 2.453 2.453-2.453 2.121 2.121L21.146 12Z"\r
      />\r
    </svg>\r
  </button>\r
  <button\r
    type="button"\r
    class="controls__btn controls__settings-btn"\r
    title="Settings"\r
  >\r
    <svg viewBox="0 0 24 24">\r
      <path\r
        d="M21 12a9.143 9.143 0 0 0-.15-1.645L23.893 8.6l-3-5.2-3.044 1.759A9 9 0 0 0 15 3.513V0H9v3.513a9 9 0 0 0-2.849 1.646L3.107 3.4l-3 5.2 3.043 1.755a9.1 9.1 0 0 0 0 3.29L.107 15.4l3 5.2 3.044-1.758A9 9 0 0 0 9 20.487V24h6v-3.513a9 9 0 0 0 2.849-1.646l3.044 1.759 3-5.2-3.043-1.755A9.143 9.143 0 0 0 21 12Zm-6 0a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"\r
      />\r
    </svg>\r
  </button>\r
  <button\r
    type="button"\r
    class="controls__btn controls__fullscreen-btn"\r
    title="Toggle Full Screen"\r
  >\r
    <svg viewBox="0 0 24 24">\r
      <path\r
        d="M21 21h-5v3h5.546A2.457 2.457 0 0 0 24 21.545V16h-3ZM0 2.455V8h3V3h5V0H2.454A2.457 2.457 0 0 0 0 2.455ZM3 16H0v5.545A2.457 2.457 0 0 0 2.454 24H8v-3H3ZM21.546 0H16v3h5v5h3V2.455A2.457 2.457 0 0 0 21.546 0Z"\r
      />\r
    </svg>\r
  </button>\r
</div>\r
`;var U=class extends HTMLElement{connectedCallback(){this.classList.add("controls"),this.innerHTML=le,this.muteBtn=this.querySelector(".controls__mute-btn")}onRestart(e){this.addListener(this.querySelector(".controls__restart-btn"),e)}onMute(e){this.addListener(this.querySelector(".controls__mute-btn"),e)}onSettings(e){this.addListener(this.querySelector(".controls__settings-btn"),e)}onFullScreen(e){this.addListener(this.querySelector(".controls__fullscreen-btn"),e)}checkMuteBtn(e){this.muteBtn.classList.toggle("active",e)}addListener(e,r){e.addEventListener("pointerup",({button:s})=>{s===0&&r()}),e.addEventListener("keyup",({key:s})=>{s==="Enter"&&r()})}};customElements.define("am-controls",U);var O=class extends HTMLElement{connectedCallback(){this.classList.add("deck")}addCard(e){this.append(e)}};customElements.define("am-deck",O);var N=class extends HTMLElement{constructor(){super(...arguments);this.card=null}connectedCallback(){this.classList.add("field")}addCard(r){this.card?.remove(),this.card=r,this.append(r),r.onRemove(()=>this.card=null)}getCard(){return this.card}};customElements.define("am-field",N);var j=class extends HTMLElement{constructor(){super(...arguments);this.cards=[];this.eventEmitter=new y;this.isInited=!1}connectedCallback(){this.isInited||(this.isInited=!0,this.classList.add("hand"),this.parent=this.parentElement)}init(r){r.forEach((s,a)=>this.addCard(s,a))}subscribe(r){return this.eventEmitter.subscribe(r)}addCard(r,s){this.cards[s]=r,this.appendCard(r,s);let a=r.subscribe(({isDiscarded:n})=>{this.eventEmitter.notify({index:s,card:r,isDiscarded:n})});r.onRemove(()=>{a(),this.cards[s]=null})}getCard(r){return this.cards[r]}size(){return this.cards.length}forEachCard(r){this.cards.forEach(s=>r(s))}show(){this.parent.append(this)}hide(){this.remove()}appendCard(r,s){s===0?this.prepend(r):this.cards[s-1].after(r)}};customElements.define("am-hand",j);var de=`<div class="modal__overlay"></div>\r
<div class="modal__container">\r
  <div class="modal__body">\r
    <div class="modal__content"></div>\r
    <div class="modal__actions">\r
      <button class="modal__btn modal__success" type="button">OK</button>\r
      <button class="modal__btn modal__cancel" type="button">Cancel</button>\r
    </div>\r
  </div>\r
</div>\r
`;var _=class t extends HTMLElement{constructor(){super(...arguments);this.result=new y}static{this.activeInstance=null}static open(r,s){t.close();let a=new t;return a.open(r,s),t.activeInstance=a,a.result}static close(r=!1){let s=t.activeInstance;t.activeInstance=null,s?.close(r)}static isOpen(){return!!t.activeInstance}open(r,s){this.createHTML(r),this.addEventListeners(),document.body.append(this),this.doAnimate(s),setTimeout(()=>{this.querySelector(".modal__success")?.focus()},0)}close(r){this.remove(),this.result.notify(r),this.result.unsubscribeAll(),document.removeEventListener("keyup",this.escListener)}doAnimate({duration:r=150,easing:s="ease-out"}={}){this.animate([{opacity:0},{opacity:1}],{duration:r,easing:s}),this.body.animate([{transform:"translateY(-10px)"},{transform:"none"}],{duration:r,easing:s})}createHTML(r){let{content:s,cssClass:a,btnSuccessText:n="OK",hideActions:o=!1}=r;this.classList.add("modal"),this.innerHTML=de,this.body=this.querySelector(".modal__body");let c=this.querySelector(".modal__content");typeof s=="string"?c.innerHTML=s:c.append(s),o?this.querySelector(".modal__actions").remove():this.querySelector(".modal__success").textContent=n,a&&this.classList.add(a)}addEventListeners(){let r=(c,l)=>{c?.addEventListener("pointerup",({button:u})=>!u&&l())},s=(c,l,u)=>{let m=({key:p})=>l===p&&u();return c?.addEventListener("keyup",m),m},a=this.querySelector(".modal__overlay"),n=this.querySelector(".modal__success"),o=this.querySelector(".modal__cancel");r(a,t.close),r(n,()=>t.close(!0)),r(o,t.close),s(n,"Enter",()=>t.close(!0)),s(o,"Enter",t.close),this.escListener=s(document,"Escape",t.close)}};customElements.define("am-modal",_);var me=`<div class="pile__placeholder"></div>\r
`;var $=class extends HTMLElement{constructor(){super(...arguments);this.cards=[]}connectedCallback(){this.classList.add("pile"),this.innerHTML=me}addCard(r){this.cards.unshift(r),this.append(r),r.onRemove(()=>{this.cards=this.cards.filter(s=>s!==r)})}forEachCard(r){this.cards.forEach(s=>r(s))}size(){return this.cards.length}};customElements.define("am-pile",$);var Fe=[{dist:50,duration:600,particles:20},{dist:70,duration:750,particles:40},{dist:90,duration:900,particles:60}],Le=3;function f({x:t,y:e},r){let s=qe(r),a=r>0?0:1,{dist:n,duration:o,particles:c}=Fe[s],l=2*Math.PI/c,u=l,m=0,p=0;for(;m<c;){let g=n,b=o;p==0?(g*=.25+Math.random()*.25,b*=.75+Math.random()*.25):p==1?(g*=.5+Math.random()*.25,b*=.6+Math.random()*.25):p==2?(g*=.5+Math.random()*.25,b*=.35+Math.random()*.35):p==3&&(g*=.75+Math.random()*.25,b*=.25+Math.random()*.25),u>0&&u<Math.PI&&(g*=1.5),Re({x:t,y:e,angle:u,type:a,size:p+Le,dist:g,duration:b}),p=++p%4,u+=l,++m}}function qe(t){let e=Math.abs(t);return e>7?2:e>3?1:0}function Re(t){let{x:e,y:r,size:s,angle:a,dist:n,duration:o,type:c}=t,l=n*Math.cos(a),u=n*Math.sin(a),m=document.createElement("div");m.classList.add("particle"),m.classList.toggle("particle--dec",c===1),m.style.cssText=`
    width: ${s}px;
    height: ${s}px;
    left: ${e-s/2}px;
    top: ${r-s/2}px;
  `,document.body.append(m),m.animate([{transform:`translate(${l}px, ${u}px)`}],{duration:o,easing:"ease-out"}),m.animate([{opacity:1},{opacity:1,offset:.7},{opacity:0}],{duration:o,easing:"linear"}).finished.then(()=>m.remove())}var ue=`<div class="resource__img">\r
  <div class="resource__prod"></div>\r
</div>\r
<div class="resource__row">\r
  <div class="resource__amount"></div>\r
  <div class="resource__name"></div>\r
</div>\r
`;var Z=class extends HTMLElement{connectedCallback(){this.createHTML()}init(e,r){this.setProd(e),this.setAmount(r)}setAmount(e,r=!0){!r&&this.emphasizeRes(e-this.amount),this.amount=e,this.amountElem.textContent=String(e)}setProd(e,r=!0){!r&&this.emphasizeProd(e-this.prod),this.prod=e,this.prodElem.textContent=String(e)}createHTML(){this.classList.add("resource"),this.innerHTML=ue,this.prodElem=this.querySelector(".resource__prod"),this.amountElem=this.querySelector(".resource__amount");let e=this.getAttribute("type"),r=this.querySelector(".resource__name");r.textContent=`${e}s`}emphasizeRes(e){e>0?(h.play(5),f(this.amountElem.getBoundingClientRect(),e)):e<0&&(h.play(4),f(this.amountElem.getBoundingClientRect(),e))}emphasizeProd(e){e>0?(h.play(3),f(this.prodElem.getBoundingClientRect(),e)):e<0&&(h.play(2),f(this.prodElem.getBoundingClientRect(),e))}};customElements.define("am-resource",Z);var pe=`<div class="game__settings-grid">\r
  <div class="game__settings-col game__settings-col--fw game__settings-heading">\r
    Settings\r
  </div>\r
  <div class="game__settings-col game__settings-col--fw game__settings-presets">\r
    <select id="presets"></select>\r
  </div>\r
  <div\r
    class="game__settings-col game__settings-col--fw game__settings-subheading"\r
  >\r
    Starting Conditions\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="tower">Tower:</label>\r
    <input type="number" id="tower" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="wall">Wall:</label>\r
    <input type="number" id="wall" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="quarries">Quarries:</label>\r
    <input type="number" id="quarries" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="bricks">Bricks:</label>\r
    <input type="number" id="bricks" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="magic">Magic:</label>\r
    <input type="number" id="magic" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="gems">Gems:</label>\r
    <input type="number" id="gems" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="dungeons">Dungeons:</label>\r
    <input type="number" id="dungeons" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="recruits">Recruits:</label>\r
    <input type="number" id="recruits" min="0" max="999" />\r
  </div>\r
  <div\r
    class="game__settings-col game__settings-col--fw game__settings-subheading"\r
  >\r
    Victory Conditions\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="tower-victory">Tower:</label>\r
    <input type="number" id="tower-victory" min="0" max="999" />\r
  </div>\r
  <div class="game__settings-col">\r
    <label for="resource-victory">Resource:</label>\r
    <input type="number" id="resource-victory" min="0" max="999" />\r
  </div>\r
</div>\r
`;var M=class extends HTMLElement{constructor(){super(...arguments);this.customOption=null}connectedCallback(){this.createHTML(),this.addEventListeners(),this.preset||(this.preset=E("Default")),this.applyPreset()}getValues(){return this.preset}setValues(r){this.preset=r}createHTML(){this.classList.add("game__settings"),this.innerHTML=pe,this.presets=this.querySelector("#presets"),this.tower=this.querySelector("#tower"),this.wall=this.querySelector("#wall"),this.quarries=this.querySelector("#quarries"),this.magic=this.querySelector("#magic"),this.dungeons=this.querySelector("#dungeons"),this.bricks=this.querySelector("#bricks"),this.gems=this.querySelector("#gems"),this.recruits=this.querySelector("#recruits"),this.towerVictory=this.querySelector("#tower-victory"),this.resourceVictory=this.querySelector("#resource-victory"),ae((r,s)=>{let a=document.createElement("option");a.text=s,this.presets.appendChild(a)})}applyPreset(){this.tower.value=String(this.preset.tower),this.wall.value=String(this.preset.wall),this.quarries.value=String(this.preset.quarries),this.magic.value=String(this.preset.magic),this.dungeons.value=String(this.preset.dungeons),this.bricks.value=String(this.preset.bricks),this.gems.value=String(this.preset.gems),this.recruits.value=String(this.preset.recruits),this.towerVictory.value=String(this.preset.towerVictory),this.resourceVictory.value=String(this.preset.resourceVictory);let r=se(this.preset);r==="Custom"?this.addCustomOption():this.removeCustomOption(),this.presets.value=r}addEventListeners(){this.presets.addEventListener("change",()=>{this.preset=E(this.presets.value),this.applyPreset(),this.removeCustomOption()});let r=(s,a)=>{s.addEventListener("change",()=>{this.preset[a]=+s.value,H(this.preset),this.applyPreset()})};r(this.tower,"tower"),r(this.wall,"wall"),r(this.quarries,"quarries"),r(this.magic,"magic"),r(this.dungeons,"dungeons"),r(this.bricks,"bricks"),r(this.gems,"gems"),r(this.recruits,"recruits"),r(this.towerVictory,"towerVictory"),r(this.resourceVictory,"resourceVictory")}addCustomOption(){this.customOption||(this.customOption=document.createElement("option"),this.customOption.text="Custom",this.presets.options.add(this.customOption,0))}removeCustomOption(){this.customOption&&(this.customOption.remove(),this.customOption=null)}};customElements.define("am-settings",M);var he=`<div class="tower__spire"></div>\r
<div class="tower__body"></div>\r
<div class="tower__base"></div>\r
`;var Y=class extends HTMLElement{connectedCallback(){this.classList.add("tower"),this.innerHTML=he,this.bodyElem=this.querySelector(".tower__body"),this.baseElem=this.querySelector(".tower__base")}init(e,r){this.maxHeight=r,this.setHeight(e)}setHeight(e,r=!0){let s=Math.min(1,e/this.maxHeight);!r&&this.emphasize(e-this.height),this.height=e,this.bodyElem.style.setProperty("--fr",String(s)),this.baseElem.textContent=String(e)}emphasize(e){e>0?(h.play(6),f(this.baseElem.getBoundingClientRect(),e)):e<0&&(h.play(1),f(this.baseElem.getBoundingClientRect(),e))}};customElements.define("am-tower",Y);var ge=`<div class="wall__body"></div>\r
<div class="wall__base"></div>\r
`;var K=class extends HTMLElement{connectedCallback(){this.classList.add("wall"),this.innerHTML=ge,this.bodyElem=this.querySelector(".wall__body"),this.baseElem=this.querySelector(".wall__base")}init(e,r=100){this.maxHeight=r,this.setHeight(e)}setHeight(e,r=!0){let s=Math.min(1,e/this.maxHeight);!r&&this.emphasize(e-this.height),this.height=e,this.bodyElem.style.setProperty("--fr",String(s)),this.baseElem.textContent=String(e)}emphasize(e){e>0?(h.play(7),f(this.baseElem.getBoundingClientRect(),e)):e<0&&(h.play(1),f(this.baseElem.getBoundingClientRect(),e))}};customElements.define("am-wall",K);var D=class extends y{constructor(e){super();let{params:r,cards:s,maxTowerHeight:a}=e,{bricks:n,gems:o,recruits:c,wall:l,tower:u,hand:m}=e;this.params=r,this.bricks=n,this.gems=o,this.recruits=c,this.wall=l,this.tower=u,this.hand=m,this.init(r,s,a)}isActive(){return this.params.isActive}addCard(e,r){this.checkCard(e),this.hand.addCard(e,r)}getCard(e){return this.hand.getCard(e)}handSize(){return this.hand.size()}hideCards(){this.hand.hide()}showCards(){this.hand.show()}update(e,r){this.assignParams(e);let{bricks:s,gems:a,recruits:n,tower:o,wall:c,params:l}=this;s.setAmount(l.bricks,r),s.setProd(l.quarries,r),a.setAmount(l.gems,r),a.setProd(l.magic,r),n.setAmount(l.recruits,r),n.setProd(l.dungeons,r),o.setHeight(l.tower,r),c.setHeight(l.wall,r),this.checkCards()}init(e,r,s){let a=r.map(n=>new C(n));this.bricks.init(e.quarries,e.bricks),this.gems.init(e.magic,e.gems),this.recruits.init(e.dungeons,e.recruits),this.tower.init(e.tower,s),this.wall.init(e.wall),this.hand.init(a),e.isActive&&this.checkCards(),!e.isActive&&this.hand.hide(),this.hand.subscribe(n=>this.notify(n))}checkCards(){this.hand.forEachCard(e=>this.checkCard(e))}checkCard(e){e&&!e.isUnknown()&&e.setDisabled(this.params[e.cost()[1]]<e.cost()[0])}assignParams(e){for(let[r,s]of Object.entries(e))!Number.isNaN(s)&&s!=null&&(this.params[r]=s)}};var ye=`<div class="game__top">\r
  <div class="game__side">\r
    <div class="game__resources">\r
      <div class="game__resources-wrapper">\r
        <am-resource\r
          type="brick"\r
          class="game__resource player-bricks"\r
        ></am-resource>\r
        <am-resource\r
          type="gem"\r
          class="game__resource player-gems"\r
        ></am-resource>\r
        <am-resource\r
          type="recruit"\r
          class="game__resource player-recruits"\r
        ></am-resource>\r
      </div>\r
    </div>\r
\r
    <div class="game__buildings">\r
      <am-tower class="game__tower player-tower"></am-tower>\r
      <am-wall class="game__wall player-wall"></am-wall>\r
    </div>\r
  </div>\r
\r
  <div class="game__side">\r
    <div class="game__buildings">\r
      <am-wall class="game__wall enemy-wall"></am-wall>\r
      <am-tower class="game__tower enemy-tower" enemy></am-tower>\r
    </div>\r
\r
    <div class="game__resources">\r
      <div class="game__resources-wrapper">\r
        <am-resource\r
          type="brick"\r
          class="game__resource enemy-bricks"\r
        ></am-resource>\r
        <am-resource type="gem" class="game__resource enemy-gems"></am-resource>\r
        <am-resource\r
          type="recruit"\r
          class="game__resource enemy-recruits"\r
        ></am-resource>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="game__table">\r
    <am-deck class="game__deck"></am-deck>\r
    <am-pile class="game__pile"></am-pile>\r
  </div>\r
\r
  <am-field class="game__field"></am-field>\r
</div>\r
\r
<div class="game__bottom">\r
  <am-hand class="game__hand player-hand"></am-hand>\r
  <am-hand class="game__hand enemy-hand"></am-hand>\r
</div>\r
\r
<div class="game__discard-msg">Discard a card</div>\r
\r
<am-controls class="game__controls"></am-controls>\r
`;function J(t,{data:e,cardIndex:r}){return{execute(){return t.addCard(e,r)}}}function be(t,e,r,s){return{execute(){return t.useCard(e,r,s)}}}function we(t){return{execute(){return t.dropUsedCard()}}}function We(t){return{execute(){return new Promise(e=>{setTimeout(()=>e(),t)})}}}function S(t,e,r){return{execute(){return new Promise(s=>{t.applyParams(e,r),s()})}}}function Be(t){return{execute(){return new Promise(e=>{t.startNewRound(),e()})}}}function ze(t){return{execute(){return new Promise(e=>{t.enableDiscardMode(),e()})}}}function Ue(t){return{execute(){return new Promise(e=>{t.lock(),e()})}}}function ve(t){return{execute(){return new Promise(e=>{t.unlock(),e()})}}}function fe(t,e){return{execute(){return new Promise(r=>{t.endGame(e),r()})}}}var T=class t extends HTMLElement{constructor(r,s){super();this.gameData=r;this.settings=s;this.queue=new W;this.eventEmitter=new y;this.isLocked=!1;this.isNewRound=!1;this.isDiscardMode=!1}static create(r,s){return new t(r,s)}get activePlayer(){return this.player.isActive()?this.player:this.enemy}get inactivePlayer(){return this.player.isActive()?this.enemy:this.player}init(){h.mute(this.settings.isMuted),this.createHTML(),this.appendToDOM(),this.initControls(),this.createPlayers(),this.disableContextMenu(),this.animateLastCard()}destroy(){this.queue.clear(),this.eventEmitter.unsubscribeAll(),this.remove()}subscribe(r){return this.eventEmitter.subscribe(r)}update(r){this.queue.add(Ue(this));let{usedCard:s}=r,a=s.playerIndex===1;a&&this.queue.add(be(this,s.cardIndex,s.isDiscarded,s.data));let{params:n,newCard:o}=r,[c,l]=n,[u,m]=s.data.cost;if(a?(this.queue.add(S(this,[c,{...l,[m]:l[m]+u}],!1)),this.queue.add(S(this,[{},{[m]:l[m]}]))):(this.queue.add(S(this,[{...c,[m]:c[m]+u},l],!1)),this.queue.add(S(this,[{[m]:c[m]},{}]))),c.isWinner||l.isWinner){this.queue.add(fe(this,n));return}c.isDiscardMode||l.isDiscardMode?(this.queue.add(ze(this)),this.queue.add(J(this,o)),this.queue.add(we(this))):(s.isDiscarded||(this.queue.add(We(200)),this.queue.add(we(this))),o&&this.queue.add(J(this,o)));let{nextRound:p}=r;if(p){let{params:g,newCard:b}=p;this.queue.add(Be(this)),this.queue.add(S(this,g)),b&&this.queue.add(J(this,b));let[B,F]=g;if(B.isWinner||F.isWinner){this.queue.add(fe(this,g));return}}this.queue.add(ve(this))}applyParams([r,s],a=!0){this.player.update(r,a),this.enemy.update(s,a)}useCard(r,s=!1,a){let n=this.activePlayer.getCard(r);return n?(this.disableDiscardMode(),a&&(n.remove(),n=new C(a),this.activePlayer.addCard(n,r)),this.isNewRound&&(this.isNewRound=!1,this.clearPile()),h.play(0),s?(n.markAsDiscarded(),this.isFullPile()&&this.clearPile(),n.moveTo(this.pile)):n.moveTo(this.field)):Promise.resolve()}addCard(r,s){let a=r instanceof C?r:new C(r);return this.deck.addCard(a),h.play(0),a.moveTo({addCard:()=>this.activePlayer.addCard(a,s)})}dropUsedCard(){let r=this.field.getCard();return r?(r.markAsPlayed(),this.isFullPile()&&this.clearPile(),r.moveTo(this.pile)):Promise.resolve()}startNewRound(){this.isNewRound=!0,this.activePlayer.showCards(),this.inactivePlayer.hideCards()}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}enableDiscardMode(){this.isDiscardMode=!0,this.classList.add("game--discard-mode")}disableDiscardMode(){this.isDiscardMode=!1,this.classList.remove("game--discard-mode")}endGame([r,s]){let a,n;r.isWinner&&s.isWinner?(a="Draw",n="draw-modal"):r.isWinner?(a="You Won!",n="victory-modal"):(a="You Lost",n="defeat-modal"),_.open({content:a,cssClass:n,hideActions:!0}).subscribe(()=>this.eventEmitter.notify({type:1}))}appendToDOM(){document.getElementById("game").append(this)}createHTML(){this.classList.add("game"),this.innerHTML=ye,this.deck=this.querySelector(".game__deck"),this.pile=this.querySelector(".game__pile"),this.field=this.querySelector(".game__field")}initControls(){let r=this.querySelector(".game__controls");r.onRestart(()=>{_.isOpen()||_.open({content:"Restart the game?",cssClass:"restart-modal"}).subscribe(a=>{a&&this.eventEmitter.notify({type:1})})}),r.onFullScreen(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}),r.onSettings(()=>{if(!_.isOpen()){let a=new M;a.setValues({...this.settings.preset}),_.open({content:a,btnSuccessText:"Apply"}).subscribe(n=>{n&&(this.settings.preset=a.getValues(),this.eventEmitter.notify({type:2,settings:this.settings}),this.eventEmitter.notify({type:1}))})}});let{isMuted:s}=this.settings;r.checkMuteBtn(s),r.onMute(()=>{s=!s,h.mute(s),r.checkMuteBtn(s),this.settings.isMuted=s,this.eventEmitter.notify({type:2,settings:this.settings})})}createPlayers(){let{players:[r,s],victoryConditions:a}=this.gameData;this.player=new D({params:r.params,cards:r.cards,maxTowerHeight:a.tower,bricks:this.querySelector(".player-bricks"),gems:this.querySelector(".player-gems"),recruits:this.querySelector(".player-recruits"),tower:this.querySelector(".player-tower"),wall:this.querySelector(".player-wall"),hand:this.querySelector(".player-hand")}),this.player.subscribe(n=>this.handleCard(n)),this.enemy=new D({params:s.params,cards:s.cards,maxTowerHeight:a.tower,bricks:this.querySelector(".enemy-bricks"),gems:this.querySelector(".enemy-gems"),recruits:this.querySelector(".enemy-recruits"),tower:this.querySelector(".enemy-tower"),wall:this.querySelector(".enemy-wall"),hand:this.querySelector(".enemy-hand")})}disableContextMenu(){this.addEventListener("contextmenu",r=>r.preventDefault())}clearPile(){this.pile.forEachCard(r=>{r.moveTo(this.deck,{fadeOut:!0}).then(()=>r.remove())})}isFullPile(){return this.pile.size()>6}handleCard(r){let{index:s,card:a,isDiscarded:n}=r,o=this.isDiscardMode||n;switch(!0){case this.isLocked:case(o&&a.isUndiscardable()):case(!o&&a.isDisabled()):return}this.lock(),this.queue.add(be(this,s,o)),this.eventEmitter.notify({type:0,cardIndex:s,isDiscarded:o})}animateLastCard(){let r=this.activePlayer.handSize()-1,s=this.activePlayer.getCard(r),a=this;s.remove(),this.lock(),this.queue.add({execute(){return a.addCard(s,r)}}),this.queue.add(ve(this))}};customElements.define("am-game",T);var Ce=1920,_e=1080,X=document.documentElement;function xe(){let t=window.innerWidth/Ce,e=window.innerHeight/_e,r=Math.min(t,e);X.style.fontSize=`${10*r}px`,X.style.setProperty("--game-width",`${Ce*r}px`),X.style.setProperty("--game-height",`${_e*r}px`)}xe();window.addEventListener("resize",xe);var ee=class{get(){if(!this.settings)try{this.settings=JSON.parse(localStorage.getItem("settings")||"")}catch{this.settings={isMuted:!1,preset:E("Default")}}return this.copy(this.settings)}set(e){this.settings=this.copy(e),localStorage.setItem("settings",JSON.stringify(e))}copy(e){return{...e,preset:{...e.preset}}}};new V(R,T,A,new ee).start();})();
