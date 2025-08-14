<?php

if(isset($_GET['page'])){
    $page=$_GET['page'];
    if ($page== "home") {
         include("pages/home.php");
    }elseif ($page== "about") {
        include("pages/about.php");
    }elseif ($page== "book") {
         include("pages/book.php");
    }elseif ($page== "menu") {
         include("pages/menu.php");
    } }else{
     include("page/home.php");
 }
 







?>