import * as migration_20261121_140146_initial from './20261121_140146_initial';

export const migrations = [
  {
    up: migration_20261121_140146_initial.up,
    down: migration_20261121_140146_initial.down,
    name: '20261121_140146_initial'
  },
];
