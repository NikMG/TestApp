<?php
$title = $_POST['title'];
$cat = $_POST['choose_cat'];
$num = $_POST['fee'];
$isValid_t = false;
$isValid_f = false;
$isValid_c = false;
$isValid_n = false;
$FormatNum = number_format($num, 2);
$File = $_FILES['logo']['name'];
$FileTempName = $_FILES['logo']['tmp_name'];
$targetPath = './upload/'.$File;
$FileName = trim(strip_tags($File));
$Ext = pathinfo($FileName, PATHINFO_EXTENSION);
$AllowedTypes = array("jpg", "png");

$pattern = '/^[0-9.]{1,50}$/';
$pattern1 = '/^[0-9.£]{1,50}$/';

if(empty($title)){
    $info_title = "Please provide a name for your quiz";
    $class_title = true;
    $isValid_t= false;
}else{
    $isValid_t= true;
}
foreach ($AllowedTypes as $i) {
    if($Ext == $i){
       $isValid_f= true;
       move_uploaded_file($FileTempName, $targetPath);
        break;
    }else{
        $isValid_f= false;
    }
}

if(empty($cat)){
    $info_cat = "Please select a category";
    $class_cat = true;
    $isValid_c = false;
}else{
    $isValid_c = true;
}

if(preg_match($pattern, $num) && !empty($num) && $num >= 5){
    $info_num = "£".$FormatNum;
    $isValid_n = true;
}else if(!preg_match($pattern1, $num) | empty($num) | $num < 5){
    $info_num = "£"."0.00";
    $isValid_n = false;
}else{
    $isValid_n = true;
}
if($isValid_t && $isValid_f && $isValid_c && $isValid_n){
    header('HTTP/1.1 307 Temporary Redirect');
    header('Location:thanks.php');
}



    include('index.php');

?>