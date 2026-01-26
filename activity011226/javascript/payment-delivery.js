// payment-delivery.js
// Handles the payment and delivery form submission

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('paymentDeliveryForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const payment = this.payment.value;
            const delivery = this.delivery.value;
            // Generate a fake transaction ID for demo
            const txn = Math.floor(Math.random() * 1e8);
            window.location.href = `transaction-confirmation.html?txn=${txn}&pay=${encodeURIComponent(payment)}&delivery=${encodeURIComponent(delivery)}`;
        });
    }
});
