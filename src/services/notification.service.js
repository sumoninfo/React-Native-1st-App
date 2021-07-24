import Swal from 'sweetalert2';
//Toast
const Toast               = Swal.mixin({
    toast            : true,
    position         : 'top-end',
    showConfirmButton: false,
    timer            : 3000,
    timerProgressBar : true,
    didOpen          : (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
const NotificationService = {
    info(title = "Info", text = "This is info") {
        // this.$toastr('info', text, title)
        Toast.fire({
            icon : 'info',
            title: title,
        });
    },

    success(title = "Success", text = "This is info") {
        // this.$toastr('success', text, title)
        Toast.fire({
            icon : 'success',
            title: title,
        });
    },

    error(title = "Error", text = "This is info",) {
        // this.$toastr('error', text, title)
        Toast.fire({
            icon : 'error',
            title: title,
        });
    },

}

export default NotificationService;
