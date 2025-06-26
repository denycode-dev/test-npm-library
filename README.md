# date-format

A simple JavaScript function to format JavaScript `Date` objects using `Intl.DateTimeFormat` with custom tokens in the `id-ID` locale.

## Installation

Install via npm:

```bash
npm install test-npm-library
```

Or using Yarn:

```bash
yarn add test-npm-library
```

## Usage

Import the function and use it to format dates:

```js
import dateFormat from 'test-npm-library';

const date = new Date('2025-06-26T14:30:45');

// Include year, month, day, hour, minute, and second
console.log(dateFormat(date, 'YYYY-MM-DD HH:mm:ss'));
// Example output: "26/06/2025, 14:30:45"

// Only year and month
console.log(dateFormat(date, 'YYYY-MM'));  
// Example output: "06/2025"
```

> **Note:** The order and separators (slashes, commas, spaces) follow the `id-ID` locale conventions. This function controls only *which* components appear.

## API

### `dateFormat(date, format)`

* **Parameters**:

  * `date` (`Date`): A JavaScript `Date` object to format.
  * `format` (`string`): A format string containing any combination of the following tokens:

    * `YYYY` — 4-digit year (e.g. 2025)
    * `MM` — 2-digit month (01–12)
    * `DD` — 2-digit day of month (01–31)
    * `HH` — 2-digit hour in 24-hour format (00–23)
    * `mm` — 2-digit minute (00–59)
    * `ss` — 2-digit second (00–59)

* **Returns**: `string` — The formatted date/time string.

## Examples

```js
import dateFormat from 'your-library-name';

// Format only date
console.log(dateFormat(new Date(), 'YYYY-MM-DD'));
// ➜ "26/06/2025"

// Format date and time
console.log(dateFormat(new Date(), 'YYYY/MM/DD HH:mm'));
// ➜ "26/06/2025, 14:30"
```

## Development

1. Clone the repo:

   ```bash
   ```

git clone [https://github.com/username/your-library-name.git](https://github.com/username/your-library-name.git)
cd your-library-name

````
2. Install dependencies:
   ```bash
npm install
````

3. Build (if using a build step):

   ```bash
   ```

npm run build

````
4. Run tests:
   ```bash
npm test
````

## Contributing

Contributions are welcome! Please open issues and pull requests on the GitHub repository.

## License

Licensed under the [MIT License](LICENSE).
