<!DOCTYPE html>
<html>
<body>
<h2>ES6 Sets</h2>
<p> Add values to a set:</p>
<p  id="demo"></p>
<script>
//create a set
const letters = new Set();
//values adding to set
letters.add("a");
letters.add("b");
letters.add("c");
//display set.size
document.getElementById("demo").innerHTML = letters.size;
</script>
</body>
