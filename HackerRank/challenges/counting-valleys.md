#counting-valleys

##js
```js
	// Complete the countingValleys function below.
	// n = 8; s = 'UDDDUDUU';
	function countingValleys(n, s) {
	    let seaLevel = 0;
	    let currLevel = 0;
	    let valleys = 0;
	    
	    s = s.split('');
	    for (let i = 0; i < s.length; i++) {
	        //update the current level
	        if (s[i] === 'U') {
	            currLevel += 1;
	            if (currLevel == 0) {
	                valleys += 1;
	            }
	        } else {
	            currLevel -= 1;
	        }
	        
	        
	    }
	    
	    return valleys;
	}
```

##python
```py
	#! n,s = 8, 'UDDDUDUU'
	def countingValleys(n, steps):
  	level, numOfValley = 0, 0
  
  	for step in steps:
	    if step == 'U':
	    	level += 1
	    	if level == 0: numOfValley += 1
	    elif step == 'D': level -= 1

	return numOfValley
```

##php
```php
	// $n = 8; $s = 'UDDDUDUU';
	function countingValleys($n, $s) {
	    $seaLevel = 0;
	    $currLevel = 0;
	    $valleys = 0;
	    
	    $s = str_split($s);

	    for ($i = 0; $i < count($s); $i++) {
	        //update the current level
	        if ($s[$i] === 'U') {
	            $currLevel += 1;
	            if ($currLevel == 0) {
	                $valleys += 1;
	            }
	        } else {
	            $currLevel -= 1;
	        }
	        
	        
	    }
	    
	    return $valleys;
	}
```
