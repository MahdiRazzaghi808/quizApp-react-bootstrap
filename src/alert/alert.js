import Swal from 'sweetalert2'


export const alert = (correct, falseQ, score) => {
    Swal.fire({
        title: 'پایان',
        icon: 'info',
        html: `
            <p>تعداد پاسخ صحیح : ${correct}</p>
            <p>تعداد پاسخ نادرست : ${falseQ}</p>
            <p>امتیاز شما از این آزمون : ${(score).toFixed(2)}</p>
        `,
        confirmButtonText: 'تایید',
        showCloseButton: true
    })
}

