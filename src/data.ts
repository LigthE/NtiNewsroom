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
    title: "Tech",
    image: Nvidia,
    description: "rumours about New heatsink Gtx50Series 2025/6/02",
    date: "2025/6/02",
  },

  {
    id: 4,
    title: "Tech",
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
