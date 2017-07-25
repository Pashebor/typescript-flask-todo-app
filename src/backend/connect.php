<?php

$server_name = 'localhost';
$user = 'root';
$password = 'ltvmzyjd90';
$db_name = 'db_todo';

$connect = new mysqli($server_name, $user, $password, $db_name);

if ($connect -> connect_error) {
    die('Ошибка соеденения: '.$connect -> connect_error);
}