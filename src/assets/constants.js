import deathImg  from "./images/muerte.png";
import dogImg from "./images/perro.png";
import fishImg from "./images/pescado.png";
import grandfatherImg from "./images/viejo.png";
import girl1Img from "./images/chica1.png";
import girl2Img from "./images/chica2.png";
import globoImg from "./images/globo.png";
import houseImg from "./images/house.png";
import magnifyingglassImg from "./images/lupa.png"
import oneImg from "./images/uno.png";
import poolImg from "./images/pool.png";
import snowflakeImg from "./images/copoNieve.png";
import snowmanImg from "./images/munecoNieve.png";
import swordImg from "./images/espada.png";
import tortugaImg from "./images/tortuga.png";
import zeroImg from "./images/cero.png";


export const OPTION_INTERVAL = 2  * 60 * 1000; //? 2 minutes.

export const MOVIES = [
  {
    name: "Up una aventura de altura",
    emojis: [
      grandfatherImg,
      houseImg,
      globoImg
    ],
  },
  {
    name: "Tortugas ninjas",
    emojis: [
      tortugaImg,
      swordImg,
      tortugaImg
    ],
  },
  {
    name: "Deadpool",
    emojis: [
      deathImg,
      poolImg
    ],
  },
  {
    name: "Frozen",
    emojis: [
      girl1Img,
      girl2Img,
      snowmanImg,
      snowflakeImg
    ],
  },
  {
    name: "101 dalmatas",
    emojis: [
      oneImg,
      zeroImg,
      oneImg,
      dogImg
    ],
  },
  {
    name: "buscando a nemo",
    emojis: [
      magnifyingglassImg,
      fishImg,
    ],
  },
];