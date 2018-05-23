# Shulchan Aruch Analysis

## Goal
Provides:
* Raw statistics
* Allows querying your own regex
* Interactive queires - run a query and see all the resulting locations referenced

To statistically analyze the text of Shulchan Aruch in light of the rules (Klalim) of understanding his articulation. For example, in a "Stam veYesh" - a ruling in which the first opinion is presented anonymously and then a second one is presented with "Yesh Omrim" ("There are those who say") - the Halacha is generally understood to follow the former, "Stam" opinion. In a "Yesh Omrim veYesh Omrim" - two opinions presented with "There are those who say" - the Halacha follows the latter. There is much literature available regarding these rules and their exceptions, so it would be valuable to know how often they occur and where. Therefore, the goal is to produce an accurate count of occurences for a number of articulations and references to where they appear.

See http://halachipedia.com/index.php?title=Shulchan_Aruch for a basic treatment of guidelines for reading Shulchan Aruch.


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
