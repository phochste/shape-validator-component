import type { Representation } from '@solid/community-server';
import { AsyncHandler } from '@solid/community-server';

export type ShapeValidatorInput = {
  parentRepresentation: Representation;
  representation: Representation;
};

export abstract class ShapeValidator extends AsyncHandler<ShapeValidatorInput> {}
