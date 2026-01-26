// transaction-confirmation.js
// Populates the e-receipt fields from URL query parameters
function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name) || '';
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('txnId').textContent = getParam('txn') || Math.floor(Math.random() * 1e8);
    document.getElementById('txnDate').textContent = new Date().toLocaleString();
    document.getElementById('payMethod').textContent = getParam('pay') || 'N/A';    
    document.getElementById('deliveryOpt').textContent = getParam('delivery') || 'N/A';
});