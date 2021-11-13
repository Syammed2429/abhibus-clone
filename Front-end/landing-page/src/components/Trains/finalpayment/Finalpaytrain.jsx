

import './finalpaytrain.css';
const Finalpaytrain = ({dataFinalMover})=>{
    return(
        <>
        <div style={{marginTop:"100px"}}>
        <div class="container">
  <div id="Checkout" class="inline">
      <h1>Pay Invoice</h1>
      <div class="card-row">
          <span class="visa"></span>
          <span class="mastercard"></span>
          <span class="amex"></span>
          <span class="discover"></span>
      </div>
      <form>
          <div class="form-group">
              <label for="PaymentAmount">Payment amount</label>
              <div class="amount-placeholder">
                  <span>₹</span>
                  <span>{dataFinalMover}</span>
              </div>
          </div>
          <div class="form-group">
              <label or="NameOnCard">Name on card</label>
              <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
          </div>
          <div class="form-group">
              <label for="CreditCardNumber">Card number</label>
              <input id="CreditCardNumber" class="null card-image form-control" type="text"></input>
          </div>
          <div class="expiry-date-group form-group">
              <label for="ExpiryDate">Expiry date</label>
              <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
          </div>
          <div class="security-code-group form-group">
              <label for="SecurityCode">Security code</label>
              <div class="input-container" >
                  <input id="SecurityCode" class="form-control" type="text" ></input>
                  <i id="cvc" class="fa fa-question-circle"></i>
              </div>
              <div class="cvc-preview-container two-card hide">
                  <div class="amex-cvc-preview"></div>
                  <div class="visa-mc-dis-cvc-preview"></div>
              </div>
          </div>
          <div class="zip-code-group form-group">
              <label for="ZIPCode">ZIP/Postal code</label>
              <div class="input-container">
                  <input id="ZIPCode" class="form-control" type="text" maxlength="10"></input>
                  <a ><i class="fa fa-question-circle"></i></a>
              </div>
          </div>
          <button onClick={()=>{
            setTimeout(()=>{
              alert("Payment Successful")
              window.location.reload();
            },2000)
            
          }} class="btn btn-block btn-success submit-button" type="submit">
              <span class="submit-button-lock"></span>
              <span class="align-middle">Pay ₹{dataFinalMover}</span>
          </button>
      </form>
  </div>
</div>
</div>
        </>
    )
}
export {Finalpaytrain}