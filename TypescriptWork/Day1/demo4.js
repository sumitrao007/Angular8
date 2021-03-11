//Json Object => java script object notation
// it Stores a data is in key & value Format
var obj = {
    id: 1,
    fname: 'Sumit',
    lname: 'Raokhande'
};
// console.log(`
//             ID is ${obj.id}
//             First name ${obj.fname}
//             Last name ${obj.lname}
// `);
//Array of Object
var arrobj = [
    {
        id: 1,
        fname: 'Sumit',
        lname: 'Raokhande',
        marks: [40, 65, 50, 45],
        data: [
            {
                month: 'jan'
            },
            {
                month: 'frb'
            },
            {
                month: 'apr'
            },
        ]
    },
    {
        id: 2,
        fname: 'Kiran',
        lname: 'Raokhande',
        marks: [41, 63, 55, 45],
        data: [
            {
                month: 'jan'
            },
            {
                month: 'frb'
            },
            {
                month: 'apr'
            },
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        marks: [45, 75, 50, 55],
        data: [
            {
                month: 'jan'
            },
            {
                month: 'frb'
            },
            {
                month: 'apr'
            },
        ]
    }
];
// console.log(`
//         id:: ${arrobj[1].id}
//         first name :: ${arrobj[1].fname}
//         last nae :: ${arrobj[1].lname}
// `);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        ID :: " + arrobj[i].id + "\n        First Name:: " + arrobj[i].fname + "\n        Last Name :: " + arrobj[i].lname + "\n        Marks :: " + arrobj[i].marks + "\n        ----------------------------------\n    ");
    for (var j = 0; j < arrobj[i].data.length; j++) {
        console.log("\n        =========================\n         " + arrobj[i].data[j].month + "\n         ===========================\n        ");
    }
}
