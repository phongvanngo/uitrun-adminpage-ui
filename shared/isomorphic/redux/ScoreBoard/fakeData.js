const tableData = JSON.parse(
  `[{
  "userId": 1,
  "fullName": "Miriam Rosin",
  "stdId": "52685-334",
  "score": 90,
  "time": "5:56 AM"
}, {
  "userId": 2,
  "fullName": "Emmaline Durning",
  "stdId": "67151-404",
  "score": 10,
  "time": "2:01 AM"
}, {
  "userId": 3,
  "fullName": "Daffi Kenworthey",
  "stdId": "11673-335",
  "score": 72,
  "time": "11:47 AM"
}, {
  "userId": 4,
  "fullName": "Jo ann Bennington",
  "stdId": "68788-9750",
  "score": 92,
  "time": "7:54 AM"
}, {
  "userId": 5,
  "fullName": "Thatch Garza",
  "stdId": "45865-412",
  "score": 97,
  "time": "5:31 AM"
}, {
  "userId": 6,
  "fullName": "Dean Hawthorn",
  "stdId": "57520-0067",
  "score": 94,
  "time": "4:23 AM"
}, {
  "userId": 7,
  "fullName": "Rycca Lucius",
  "stdId": "27808-029",
  "score": 26,
  "time": "2:33 AM"
}, {
  "userId": 8,
  "fullName": "Yetta Oakshott",
  "stdId": "58593-827",
  "score": 47,
  "time": "3:31 AM"
}, {
  "userId": 9,
  "fullName": "Sascha Baulcombe",
  "stdId": "10019-638",
  "score": 80,
  "time": "9:52 PM"
}, {
  "userId": 10,
  "fullName": "Kimberlee Worpole",
  "stdId": "72036-069",
  "score": 80,
  "time": "2:45 PM"
}, {
  "userId": 11,
  "fullName": "Charla Beavors",
  "stdId": "51991-759",
  "score": 25,
  "time": "10:28 AM"
}, {
  "userId": 12,
  "fullName": "Ferdie Shearston",
  "stdId": "42254-095",
  "score": 40,
  "time": "5:37 AM"
}, {
  "userId": 13,
  "fullName": "Rosy Waters",
  "stdId": "67345-0011",
  "score": 27,
  "time": "5:19 AM"
}, {
  "userId": 14,
  "fullName": "Grayce Royce",
  "stdId": "68084-722",
  "score": 66,
  "time": "1:07 PM"
}, {
  "userId": 15,
  "fullName": "Marietta Cutcliffe",
  "stdId": "10755-006",
  "score": 26,
  "time": "3:31 AM"
}, {
  "userId": 16,
  "fullName": "Nichole Desmond",
  "stdId": "44924-009",
  "score": 67,
  "time": "5:34 AM"
}, {
  "userId": 17,
  "fullName": "Nolana Bottrill",
  "stdId": "59262-356",
  "score": 98,
  "time": "9:13 AM"
}, {
  "userId": 18,
  "fullName": "Adora Zanini",
  "stdId": "21695-594",
  "score": 26,
  "time": "7:15 AM"
}, {
  "userId": 19,
  "fullName": "Kirbie Waith",
  "stdId": "63354-315",
  "score": 43,
  "time": "2:57 PM"
}, {
  "userId": 20,
  "fullName": "Nikaniki Thunnerclef",
  "stdId": "47682-110",
  "score": 1,
  "time": "7:33 AM"
}, {
  "userId": 21,
  "fullName": "Samantha Dubock",
  "stdId": "57520-0954",
  "score": 51,
  "time": "10:16 PM"
}, {
  "userId": 22,
  "fullName": "Tiebold Segebrecht",
  "stdId": "42254-073",
  "score": 50,
  "time": "4:24 AM"
}, {
  "userId": 23,
  "fullName": "Morna Fairham",
  "stdId": "60505-0094",
  "score": 98,
  "time": "8:46 PM"
}, {
  "userId": 24,
  "fullName": "Anjanette Mandrake",
  "stdId": "68084-204",
  "score": 62,
  "time": "2:03 AM"
}, {
  "userId": 25,
  "fullName": "Hammad Roly",
  "stdId": "0006-3603",
  "score": 29,
  "time": "9:06 AM"
}, {
  "userId": 26,
  "fullName": "Hollis Stryde",
  "stdId": "57955-6025",
  "score": 2,
  "time": "6:53 PM"
}, {
  "userId": 27,
  "fullName": "Rurik Haker",
  "stdId": "68180-280",
  "score": 88,
  "time": "1:42 AM"
}, {
  "userId": 28,
  "fullName": "Christos Wyche",
  "stdId": "66424-996",
  "score": 73,
  "time": "3:24 PM"
}, {
  "userId": 29,
  "fullName": "Arney Dabell",
  "stdId": "53590-100",
  "score": 16,
  "time": "5:54 AM"
}, {
  "userId": 30,
  "fullName": "Analise Curdell",
  "stdId": "51346-016",
  "score": 27,
  "time": "8:51 AM"
}, {
  "userId": 31,
  "fullName": "Edin Ashington",
  "stdId": "0409-2102",
  "score": 52,
  "time": "8:42 PM"
}, {
  "userId": 32,
  "fullName": "Danyelle Harbidge",
  "stdId": "57237-050",
  "score": 83,
  "time": "12:41 PM"
}, {
  "userId": 33,
  "fullName": "Rosamund Reditt",
  "stdId": "62032-415",
  "score": 32,
  "time": "9:38 PM"
}, {
  "userId": 34,
  "fullName": "Julieta Brehaut",
  "stdId": "68345-721",
  "score": 79,
  "time": "6:08 PM"
}, {
  "userId": 35,
  "fullName": "Geralda Locker",
  "stdId": "37205-577",
  "score": 30,
  "time": "9:30 AM"
}, {
  "userId": 36,
  "fullName": "Clerc Feary",
  "stdId": "49288-0757",
  "score": 45,
  "time": "8:44 AM"
}, {
  "userId": 37,
  "fullName": "Elwin Jefferys",
  "stdId": "24385-146",
  "score": 79,
  "time": "3:11 AM"
}, {
  "userId": 38,
  "fullName": "Ring Lanfranconi",
  "stdId": "55111-368",
  "score": 22,
  "time": "9:08 AM"
}, {
  "userId": 39,
  "fullName": "Randolph McLuckie",
  "stdId": "0056-0174",
  "score": 56,
  "time": "11:39 AM"
}, {
  "userId": 40,
  "fullName": "Reinhard Oldknowe",
  "stdId": "36800-400",
  "score": 26,
  "time": "8:25 PM"
}, {
  "userId": 41,
  "fullName": "Falkner Leonarde",
  "stdId": "0093-1005",
  "score": 88,
  "time": "7:50 AM"
}, {
  "userId": 42,
  "fullName": "Nadeen Menlove",
  "stdId": "63868-208",
  "score": 16,
  "time": "2:28 PM"
}, {
  "userId": 43,
  "fullName": "Woodman Marsy",
  "stdId": "58668-4531",
  "score": 86,
  "time": "3:30 PM"
}, {
  "userId": 44,
  "fullName": "Putnam Creek",
  "stdId": "76384-002",
  "score": 32,
  "time": "5:54 AM"
}, {
  "userId": 45,
  "fullName": "Vladimir Durnell",
  "stdId": "68788-9924",
  "score": 53,
  "time": "12:31 AM"
}, {
  "userId": 46,
  "fullName": "Anna-diane Dadds",
  "stdId": "68788-9012",
  "score": 68,
  "time": "10:44 PM"
}, {
  "userId": 47,
  "fullName": "Felizio Charrett",
  "stdId": "99207-292",
  "score": 65,
  "time": "10:00 AM"
}, {
  "userId": 48,
  "fullName": "Lionel Yakushkev",
  "stdId": "65044-1409",
  "score": 59,
  "time": "2:32 AM"
}, {
  "userId": 49,
  "fullName": "Vincents Greason",
  "stdId": "49884-576",
  "score": 20,
  "time": "3:32 PM"
}, {
  "userId": 50,
  "fullName": "Dawna Maffini",
  "stdId": "42192-108",
  "score": 33,
  "time": "11:48 PM"
}, {
  "userId": 51,
  "fullName": "Quintin Cavanaugh",
  "stdId": "67046-017",
  "score": 61,
  "time": "5:45 AM"
}, {
  "userId": 52,
  "fullName": "Alejandro Hammand",
  "stdId": "14783-444",
  "score": 69,
  "time": "5:08 PM"
}, {
  "userId": 53,
  "fullName": "Rhodie Dempsey",
  "stdId": "48951-1005",
  "score": 34,
  "time": "8:31 PM"
}, {
  "userId": 54,
  "fullName": "Emmott Sikora",
  "stdId": "33342-031",
  "score": 71,
  "time": "11:46 PM"
}, {
  "userId": 55,
  "fullName": "Thorvald Mulroy",
  "stdId": "55566-5040",
  "score": 63,
  "time": "12:13 PM"
}, {
  "userId": 56,
  "fullName": "Davie Nurdin",
  "stdId": "63304-780",
  "score": 35,
  "time": "3:08 AM"
}, {
  "userId": 57,
  "fullName": "Phillie Bentson",
  "stdId": "65923-007",
  "score": 56,
  "time": "4:10 PM"
}, {
  "userId": 58,
  "fullName": "Ami Salaman",
  "stdId": "52584-153",
  "score": 29,
  "time": "2:45 AM"
}, {
  "userId": 59,
  "fullName": "Stephi Vieyra",
  "stdId": "46708-025",
  "score": 61,
  "time": "8:02 PM"
}, {
  "userId": 60,
  "fullName": "Hestia Donaldson",
  "stdId": "63354-230",
  "score": 98,
  "time": "2:56 AM"
}, {
  "userId": 61,
  "fullName": "Myriam Fishbie",
  "stdId": "55301-615",
  "score": 93,
  "time": "8:34 AM"
}, {
  "userId": 62,
  "fullName": "Thacher Jest",
  "stdId": "55714-2276",
  "score": 73,
  "time": "8:43 PM"
}, {
  "userId": 63,
  "fullName": "Patricia Gajownik",
  "stdId": "17312-004",
  "score": 32,
  "time": "3:12 PM"
}, {
  "userId": 64,
  "fullName": "Donall Mitrovic",
  "stdId": "67296-0650",
  "score": 37,
  "time": "2:36 PM"
}, {
  "userId": 65,
  "fullName": "Tedman Ambrozewicz",
  "stdId": "66116-450",
  "score": 53,
  "time": "8:42 AM"
}, {
  "userId": 66,
  "fullName": "Prent Beden",
  "stdId": "75997-018",
  "score": 46,
  "time": "6:04 PM"
}, {
  "userId": 67,
  "fullName": "Martica Citrine",
  "stdId": "36987-1739",
  "score": 33,
  "time": "5:11 AM"
}, {
  "userId": 68,
  "fullName": "Gibbie Westmore",
  "stdId": "64942-1096",
  "score": 38,
  "time": "1:36 PM"
}, {
  "userId": 69,
  "fullName": "Valeria Tortis",
  "stdId": "68382-196",
  "score": 19,
  "time": "4:04 AM"
}, {
  "userId": 70,
  "fullName": "Tracie Moreno",
  "stdId": "42023-130",
  "score": 32,
  "time": "5:13 AM"
}, {
  "userId": 71,
  "fullName": "Barrie Axtell",
  "stdId": "45963-303",
  "score": 77,
  "time": "10:26 AM"
}, {
  "userId": 72,
  "fullName": "Nelson McCory",
  "stdId": "54218-800",
  "score": 82,
  "time": "5:08 PM"
}, {
  "userId": 73,
  "fullName": "Ray Rackham",
  "stdId": "59243-110",
  "score": 51,
  "time": "6:33 PM"
}, {
  "userId": 74,
  "fullName": "Ashien Lipscombe",
  "stdId": "42507-604",
  "score": 78,
  "time": "10:30 PM"
}, {
  "userId": 75,
  "fullName": "Viki Shellcross",
  "stdId": "55154-5086",
  "score": 82,
  "time": "6:14 AM"
}, {
  "userId": 76,
  "fullName": "Mikey Throughton",
  "stdId": "43742-0158",
  "score": 29,
  "time": "7:08 PM"
}, {
  "userId": 77,
  "fullName": "Morena Habron",
  "stdId": "0363-0390",
  "score": 88,
  "time": "6:17 AM"
}, {
  "userId": 78,
  "fullName": "Kylila Gritskov",
  "stdId": "59115-073",
  "score": 80,
  "time": "7:31 AM"
}, {
  "userId": 79,
  "fullName": "Harriet Froment",
  "stdId": "11819-360",
  "score": 66,
  "time": "1:28 PM"
}, {
  "userId": 80,
  "fullName": "Corabel Isakov",
  "stdId": "60505-0097",
  "score": 28,
  "time": "8:15 AM"
}, {
  "userId": 81,
  "fullName": "Marisa Duchesne",
  "stdId": "76214-035",
  "score": 92,
  "time": "5:39 AM"
}, {
  "userId": 82,
  "fullName": "Delilah Martinson",
  "stdId": "47593-385",
  "score": 78,
  "time": "5:14 PM"
}, {
  "userId": 83,
  "fullName": "Anallese Mendus",
  "stdId": "11822-7310",
  "score": 55,
  "time": "12:16 PM"
}, {
  "userId": 84,
  "fullName": "Tanya Whichelow",
  "stdId": "0469-0677",
  "score": 44,
  "time": "8:54 AM"
}, {
  "userId": 85,
  "fullName": "Erich Stoker",
  "stdId": "64735-080",
  "score": 68,
  "time": "5:40 PM"
}, {
  "userId": 86,
  "fullName": "Mozelle Hallifax",
  "stdId": "0517-4810",
  "score": 93,
  "time": "8:57 PM"
}, {
  "userId": 87,
  "fullName": "Colly Cundey",
  "stdId": "0409-2596",
  "score": 55,
  "time": "8:41 AM"
}, {
  "userId": 88,
  "fullName": "Cammy Piddletown",
  "stdId": "49349-430",
  "score": 62,
  "time": "12:09 AM"
}, {
  "userId": 89,
  "fullName": "Kirbie Laffan",
  "stdId": "68180-588",
  "score": 33,
  "time": "4:51 AM"
}, {
  "userId": 90,
  "fullName": "Keri Gori",
  "stdId": "59460-0001",
  "score": 62,
  "time": "10:55 AM"
}, {
  "userId": 91,
  "fullName": "Lydia Reavey",
  "stdId": "54868-5611",
  "score": 14,
  "time": "5:10 PM"
}, {
  "userId": 92,
  "fullName": "Xerxes Bertouloume",
  "stdId": "55910-179",
  "score": 82,
  "time": "9:51 PM"
}, {
  "userId": 93,
  "fullName": "Susan Frisel",
  "stdId": "50474-597",
  "score": 38,
  "time": "10:38 AM"
}, {
  "userId": 94,
  "fullName": "Nathalia Collcott",
  "stdId": "43857-0243",
  "score": 87,
  "time": "7:19 PM"
}, {
  "userId": 95,
  "fullName": "Gretel Wadsworth",
  "stdId": "10812-416",
  "score": 81,
  "time": "12:57 PM"
}, {
  "userId": 96,
  "fullName": "Aleen Owen",
  "stdId": "49288-0043",
  "score": 61,
  "time": "6:13 PM"
}, {
  "userId": 97,
  "fullName": "Brita Mangenot",
  "stdId": "52731-7007",
  "score": 13,
  "time": "1:33 PM"
}, {
  "userId": 98,
  "fullName": "Helena Lilleyman",
  "stdId": "36987-2460",
  "score": 92,
  "time": "3:18 PM"
}, {
  "userId": 99,
  "fullName": "Warden Maclean",
  "stdId": "37000-733",
  "score": 96,
  "time": "5:28 AM"
}, {
  "userId": 100,
  "fullName": "Colas Rysdale",
  "stdId": "36987-1091",
  "score": 47,
  "time": "3:00 PM"
}]`
);
export default tableData;
