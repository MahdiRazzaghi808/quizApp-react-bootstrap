import Swal from 'sweetalert2'


export const alert = (correct, falseQ, score) => {
    Swal.fire({
        title: 'پایان',
        icon: 'info',
        html: `
            <p>تعداد پاسخ صحیح : ${correct}</p>
            <p>تعداد پاسخ نادرست : ${falseQ}</p>
            <p>امتیاز شما از این آزمون :   <span style="direction:ltr; unicode-bidi: bidi-override">${(score).toFixed(2)}</span></p>
        `,
        confirmButtonText: 'تایید',
        showCloseButton: true
    })
}

