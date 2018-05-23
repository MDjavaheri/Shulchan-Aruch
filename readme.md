# Shulchan Aruch Analysis

## Goal
To statistically analyze the text of Shulchan Aruch in light of the Klalim. See http://halachipedia.com/index.php?title=Shulchan_Aruch for a basic treatment of guidelines for reading Shulchan Aruch.

Provides:
* Raw statistics
* Allows querying your own regex
* Interactive queires - run a query and see all the resulting Simanim/Seifim
## Basic Usage/Behavior

For each section of Shulchan Aruch, the text file is opened and queries for a series of regexes. Counts of occurrences for each query are logged to the console.
## Raw Statistics

### Shulchan Aruch
Example:

| Shulchan Aruch | Orach Chaim | Yoreh Deah | Even HaEzer | Chodeshen Mishpat | Total |
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