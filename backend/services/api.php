<?php
require '../classes/TeamRepository.php';

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

echo ")]}'\n";
if ($_SERVER['REQUEST_METHOD'] === 'GET') 
{
  switch($_GET['get']){
    case 'randoms': getRandoms(); break;
    case 'teams': getTeams(); break;
    case 'users': getUsers(); break;
    case 'userByUsername': getUser(); break;
    case 'addteam': addTeam(); break;
    default: break;
  }
}
else{

  switch($_POST['post']){
    case 'addteam': addTeam(); break;
    default: break;
  }
}

function getTeams()
{
  $teams = TeamRepository::getTeams();
  echo json_encode($teams);

}

function addTeam(){
  if ((!isset($_GET['name'])) && (!is_string($_GET['name']))) {
    $error['errorMessage'] = 'Team name invalid.';
  //  echo json_encode($error);
    return;
  }

  $iso_code = $_GET['iso_code'];
  $name = $_GET['name'];
  $res = TeamRepository::addTeam($name, $iso_code);
 // echo json_encode($res);

}
function getUsers(){
  $users = TeamRepository::getUsers();
  echo json_encode($users);
}

function getUser()
{
  if ((!isset($_GET['username'])) && (!is_string($_GET['username']))) {
    $error['errorMessage'] = 'Username invalid.';
    echo json_encode($error);
    return;
  }
  $user = TeamRepository::getUser($_GET['username']);
  echo json_encode($user);
}

function getRandoms()
{
  echo json_encode(TeamRepository::getRandom());
}
?>					
