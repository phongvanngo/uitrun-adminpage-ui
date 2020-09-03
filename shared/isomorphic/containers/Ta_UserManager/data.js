const tableData = JSON.parse(
  `[
    {
        "id": 4,
        "userCode": "2312312",
        "fullName": "no va po",
        "stdId": "string",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-01T09:26:07.000Z",
        "updatedAt": "2020-09-02T09:12:26.000Z"
    },
    {
        "id": 5,
        "userCode": "SJQGD",
        "fullName": "no va po",
        "stdId": "string",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-02T08:21:14.000Z",
        "updatedAt": "2020-09-02T09:14:11.000Z"
    },
    {
        "id": 6,
        "userCode": "CGEBB",
        "fullName": "chuc mei",
        "stdId": "19530789",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-02T08:26:29.000Z",
        "updatedAt": "2020-09-02T08:34:37.000Z"
    },
    {
        "id": 7,
        "userCode": "VXZWR",
        "fullName": "ngo van phong",
        "stdId": "19520834",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-02T08:28:06.000Z",
        "updatedAt": "2020-09-02T08:28:12.000Z"
    },
    {
        "id": 8,
        "userCode": "ERNNM",
        "fullName": "fsefdsf",
        "stdId": "20000000",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-02T08:29:12.000Z",
        "updatedAt": "2020-09-02T08:29:41.000Z"
    },
    {
        "id": 9,
        "userCode": "WLTYY",
        "fullName": "concac",
        "stdId": "11324324",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-02T08:35:25.000Z",
        "updatedAt": "2020-09-02T08:35:45.000Z"
    },
    {
        "id": 10,
        "userCode": "MTCXF",
        "fullName": "messi lionel",
        "stdId": "20203423",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-03T02:28:07.000Z",
        "updatedAt": "2020-09-03T02:28:19.000Z"
    },
    {
        "id": 11,
        "userCode": "ZVEWG",
        "fullName": "ronnald nova",
        "stdId": "202403003",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-03T02:28:57.000Z",
        "updatedAt": "2020-09-03T02:29:10.000Z"
    },
    {
        "id": 12,
        "userCode": "PFNEY",
        "fullName": "nguyen thai hoc",
        "stdId": "19520834",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-03T02:29:23.000Z",
        "updatedAt": "2020-09-03T02:29:42.000Z"
    },
    {
        "id": 13,
        "userCode": "GGBCD",
        "fullName": "hello kitty",
        "stdId": "2345212324",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-03T02:30:07.000Z",
        "updatedAt": "2020-09-03T02:30:16.000Z"
    },
    {
        "id": 14,
        "userCode": "RKQTM",
        "fullName": "ly my hien",
        "stdId": "20193456",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-03T02:30:29.000Z",
        "updatedAt": "2020-09-03T02:30:49.000Z"
    },
    {
        "id": 15,
        "userCode": "MFGWU",
        "fullName": "HuynH Minh Tri",
        "stdId": "20134322",
        "roleId": 1,
        "isActive": true,
        "createdAt": "2020-09-03T02:31:01.000Z",
        "updatedAt": "2020-09-03T02:31:18.000Z"
    }
]`
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
