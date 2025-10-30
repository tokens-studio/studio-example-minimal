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

Build tokens for a specific platform:

```bash
npm run build web        # Builds CSS/SCSS from web.js
npm run build Android    # Builds Android XML from Android.js
```

This will execute the corresponding configuration file in the `studio-export` directory and generate the platform-specific output files.

**Note:** The platform name must match the exact filename (case-sensitive). For example, if you have `Android.js`, use `npm run build Android`.

## Configuration

The `.tokensstudio.json` file contains your Tokens Studio configuration:

- `org`: Your organization ID
- `project`: Your project ID
- `output`: Directory where tokens will be exported (default: `studio-export`)

## Output

Built files are generated in the `studio-export/build/` directory, organized by platform:
- `build/css/` - CSS and SCSS variables (from web.js)
- `build/android/` - Android XML resources (from Android.js)

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

