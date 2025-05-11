<?php
require 'config.php';
$dia = $_GET['dia'];
$stmt = $pdo->prepare("SELECT * FROM eventos WHERE dia = ? AND mes = 'Maio'");
$stmt->execute([$dia]);
$evento = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($evento);
?>