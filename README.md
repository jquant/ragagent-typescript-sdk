# @jquant/ragagent-client

TypeScript/JavaScript client for the Ragagent API.

## Installation

First, configure npm to use GitHub Packages for the @jquant scope:

```bash
npm config set @jquant:registry https://npm.pkg.github.com
```

Then install the package:

```bash
npm install @jquant/ragagent-client
```

## Usage

```typescript
import { Configuration, DefaultApi } from '@jquant/ragagent-client';

const config = new Configuration({
  basePath: 'https://your-ragagent-instance.com',
  // Add authentication if needed
});

const api = new DefaultApi(config);

// Example usage
async function example() {
  try {
    const response = await api.healthHealthGet();
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

See [LICENSE](LICENSE) file for details.
