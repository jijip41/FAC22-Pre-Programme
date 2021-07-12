# CSS Architecture


## To learn...
* *Why are CSS naming conventions useful?*
* *When might specificity become a problem?*
* *How can composition help us build UIs?*
---

## CSS naming convention
<br>

### Use Hyphen Delimited String
e.g
<br>
```.redBox {  border: 1px solid red;}``` X
<br>
```.red-box {   border: 1px solid red;}``` O
<br>
#### It's consistent with the CSS property names
e.g.
<br>
font-weight O
<br>
fontWeight X
<br>
<br>

### The BEM Naming Convention

***hyphens for blocks double underscores for elements and double hyphens for modifiers.***

Teams have different approches to writing CSS selectors (hyphen delimiters / BEM - more structured naming convention)
<br>
<br>
CSS naming conventions solves 3 problems
<br>
1. Know what a selector does, just by looking at its name
2. have an idea of where a selector can be used, jusy by looking at it
3. know the relationships between class names, by looking at them

<br>
e.g.
<br>

``` .nav--secondary{ ...}```
<br>
``` .nav__header { ...} ```
 

---
### CSS? 
- It's difficult to maintain. But should keep stylesheets mainainable is important.
- keep code transparent, sane, and readable;
- keep stylesheets scalable.


Syntax and Formatting

code will always look and feel familiar to all members of the team.