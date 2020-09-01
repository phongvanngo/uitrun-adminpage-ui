const tableData = JSON.parse(
  `[{
  "id": 1,
  "key": 1,
  "fullName": "Sibeal Force",
  "stdId": "43742-0136",
  "userCode": "JPY"
}, {
  "id": 2,
  "key": 2,
  "fullName": "Cherice Rivilis",
  "stdId": "54575-225",
  "userCode": "KRW"
}, {
  "id": 3,
  "key": 3,
  "fullName": "Alikee Fibbings",
  "stdId": "0002-4117",
  "userCode": "ARS"
}, {
  "id": 4,
  "key": 4,
  "fullName": "Otha Melrose",
  "stdId": "33261-202",
  "userCode": "JPY"
}, {
  "id": 5,
  "key": 5,
  "fullName": "Kyla Dragon",
  "stdId": "48951-7001",
  "userCode": "RUB"
}, {
  "id": 6,
  "key": 6,
  "fullName": "Sim Lomas",
  "stdId": "36987-1913",
  "userCode": "RUB"
}, {
  "id": 7,
  "key": 7,
  "fullName": "Aksel Oda",
  "stdId": "0338-0351",
  "userCode": "RUB"
}, {
  "id": 8,
  "key": 8,
  "fullName": "Maximilianus Chilton",
  "stdId": "58479-001",
  "userCode": "CZK"
}, {
  "id": 9,
  "key": 9,
  "fullName": "Alick Garatty",
  "stdId": "10893-260",
  "userCode": "PHP"
}, {
  "id": 10,
  "key": 10,
  "fullName": "Monique Trasler",
  "stdId": "62206-4603",
  "userCode": "RUB"
}, {
  "id": 11,
  "key": 11,
  "fullName": "Tiffy Rabbet",
  "stdId": "54868-5770",
  "userCode": "COP"
}, {
  "id": 12,
  "key": 12,
  "fullName": "Aloysius Rathborne",
  "stdId": "44924-102",
  "userCode": "RUB"
}, {
  "id": 13,
  "key": 13,
  "fullName": "Elva Potzold",
  "stdId": "65162-536",
  "userCode": "CNY"
}, {
  "id": 14,
  "key": 14,
  "fullName": "Crissy Sexton",
  "stdId": "52410-3020",
  "userCode": "IDR"
}, {
  "id": 15,
  "key": 15,
  "fullName": "Alexi Labbey",
  "stdId": "20276-044",
  "userCode": "CNY"
}, {
  "id": 16,
  "key": 16,
  "fullName": "Emogene McGlaud",
  "stdId": "60758-063",
  "userCode": "CNY"
}, {
  "id": 17,
  "key": 17,
  "fullName": "Harlen Pulbrook",
  "stdId": "64679-987",
  "userCode": "PLN"
}, {
  "id": 18,
  "key": 18,
  "fullName": "Cassius Iwaszkiewicz",
  "stdId": "0904-6201",
  "userCode": "SEK"
}, {
  "id": 19,
  "key": 19,
  "fullName": "Egan Rizzelli",
  "stdId": "55315-558",
  "userCode": "PHP"
}, {
  "id": 20,
  "key": 20,
  "fullName": "Marylee Sidery",
  "stdId": "54569-0396",
  "userCode": "EUR"
}, {
  "id": 21,
  "key": 21,
  "fullName": "Ursuline Dudny",
  "stdId": "54868-6096",
  "userCode": "PLN"
}, {
  "id": 22,
  "key": 22,
  "fullName": "John Dorken",
  "stdId": "50436-3960",
  "userCode": "CZK"
}, {
  "id": 23,
  "key": 23,
  "fullName": "Dwain Sebire",
  "stdId": "54868-6045",
  "userCode": "JPY"
}, {
  "id": 24,
  "key": 24,
  "fullName": "Holly-anne Wahlberg",
  "stdId": "43063-094",
  "userCode": "CNY"
}, {
  "id": 25,
  "key": 25,
  "fullName": "Archibold Ayres",
  "stdId": "50436-3145",
  "userCode": "MAD"
}, {
  "id": 26,
  "key": 26,
  "fullName": "Rhianna Borlease",
  "stdId": "53014-531",
  "userCode": "LKR"
}, {
  "id": 27,
  "key": 27,
  "fullName": "Chaddy Raison",
  "stdId": "14783-108",
  "userCode": "CAD"
}, {
  "id": 28,
  "key": 28,
  "fullName": "Patience Konertz",
  "stdId": "51138-076",
  "userCode": "PLN"
}, {
  "id": 29,
  "key": 29,
  "fullName": "Celia Novic",
  "stdId": "65643-335",
  "userCode": "EUR"
}, {
  "id": 30,
  "key": 30,
  "fullName": "Morse Kittow",
  "stdId": "61957-0907",
  "userCode": "RSD"
}]`
);
const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * -1;
    }
    return sortVal;
  }
}
export default fakeData;
