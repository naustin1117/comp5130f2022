<?php
if(isset($_POST['field1']) && isset($_POST['field2'])) {
    $data = $_POST['field1'] . " " . $_POST['field2'] . '-' . $_POST['field3'] ."\r\n";
    $ret = file_put_contents('/usr/cs/grad/master/naustin/public_html/answers/mytext.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
       readfile("contact.html");
    }
}
else {
   die('no post data to process');
}
?>