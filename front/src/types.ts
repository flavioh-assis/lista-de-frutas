export type FruitDTO = {
  description: string;
  valueA: number;
  valueB: number;
};

export type Fruit = FruitDTO & {
  id: number;
};

