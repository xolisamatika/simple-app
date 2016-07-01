<?php
class Team {

	public $name;
	public $iso_code;

	public function __construct($name = ' ', $iso_code = '') 
	{
		$this->name = $name;
		$this->iso_code = $iso_code;
	}

	public static function getAllTeams() 
	{
		$sql = "SELECT * FROM teams ;";
		$teams = array ();
		$instance = DB_class::getInstance ();
		$results = $instance->select($sql);
		foreach ($results as $row) {
			array_push ( $teams, new Team ( $row ["name"], $row ["iso_code"] ) ) ;
		}
		return $teams;
	}

	function addTeam($name, $iso_code) 
	{
		$sql= "INSERT INTO teams (name,iso_code) VALUES('$name','$iso_code')";
		$instance = DB_class::getInstance ();
		return $instance->insert($sql);
	}

}
?>