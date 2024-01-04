import run from '@frontproject/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
    pkg,
})


