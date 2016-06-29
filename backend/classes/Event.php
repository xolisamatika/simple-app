<?php
class Event {
	public $name;
	public $users;
	public $teams;
	public function __construct($name = ' ',$teams = array(), $users = array()) {
		$this->name = $name;
		$this->teams = $teams;
		$this->users = $users;
	}
	public static function getAllEvents() {
		$sql = "SELECT * FROM events ;";
		$tournaments = array ();
		$instance = DB_class::getInstance ();
		$connection = $instance->getConnection ();
		$result = $connection->query ( $sql );
		if ($result === false)
			echo "Error: " . $sql . "<br>" . $connection->error;
		if ($result->num_rows > 0) {
			while ( $row = $result->fetch_assoc () ) {
				 array_push ( $tournaments, new Team ( $row ["name"]) ) ;
			}
		} else {
			echo "No events found.";
		}
		
		return $tournaments;
	}
}
?>
