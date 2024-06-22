# 🏝️ Island Finder
A Breadth-First-Search (BFS) algorithm for finding islands in a binary graph (i.e. a matrix of 1's and 0's). 

For example: 
In the binary graph below, the algorithm would find 2 islands:

```
matrix = [
    [⛰️,⛰️,⛰️,⛰️,💧],
    [💧,⛰️,⛰️,💧,⛰️], 
    [💧,⛰️,⛰️,💧,⛰️]
]

the 1st island: 
    ⛰️,⛰️,⛰️,⛰️
       ⛰️,⛰️ 
       ⛰️,⛰️

the 2nd island: 
       ⛰️
       ⛰️
```


## Running Locally 
```
npm install 
mocha
```