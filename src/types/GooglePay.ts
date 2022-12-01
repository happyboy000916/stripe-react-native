export type PresentParams = PresentType & {
  clientSecret: string;
};

export type PresentType =
  | {
      /*
       * Present Google Pay to collect customer payment details and use it to confirm the
       * [SetupIntent] represented by [clientSecret].
       */
      forSetupIntent?: true;
      /*
       * The Google Pay API requires a [currencyCode](https://developers.google.com/pay/api/android/reference/request-objects#TransactionInfo).
       * [currencyCode] is required even though the SetupIntent API does not require it.
       */
      currencyCode: string;
    }
  | {
      /*
       * Present Google Pay to collect customer payment details and use it to confirm the
       * [PaymentIntent] represented by [clientSecret].
       */
      forSetupIntent?: false;
    };

export type InitParams = {
  merchantName: string;
  countryCode: string;
  /**
   * Billing address collection configuration.
   */
  billingAddressConfig?: BillingAddressConfig;
  /**
   * Flag to indicate whether Google Pay collect the customer's email address.
   *
   * Default to `false`.
   */
  isEmailRequired?: boolean;
} & IsSupportedParams;

export type IsSupportedParams = {
  /** Set to true to run in a test environment with relaxed application / merchant requirements. This environment is suggested for early development and for easily testing SDK. Defaults to false. */
  testEnv?: boolean;
  /**
   * If `true`, Google Pay is considered ready if the customer's Google Pay wallet
   * has an existing payment method. Defaults to false.
   */
  existingPaymentMethodRequired?: boolean;
};

export interface BillingAddressConfig {
  isRequired?: boolean;
  /**
   * Billing address format required to complete the transaction.
   */
  format?: 'FULL' | 'MIN';
  /**
   * Set to true if a phone number is required to process the transaction.
   */
  isPhoneNumberRequired?: boolean;
}

export interface CreatePaymentMethodParams {
  /*
   * ISO 4217 alphabetic currency code. (e.g. "USD", "EUR")
   */
  currencyCode: string;
  /*
   * Amount intended to be collected. A positive integer representing how much to
   * charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100,
   * a zero-decimal currency).
   */
  amount: number;
}
