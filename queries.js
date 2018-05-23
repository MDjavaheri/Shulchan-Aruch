// Setup
var hebrew = /[\u0590-\u05fe]/g;
var rama = /הגה [^:]*:/g;
var brackets = /\[[^\]]*\]/g;
var parens = /\([^\)]*\)/g;

// Shulchan Aruch Queries
var stamVeYesh;
var yeshOmrimVeYeshOmrim;
var yeshOmrimVeYeshOmer;
var yeshOmrimVeYeshCholek;

var veYeshOmrimStart = /^ו(י"א|יש אומרים)/g;
var yeshYachidOpening = /^יש מי שאומר/g;
var veYeshOmerStart = /^ו(יש מי שאומר)/g;
var yeshYachid = /יש מי שאומר/g;
var yeshMattirOpening = /^יש מי שמתיר/g;
var yeshMattir = /יש מי שמתיר/g;
var yeshNohegYachidOpening = /^יש מי שנוהג/g;
var yeshNohegYachid = /יש מי שנוהג/g;
var yeshNohagimOpening = /^יש נוהגי[םן]/g;
var yeshNohagim = /יש נוהגי[םן]/g;
var yeshCholkim = /יש חולקי[םן]/g;
var yeshCholek = /יש מי שחולק/g;
var stamVeYeshCholek;
var yeshLizaher = /יש ליזהר/g;
var tzarichLizaher = /צריך ליזהר/g;
var beMedinosElu = /במדינות אלו/g;
var yeshLeHistapek = /יש להסתפק/g;
var rambam = /רמב"ם/g;
var rosh = /רא"ש/g;

const query = (text, regex) => {(text.match(regex)|| []).length};
