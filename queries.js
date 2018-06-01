var fs = require('fs');
var gematriya = require('gematriya');
// Setup for cleaning up raw files

var hebrew = /[\u0590-\u05fe]/g;
var rama = /הגה [^:]*:/g;
var brackets = /\[[^\]]*\]/g;
var parens = /\([^\)]*\)/g;

//TODO: check for files in raw and run cleanup, save to modified.
var cleanup = (data) => {
    data.replace(rama);
    data.replace(brackets);
    data.replace(parens);
    //add siman and seif to each line
    return data;
}
// Shulchan Aruch Queries
var queries = [
    {
        description: 'Stam veYesh',
        regex: /[^יש]* ויש /g
    },
    {
        description: 'Yesh veYesh (beginning, all)',
        regex: /^יש .* ויש/g
    },
    {
        description: 'Yesh Omrim veYesh Omrim',
        regex: /^יש אומרים .* ויש אומרים/g
    },
    {
        description: 'Yesh Omrim veYesh MiSheOmer',
        regex: /^יש מי שאומר .* ויש אומרים/g
    },
    {
        description: 'yeshOmrimVeYeshCholek',
        regex: ''
    },
    {
        description: 'VeYeshOmrim (beginning)',
        regex: /^ו(י"א|יש אומרים)/g
    },
    {
        description: 'Yesh Mi SheOmer (beginning)',
        regex: /^יש מי שאומר/g
    },
    {
        description: 'VeYesh Mi SheOmer (beginning)',
        regex: /^ו(יש מי שאומר)/g
    }, 
    {
        description: 'Yesh Mi SheOmer',
        regex: /יש מי שאומר/g
    },
    {
        description: 'Yesh Mi SheMattir (beginning)',
        regex: /^יש מי שמתיר/g
    },
    {
        description: 'Yesh Mi SheMattir',
        regex: /יש מי שמתיר/g
    },
    {
        description: 'Yesh Mattirim',
        regex: /יש מתירים/g
    },
    {
        description: 'Yesh Mi SheNoheg (beginning)',
        regex: /^יש מי שנוהג/g
    },
    {
        description: 'Yesh Mi SheNoheg',
        regex: /יש מי שנוהג/g
    },
    {
        description: 'Yesh Nogahim (beginning)',
        regex: /^יש נוהגי[םן]/g
    },
    {
        description: 'Yesh Nogahim',
        regex: /יש נוהגי[םן]/g
    },
    {
        description: 'Yesh Cholkim',
        regex: /יש חולקי[םן]/g
    },
    {
        description: 'Yesh Mi SheCholek',
        regex:  /יש מי שחולק/g
    },
    {
        description: 'Yesh Mi SheKatav',
        regex:  /יש מי שכתב/g
    },
    {
        description: 'Stam veYesh Mi SheOmer',
        regex: /[^יש]* ויש מי שאומר/g
    },
    {
        description: 'Stam veYesh Mi SheCholek',
        regex: /[^יש]* ויש מי שחולק/g
    },

    {
        description: 'Stam veYesh Cholkim',
        regex: /[^יש]* ויש חולקים/g
    },
    {
        description: 'Tzarich Lizaher',
        regex: /צריך ליזהר/g
    },
    {
        description: 'yeshLizaher',
        regex: /יש ליזהר/g
    },
    {
        description: 'Tov',
        regex: /טוב ל/g
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
    },
    {
        description: 'Nachon',
        regex: /נכון/g
    },
    {
        description: 'Ashkenaz',
        regex: /אשכנז/g
    },
    {
        description: 'Sefarad',
        regex: /ספרד/g
    },
    {
        description: 'Tzorfat',
        regex: /צרפת/g
    },
    {
        description: 'Minhag',
        regex: /מנהג/g
    }
];

var run = () => {
    fs.readdir('data/modified', function( err, files ) {
        files.forEach(f => {
            fs.readFile(`data/modified/${f}`, 'utf8', (err, data) => {
                //maybe do all the clean up right here?
                //  cleanup(data)
                //  parse(data)
                let section = f.split('.')[0];
                console.log(`\n====${section}====\n`);
                queries.forEach(q => {
                    let matches = data.match(q.regex) || [];
                    q.section = { 
                        "matches": matches,
                        "count": matches.length
                    }
                    console.log(`${q.description}: ${matches.length}`);
                });
            });
        });
        console.log(queries);
    });
};

run();