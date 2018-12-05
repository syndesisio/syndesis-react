export const FormData = {
  BasicForm: {
    properties: {
      clientSecret: {
        componentProperty: true,
        deprecated: false,
        description: 'Client Secret received from Concur upon registration.',
        displayName: 'Client Secret',
        group: 'producer',
        javaType: 'java.lang.String',
        kind: 'property',
        label: 'producer',
        required: true,
        secret: true,
        type: 'string',
        tags: ['oauth-client-secret'],
        order: 3,
      },
      authorizationEndpoint: {
        componentProperty: true,
        defaultValue: 'https://us.api.concursolutions.com/oauth2/v0/authorize',
        deprecated: false,
        description:
          'Authorization URL consists of base URL and ends with <code>/authorize</code>. Base URL differs based on geolocation and should be received from Concur upon registration.',
        displayName: 'Authorization URL',
        group: 'producer',
        javaType: 'java.lang.String',
        kind: 'property',
        label: 'producer',
        required: true,
        secret: false,
        type: 'string',
        tags: ['oauth-authorization-url'],
        order: 6,
      },
      oauthScopes: {
        componentProperty: true,
        defaultValue:
          'ATTEND CONFIG CONREQ ERECPT EVS EXPRPT CCARD BANK EXTRCT FISVC FOP GHOST IMAGE INSGHT INVPMT INVPO INVTV INVVEN ITINER JOBLOG LIST MTNG NOTIF PAYBAT RCTIMG SUPSVC TAXINV TRVPRF PASSV EMERG TSAI TMCSP MEDIC UNUTX TRVPTS TRVREQ TWS USER COMPANY',
        deprecated: false,
        description:
          'Scopes required as a list of space-delimited, case-sensitive strings. Scopes limit access and do not grant any additional permission beyond that which the user already has. Consult the Concur API documentation on the available Scopes.',
        displayName: 'Scopes',
        labelHint:
          'Defines what the access token can do and what resources it can access.',
        group: 'producer',
        javaType: 'java.lang.String',
        kind: 'property',
        label: 'producer',
        required: true,
        secret: false,
        type: 'string',
        tags: ['oauth-scope'],
        order: 8,
      },
      // checkCertificates: {
      //   type: 'boolean',
      //   displayName: 'Check Certificates',
      //   controlHint: 'Enable/Disable Certificate Checks',
      // },
      // int: {
      //   type: 'int',
      //   displayName: 'Port',
      //   labelHint: 'FTP Port',
      // },
      // connectTimeout: {
      //   type: 'integer',
      //   displayName: 'Connect Timeout',
      //   defaultValue: 10000,
      //   labelHint: 'This is a integer input',
      // },
      // deliveryPersistent: {
      //   type: 'checkbox',
      //   displayName: 'Persistent',
      //   // tooltip: 'Message delivery is guaranteed when Persistent is selected.'
      // },
      // uploadApiFile: {
      //   type: 'radio',
      //   displayName: 'Upload an OpenAPI file',
      // }
    },
  },
  // CustomControls: {
  //   properties: {
  //     duration: {
  //       type: 'duration',
  //       displayName: 'Duration',
  //       description: 'This is a duration input',
  //     }
  //   },
  // },
  NativeControls: {
    properties: {
      // checkbox: {
      //   type: 'checkbox',
      //   displayName: 'Checkbox',
      //   description: 'This is a checkbox input',
      // },
      // color: {
      //   type: 'color',
      //   displayName: 'Color',
      //   description: 'This is a color input',
      // },
      // date: {
      //   type: 'date',
      //   displayName: 'Date',
      //   description: 'This is a date input',
      // },
      // dateTimeLocal: {
      //   type: 'datetime-local',
      //   displayName: 'DateTime-Local',
      //   description: 'This is a datetime-local input',
      // },
      // email: {
      //   type: 'email',
      //   displayName: 'Email',
      //   description: 'This is an email input',
      // },
      // file: {
      //   type: 'file',
      //   displayName: 'File',
      //   description: 'This is a file input',
      // },
      hidden: {
        type: 'hidden',
        displayName: 'Hidden',
        description: 'This is a hidden input',
        defaultValue: 'a hidden token',
      },
      // month: {
      //   type: 'month',
      //   displayName: 'Month',
      //   description: 'This is a month input',
      // },
      password: {
        type: 'password',
        displayName: 'Password',
        description: 'This is a password input',
        defaultValue: 'admin',
      },
      // range: {
      //   type: 'range',
      //   displayName: 'Range',
      //   description: 'This is a range input',
      // },
      // select: {
      //   type: 'select',
      //   displayName: 'Select',
      //   description: 'This is a select input',
      // },
      // tel: {
      //   type: 'tel',
      //   displayName: 'Tel',
      //   description: 'This is a tel input',
      // },
      // url: {
      //   type: 'url',
      //   displayName: 'URL',
      //   description: 'This is a url input',
      // },
      // week: {
      //   type: 'week',
      //   displayName: 'Week',
      //   description: 'This is a week input',
      // },
      // search: {
      //   type: 'search',
      //   displayName: 'Search',
      //   description: 'This is a search input',
      // },
      textarea: {
        type: 'textarea',
        displayName: 'Textarea',
        description: 'This is a textarea input',
        placeholder: 'Have your say',
      },
      // time: {
      //   type: 'time',
      //   displayName: 'Time',
      //   description: 'This is a time input',
      // }
    },
  },
};
