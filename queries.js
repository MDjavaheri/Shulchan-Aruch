var fs = require('fs');
// Setup for cleaning up raw files
var hebrew = /[\u0590-\u05fe]/g;
var rama = /הגה [^:]*:/g;
var brackets = /\[[^\]]*\]/g;
var parens = /\([^\)]*\)/g;

// Shulchan Aruch Queries
let queries = [
    {
        description: 'Stam veYesh',
        regex: ''
    },
    {
        description: 'yeshOmrimVeYeshOmrim',
        regex: ''
    },
    {
        description: 'yeshOmrimVeYeshOmer',
        regex: ''
    },
    {
        description: 'yeshOmrimVeYeshCholek',
        regex: ''
    },
    {
        description: 'veYeshOmrimStart',
        regex: /^ו(י"א|יש אומרים)/g
    },
    {
        description: 'yeshYachidOpening',
        regex: /^יש מי שאומר/g
    },
    {
        description: 'veYeshOmerStart',
        regex: /^ו(יש מי שאומר)/g
    }, 
    {
        description: 'yeshYachid',
        regex: /יש מי שאומר/g
    },
    {
        description: 'yeshMattirOpening',
        regex: /^יש מי שמתיר/g
    },
    {
        description: 'yeshMattir',
        regex: /יש מי שמתיר/g
    }
    ,
    {
        description: 'yeshNohegYachidOpening',
        regex: /^יש מי שנוהג/g
    },
    {
        description: 'yeshNohegYachid',
        regex: /יש מי שנוהג/g
    },
    {
        description: 'yeshNohagimOpening',
        regex: /^יש נוהגי[םן]/g
    },
    {
        description: 'yeshNohagim',
        regex: /יש נוהגי[םן]/g
    },
    {
        description: 'yeshCholkim',
        regex: /יש חולקי[םן]/g
    },
    {
        description: 'yeshCholek',
        regex:  /יש מי שחולק/g
    },
    {
        description: 'stamVeYeshCholek',
        regex: ''
    },
    {
        description: 'tzarichLizaher',
        regex: /צריך ליזהר/g
    },
    {
        description: 'yeshLizaher',
        regex: /יש ליזהר/g
    },
    {
        description: 'beMedinosElu',
        regex: /במדינות אלו/g
    },
    {
        description: 'yeshLeHistapek',
        regex: /יש להסתפק/g
    },
    {
        description: 'rambam',
        regex: /רמב"ם/g
    },
    {
        description: 'rosh',
        regex: /רא"ש/g
    }
];

var run = () => {
    fs.readdir('data/modified', function( err, files ) {
        files.forEach(f => {
            fs.readFile(`data/modified/${f}`, 'utf8', (err, data) => {
                console.log(`\n====${f}====\n`);
                queries.forEach(q => {
                    let count = (data.match(q.regex) || []).length
                    console.log(`${q.description}: ${count}`);
                });
            });
        });
        console.log();
    });
}

run();