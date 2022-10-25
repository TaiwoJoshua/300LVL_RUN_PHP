<?php
    session_start();
    ob_start();

    session_destroy();
    header('refresh:2;../../index.php');
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/redeemer's icon.jfif">
    <title>Log Out</title>
<style>
body{ background-color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.loader {
  border: 8px solid black;
  border-radius: 50%;
  border-top: 8px solid white;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: auto;
}
.loader_wrapper{
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 20% auto;
}
.loading_text{
    color: black;
    font-size: 22px;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
</head>
<body>

<div class="loader_wrapper">
    <div class="loader"></div>
    <center><span class="loading_text">Thank you for your services...</span></center>
</div>

</body>
</html>



