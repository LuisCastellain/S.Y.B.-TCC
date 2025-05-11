<?php require 'php/config.php'; ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="navbar">
        <span class="brand">S.Y.B. - Save Your Business</span>
        <span class="title">Agenda</span>
    </header>

    <h1>Agenda - Maio</h1>
    <div class="calendario">
        <?php for ($dia = 1; $dia <= 31; $dia++): ?>
            <div class="dia">
                <span><?php echo $dia; ?></span>
                <span class="botao-add" onclick="abrirModal(<?php echo $dia; ?>)">+</span>
            </div>
        <?php endfor; ?>
    </div>

    <div id="modal" class="modal">
        <h2>Dia <span id="modal-dia"></span></h2>
        <form id="form-evento" method="POST" action="php/create.php">
            <input type="hidden" name="id" id="input-id">
            <input type="hidden" name="dia" id="input-dia">
            <input type="text" name="compromisso" id="input-compromisso" placeholder="Compromisso" required>
            <input type="time" name="horario" id="input-horario" required>
            <select name="prioridade" id="input-prioridade">
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
            </select>
            <button type="submit" id="btn-salvar">Salvar</button>
            <button type="button" id="btn-excluir" style="display: none;" onclick="deletarEvento()">Excluir</button>
            <button type="button" onclick="fecharModal()">Fechar</button>
        </form>
    </div>

    <script src="js/script.js"></script>
</body>
</html>