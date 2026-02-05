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
  'primary': 'brand.primary',
  'secondary': 'brand.secondary',
  'success': 'feedback.success',
  'info': 'feedback.info',
  'warning': 'feedback.warning',
  'danger': 'feedback.danger',
  'light': 'utility.light',
  'dark': 'utility.dark',
};

const tokens = JSON.parse(
    fs.readFileSync('resources/json/tokens/color.tokens.json', 'utf8'),
);

const colors = tokens.global.color;
// console.log(colors);

const getToken = (path) => {

  const keys = path.split('.');
  let current = colors;

  for (const key of keys) {

    if (!current) {

      throw new Error(`❌ Token invalid: ${ path }`);
    }

    current = current[key];
  }

  return current;
};

const resolveValue = (value) => {

  if (typeof value !== 'string') {

    return value;
  }

  if (!value.startsWith('{')) {

    return value;
  }

  const refPath = value
      .replace(/[{}]/g, '')
      .replace('global.color.', '');

  const token = getToken(refPath);

  if (!token?.value) {

    throw new Error(`❌ Token not found: ${ refPath }`);
  }

  return resolveValue(token.value);
};

// SCSS output
let scss = `// AUTO-GENERATED — DO NOT EDIT\n\n`;

Object.entries(BOOTSTRAP_TOKEN_MAP).forEach(([nameVariable, tokenPath]) => {

  const token = getToken(tokenPath);

  if (!token) {

    throw new Error(`❌ Missing token: ${ tokenPath }`);
  }

  const value = resolveValue(token.value);
  // console.log(`$${nameVariable}: ${value}`);

  scss += `$${ nameVariable }: ${ value };\n`;
});

fs.writeFileSync(
    'resources/scss/frontend/tokens/_color-tokens.scss',
    scss,
);

console.log('✅ _color-tokens.scss generate');