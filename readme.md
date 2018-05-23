# Shulchan Aruch Analysis

## Goal
To statistically analyze the text of Shulchan Aruch in light of the Klalim. See http://halachipedia.com/index.php?title=Shulchan_Aruch for a basic treatment of guidelines for reading Shulchan Aruch.

Provides:
* Raw statistics
* Allows querying your own regex
* Interactive queires - run a query and see all the resulting Simanim/Seifim
## Basic Usage/Behavior

For each section of Shulchan Aruch, the text file is opened and queries for a series of regexes. Counts of occurrences for each query are logged to the console.

## Basic Usage
Just run `queries.js` and it will output data for all four Chalakim. (Only one shown with minimal results)
```
> Node .\queries.js

====Orach Chayim.txt====

Stam veYesh: 1
yeshOmrimVeYeshOmrim: 1
yeshOmrimVeYeshOmer: 1
yeshOmrimVeYeshCholek: 1
veYeshOmrimStart: 0
yeshYachidOpening: 0
veYeshOmerStart: 0
yeshYachid: 103
yeshMattirOpening: 0
yeshMattir: 8
yeshNohegYachidOpening: 0
yeshNohegYachid: 1
yeshNohagimOpening: 0
yeshNohagim: 19
yeshCholkim: 10
yeshCholek: 3
stamVeYeshCholek: 1
tzarichLizaher: 35
yeshLizaher: 17
beMedinosElu: 1
yeshLeHistapek: 13
rambam: 32
rosh: 20

```
## Next Steps
* Clean up Yoreh Deah data
* Finish regexes and their descriptions
* Cull list of instances for each occurence
* Create GUI
  * Input own regex
  * Show list of occurences per query and use Sefaria to link to text

## Raw Statistics

### Shulchan Aruch

| Shulchan Aruch | Orach Chaim | Yoreh Deah | Even HaEzer | Choshen Mishpat | Total |
|----------------|-------------|------------|-------------|-------------------|-------|
| Stam veYesh    |             |            |             |                   |       |
| Yesh veYesh    |             |            |             |                   |       |
|                |             |            |             |                   |       |
|                |             |            |             |                   |       |
|                |             |            |             |                   |       |
|                |             |            |             |                   |       |
|                |             |            |             |                   |       |
|                |             |            |             |                   |       |
|                |             |            |             |                   |       |

### Rama

## Analysis


## Tzarich Iyun
Select Rama Haga: ```הגה [^:]*:``` Not sure how to remove non Haga insertions that aren't by the Shulchan Aruch. This version doesn't distinguish between the two for some reason. Doesn't work with ToratEmmet edition.
