<?php
$path = array(
    'en-US' => 'english',
    // etc
);
$accepts = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
if (in_array($accepts[0], $path)) {  // if path exists for language then redirect to path, else redirect to default path (english)
    header('Location: http://www.example.com/' . $path[$accepts[0]] . '/index.html');
} else {
    header('Location: http://www.example.com/english/index.html');
}
?>
