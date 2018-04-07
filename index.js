'use strict';

const ElCompressor = require('./elCompressor.js');

const json = {
    line1: 'test1',
    line2: 'test2',
    line3: 'test3'
};

const json2 = {};

const json3 = [
    {
        "_id": "5ac916e0064aa870b866774f",
        "index": 0,
        "guid": "8e927acb-e0e7-4520-a861-4f973b88bc86",
        "isActive": false,
        "balance": "$1,868.17",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "blue",
        "name": "Lilian Hart",
        "gender": "female",
        "company": "PHORMULA",
        "email": "lilianhart@phormula.com",
        "phone": "+1 (990) 540-3475",
        "address": "486 Columbia Street, Falconaire, New York, 1149",
        "about": "Adipisicing dolor velit aliquip sunt ea fugiat duis deserunt adipisicing eiusmod magna cupidatat duis. Aliqua quis quis ad voluptate. Qui veniam ut proident laboris cillum dolor laboris. Labore nulla id elit labore excepteur aliquip ullamco cillum nulla velit pariatur laboris est ad. Velit exercitation ut occaecat laborum anim proident. Incididunt in cupidatat aute velit id ea esse veniam irure irure voluptate amet. Commodo dolor ipsum laborum ullamco consectetur ex qui ex incididunt sit.\r\n",
        "registered": "2016-05-26T08:05:52 +04:00",
        "latitude": -4.222093,
        "longitude": 158.354178,
        "tags": [
            "esse",
            "in",
            "proident",
            "duis",
            "quis",
            "mollit",
            "deserunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Dickerson Mckenzie"
            },
            {
                "id": 1,
                "name": "Huff Frye"
            },
            {
                "id": 2,
                "name": "Marietta Copeland"
            }
        ],
        "greeting": "Hello, Lilian Hart! You have 3 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5ac916e022f972a1d6335ea7",
        "index": 1,
        "guid": "67b26276-069e-4e86-a8ca-a3c84e094ecc",
        "isActive": false,
        "balance": "$2,011.40",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "green",
        "name": "Henrietta Herman",
        "gender": "female",
        "company": "FROSNEX",
        "email": "henriettaherman@frosnex.com",
        "phone": "+1 (811) 454-2682",
        "address": "709 Calyer Street, Ruckersville, Texas, 6008",
        "about": "Veniam anim ipsum laboris anim quis sint nostrud voluptate. Eiusmod esse ad officia nostrud exercitation ullamco deserunt dolor deserunt reprehenderit. Voluptate minim id consequat voluptate nulla consectetur proident cupidatat esse nostrud est voluptate. Esse duis sunt elit magna. Laborum fugiat mollit velit amet. Nostrud cupidatat proident laboris sunt nostrud aliquip quis nostrud eiusmod. Amet cillum veniam labore anim elit enim minim tempor.\r\n",
        "registered": "2014-05-04T04:38:09 +04:00",
        "latitude": -56.402479,
        "longitude": -48.506773,
        "tags": [
            "aliquip",
            "proident",
            "excepteur",
            "commodo",
            "commodo",
            "ut",
            "occaecat"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Hickman Brewer"
            },
            {
                "id": 1,
                "name": "Rebecca Bradshaw"
            },
            {
                "id": 2,
                "name": "Bobbi Stafford"
            }
        ],
        "greeting": "Hello, Henrietta Herman! You have 9 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5ac916e19fcf6df597ff45b8",
        "index": 2,
        "guid": "85ef3fda-f568-4cb2-a652-fa5af3402505",
        "isActive": false,
        "balance": "$2,271.29",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "blue",
        "name": "Rutledge Mccarty",
        "gender": "male",
        "company": "IMKAN",
        "email": "rutledgemccarty@imkan.com",
        "phone": "+1 (920) 414-3286",
        "address": "493 Woodhull Street, Fruitdale, Guam, 7915",
        "about": "Ipsum nisi quis duis adipisicing amet magna ut quis labore sunt exercitation fugiat non. Eiusmod elit minim cillum aliqua deserunt amet. Ad aliquip eiusmod aute magna aute occaecat ullamco esse anim duis. Proident qui nostrud aliqua ullamco elit Lorem velit anim.\r\n",
        "registered": "2017-03-12T01:36:24 +04:00",
        "latitude": 48.843099,
        "longitude": -105.276992,
        "tags": [
            "nostrud",
            "Lorem",
            "officia",
            "labore",
            "laborum",
            "ipsum",
            "aliquip"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Herring Tyler"
            },
            {
                "id": 1,
                "name": "Key Lyons"
            },
            {
                "id": 2,
                "name": "Benita Walton"
            }
        ],
        "greeting": "Hello, Rutledge Mccarty! You have 1 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5ac916e1fe2a6cb20f1ad9d5",
        "index": 3,
        "guid": "49cb48d4-2e83-4bb7-9e23-485db68fc878",
        "isActive": false,
        "balance": "$3,529.54",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": "Brittney Reese",
        "gender": "female",
        "company": "KAGGLE",
        "email": "brittneyreese@kaggle.com",
        "phone": "+1 (877) 538-3470",
        "address": "375 Tompkins Place, Ezel, Federated States Of Micronesia, 6097",
        "about": "Dolor irure sint proident elit. Nostrud culpa veniam aliquip incididunt qui in cupidatat. Est excepteur sunt veniam tempor. Aliqua tempor do fugiat enim anim ea quis dolor non in non tempor. Eu mollit enim ipsum ullamco nulla deserunt dolor nisi magna consequat cupidatat laborum. Amet ut commodo reprehenderit elit dolor minim occaecat velit. Ullamco eiusmod amet amet sit excepteur.\r\n",
        "registered": "2016-12-22T11:13:23 +05:00",
        "latitude": -56.101923,
        "longitude": 170.934757,
        "tags": [
            "ipsum",
            "aliquip",
            "dolore",
            "dolor",
            "ad",
            "aliqua",
            "veniam"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Ola Dillon"
            },
            {
                "id": 1,
                "name": "Ashley Sykes"
            },
            {
                "id": 2,
                "name": "Mamie Levy"
            }
        ],
        "greeting": "Hello, Brittney Reese! You have 3 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5ac916e1cdda36400e951101",
        "index": 4,
        "guid": "5f7064a3-8217-4301-be51-69aff8d58390",
        "isActive": true,
        "balance": "$2,662.15",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "green",
        "name": "Hicks Marsh",
        "gender": "male",
        "company": "ISOLOGIA",
        "email": "hicksmarsh@isologia.com",
        "phone": "+1 (909) 407-2187",
        "address": "874 Rewe Street, Templeton, New Mexico, 8825",
        "about": "Esse nulla anim sit sit irure ad mollit proident ipsum deserunt nisi adipisicing veniam ex. Anim veniam ea voluptate Lorem non duis labore exercitation id. Est Lorem aute sunt dolore proident elit. Magna reprehenderit laboris duis elit irure ipsum mollit excepteur qui excepteur. Do eiusmod non cupidatat duis. In cillum voluptate labore nisi enim est consectetur. Velit eu deserunt ex elit ullamco reprehenderit enim.\r\n",
        "registered": "2015-08-25T11:08:32 +04:00",
        "latitude": -49.366676,
        "longitude": -98.559462,
        "tags": [
            "sunt",
            "id",
            "cillum",
            "duis",
            "aute",
            "aute",
            "aute"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mcbride Burnett"
            },
            {
                "id": 1,
                "name": "Nelson Castillo"
            },
            {
                "id": 2,
                "name": "Huffman Small"
            }
        ],
        "greeting": "Hello, Hicks Marsh! You have 5 unread messages.",
        "favoriteFruit": "banana"
    }
];


function getSize(string) {
    return encodeURI(string).split(/%..|./).length - 1;
}

const jsonToUse = json3;

console.log('Given value size:', getSize(JSON.stringify(jsonToUse)));
ElCompressor.serialize(jsonToUse, function(serialized) {
    console.log('serialized size:', getSize(serialized));
    ElCompressor.deserialize(serialized, function(deserialized) {
        console.log('deserialized size:', getSize(deserialized));
        console.log('Final test:', getSize(JSON.stringify(jsonToUse)) === getSize(deserialized));
    });
});