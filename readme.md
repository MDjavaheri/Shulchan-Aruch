# Shulchan Aruch Analysis

## Goal
To statistically analyze the text of Shulchan Aruch in light of the Klalim. See http://halachipedia.com/index.php?title=Shulchan_Aruch for a basic treatment of guidelines for reading Shulchan Aruch.
## Raw Statistics
### Shulchan Aruch

    Stam veYesh Omrim - סתם ויש אומרים

    Stam veYesh MiSheOmer - סתם ויש מי שאומר

    Stam veYesh Mi SheCholek - סתם ויש מי שחולק

    Yesh Omrim veYesh Omrim - יש אומרים ויש אומרים

    Yesh Omrim veYesh Mi SheOmer - יש אומרים ויש מי שאומר

    Yesh Omrim veYesh Mi SheCholek - יש אומרים ויש מי שחולק

    Yesh Mi SheNoheg - יש מי שנוהג

    Yesh Nohagim/n - יש נוהגים\ן

#### Rishonim Mentioned by Name
Rambam

Rosh
### Rama
Hagahs

Parenthetical comments

## Analysis

## Appendix
Hebrew chars regex: ```[\u0590-\u05fe]+``` https://stackoverflow.com/questions/25067355/regex-to-match-hebrew-and-english-characters-except-numbers
Select Rama Haga: ```הגה [^:]*:``` targets 1413/1423 הגה_ instances in Orach Chaim, still need to attack paranetheses. Also not sure how to remove non Haga insertions that aren't by the Shulchan Aruch. This version doesn't distinguish between the two for some reason. Doesn't work with ToratEmmet edition.
Brackets: ```\[[^\]]*\]```
Parenthesis: ```\([^\)]*\)```

Other links to have handy

https://notepad-plus-plus.org/community/topic/12368/regex-search-the-nearest-words-at-a-maximum-distance-of-6-words/3

https://www.regular-expressions.info/near.html
