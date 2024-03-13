# medjugorje-json

This package provides the messages of Medjugorje as a structured JSON dataset, making it easier for developers to integrate these messages into their digital projects. The goal of `medjugorje-json` is to make as easier as possible to spread the content of the messages, helping to spread the messages to a wider audience.

## Installation

To use `medjugorje-json` in your project, simply add it as a dependency using Yarn:

```bash
yarn add medjugorje-json
```

Npm:

```bash
npm  i medjugorje-json
```


## Usage

After installation, the messages can be imported into your JavaScript or TypeScript project like so:

```javascript
import { medjugorjeMessages } from 'medjugorje-json';

// Example: Log all messages to the console
medjugorjeMessages.forEach((message) => {
  console.log(`${message.date}: ${message.message}`);
});

```

This will give you access to an array of messages, each with a date and message field, which you can then use as needed in your project.

## Contributing

The medjugorje-json project is open to collaboration! We aim to gather all of the Medjugorje messages in as many languages as possible and keep the dataset up to date. Here's how you can help:

- Adding New Messages: If you have access to messages that are not yet included in the dataset, please consider contributing.
- Translations: Help us make the messages accessible to a global audience by adding translations.
- Corrections: If you find any inaccuracies or errors in the messages or translations, let us know so we can correct them.
- To contribute, please submit a pull request or create an issue on our GitHub repository.

Together, we can make the messages of Medjugorje accessible to everyone, spreading hope and peace to a global audience.

*P.S.:* Every message has a uuid to make it easier to be used in databases or to make reference to a specific message since in some cases more than one message was gived on the same day