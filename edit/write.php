<?
$json = file_get_contents('php://input');
if (is_null($json) || $json == "") return error_log("Unable to read post request!");

$data = json_decode($json);
$textContent = $data->text;

$file = fopen("../index.md", "w") or die("Unable to open file!");
fwrite($file, $textContent);
fclose($file);
?>