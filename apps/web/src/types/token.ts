export interface Token {
  readonly address: string;
  readonly name: string;
  readonly symbol: string;
  readonly decimals: number;
  readonly totalSupply: string; // bigint would be appropriate but is complex to serialize
  readonly deployer: string;
  readonly deployedAt: Date;
}
