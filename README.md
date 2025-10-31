# Tokens Studio Minimal Example

A minimal example of syncing design tokens from Tokens Studio and building them with Style Dictionary.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure Tokens Studio connection:

```bash
npm run setup
```

This will prompt you for your API key and create/update the `.tokensstudio.json` configuration file.

**Need an API key?** Follow the [Tokens Studio documentation](https://documentation.tokens.studio/connect-studio-to-code#creating-an-api-key) to create one in your personal settings.

## Usage

### Fetch Tokens

Pull the latest design tokens from Tokens Studio:

```bash
npm run pull
```

This will download tokens and Style Dictionary configurations to the `studio-export` directory.

### Build Tokens

After pulling tokens, check the `studio-export` directory to see which platform configurations were exported from your Tokens Studio project:

```bash
ls studio-export/
```

Each `.js` file represents a platform configuration (e.g., `web.js`, `ios.js`, `android.js`). Run the build scripts directly for the platforms you've configured in Tokens Studio:

```bash
node studio-export/web.js        # If you have a web platform configured
node studio-export/android.js    # If you have an android platform configured
```

You can also add npm scripts in `package.json` for convenience:

```json
"scripts": {
  "build:web": "node studio-export/web.js"
}
```

## Configuration

The `.tokensstudio.json` file contains your Tokens Studio configuration:

- `org`: Your organization ID
- `project`: Your project ID
- `output`: Directory where tokens will be exported (default: `studio-export`)

## Output

Built files are generated according to the build paths defined in each platform's configuration file (pulled from Tokens Studio). The output format and location depend on your Studio configuration settings.

## Automated Token Syncing

This project includes a GitHub Actions workflow (`.github/workflows/pull-tokens.yml`) that automates the token sync process.

**To use it:**

1. Add your Tokens Studio API key as a GitHub secret:
   - [Create an API key](https://documentation.tokens.studio/connect-studio-to-code#creating-an-api-key) in Tokens Studio (if you haven't already)
   - Go to **Settings → Secrets and variables → Actions** in your GitHub repository
   - Create a new secret named `TOKENS_STUDIO_API_KEY` and paste your key

2. Manually trigger the workflow:
   - Go to **Actions** tab in your repository
   - Select "Sync & Build Design Tokens"
   - Click "Run workflow"

The workflow will:
- Pull the latest tokens from Tokens Studio
- Build all platform configurations
- Create a pull request with the changes

