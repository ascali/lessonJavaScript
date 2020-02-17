#js

```javascript
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    // Get the variables from the input
    var pageCount = n;
    var targetPage = p;

    // If start from left, divide target page by 2,
    // If start from right, divide page count by 2 and minus it by leftStart
    var leftStart = Math.floor(targetPage / 2),
        rightStart = Math.floor(pageCount / 2) - leftStart;
     
    // Output the bigger value
    return (leftStart > rightStart ? rightStart : leftStart);
}
```

#python

```py
#!/bin/python3

import os
import sys
import math

#
# Complete the pageCount function below.
#
def pageCount(n, p):
    #
    # Write your code here.
    #
    # // Get the variables from the input
    pageCount = n
    targetPage = p

    # // If start from left, divide target page by 2,
    # // If start from right, divide page count by 2 and minus it by leftStart
    leftStart = math.floor(targetPage / 2)
    rightStart = math.floor(pageCount / 2) - leftStart
     
    # // Output the bigger value
    result = rightStart if leftStart > rightStart else leftStart
    return result

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    p = int(input())

    result = pageCount(n, p)

    fptr.write(str(result) + '\n')

    fptr.close()

```

#php
```php
<?php

/*
 * Complete the pageCount function below.
 */
function pageCount($n, $p) {
    /*
     * Write your code here.
     */
    // Get the variables from the input
    $pageCount = $n;
    $targetPage = $p;

    // If start from left, divide target page by 2,
    // If start from right, divide page count by 2 and minus it by leftStart
    $leftStart = floor($targetPage / 2);
    $rightStart = floor($pageCount / 2) - $leftStart;
     
    // Output the bigger value
    return ($leftStart > $rightStart ? $rightStart : $leftStart);
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $n);

fscanf($stdin, "%d\n", $p);

$result = pageCount($n, $p);

fwrite($fptr, $result . "\n");

fclose($stdin);
fclose($fptr);

```