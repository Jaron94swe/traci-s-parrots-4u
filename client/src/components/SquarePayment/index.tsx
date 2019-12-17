import React from "react";
import SquarePaymentForm, {
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
} from 'react-square-payment-form'
import 'react-square-payment-form/lib/default.css'
interface MyProps { }
interface MyState {
    errorMessages: any[];
}
class PaymentPage extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props)
        this.state = {
            errorMessages: [],
        }
    }

    cardNonceResponseReceived = (errors: any, nonce: any, cardData: any, buyerVerificationToken: any) => {
        if (errors) {
            this.setState({ errorMessages: errors.map((error: any) => error.message) })
            return
        }

        this.setState({ errorMessages: [] })
        alert("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)
    }

    createVerificationDetails() {
        return {
            amount: '100.00',
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: {
                familyName: "Smith",
                givenName: "John",
                email: "jsmith@example.com",
                country: "GB",
                city: "London",
                addressLines: ["1235 Emperor's Gate"],
                postalCode: "SW7 4JA",
                phone: "020 7946 0532"
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Payment Page</h1>

                <SquarePaymentForm
                    sandbox={true}
                    applicationId={"sandbox-sq0idb-8Uj7Oqxg3K6u0QZE_yDT4A"}
                    locationId={"9DCYA6TRR3GKC"}
                    cardNonceResponseReceived={this.cardNonceResponseReceived}
                    createVerificationDetails={this.createVerificationDetails}

                >

                    <fieldset className="sq-fieldset">
                        <CreditCardNumberInput />
                        <div className="sq-form-third">
                            <CreditCardExpirationDateInput />
                        </div>

                        <div className="sq-form-third">
                            <CreditCardPostalCodeInput />
                        </div>

                        <div className="sq-form-third">
                            <CreditCardCVVInput />
                        </div>
                    </fieldset>

                    <CreditCardSubmitButton>
                        Pay $1.00
  </CreditCardSubmitButton>

                </SquarePaymentForm>

                <div className="sq-error-message">
                    {this.state.errorMessages.map(errorMessage =>
                        <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
                    )}
                </div>

            </div>
        )
    }
}

export default PaymentPage;