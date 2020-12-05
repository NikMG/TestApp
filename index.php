<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Start Page</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <form enctype="multipart/form-data" class="validForm" action="check.php" method="POST">
        <section>
            <div class="container one">
                <div class="detail">Your quiz details:</div>
                    <div class="spacer">
                        <label>Quiz title<br>
                            <input class="title field" minlength="5" name="title" type="text" <?php if(isset($class_title) && $class_title == true){ echo "style='border-color: red;' "; } ?>placeholder="Enter quiz title"/><br>
                            <small>The title can't be longer than 50 chars.</small><br>
                            <div class="error" style="margin-top: 18px;"><?php if(isset($info_title)){ echo $info_title; } ?></div>
                        </label>
                    </div>
                    <label>Quiz logo<br>
                        <div class="fake_input">
                            <input class="logo field" name="logo" type="file"/>
                            <div class="fake_button"><input type="button" class="fake_button_input" value="Uploa d c ustom lo go"/></div>
                            <div class="fake"><input type="text" readonly class="fake_file_input"/></div>
                            <small id="file">.JPG, .PNG only</small>
                            <div class="error"></div>
                        </div>
                    </label>
            </div>
            <div class="container two">
                <div class="detail">Select your quiz topic:</div>
                    <div class="spacer">
                        <label>Category<br>
                            <input class="cat field" list="category" <?php if(isset($class_cat) && $class_cat == true){ echo "style='border-color: red;' "; } ?> type="text" id="choose_cat" name="choose_cat" placeholder="Choose category"/><br>
                            <datalist id="category">
                                <option>buisness</option>
                                <option>manadgement</option>
                                <option>opportunity</option>
                                <option>relax</option>
                                <option>experience</option>
                            </datalist>
                            <div class="error" style="margin-top: 12px;"><?php if(isset($info_cat)){ echo $info_cat; } ?></div>
                        </label>
                    </div>
                    <label>Quiz entry fee<br>
                        <input class="num field" name="fee" type="text" placeholder="Enter your fee" value="<?php if(isset($info_num)){ echo $info_num; } ?>" /><br>
                        <small>Min.entry fee is &#163;5.00.</small>
                    </label>
            </div>
        </section>
        <button type="submit" class="validBtn">Proceed</button>
    </form>

<script type="text/javascript" src="js/main.js"></script>
</body>
</html>