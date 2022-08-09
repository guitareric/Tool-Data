import fs from "fs";
import axios from 'axios';

const tools = [
  { name: "Denton SJ20", service: 764 },
  { name: "ALD", service: 761 },
  { name: "Protemp Clean Ox", service: 779 },
  { name: "Protemp Doped Ox", service: 780 },
  { name: "CEE 100 Spin Coater", service: 834 },
  { name: "CEE 200X 1800 Spin Coater", service: 835 },
  { name: "CEE 200X 9260 Spin Coater", service: 836 },
  { name: "CEE 200X PDMS Spin Coater", service: 845 },
  { name: "DPSS Samurai UV Laser", service: 825 },
  { name: "Agnitron MOCVD", service: 769 },
  { name: "Headway EC101 Spin Coater", service: 844 },
  { name: "Heidelberg MicroPG 101", service: 785 },
  { name: "Heidelberg MicroPG 101-2 2.5um", service: 787 },
  { name: "XACTIX X2 XeF2", service: 775 },
  { name: "CTR LTO Furnace", service: 762 },
  { name: "CTR Poly Furnace", service: 781 },
  { name: "CTR Nitride Furnace", service: 666 },
  { name: "Nanoscribe 3D Printer", service: 827 },
  { name: "NanoFrazor", service: 833 },
  { name: "SCS Parylene Coater", service: 765 },
  { name: "Oxford 80", service: 770 },
  { name: "Plasmatherm Metal Etcher", service: 777 },
  { name: "Technics O2 Plasma", service: 778 },
  { name: "Allwin AccuThermo AW", service: 801 },
  { name: "Denton 635", service: 766 },
  { name: "Denton 18", service: 771 },
  { name: "TMV", service: 772 },
];

tools.forEach(element => {
  const axiosConfig = {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InUwNDgwNzg5IiwiaWF0IjoxNjU5OTc3MzkzLCJleHAiOjE2NjAwMjA1OTN9.fZUODk0iiliX_Ka2ddVugO-Za_Z-pppYs6f2XEyE5GQ",
      "sec-ch-ua":
        '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        "_ga_52FB6H2PTN=GS1.1.1648575042.1.1.1648575073.0; _uetvid=09033fe0b53311ecae381148edeb6caa; _scid=861f50e7-3061-4076-88ee-b77710d5d23e; invoca_session=%7B%22ttl%22%3A%222022-05-05T22%3A52%3A14.204Z%22%2C%22session%22%3A%7B%7D%2C%22config%22%3A%7B%22ce%22%3Atrue%2C%22fv%22%3Atrue%7D%7D; _CEFT=Q%3D%3D%3D; tc_ptidexpiry=1712271134623; tc_ptid=1JydAO1uzo3pltfycitwEn; _sctr=1|1649138400000; _ce.s=v~0d96a58fa203ca3a15825de53c437de94e084710~vpv~0~v11.rlc~1649199135002; _ga_4359HTDVSF=GS1.1.1649199133.1.1.1649200108.0; _ga_242B9CL0LW=GS1.1.1650650512.3.1.1650652178.0; _hjSessionUser_2225490=eyJpZCI6ImZkYjNlMjY4LTY3MmMtNTg5Yy04MzgwLTQ4NjU3MmNjYzAxYSIsImNyZWF0ZWQiOjE2NDk4Njg3MzU3OTEsImV4aXN0aW5nIjp0cnVlfQ==; _gcl_au=1.1.999278872.1656444489; _ga_3K01Q5G281=GS1.1.1657745322.1.1.1657745846.0; _ga_QD3RQ85B8L=GS1.1.1658177360.4.0.1658177747.0; _ga_GF4RQ9XHSC=GS1.1.1658177360.4.0.1658177747.0; _fbp=fb.1.1658354722181.959174225; _hjSessionUser_2158953=eyJpZCI6IjhlODZlM2FiLTE0NTYtNWZlOC1iMDk5LWFiOTk2MjRhNDlmYSIsImNyZWF0ZWQiOjE2NTE2MDEyMTIyMTcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_ZNFXH4D1WX=GS1.1.1659136412.1.1.1659136417.0; _ga_8DN5TEP3ML=GS1.1.1659136417.11.0.1659136418.0; _ga_YM5EY1JBTB=GS1.1.1659725523.15.0.1659725526.0; _ga=GA1.2.1010784119.1648571105; _gid=GA1.2.337954315.1659971364",
      Referer: "https://resource.cores.utah.edu/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "POST",
  };
  
  const url =
    `https://resource.cores.utah.edu/forms/export?service_id=${element.service}&status=received`;
  
    const sendRequest = async () => {
    try {
      const resp = await axios(url, axiosConfig);
      // console.log(csv.detect(resp.data));
      fs.writeFile(`public/${element.name}.csv`, resp.data, "utf8", function (err) {}); 
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  sendRequest();
  exports.sendRequest = sendRequest;
})




