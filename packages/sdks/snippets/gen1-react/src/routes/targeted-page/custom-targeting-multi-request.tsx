import { builder } from '@builder.io/react';
import type { GetContentOptions } from '@builder.io/sdk';

export default function targetedRequest(
  modelName: string,
  options: GetContentOptions
) {
  return builder.get(modelName, {
    userAttributes: {
      audience: ['recent-shopper', 'womens-fashion'],
    },
    ...options,
  });
}
