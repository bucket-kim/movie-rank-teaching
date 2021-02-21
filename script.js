window.onload = () => {
  displayGraph();
};

const apps = [
  {
    image: "img/netflix.png",
    name: "Netflix",
    rank: 6,
  },
  {
    image: "img/disney.png",
    name: "Disney +",
    rank: 3,
  },
  {
    image: "img/zoom.png",
    name: "Zoom",
    rank: 1,
  },
  {
    image: "img/tiktok.png",
    name: "TikTok",
    rank: 2,
  },
  {
    image: "img/youtube.png",
    name: "YouTube",
    rank: 4,
  },
  {
    image: "img/facebook.png",
    name: "Facebook",
    rank: 7,
  },
  {
    image: "img/gmail.png",
    name: "Gmail",
    rank: 9,
  },
  {
    image: "img/instagram.png",
    name: "Instagram",
    rank: 5,
  },
  {
    image: "img/spotify.png",
    name: "Spotify",
    rank: 8,
  },
];

const displayGraph = () => {
  let table = "<table>";
  table += "<tr><th>Icons</th><th>Name</th><th>Rank</th></tr>";
  for (let i = 0; i < apps.length; i++) {
    table += "<tr>";
    table += `<td><img src="${apps[i].image}" alt=""/></td>`;
    table += `<td class="app-name">${apps[i].name}</td>`;
    table += `<td>${apps[i].rank}</td>`;
    table += "</tr>";
  }
  table += "</table>";
  document.querySelector(".app-lists").innerHTML = table;
};

const sortRankByAtt = (arr, Attr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let arrObj = arr[i];
    let arr_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j][Attr] < arrObj[Attr]) {
        arrObj = arr[j];
        arr_index = j;
      }
    }
    arr[arr_index] = arr[i];
    arr[i] = arrObj;
  }
  return arr;
};

const sortDownRankByAtt = (arr, Attr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let arrObj = arr[i];
    let arr_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j][Attr] > arrObj[Attr]) {
        arrObj = arr[j];
        arr_index = j;
      }
    }
    arr[arr_index] = arr[i];
    arr[i] = arrObj;
  }
  return arr;
};

const selectEle = document.querySelector(".selectSort");
const option = document.querySelectorAll("option");

selectEle.addEventListener("change", (e) => {
  let values = e.target.value;
  if (values === "rankUp") {
    console.log("hiii");
  } else if (values === "rankDown") {
    console.log("awwww");
  }
});
