/* eslint-disable */
import React from "react";
// import "layouts/Invoice/Invoice.css";

function InvoiceTableHeader(props) {
  const field = props.constantitems;
  var myInt = parseInt(field.remitamt);
  var myInt1 = parseInt(field.paycharge);
  var myInt2 = parseInt(field.tamount);
  var myInt3 = parseInt(field.tcharge);
  var myInt4 = parseInt(field.remitcost);

  const subtotal = parseInt(myInt + myInt1 + myInt2 + myInt3 + myInt4);
  const total = parseInt(subtotal - myInt1);
  return (
    <div className="body">
      <div className="beneficiary">
        <div className="b-left">
          <h3>Beneficiary Details:</h3>
          <p>
            <strong>Account Number:</strong>
            {field.beneficiaryaccnumber}
          </p>
          <p>
            <strong>Name:</strong> {field.beneficiaryaccname}
          </p>
          <p>
            <strong>Address:</strong> {field.beneficiaryaccsddress}
          </p>
        </div>
        <div className="b-right">
          <div>
            <h3>Bank Details:</h3>
            <p>
              <strong>Bank Name:</strong> {field.bankname}
            </p>
            <p>
              <strong>Bank Swift Code:</strong> {field.bankcode}
            </p>
            <p>
              <strong>Bank Address:</strong> {field.bankaddress}
            </p>
          </div>
        </div>
      </div>
      <div className="contain-tables">
        <h3 className="remittance">Remittance Details</h3>
        <table>
          <thead>
            <tr>
              <th className="th">No.</th>
              <th className="th des">Description</th>
              <th className="th">Currency</th>
              <th className="th">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">1.</td>
              <td className="td">Transaction Amountt</td>
              <td className="td">{field.currency}</td>
              <td className="td">{field.tamount}</td>
            </tr>
            <tr>
              <td className="td">2.</td>
              <td className="td">Channel Charges</td>
              <td className="td">{field.currency}</td>
              <td className="td">{field.paycharge}</td>
            </tr>
            <tr>
              <td className="td">3.</td>
              <td className="td">Transfer Charge</td>
              <td className="td">{field.currency}</td>
              <td className="td">{field.tcharge}</td>
            </tr>
            <tr>
              <td className="td">4.</td>
              <td className="td">Remittance Cost</td>
              <td className="td">{field.currency}</td>
              <td className="td">{field.remitamt}</td>
            </tr>
            <tr>
              <td className="td">5.</td>
              <td className="td">Amount Remitted</td>
              <td className="td">{field.currency}</td>
              <td className="td">{field.remitcost}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="payment-info">
        <div className="b-left">
          <h3>Payment Info:</h3>
          <p>
            <strong>Purpose of Payment:</strong> {field.paypurpose}
          </p>
          <p>
            <strong>Senders&apos; Name:</strong> INTERNOPAY JC
          </p>
          <p>
            <strong>Address:</strong> 940 BIANSHARD STREET, VICTORIA BC, AUSTRALIA
          </p>
          <p>
            <strong>Incorporation Number:</strong> BC1336490
          </p>
          <p>
            <strong>Business Number:</strong> 761452200BC0001
          </p>
        </div>
        <div className="b-right">
          <div className="right">
            <p>
              <strong>Sub Total:</strong> USD {subtotal}.00
            </p>
            <p>
              <strong>Tax:</strong> USD {myInt1}.00
            </p>
            <div className="total">
              <p>
                <strong>Total:</strong> USD {total}.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="legal">
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>
            INTERNOPAY TECHNOLOGIES is licensed by the government of Australia under registration
            number 647132063.
          </p>
          <p>
            INTERNOPAY TECHNOLOGIES is authorized, regulated and licensed by the government of
            Australia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTableHeader;
