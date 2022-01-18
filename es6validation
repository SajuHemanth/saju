<!DOCTYPE html>
<html>
 
<head>
    <title>Basic Validation</title>
    <script>
        function validateBasic() {
            var x = document.Basic.name.value;
            if (x == "") {
                document.getElementById("d1").innerHTML =
                  "Name must be filled out.";
                return false;
              //(optional)by default functions return is true
                return true;
            }
        }
    </script>
</head>
 
<body>
    <center>
        <h1 style="color:green;">knowledgebase</h1>
        <h4>ES6 validation</h4>
        <!-- action store in local storage -->
        <form name="Basic" action="#"
              onsubmit="return validateBasic()">
            Name:
            <input type="text" name="name">
            <input type="submit" value="Submit">
        </form>
        <p id="d1"></p>
 
    </center>
</body>
 
</html>
