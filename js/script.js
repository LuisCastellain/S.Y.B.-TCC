function abrirModal(dia) {
    console.log('Abrindo modal para o dia:', dia);
    document.getElementById('modal-dia').innerText = dia;
    document.getElementById('input-dia').value = dia;

    fetch('php/read.php?dia=' + dia)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById('form-evento').action = 'php/update.php';
                document.getElementById('input-id').value = data.id;
                document.getElementById('input-compromisso').value = data.compromisso;
                document.getElementById('input-horario').value = data.horario;
                document.getElementById('input-prioridade').value = data.prioridade;
                document.getElementById('btn-excluir').style.display = 'inline';
            } else {
                document.getElementById('form-evento').action = 'php/create.php';
                document.getElementById('input-id').value = '';
                document.getElementById('input-compromisso').value = '';
                document.getElementById('input-horario').value = '';
                document.getElementById('input-prioridade').value = 'alta';
                document.getElementById('btn-excluir').style.display = 'none';
            }
            document.getElementById('modal').style.display = 'block';
        });
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function deletarEvento() {
    const id = document.getElementById('input-id').value;
    if (confirm('Deseja excluir este evento?')) {
        window.location.href = 'php/delete.php?id=' + id;
    }
}