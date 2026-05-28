import swampfireImg1 from '../assets/alienimages/swampfire.png'
import swampfireImg2 from '../assets/alienimages/swampfire-transform.png'
import heatblastImg1 from '../assets/alienimages/heatblast.png'
import heatblastImg2 from '../assets/alienimages/heatblast-transform.png'
import greyImg1 from '../assets/alienimages/grey.png'
import greyImg2 from '../assets/alienimages/grey-transform.png'
import diamondheadImg1 from '../assets/alienimages/diamondhead.png'
import diamondheadImg2 from '../assets/alienimages/diamondhead-transform.png'
import ghostfreakImg1 from '../assets/alienimages/ghostfreak.png'
import ghostfreakImg2 from '../assets/alienimages/ghostfreak-transform.png'
import fourArmsImg1 from '../assets/alienimages/fourarms.png'
import fourArmsImg2 from '../assets/alienimages/fourarms-transform.png'
import upgradeImg1 from '../assets/alienimages/upgrade.png'
import upgradeImg2 from '../assets/alienimages/upgrade-transform.png'
import rathImg1 from '../assets/alienimages/rath.png'
import rathImg2 from '../assets/alienimages/rath-transform.png'
import bigChillImg1 from '../assets/alienimages/bigchill.png'
import bigChillImg2 from '../assets/alienimages/bigchill-transform.png'
import humungousaurImg1 from '../assets/alienimages/humungousaur.png'
import humungousaurImg2 from '../assets/alienimages/humungousaur-transform.png'


