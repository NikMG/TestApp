<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thank you!</title>
    <link rel="stylesheet" href="css/thankyou.css">
</head>
<body>
    <div class="container one">
        <div class="detail">Quiz created, thank you!</div>
        <section>
            <div class="two">
                <section>
                <div class="log">
               <img src="img/form.jpg" alt="logo" width="78" height="78">
                </div>
                <div class="ttl">
                    <div class="title">
                    <?php echo $_POST['title'] ?>
                    </div>
                    <div class="fe">
                        <section class="fee">
                            Entry Fee:
                        </section>
                    </div>
                </div>
                    <div class="price"><?php echo $_POST['fee'] ?></div>
                    </section>
            </div>
            <div class="three">
                <section class="cat">
                    Quiz category: <div class="categ"><?php echo $_POST['choose_cat'] ?></div>
                </section>
            </div>
        </section>
    </div>



<script type="text/javascript" src="js/main.js"></script>
</body>
</html>