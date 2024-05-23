import { type InferModel } from "drizzle-orm";
import {
  blob,
  integer,
  SQLiteBigInt,
  SQLiteInteger,
  sqliteTable,
  SQLiteTableWithColumns,
  SQLiteText,
  text,
} from "drizzle-orm/sqlite-core";

// export type TokensSchema = SQLiteTableWithColumns<{
//   name: "tokens";
//   schema: undefined;
//   columns: {
//     chain: SQLiteInteger<{
//       tableName: "tokens";
//       name: "chain";
//       data: number;
//       driverParam: number;
//       notNull: true;
//       hasDefault: true;
//     }>;
//     address: SQLiteText<{
//       tableName: "tokens";
//       data: string;
//       name: "address";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     name: SQLiteText<{
//       tableName: "tokens";
//       data: string;
//       name: "name";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     symbol: SQLiteText<{
//       tableName: "tokens";
//       data: string;
//       name: "symbol";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     decimals: SQLiteInteger<{
//       tableName: "tokens";
//       data: number;
//       name: "decimals";
//       driverParam: number;
//       hasDefault: false;
//       notNull: true;
//     }>;
//     totalSupply: SQLiteBigInt<{
//       tableName: "tokens";
//       data: bigint;
//       name: "total_supply";
//       driverParam: Buffer;
//       hasDefault: false;
//       notNull: true;
//     }>;
//     deployer: SQLiteText<{
//       tableName: "tokens";
//       data: string;
//       name: "deployer";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     deployedAt: SQLiteText<{
//       tableName: "tokens";
//       data: string;
//       name: "deployed_at";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     gasUnits: SQLiteBigInt<{
//       tableName: "tokens";
//       data: bigint;
//       name: "gas_units";
//       driverParam: Buffer;
//       hasDefault: false;
//       notNull: true;
//     }>;
//     gasPrice: SQLiteBigInt<{
//       tableName: "tokens";
//       name: "gas_price";
//       data: bigint;
//       driverParam: Buffer;
//       notNull: false;
//       hasDefault: false;
//     }>;
//   };
// }>;

export const tokens = sqliteTable("tokens", {
  chain: integer("chain").notNull(),
  address: text("address", { length: 42 }).primaryKey(),
  name: text("name").notNull(),
  symbol: text("symbol").notNull(),
  decimals: integer("decimals").notNull(),
  totalSupply: blob("total_supply", { mode: "bigint" }).notNull(),
  deployer: text("deployer", { length: 42 }).notNull(),
  deployedAt: text("deployed_at").notNull(),
  gasUnits: blob("gas_units", { mode: "bigint" }).notNull(),
  gasPrice: blob("gas_price", { mode: "bigint" }),
});

export type DbToken = InferModel<typeof tokens>; // return type when queried
export type NewDbToken = InferModel<typeof tokens, "insert">; // return type when inserted
