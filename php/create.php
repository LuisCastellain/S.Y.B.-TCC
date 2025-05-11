<?php
require 'config.php';
$dia = $_POST['dia'];
$compromisso = $_POST['compromisso'];
$horario = $_POST['horario'];
$prioridade = $_POST['prioridade'];
$stmt = $pdo->prepare("INSERT INTO eventos (dia, mes, compromisso, horario, prioridade) VALUES (?, 'Maio', ?, ?, ?)");
$stmt->execute([$dia, $compromisso, $horario, $prioridade]);
header('Location: ../index.php');
exit();
?>