const aliens = [
  {
    id: 1,
    name: "Swampfire",
    img1: swampfireImg1,
    img2: swampfireImg2,
    description: "Swampfire is one of Ben's most powerful plant-fire hybrid aliens from the Methanosian species. He can launch explosive fireballs, create massive walls of flame, and regrow any damaged body part within seconds. His vines can entangle even the strongest enemies, while his unique combination of fire and plant biology makes him nearly impossible to destroy. In battle, Swampfire uses both brute force and tactical plant manipulation to overwhelm any opponent.",
    backgroundColor: "#1B3A0F"  // deep swamp green — like dark jungle at night
  },
  {
    id: 2,
    name: "Heatblast",
    img1: heatblastImg1,
    img2: heatblastImg2,
    description: "Heatblast is a Pyronite from the star Pyros — a living, breathing being made entirely of superheated magma and fire. He can launch devastating fireballs, create eruptions of flame, and use heat propulsion to fly at incredible speeds. His core temperature exceeds 10,000 degrees, making physical contact lethal. Heatblast can absorb heat-based attacks and redirect them as powerful blasts, making him one of the most aggressive and unstoppable forces in Ben's arsenal.",
    backgroundColor: "#3D0C00"  // deep volcanic red-black — like cooling lava rock
  },
  {
    id: 3,
    name: "Grey Matter",
    img1: greyImg1,
    img2: greyImg2,
    description: "Grey Matter is a Galvan from Galvan Prime — the smallest but arguably most powerful alien in Ben's collection. Despite being only a few inches tall, his brain operates on a level far beyond any human genius. He can instantly hack any technology, construct advanced devices from scrap, and devise winning strategies mid-battle. His tiny size lets him slip through vents and machinery undetected. Grey Matter proves that true power lies not in muscle, but in the limitless capacity of an extraordinary mind.",
    backgroundColor: "#28445f"  // deep steel blue-grey — like a cold metal lab
  },
  {
    id: 4,
    name: "Diamondhead",
    img1: diamondheadImg1,
    img2: diamondheadImg2,
    description: "Diamondhead is a Petrosapien from Petropia — a crystalline warrior whose entire body is composed of indestructible Taydenite crystal. He can grow razor-sharp crystal shards from any surface of his body and launch them as high-velocity projectiles. His diamond skin deflects energy beams, bullets, and physical strikes with ease. Diamondhead can reshape his limbs into blades, shields, or even construct crystal structures mid-battle — making him one of the most versatile and durable fighters Ben can become.",
    backgroundColor: "#72e7e1"  // deep teal-black — like deep ocean crystal caves
  },
  {
    id: 5,
    name: "Ghostfreak",
    img1: ghostfreakImg1,
    img2: ghostfreakImg2,
    description: "Ghostfreak is an Ectonurite from Anur Phaetos — a terrifying spectral entity that defies the laws of physics. He can phase through any solid matter, become completely invisible, and fly silently through any environment. His most feared ability is possession — he can slip inside a living being and take complete control of their body. Ghostfreak's single eye and exposed neural tendrils make him deeply unsettling, and his connection to the darker side of the Omnitrix makes him one of Ben's most mysterious and dangerous transformations.",
    backgroundColor: "#305e66"  // near-black deep forest green — eerie and haunting
  },
  {
    id: 6,
    name: "Four Arms",
    img1: fourArmsImg1,
    img2: fourArmsImg2,
    description: "Four Arms is a Tetramand from Khoros — a warrior species built for one purpose: pure combat. Standing over twelve feet tall with four massive arms, each capable of bench-pressing a tank, Four Arms is Ben's go-to form for raw power situations. He can create shockwaves by clapping his hands together, leap enormous distances, and withstand tremendous punishment. His thick red skin acts as natural armor, and his battle instincts are as sharp as his strength is overwhelming. No wall, no enemy, no obstacle can stand against Four Arms.",
    backgroundColor: "#3A0A0A"  // deep blood red — like dried battle-worn armor
  },
  {
    id: 7,
    name: "Upgrade",
    img1: upgradeImg1,
    img2: upgradeImg2,
    description: "Upgrade is a Galvanic Mechamorph from Galvan B — a living technological organism that can merge with and enhance any machine it touches. By merging with a device, Upgrade instantly understands its function and amplifies it to extraordinary levels. A simple toy becomes a weapon; a broken machine runs perfectly. He can fire plasma beams from his eye, reshape his liquid body to avoid attacks, and interface with alien technology that would take years for humans to understand. Upgrade represents the perfect fusion of biology and machine intelligence.",
    backgroundColor: "#080909"  // deep matrix green-black — like a glowing circuit board
  },
  {
    id: 8,
    name: "Rath",
    img1: rathImg1,
    img2: rathImg2,
    description: "Rath is an Appoplexian from Appoplexia — an apex predator species that runs entirely on aggression, adrenaline, and raw fighting instinct. He stands over eight feet tall with razor-sharp retractable claws, bulletproof fur, and the strength to wrestle an Appoplexian tiger into submission. Rath does not plan, calculate, or hesitate — he charges, roars, and dominates. His fearless attitude and complete lack of self-preservation make him unpredictable in battle. Rath is the alien you transform into when you need to hit something very, very hard.",
    backgroundColor: "#ab531d"  // deep burnt orange-black — like a tiger in the dark
  },
  {
    id: 9,
    name: "Big Chill",
    img1: bigChillImg1,
    img2: bigChillImg2,
    description: "Big Chill is a Necrofriggian from the planet Kylmyys — a ghostly, moth-like alien that commands the power of absolute zero. His wings and antenna can phase through solid matter while simultaneously freezing anything they pass through. His icy breath can encase targets in solid ice in milliseconds and reach temperatures cold enough to freeze plasma. Big Chill can survive in the vacuum of space and fly at incredible speeds. His ability to combine intangibility with freezing makes him one of the most tactically unpredictable aliens in the Omnitrix.",
    backgroundColor: "#061628"  // deep midnight navy — like frozen arctic night sky
  },
  {
    id: 10,
    name: "Humungousaur",
    img1: humungousaurImg1,
    img2: humungousaurImg2,
    description: "Humungousaur is a Vaxasaurian from Terradino — a colossal dinosaur-like powerhouse that represents the pinnacle of physical strength in Ben's arsenal. He can grow from his standard twelve-foot height up to sixty feet tall, with each size increase multiplying his already staggering strength. His thick armored hide can withstand missile strikes, and his tail can level buildings with a single sweep. Humungousaur combines prehistoric ferocity with incredible durability, making him the ultimate choice when Ben needs to go up against the biggest and most dangerous threats in the universe.",
    backgroundColor: "#8d5e0e"  // deep olive-black — like ancient dinosaur swampland
  }
];

export default aliens;
