import { type InferModel } from "drizzle-orm";
import {
  integer,
  SQLiteBoolean,
  SQLiteInteger,
  sqliteTable,
  SQLiteTableWithColumns,
  SQLiteText,
  text,
} from "drizzle-orm/sqlite-core";
import * as z from "zod";

// export type SubscribersSchema = SQLiteTableWithColumns<{
//   name: "subscribers";
//   schema: undefined;
//   columns: {
//     id: SQLiteInteger<{
//       tableName: "subscribers";
//       data: number;
//       name: "id";
//       driverParam: number;
//       notNull: true;
//       hasDefault: true;
//     }>;
//     name: SQLiteText<{
//       tableName: "subscribers";
//       data: string;
//       name: "address";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     email: SQLiteText<{
//       tableName: "subscribers";
//       data: string;
//       name: "joined_date";
//       driverParam: string;
//       hasDefault: false;
//       enumValues: [string, ...string[]];
//       notNull: true;
//     }>;
//     yearly: SQLiteBoolean<{
//       tableName: "subscribers";
//       name: "yearly";
//       data: boolean;
//       driverParam: number;
//       notNull: false;
//       hasDefault: false;
//     }>;
//   };
// }>;

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("address", { length: 42 }).notNull(), // should be unique
  email: text("joined_date").notNull(),
  yearly: integer("yearly", { mode: "boolean" }),
});

// export const insertSubscriberSchema = createInsertSchema(subscribers, {
//   yearly: z.boolean(),
// })
//   .omit({
//     id: true,
//   })
//   .required();
// export type InsertSubscriberSchema = z.infer<typeof insertSubscriberSchema>;
export type DbSubscriber = InferModel<typeof subscribers>; // return type when queried
export type NewDbSubscriber = InferModel<typeof subscribers, "insert">; // return type when inserted
