<?php
if(isset($_POST['field1'])) {
    $data = $_POST['field1'] ."\r\n";
    $ret = file_put_contents('/usr/cs/grad/master/naustin/public_html/answers/project.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die("There was an error saving your response");
    }
    else {
        readfile("index.html");
    }
}
else {
   die('no post data to process');
}
?>