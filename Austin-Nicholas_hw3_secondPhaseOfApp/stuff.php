<?php
$action = $_GET["action"];
$myText = $_POST["mytext"];

if($action = "save") {
    $targetFolder = "~/public_html/answers/";
    file_put_contents($targetFolder."mytext.txt", $myText);
}
?>
<html>
         <head>
                 <link href="styles.css"  rel="stylesheet">
                 <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
         </head>
         <body>
                <div id="nav-placeholder">

                </div>
                <script>
                        $(function(){
                                $("#nav-placeholder").load("nav.html");
                        });
                </script>   
                <form action="?action=save" name="myform" method="post">
                        <input type=text name="mytext">
                        <input type="submit" value="save">
                </form>
         </body>
 </html> 