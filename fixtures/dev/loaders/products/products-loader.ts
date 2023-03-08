import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/products';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { PRODUCT_FIXTURES } from '@fixtures/dev/data/products';
import { EnvironmentType } from '@models/enum';

export class ProductLoader extends AbstractLoader<ProductEntity> {
  entity: new () => ProductEntity = ProductEntity;

  data: DeepPartial<ProductEntity>[] = PRODUCT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
