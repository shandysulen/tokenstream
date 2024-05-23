import { type InferModel } from "drizzle-orm";
import {
  sqliteTable,
  SQLiteTableWithColumns,
  SQLiteText,
  text,
} from "drizzle-orm/sqlite-core";

// export type Accounts = SQLiteTableWithColumns<{
//   name: "accounts";
//   schema: undefined;
//   columns: {
//     address: SQLiteText<{
//       tableName: "accounts";
//       enumValues: [string, ...string[]];
//       name: "address";
//       data: string;
//       driverParam: string;
//       hasDefault: false;
//       notNull: true;
//     }>;
//     joinedDate: SQLiteText<{
//       tableName: "accounts";
//       enumValues: [string, ...string[]];
//       name: "joined_date";
//       data: string;
//       driverParam: string;
//       hasDefault: false;
//       notNull: false;
//     }>;
//     deletedTokens: SQLiteText<{
//       tableName: "accounts";
//       name: "deleted_tokens";
//       data: string;
//       driverParam: string;
//       enumValues: [string, ...string[]];
//       notNull: false;
//       hasDefault: false;
//     }>;
//   };
// }>;

export const accounts = sqliteTable("accounts", {
  address: text("address").primaryKey(),
  joinedDate: text("joined_date"),
  deletedTokens: text("deleted_tokens"),
});

export type DbAccount = InferModel<typeof accounts>; // return type when queried
export type NewDbAccount = InferModel<typeof accounts, "insert">; // return type when inserted
