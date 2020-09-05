export const otherAttributes = [
  // { title: "ID", value: "id", type: "boolean" },
  { title: 'Content', value: 'content', type: 'boolean' },
  { title: 'Image', value: 'image', type: 'link' },
  { title: 'Video', value: 'description', type: 'string' },
  { title: 'Answer A', value: 'answerA', type: 'string' },
  { title: 'Answer B', value: 'answerB', type: 'string' },
  { title: 'Answer C', value: 'answerC', type: 'boolean' },
  { title: 'Answer D', value: 'answerD', type: 'boolean' },
  { title: 'Result', value: 'result', type: 'string' },
];

const contactList = JSON.parse(
  `[
    {
        "id": 11,
        "content": "Cùng với Hà Nội T&T (vô địch V-League 2010), CLB nào của Việt Nam tham dự AFC Cup 2011?",
        "answerA": "Sông Lam Nghệ An",
        "answerB": "SHB Đà Nẵng",
        "answerC": " Hoàng Anh Gia Lai",
        "answerD": "Becamex Bình Dương",
        "result": "A",
        "image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        "description": "string",
        "isShuffle": false
    },
    {
        "id": 12,
        "content": "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
        "answerA": "Qatar",
        "answerB": "Hàn Quốc",
        "answerC": "  Nhật Bản",
        "answerD": "Iraq",
        "result": "C",
        "image": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        "description": "string",
        "isShuffle": false
    },
    {
        "id": 13,
        "content": "Ai là nhạc sĩ Việt Nam đầu tiên viết opera với tác phẩm “Cô sao” và sau đó là “Người tạc tượng”?",
        "answerA": "Đỗ Nhuận",
        "answerB": "Hoàng Vân",
        "answerC": " Trần Hoàn",
        "answerD": "Trọng Đài",
        "result": "D",
        "image": " ",
        "description": "string",
        "isShuffle": false
    },
    {
        "id": 14,
        "content": "Trong các cây cầu sau, cầu nào là cầu xoay?",
        "answerA": "Cầu Thanh Trì",
        "answerB": "Cầu Thị Nại",
        "answerC": " Cầu Sông Hàn",
        "answerD": "Cầu Cần Thơ",
        "result": "A",
        "image": "https://homepages.cae.wisc.edu/~ece533/images/goldhill.png",
        "description": "string",
        "isShuffle": false
    }
]`
);

export default class fakeData {
  constructor(size = 4) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return contactList[index];
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
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
