import fs from 'fs';

const BOOTSTRAP_TOKEN_MAP = {
  'ds-gray-100': 'base.gray.100',
  'ds-gray-200': 'base.gray.200',
  'ds-gray-300': 'base.gray.300',
  'ds-gray-400': 'base.gray.400',
  'ds-gray-500': 'base.gray.500',
  'ds-gray-600': 'base.gray.600',
  'ds-gray-700': 'base.gray.700',
  'ds-gray-800': 'base.gray.800',
  'ds-gray-900': 'base.gray.900',

  'ds-blue': 'base.blue',
  'ds-indigo': 'base.indigo',
  'ds-purple': 'base.purple',
  'ds-pink': 'base.pink',
  'ds-red': 'base.red',
  'ds-orange': 'base.orange',
  'ds-yellow': 'base.yellow',
  'ds-green': 'base.green',
  'ds-teal': 'base.teal',
  'ds-cyan': 'base.cyan',
  'ds-black': 'base.black',
  'ds-white': 'base.white',

  'ds-action-link': 'action.link',

  'ds-primary': 'brand.primary.default',
  'ds-secondary': 'brand.secondary.default',
  'ds-success': 'feedback.success',
  'ds-info': 'feedback.info',
  'ds-warning': 'feedback.warning',
  'ds-danger': 'feedback.danger',
  'ds-light': 'utility.light',
  'ds-dark': 'utility.dark',
};

const tokens = JSON.parse(
    fs.readFileSync('resources/json/tokens/color.tokens.json', 'utf8'),
);

const colors = tokens.global.color;

let scss = `// AUTO-GENERATED — DO NOT EDIT\n\n`;
const errors = [];

const getToken = (path) => {

  const keys = path.split('.');
  let current = colors;

  for (const key of keys) {

    if (!current || typeof current !== 'object') {

      throw new Error(`❌ Invalid token path: ${ path }`);
    }

    current = current[key];
  }

  return current;
};

const isFinalToken = (node) => {

  return node && typeof node === 'object' && '$value' in node && '$type' in node;
};

const assertFinalToken = (node, path, variableName) => {

  if (!isFinalToken(node)) {

    throw new Error(
        [
          '❌ Invalid token mapping',
          '',
          `$${ variableName } → ${ path }`,
          'Reason: path does not resolve to a final token ($value missing)',
          'Hint: point to an explicit variant (e.g. *.default)',
        ].join('\n'),
    );
  }
};

const resolveValue = (value, stack = []) => {

  if (typeof value !== 'string') {

    return value;
  }

  if (!value.startsWith('{')) {

    return value;
  }

  const refPath = value
      .replace(/[{}]/g, '')
      .replace('global.color.', '');

  if (stack.includes(refPath)) {

    throw new Error(
        `❌ Circular token reference detected:\n${ [
          ...stack,
          refPath,
        ].join(' → ') }`,
    );
  }

  const token = getToken(refPath);

  if (!isFinalToken(token)) {

    throw new Error(`❌ Alias does not resolve to a final token: ${ refPath }`);
  }

  return resolveValue(token.$value, [...stack, refPath]);
};

Object.entries(BOOTSTRAP_TOKEN_MAP).forEach(([variableName, tokenPath]) => {

  try {

    const token = getToken(tokenPath);

    assertFinalToken(token, tokenPath, variableName);

    const value = resolveValue(token.$value);

    scss += `$${ variableName }: ${ value };\n`;

  } catch (err) {

    errors.push(err.message);
  }
});

if (errors.length > 0) {

  console.error('\n❌ Token build failed:\n');
  console.error(errors.join('\n\n'));
  process.exit(1);
}

fs.writeFileSync(
    'resources/scss/frontend/tokens/_color-tokens.scss',
    scss,
);

console.log('✅ _color-tokens.scss generated successfully');