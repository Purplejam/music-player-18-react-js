import { v4 as uuidv4 } from "uuid";
import {SongType} from './App';


function chillHop(): SongType[] {
  return [
      {
      name: "Changes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/1d7b577f2c6650b490386643135451cff3a48dba-1024x1024.jpg",
      artist: "Aso, Middle School,",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7952",
      color: ["#D05670", "#9E2B64"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
      {
      name: "Assembly",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      artist: "Dotlights",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35663",
      color: ["#3128A0", "#583BEC"],
      id: uuidv4(),
      active: false,
      favorite: true,
    },
      {
      name: "Low Tide",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/18d934ab6d70d065944aabf9a05bef2a06ce770d-1024x1024.jpg",
      artist: "Yasper, chromonicci",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41687",
      color: ["#B5811E", "#DCD0B9"],
      id: uuidv4(),
      active: false,
      favorite: true,
    },
      {
      name: "A Reminder",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/c0c6175640eb9aa14b955ae91e255b3175de1c32-1024x1024.jpg",
      artist: "Sleepy Fish, coa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
      color: ["#E6C879", "#EAB370"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
      favorite: true,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
      favorite: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
