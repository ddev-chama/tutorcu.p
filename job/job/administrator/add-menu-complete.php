<?
session_start();
//error_reporting(0);
include"../system/config.inc.php";
include"../system/session-admin.php";
include"../system/function.php";
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
.success-main{width:100%; margin:auto;}
.success{width:300px;height:100px;margin:auto;float:center;font-size:12px;border:solid 1px #CCCCCC;text-align:center;padding:20px;box-shadow:0px 2px 5px #D4D4D4;-moz-box-shadow:0px 2px 5px #D4D4D4;
-webkit-box-shadow:0px 2px 5px #D4D4D4;}
.success-progress{width:150px;height:10px;background:url(../images/loading30.gif) no-repeat;margin:auto}
.success h2{color:#0080C0}
</style>
<?
$action=$_POST[action];
$menu_name=$_POST["menu_name"];
$menu_price=$_POST["menu_price"];
$shop_id=$_GET["shop_id"];
if($action=="save"){	
?>
			<div class="success-main">
			<div class="success">
<h2>เพิ่มร้านอาหาร สำเร็จ</h2>
<div class="success-progress"></div>
<p>ระบบกำลังนำกลับไปสู่หน้าก่อนนั้น กรุณารอสักครู่</p>
			</div></div>

<?
$data = array(  
	"name"=>$menu_name,
	"price"=>$menu_price,
	"shop_id"=>$shop_id,
);   
insert("foods",$data); 
echo"<meta http-equiv=refresh content=5;url=./add-menu.php?shop_id=".$shop_id.">";
exit;
}
?>