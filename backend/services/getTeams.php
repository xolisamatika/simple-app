<?php

require '../classes/TeamRepository.php';

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
echo ")]}'\n";
$teams = TeamRepository::getTeams();

echo json_encode($teams);

?>
