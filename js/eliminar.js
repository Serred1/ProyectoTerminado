$(document).ready(function() {
    $('.eliminar-usuario').on('click', function() {
        let usuarioId = $(this).data('id');

        Swal.fire({
            title: '¿Estás seguro de que deseas eliminar este usuario?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: '../controlador/eliminar_usuario.php',
                    type: 'POST',
                    data: {
                        eliminar: true,
                        id_usuario: usuarioId
                    },
                    success: function(response) {
                        if (response === 'success') {
                            Swal.fire({
                                title: 'Usuario eliminado con éxito',
                                icon: 'success'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    location.reload();
                                }
                            });
                        } else {
                            Swal.fire({
                                title: 'Error al eliminar el usuario',
                                icon: 'error'
                            });
                        }
                    },
                    error: function() {
                        Swal.fire({
                            title: 'Error al procesar la solicitud',
                            icon: 'error'
                        });
                    }
                });
            }
        });
    });
});