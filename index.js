const { default: axios } = require("axios");

console.log(
  "hello world $$$$$$$$$$$$$$$$$$$$$$$$############################$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
);

axios({
  url: "https://api.igdb.com/v4/covers",
  method: "POST",
  headers: {
    "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
    Authorization: "Bearer ydpawzo4ydflwtvhb86notvyb72lpj",
  },
  data: "fields alpha_channel,animated,checksum,game,height,image_id,url,width;",
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });

// axios
//   .post(
//     "https://api.igdb.com/v4/covers",
//     { data: 'id'
//      },
//     {
//       headers: {
//         "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
//         Authorization: "Bearer ydpawzo4ydflwtvhb86notvyb72lpj",
//       },
//     }
//   )
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
