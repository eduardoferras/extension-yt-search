# YouTube Search Extension

Extensão do Google Chrome para buscar conteúdos textuais no YouTube diretamente do menu de contexto.

## Technologies

- Chrome Extensions API (Manifest V3)
- TypeScript
- i18n
- Vitest
- ESLint + Prettier

## Installation

Make sure to install dependencies:

```bash
npm install
```

Then, build the extension:

```bash
npm run build
```

## Usage

1. Go to [chrome://extensions](chrome://extensions) and enable Developer Mode.
2. Click “Load unpacked” and select the project folder `dist/`.
3. Select any text on a webpage, right-click, and choose “Search '%s' on Youtube” from the context menu.

## Credits

Icons by [Icons8](https://icons8.com)
