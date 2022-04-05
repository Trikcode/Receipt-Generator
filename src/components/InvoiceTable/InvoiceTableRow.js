import React from "react";
import "layouts/Invoice/Invoice.css";

function InvoiceTableHeader() {
  return (
    <div className="container-invoice">
      <h4>Item Description</h4>
      <h4>Qty</h4>
      <h4>@</h4>
      <h4>Amount</h4>
    </div>
  );
}

export default InvoiceTableHeader;
