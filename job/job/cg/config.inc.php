<?

	$host = "localhost";				// ��˹� Host
	$userroot ="amecom_std";					// user �����ҹ mysql
	$pwdroot="vqJZQs5g";					// password mysql
	$dbName = "amecom_std";			// Database �����ҹ
	$siteurl="http://std.yimth.com/";
	$conn = mysql_connect($host , $userroot, $pwdroot) or die ("cannot connect to database") ;
	mysql_query("SET NAMES utf8", $conn) ;
	mysql_select_db("$dbName") or die ("cannot connect to database") ;	

?>