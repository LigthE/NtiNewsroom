import Nvidia from "./assets/Nvidia.jpg";
import School from "./assets/School.jpeg";
import RG from "./assets/RG.jpg";
import Nti from "./assets/Nti.jpeg";
import crash from "./assets/crash.png";
import Avi from "./assets/Avi.jpeg";

export type Category = `School` | `Tech` | `Gaming`;

export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const NewsList = [
  //använd stor bokstav i början av alla tittlarna för att se dom på carden //
  {
    id: 1,
    title: "School",
    image: School,
    description: "Nti södertörn mat Reviev 2025/12/12 ",
    date: "2025/12/12",
  },
  {
    id: 2,
    title: "School",
    image: Nti,
    description: "Ny Rektor i nti södertörn 2025/12/13",
    date: "2025/12/13",
  },

  {
    id: 3,
    title: "Tech", //skriv Tech i titeln mellan semi kolonen för att det ska synnas någopt
    image: Nvidia,
    description: "rumours about New heatsink Gtx50Series 2025/6/02",
    date: "2025/6/02",
  }, // frank ta bort Tech från min tittel på id 3 och 4 för att få en textMessage upp

  {
    id: 4,
    title: "Tech", // Ta bort 2 tittlar med Tech för att få koden : NO ARTICLES FOUND
    image: crash,
    description: "Nvidia Stock börskras 2025/07/14",
    date: "2025/07/14",
  },
  {
    id: 5,
    title: "Gaming",
    image: RG,
    description: "Michael returns to GTA5 Online update 2025/12/10 ",
    date: "2025/12/10",
  },
  {
    id: 6,
    title: "Gaming",
    image: Avi,
    description: "Avi returns to GTA5 Online update 2025/12/15  ",
    date: "2025/12/15",
  },
];

export default NewsList;
