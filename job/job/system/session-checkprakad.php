<?
session_start();
include"../system/web_config.php";
include"config.inc.php";
$sql = "SELECT COUNT( * )  FROM  tb_prakad where userid=".$_SESSION[userID]."";
$result = mysql_query($sql) or die (mysql_error());
$row = mysql_fetch_array($result);
$numparkad = $row["COUNT( * )"];
if($_SESSION[status]=='1'){
if($numparkad>=$numpost_Freemember){
					 					  echo "<script language='javascript'>" ;
			                            echo "alert('��С�Ȣͧ��ҹ�ú�ӹǹ����Ѻ��Ҫԡ����� ���  ".$numpost_Freemember." ��С�� !!!!')" ;
			                            echo "</script>" ;
		                             	echo "<script language='javascript'>javascript:history.go(+2)</script>";
						echo"�к����ѧ�ҷ�ҹ��Ѻ�˹�һ�С�ȷ�����<br/>���ѡ����..... <meta http-equiv=refresh content=1;url=./../agency/panel>";
						  exit;
					 }else{
					 }
}
if($_SESSION[status]=='2'){
$sql_agent = "SELECT *  FROM  agency where member_id=".$_SESSION[userID]."";
$result_agent = mysql_query($sql_agent) or die (mysql_error());
$row_agent = mysql_fetch_array($result_agent);
$num_p =$row_agent[numpost];
$status1=$row_agent[status_member];
if($status1=="agent-non"){
  echo "<script language='javascript'>" ;
			                            echo "alert('ʶҹ� ��ҪԡAgency �ͧ��ҹ�������')" ;
			                            echo "</script>" ;
		                             	echo "<script language='javascript'>javascript:history.go(+2)</script>";
						echo"��سҵԴ��ͼ�������к�<br/>���ѡ����..... <meta http-equiv=refresh content=1;url=./../agency/panel>";
						  exit;
					 }else{
 if($numparkad>=$num_p){
					 					  echo "<script language='javascript'>" ;
			                            echo "alert('��С�Ȣͧ��ҹ�ú�ӹǹ����Ѻ�ྤ�絢ͧ��ҹ ���  ".$num_p." ��С�� !!!!')" ;
			                            echo "</script>" ;
		                             	echo "<script language='javascript'>javascript:history.go(+2)</script>";
						echo"�к����ѧ�ҷ�ҹ��Ѻ�˹�һ�С�ȷ�����<br/>���ѡ����..... <meta http-equiv=refresh content=1;url=./../agency/panel>";
						  exit;
					 }
 }

}else{

}


?>