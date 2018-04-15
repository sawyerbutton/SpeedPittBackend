'use strict';

import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'TypeORMInstance',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'speed',
      entities: [
        __dirname +'/../**/*.entity{.ts,.js}'
      ]
    })
  }
]
