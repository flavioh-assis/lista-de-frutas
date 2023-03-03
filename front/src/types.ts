export type FruitDto = {
  description: string;
  valueA: number;
  valueB: number;
};

export type Fruit = FruitDto & {
  id: number;
};
