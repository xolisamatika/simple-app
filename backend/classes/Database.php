<?php

class DB_class {

	private static $instance = null;
	private $connection;
	private function __construct() 
	{
		// Load configuration as an array. Use the actual location of your configuration file
		$config = parse_ini_file ( 'config.ini' );
		$this->connection = mysqli_connect ( $config ['hostname'], $config ['username'], $config ['password'], $config ['dbname'] );
	}

	public static function getInstance() 
	{
		if (! self::$instance) {
			self::$instance = new DB_class ();
		}
		
		return self::$instance;
	}

	public function getConnection() 
	{
		return $this->connection;
	}


	/**
	*Description :send a query to the database
	* @param string query
	* @return true/false
	*/
	public function insert($sql)
	{
		//Create connection
		$conn = $this->connection;
		if ($conn->query($sql) === TRUE) 
		{
			 $res['Results'] = 'Success';

			return [$res];
		} 
		else 
		{  
		    //$error = ['Results'=>'','ErrorMessage'=>"Error: " . $sql . "<br>" . $conn->error];
		    $error['Results'] = 'Error';
		    $error['Query'] = $sql;
		    $error['ErrorMessage'] = $conn->error;
			return [$error];
		}
	}

	/**
	* Description :send a query to the database
	* @param string query
	* @return array 
	*/
	public function select($sql)
	{
		$conn = $this->connection;
		$result = $conn->query($sql);
		$data = array();
		if ($result->num_rows > 0) 
		{
		    while($row = $result->fetch_assoc()) 
		    {
		    	$data[] =$row; //insert data into an array
		    }
		}
		return $data;
	}

}
?>
