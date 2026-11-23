import * as migration_20261122_initial from './20261122_initial';
import * as migration_20261123_seo_fields from './20261123_seo_fields';

export const migrations = [
  {
    up: migration_20261122_initial.up,
    down: migration_20261122_initial.down,
    name: '20261122_initial',
  },
  {
    up: migration_20261123_seo_fields.up,
    down: migration_20261123_seo_fields.down,
    name: '20261123_seo_fields',
  },
];
