<?php
require 'config.php';
$id = $_POST['id'];
$compromisso = $_POST['compromisso'];
$horario = $_POST['horario'];
$prioridade = $_POST['prioridade'];
$stmt = $pdo->prepare("UPDATE eventos SET compromisso = ?, horario = ?, prioridade = ? WHERE id = ?");
$stmt->execute([$compromisso, $horario, $prioridade, $id]);
header('Location: ../index.php');
exit();
?>