
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_tb
 * 
 */
export type user_tb = $Result.DefaultSelection<Prisma.$user_tbPayload>
/**
 * Model chat_tb
 * 
 */
export type chat_tb = $Result.DefaultSelection<Prisma.$chat_tbPayload>
/**
 * Model qNa_tb
 * 
 */
export type qNa_tb = $Result.DefaultSelection<Prisma.$qNa_tbPayload>
/**
 * Model book_tb
 * 
 */
export type book_tb = $Result.DefaultSelection<Prisma.$book_tbPayload>
/**
 * Model chapter_tb
 * 
 */
export type chapter_tb = $Result.DefaultSelection<Prisma.$chapter_tbPayload>
/**
 * Model embeddings_tb
 * 
 */
export type embeddings_tb = $Result.DefaultSelection<Prisma.$embeddings_tbPayload>
/**
 * Model log_tb
 * 
 */
export type log_tb = $Result.DefaultSelection<Prisma.$log_tbPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tbs
 * const user_tbs = await prisma.user_tb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tbs
   * const user_tbs = await prisma.user_tb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_tb`: Exposes CRUD operations for the **user_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tbs
    * const user_tbs = await prisma.user_tb.findMany()
    * ```
    */
  get user_tb(): Prisma.user_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_tb`: Exposes CRUD operations for the **chat_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_tbs
    * const chat_tbs = await prisma.chat_tb.findMany()
    * ```
    */
  get chat_tb(): Prisma.chat_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qNa_tb`: Exposes CRUD operations for the **qNa_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QNa_tbs
    * const qNa_tbs = await prisma.qNa_tb.findMany()
    * ```
    */
  get qNa_tb(): Prisma.qNa_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book_tb`: Exposes CRUD operations for the **book_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_tbs
    * const book_tbs = await prisma.book_tb.findMany()
    * ```
    */
  get book_tb(): Prisma.book_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter_tb`: Exposes CRUD operations for the **chapter_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapter_tbs
    * const chapter_tbs = await prisma.chapter_tb.findMany()
    * ```
    */
  get chapter_tb(): Prisma.chapter_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embeddings_tb`: Exposes CRUD operations for the **embeddings_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Embeddings_tbs
    * const embeddings_tbs = await prisma.embeddings_tb.findMany()
    * ```
    */
  get embeddings_tb(): Prisma.embeddings_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_tb`: Exposes CRUD operations for the **log_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_tbs
    * const log_tbs = await prisma.log_tb.findMany()
    * ```
    */
  get log_tb(): Prisma.log_tbDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_tb: 'user_tb',
    chat_tb: 'chat_tb',
    qNa_tb: 'qNa_tb',
    book_tb: 'book_tb',
    chapter_tb: 'chapter_tb',
    embeddings_tb: 'embeddings_tb',
    log_tb: 'log_tb'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_tb" | "chat_tb" | "qNa_tb" | "book_tb" | "chapter_tb" | "embeddings_tb" | "log_tb"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_tb: {
        payload: Prisma.$user_tbPayload<ExtArgs>
        fields: Prisma.user_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findFirst: {
            args: Prisma.user_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findMany: {
            args: Prisma.user_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>[]
          }
          create: {
            args: Prisma.user_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          createMany: {
            args: Prisma.user_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          update: {
            args: Prisma.user_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          deleteMany: {
            args: Prisma.user_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          aggregate: {
            args: Prisma.User_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tb>
          }
          groupBy: {
            args: Prisma.user_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tbCountArgs<ExtArgs>
            result: $Utils.Optional<User_tbCountAggregateOutputType> | number
          }
        }
      }
      chat_tb: {
        payload: Prisma.$chat_tbPayload<ExtArgs>
        fields: Prisma.chat_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>
          }
          findFirst: {
            args: Prisma.chat_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>
          }
          findMany: {
            args: Prisma.chat_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>[]
          }
          create: {
            args: Prisma.chat_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>
          }
          createMany: {
            args: Prisma.chat_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chat_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>
          }
          update: {
            args: Prisma.chat_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>
          }
          deleteMany: {
            args: Prisma.chat_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chat_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_tbPayload>
          }
          aggregate: {
            args: Prisma.Chat_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_tb>
          }
          groupBy: {
            args: Prisma.chat_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_tbCountAggregateOutputType> | number
          }
        }
      }
      qNa_tb: {
        payload: Prisma.$qNa_tbPayload<ExtArgs>
        fields: Prisma.qNa_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.qNa_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.qNa_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>
          }
          findFirst: {
            args: Prisma.qNa_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.qNa_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>
          }
          findMany: {
            args: Prisma.qNa_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>[]
          }
          create: {
            args: Prisma.qNa_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>
          }
          createMany: {
            args: Prisma.qNa_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.qNa_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>
          }
          update: {
            args: Prisma.qNa_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>
          }
          deleteMany: {
            args: Prisma.qNa_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.qNa_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.qNa_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qNa_tbPayload>
          }
          aggregate: {
            args: Prisma.QNa_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQNa_tb>
          }
          groupBy: {
            args: Prisma.qNa_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<QNa_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.qNa_tbCountArgs<ExtArgs>
            result: $Utils.Optional<QNa_tbCountAggregateOutputType> | number
          }
        }
      }
      book_tb: {
        payload: Prisma.$book_tbPayload<ExtArgs>
        fields: Prisma.book_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.book_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.book_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>
          }
          findFirst: {
            args: Prisma.book_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.book_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>
          }
          findMany: {
            args: Prisma.book_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>[]
          }
          create: {
            args: Prisma.book_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>
          }
          createMany: {
            args: Prisma.book_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.book_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>
          }
          update: {
            args: Prisma.book_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>
          }
          deleteMany: {
            args: Prisma.book_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.book_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.book_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_tbPayload>
          }
          aggregate: {
            args: Prisma.Book_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_tb>
          }
          groupBy: {
            args: Prisma.book_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.book_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Book_tbCountAggregateOutputType> | number
          }
        }
      }
      chapter_tb: {
        payload: Prisma.$chapter_tbPayload<ExtArgs>
        fields: Prisma.chapter_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chapter_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chapter_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>
          }
          findFirst: {
            args: Prisma.chapter_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chapter_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>
          }
          findMany: {
            args: Prisma.chapter_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>[]
          }
          create: {
            args: Prisma.chapter_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>
          }
          createMany: {
            args: Prisma.chapter_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chapter_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>
          }
          update: {
            args: Prisma.chapter_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>
          }
          deleteMany: {
            args: Prisma.chapter_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chapter_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chapter_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapter_tbPayload>
          }
          aggregate: {
            args: Prisma.Chapter_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter_tb>
          }
          groupBy: {
            args: Prisma.chapter_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chapter_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.chapter_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Chapter_tbCountAggregateOutputType> | number
          }
        }
      }
      embeddings_tb: {
        payload: Prisma.$embeddings_tbPayload<ExtArgs>
        fields: Prisma.embeddings_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.embeddings_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.embeddings_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>
          }
          findFirst: {
            args: Prisma.embeddings_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.embeddings_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>
          }
          findMany: {
            args: Prisma.embeddings_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>[]
          }
          create: {
            args: Prisma.embeddings_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>
          }
          createMany: {
            args: Prisma.embeddings_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.embeddings_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>
          }
          update: {
            args: Prisma.embeddings_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>
          }
          deleteMany: {
            args: Prisma.embeddings_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.embeddings_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.embeddings_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddings_tbPayload>
          }
          aggregate: {
            args: Prisma.Embeddings_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbeddings_tb>
          }
          groupBy: {
            args: Prisma.embeddings_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Embeddings_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.embeddings_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Embeddings_tbCountAggregateOutputType> | number
          }
        }
      }
      log_tb: {
        payload: Prisma.$log_tbPayload<ExtArgs>
        fields: Prisma.log_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>
          }
          findFirst: {
            args: Prisma.log_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>
          }
          findMany: {
            args: Prisma.log_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>[]
          }
          create: {
            args: Prisma.log_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>
          }
          createMany: {
            args: Prisma.log_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.log_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>
          }
          update: {
            args: Prisma.log_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>
          }
          deleteMany: {
            args: Prisma.log_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.log_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.log_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_tbPayload>
          }
          aggregate: {
            args: Prisma.Log_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_tb>
          }
          groupBy: {
            args: Prisma.log_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Log_tbCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_tb?: user_tbOmit
    chat_tb?: chat_tbOmit
    qNa_tb?: qNa_tbOmit
    book_tb?: book_tbOmit
    chapter_tb?: chapter_tbOmit
    embeddings_tb?: embeddings_tbOmit
    log_tb?: log_tbOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_tbCountOutputType
   */

  export type User_tbCountOutputType = {
    chats: number
  }

  export type User_tbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | User_tbCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * User_tbCountOutputType without action
   */
  export type User_tbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_tbCountOutputType
     */
    select?: User_tbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_tbCountOutputType without action
   */
  export type User_tbCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_tbWhereInput
  }


  /**
   * Count Type Chat_tbCountOutputType
   */

  export type Chat_tbCountOutputType = {
    qnas: number
  }

  export type Chat_tbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qnas?: boolean | Chat_tbCountOutputTypeCountQnasArgs
  }

  // Custom InputTypes
  /**
   * Chat_tbCountOutputType without action
   */
  export type Chat_tbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat_tbCountOutputType
     */
    select?: Chat_tbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Chat_tbCountOutputType without action
   */
  export type Chat_tbCountOutputTypeCountQnasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qNa_tbWhereInput
  }


  /**
   * Count Type Book_tbCountOutputType
   */

  export type Book_tbCountOutputType = {
    chapters: number
  }

  export type Book_tbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | Book_tbCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * Book_tbCountOutputType without action
   */
  export type Book_tbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book_tbCountOutputType
     */
    select?: Book_tbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Book_tbCountOutputType without action
   */
  export type Book_tbCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapter_tbWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_tb
   */

  export type AggregateUser_tb = {
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  export type User_tbAvgAggregateOutputType = {
    userId: number | null
  }

  export type User_tbSumAggregateOutputType = {
    userId: bigint | null
  }

  export type User_tbMinAggregateOutputType = {
    userId: bigint | null
    userName: string | null
    userEmail: string | null
    userPassword: string | null
    createAt: Date | null
  }

  export type User_tbMaxAggregateOutputType = {
    userId: bigint | null
    userName: string | null
    userEmail: string | null
    userPassword: string | null
    createAt: Date | null
  }

  export type User_tbCountAggregateOutputType = {
    userId: number
    userName: number
    userEmail: number
    userPassword: number
    createAt: number
    _all: number
  }


  export type User_tbAvgAggregateInputType = {
    userId?: true
  }

  export type User_tbSumAggregateInputType = {
    userId?: true
  }

  export type User_tbMinAggregateInputType = {
    userId?: true
    userName?: true
    userEmail?: true
    userPassword?: true
    createAt?: true
  }

  export type User_tbMaxAggregateInputType = {
    userId?: true
    userName?: true
    userEmail?: true
    userPassword?: true
    createAt?: true
  }

  export type User_tbCountAggregateInputType = {
    userId?: true
    userName?: true
    userEmail?: true
    userPassword?: true
    createAt?: true
    _all?: true
  }

  export type User_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tb to aggregate.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tbs
    **/
    _count?: true | User_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tbMaxAggregateInputType
  }

  export type GetUser_tbAggregateType<T extends User_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tb[P]>
      : GetScalarType<T[P], AggregateUser_tb[P]>
  }




  export type user_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tbWhereInput
    orderBy?: user_tbOrderByWithAggregationInput | user_tbOrderByWithAggregationInput[]
    by: User_tbScalarFieldEnum[] | User_tbScalarFieldEnum
    having?: user_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tbCountAggregateInputType | true
    _avg?: User_tbAvgAggregateInputType
    _sum?: User_tbSumAggregateInputType
    _min?: User_tbMinAggregateInputType
    _max?: User_tbMaxAggregateInputType
  }

  export type User_tbGroupByOutputType = {
    userId: bigint
    userName: string
    userEmail: string
    userPassword: string
    createAt: Date
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  type GetUser_tbGroupByPayload<T extends user_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tbGroupByOutputType[P]>
            : GetScalarType<T[P], User_tbGroupByOutputType[P]>
        }
      >
    >


  export type user_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userEmail?: boolean
    userPassword?: boolean
    createAt?: boolean
    chats?: boolean | user_tb$chatsArgs<ExtArgs>
    _count?: boolean | User_tbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_tb"]>



  export type user_tbSelectScalar = {
    userId?: boolean
    userName?: boolean
    userEmail?: boolean
    userPassword?: boolean
    createAt?: boolean
  }

  export type user_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "userEmail" | "userPassword" | "createAt", ExtArgs["result"]["user_tb"]>
  export type user_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | user_tb$chatsArgs<ExtArgs>
    _count?: boolean | User_tbCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $user_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tb"
    objects: {
      chats: Prisma.$chat_tbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      userName: string
      userEmail: string
      userPassword: string
      createAt: Date
    }, ExtArgs["result"]["user_tb"]>
    composites: {}
  }

  type user_tbGetPayload<S extends boolean | null | undefined | user_tbDefaultArgs> = $Result.GetResult<Prisma.$user_tbPayload, S>

  type user_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tbCountAggregateInputType | true
    }

  export interface user_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tb'], meta: { name: 'user_tb' } }
    /**
     * Find zero or one User_tb that matches the filter.
     * @param {user_tbFindUniqueArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tbFindUniqueArgs>(args: SelectSubset<T, user_tbFindUniqueArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tbFindUniqueOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tbFindFirstArgs>(args?: SelectSubset<T, user_tbFindFirstArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tbs
     * const user_tbs = await prisma.user_tb.findMany()
     * 
     * // Get first 10 User_tbs
     * const user_tbs = await prisma.user_tb.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_tbWithUserIdOnly = await prisma.user_tb.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends user_tbFindManyArgs>(args?: SelectSubset<T, user_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tb.
     * @param {user_tbCreateArgs} args - Arguments to create a User_tb.
     * @example
     * // Create one User_tb
     * const User_tb = await prisma.user_tb.create({
     *   data: {
     *     // ... data to create a User_tb
     *   }
     * })
     * 
     */
    create<T extends user_tbCreateArgs>(args: SelectSubset<T, user_tbCreateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tbs.
     * @param {user_tbCreateManyArgs} args - Arguments to create many User_tbs.
     * @example
     * // Create many User_tbs
     * const user_tb = await prisma.user_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tbCreateManyArgs>(args?: SelectSubset<T, user_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tb.
     * @param {user_tbDeleteArgs} args - Arguments to delete one User_tb.
     * @example
     * // Delete one User_tb
     * const User_tb = await prisma.user_tb.delete({
     *   where: {
     *     // ... filter to delete one User_tb
     *   }
     * })
     * 
     */
    delete<T extends user_tbDeleteArgs>(args: SelectSubset<T, user_tbDeleteArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tb.
     * @param {user_tbUpdateArgs} args - Arguments to update one User_tb.
     * @example
     * // Update one User_tb
     * const user_tb = await prisma.user_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tbUpdateArgs>(args: SelectSubset<T, user_tbUpdateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tbs.
     * @param {user_tbDeleteManyArgs} args - Arguments to filter User_tbs to delete.
     * @example
     * // Delete a few User_tbs
     * const { count } = await prisma.user_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tbDeleteManyArgs>(args?: SelectSubset<T, user_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tbs
     * const user_tb = await prisma.user_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tbUpdateManyArgs>(args: SelectSubset<T, user_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tb.
     * @param {user_tbUpsertArgs} args - Arguments to update or create a User_tb.
     * @example
     * // Update or create a User_tb
     * const user_tb = await prisma.user_tb.upsert({
     *   create: {
     *     // ... data to create a User_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tb we want to update
     *   }
     * })
     */
    upsert<T extends user_tbUpsertArgs>(args: SelectSubset<T, user_tbUpsertArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbCountArgs} args - Arguments to filter User_tbs to count.
     * @example
     * // Count the number of User_tbs
     * const count = await prisma.user_tb.count({
     *   where: {
     *     // ... the filter for the User_tbs we want to count
     *   }
     * })
    **/
    count<T extends user_tbCountArgs>(
      args?: Subset<T, user_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tbAggregateArgs>(args: Subset<T, User_tbAggregateArgs>): Prisma.PrismaPromise<GetUser_tbAggregateType<T>>

    /**
     * Group by User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tbGroupByArgs['orderBy'] }
        : { orderBy?: user_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tb model
   */
  readonly fields: user_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends user_tb$chatsArgs<ExtArgs> = {}>(args?: Subset<T, user_tb$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tb model
   */ 
  interface user_tbFieldRefs {
    readonly userId: FieldRef<"user_tb", 'BigInt'>
    readonly userName: FieldRef<"user_tb", 'String'>
    readonly userEmail: FieldRef<"user_tb", 'String'>
    readonly userPassword: FieldRef<"user_tb", 'String'>
    readonly createAt: FieldRef<"user_tb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_tb findUnique
   */
  export type user_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findUniqueOrThrow
   */
  export type user_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findFirst
   */
  export type user_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findFirstOrThrow
   */
  export type user_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findMany
   */
  export type user_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter, which user_tbs to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb create
   */
  export type user_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a user_tb.
     */
    data: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
  }

  /**
   * user_tb createMany
   */
  export type user_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tbs.
     */
    data: user_tbCreateManyInput | user_tbCreateManyInput[]
  }

  /**
   * user_tb update
   */
  export type user_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a user_tb.
     */
    data: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
    /**
     * Choose, which user_tb to update.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb updateMany
   */
  export type user_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tbs.
     */
    data: XOR<user_tbUpdateManyMutationInput, user_tbUncheckedUpdateManyInput>
    /**
     * Filter which user_tbs to update
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to update.
     */
    limit?: number
  }

  /**
   * user_tb upsert
   */
  export type user_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the user_tb to update in case it exists.
     */
    where: user_tbWhereUniqueInput
    /**
     * In case the user_tb found by the `where` argument doesn't exist, create a new user_tb with this data.
     */
    create: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
    /**
     * In case the user_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
  }

  /**
   * user_tb delete
   */
  export type user_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
    /**
     * Filter which user_tb to delete.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb deleteMany
   */
  export type user_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tbs to delete
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to delete.
     */
    limit?: number
  }

  /**
   * user_tb.chats
   */
  export type user_tb$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    where?: chat_tbWhereInput
    orderBy?: chat_tbOrderByWithRelationInput | chat_tbOrderByWithRelationInput[]
    cursor?: chat_tbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_tbScalarFieldEnum | Chat_tbScalarFieldEnum[]
  }

  /**
   * user_tb without action
   */
  export type user_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tbInclude<ExtArgs> | null
  }


  /**
   * Model chat_tb
   */

  export type AggregateChat_tb = {
    _count: Chat_tbCountAggregateOutputType | null
    _avg: Chat_tbAvgAggregateOutputType | null
    _sum: Chat_tbSumAggregateOutputType | null
    _min: Chat_tbMinAggregateOutputType | null
    _max: Chat_tbMaxAggregateOutputType | null
  }

  export type Chat_tbAvgAggregateOutputType = {
    chatId: number | null
    userId: number | null
  }

  export type Chat_tbSumAggregateOutputType = {
    chatId: bigint | null
    userId: bigint | null
  }

  export type Chat_tbMinAggregateOutputType = {
    chatId: bigint | null
    userId: bigint | null
    chatHeader: string | null
    createAt: Date | null
  }

  export type Chat_tbMaxAggregateOutputType = {
    chatId: bigint | null
    userId: bigint | null
    chatHeader: string | null
    createAt: Date | null
  }

  export type Chat_tbCountAggregateOutputType = {
    chatId: number
    userId: number
    chatHeader: number
    createAt: number
    _all: number
  }


  export type Chat_tbAvgAggregateInputType = {
    chatId?: true
    userId?: true
  }

  export type Chat_tbSumAggregateInputType = {
    chatId?: true
    userId?: true
  }

  export type Chat_tbMinAggregateInputType = {
    chatId?: true
    userId?: true
    chatHeader?: true
    createAt?: true
  }

  export type Chat_tbMaxAggregateInputType = {
    chatId?: true
    userId?: true
    chatHeader?: true
    createAt?: true
  }

  export type Chat_tbCountAggregateInputType = {
    chatId?: true
    userId?: true
    chatHeader?: true
    createAt?: true
    _all?: true
  }

  export type Chat_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_tb to aggregate.
     */
    where?: chat_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_tbs to fetch.
     */
    orderBy?: chat_tbOrderByWithRelationInput | chat_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_tbs
    **/
    _count?: true | Chat_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_tbMaxAggregateInputType
  }

  export type GetChat_tbAggregateType<T extends Chat_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_tb[P]>
      : GetScalarType<T[P], AggregateChat_tb[P]>
  }




  export type chat_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_tbWhereInput
    orderBy?: chat_tbOrderByWithAggregationInput | chat_tbOrderByWithAggregationInput[]
    by: Chat_tbScalarFieldEnum[] | Chat_tbScalarFieldEnum
    having?: chat_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_tbCountAggregateInputType | true
    _avg?: Chat_tbAvgAggregateInputType
    _sum?: Chat_tbSumAggregateInputType
    _min?: Chat_tbMinAggregateInputType
    _max?: Chat_tbMaxAggregateInputType
  }

  export type Chat_tbGroupByOutputType = {
    chatId: bigint
    userId: bigint
    chatHeader: string
    createAt: Date
    _count: Chat_tbCountAggregateOutputType | null
    _avg: Chat_tbAvgAggregateOutputType | null
    _sum: Chat_tbSumAggregateOutputType | null
    _min: Chat_tbMinAggregateOutputType | null
    _max: Chat_tbMaxAggregateOutputType | null
  }

  type GetChat_tbGroupByPayload<T extends chat_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_tbGroupByOutputType[P]>
        }
      >
    >


  export type chat_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatId?: boolean
    userId?: boolean
    chatHeader?: boolean
    createAt?: boolean
    user?: boolean | user_tbDefaultArgs<ExtArgs>
    qnas?: boolean | chat_tb$qnasArgs<ExtArgs>
    _count?: boolean | Chat_tbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_tb"]>



  export type chat_tbSelectScalar = {
    chatId?: boolean
    userId?: boolean
    chatHeader?: boolean
    createAt?: boolean
  }

  export type chat_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chatId" | "userId" | "chatHeader" | "createAt", ExtArgs["result"]["chat_tb"]>
  export type chat_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_tbDefaultArgs<ExtArgs>
    qnas?: boolean | chat_tb$qnasArgs<ExtArgs>
    _count?: boolean | Chat_tbCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $chat_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_tb"
    objects: {
      user: Prisma.$user_tbPayload<ExtArgs>
      qnas: Prisma.$qNa_tbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      chatId: bigint
      userId: bigint
      chatHeader: string
      createAt: Date
    }, ExtArgs["result"]["chat_tb"]>
    composites: {}
  }

  type chat_tbGetPayload<S extends boolean | null | undefined | chat_tbDefaultArgs> = $Result.GetResult<Prisma.$chat_tbPayload, S>

  type chat_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_tbCountAggregateInputType | true
    }

  export interface chat_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_tb'], meta: { name: 'chat_tb' } }
    /**
     * Find zero or one Chat_tb that matches the filter.
     * @param {chat_tbFindUniqueArgs} args - Arguments to find a Chat_tb
     * @example
     * // Get one Chat_tb
     * const chat_tb = await prisma.chat_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_tbFindUniqueArgs>(args: SelectSubset<T, chat_tbFindUniqueArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_tbFindUniqueOrThrowArgs} args - Arguments to find a Chat_tb
     * @example
     * // Get one Chat_tb
     * const chat_tb = await prisma.chat_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_tbFindFirstArgs} args - Arguments to find a Chat_tb
     * @example
     * // Get one Chat_tb
     * const chat_tb = await prisma.chat_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_tbFindFirstArgs>(args?: SelectSubset<T, chat_tbFindFirstArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_tbFindFirstOrThrowArgs} args - Arguments to find a Chat_tb
     * @example
     * // Get one Chat_tb
     * const chat_tb = await prisma.chat_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_tbs
     * const chat_tbs = await prisma.chat_tb.findMany()
     * 
     * // Get first 10 Chat_tbs
     * const chat_tbs = await prisma.chat_tb.findMany({ take: 10 })
     * 
     * // Only select the `chatId`
     * const chat_tbWithChatIdOnly = await prisma.chat_tb.findMany({ select: { chatId: true } })
     * 
     */
    findMany<T extends chat_tbFindManyArgs>(args?: SelectSubset<T, chat_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_tb.
     * @param {chat_tbCreateArgs} args - Arguments to create a Chat_tb.
     * @example
     * // Create one Chat_tb
     * const Chat_tb = await prisma.chat_tb.create({
     *   data: {
     *     // ... data to create a Chat_tb
     *   }
     * })
     * 
     */
    create<T extends chat_tbCreateArgs>(args: SelectSubset<T, chat_tbCreateArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_tbs.
     * @param {chat_tbCreateManyArgs} args - Arguments to create many Chat_tbs.
     * @example
     * // Create many Chat_tbs
     * const chat_tb = await prisma.chat_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_tbCreateManyArgs>(args?: SelectSubset<T, chat_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat_tb.
     * @param {chat_tbDeleteArgs} args - Arguments to delete one Chat_tb.
     * @example
     * // Delete one Chat_tb
     * const Chat_tb = await prisma.chat_tb.delete({
     *   where: {
     *     // ... filter to delete one Chat_tb
     *   }
     * })
     * 
     */
    delete<T extends chat_tbDeleteArgs>(args: SelectSubset<T, chat_tbDeleteArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_tb.
     * @param {chat_tbUpdateArgs} args - Arguments to update one Chat_tb.
     * @example
     * // Update one Chat_tb
     * const chat_tb = await prisma.chat_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_tbUpdateArgs>(args: SelectSubset<T, chat_tbUpdateArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_tbs.
     * @param {chat_tbDeleteManyArgs} args - Arguments to filter Chat_tbs to delete.
     * @example
     * // Delete a few Chat_tbs
     * const { count } = await prisma.chat_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_tbDeleteManyArgs>(args?: SelectSubset<T, chat_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_tbs
     * const chat_tb = await prisma.chat_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_tbUpdateManyArgs>(args: SelectSubset<T, chat_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat_tb.
     * @param {chat_tbUpsertArgs} args - Arguments to update or create a Chat_tb.
     * @example
     * // Update or create a Chat_tb
     * const chat_tb = await prisma.chat_tb.upsert({
     *   create: {
     *     // ... data to create a Chat_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_tb we want to update
     *   }
     * })
     */
    upsert<T extends chat_tbUpsertArgs>(args: SelectSubset<T, chat_tbUpsertArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_tbCountArgs} args - Arguments to filter Chat_tbs to count.
     * @example
     * // Count the number of Chat_tbs
     * const count = await prisma.chat_tb.count({
     *   where: {
     *     // ... the filter for the Chat_tbs we want to count
     *   }
     * })
    **/
    count<T extends chat_tbCountArgs>(
      args?: Subset<T, chat_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chat_tbAggregateArgs>(args: Subset<T, Chat_tbAggregateArgs>): Prisma.PrismaPromise<GetChat_tbAggregateType<T>>

    /**
     * Group by Chat_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chat_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_tbGroupByArgs['orderBy'] }
        : { orderBy?: chat_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chat_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_tb model
   */
  readonly fields: chat_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_tbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_tbDefaultArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qnas<T extends chat_tb$qnasArgs<ExtArgs> = {}>(args?: Subset<T, chat_tb$qnasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat_tb model
   */ 
  interface chat_tbFieldRefs {
    readonly chatId: FieldRef<"chat_tb", 'BigInt'>
    readonly userId: FieldRef<"chat_tb", 'BigInt'>
    readonly chatHeader: FieldRef<"chat_tb", 'String'>
    readonly createAt: FieldRef<"chat_tb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat_tb findUnique
   */
  export type chat_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * Filter, which chat_tb to fetch.
     */
    where: chat_tbWhereUniqueInput
  }

  /**
   * chat_tb findUniqueOrThrow
   */
  export type chat_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * Filter, which chat_tb to fetch.
     */
    where: chat_tbWhereUniqueInput
  }

  /**
   * chat_tb findFirst
   */
  export type chat_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * Filter, which chat_tb to fetch.
     */
    where?: chat_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_tbs to fetch.
     */
    orderBy?: chat_tbOrderByWithRelationInput | chat_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_tbs.
     */
    cursor?: chat_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_tbs.
     */
    distinct?: Chat_tbScalarFieldEnum | Chat_tbScalarFieldEnum[]
  }

  /**
   * chat_tb findFirstOrThrow
   */
  export type chat_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * Filter, which chat_tb to fetch.
     */
    where?: chat_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_tbs to fetch.
     */
    orderBy?: chat_tbOrderByWithRelationInput | chat_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_tbs.
     */
    cursor?: chat_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_tbs.
     */
    distinct?: Chat_tbScalarFieldEnum | Chat_tbScalarFieldEnum[]
  }

  /**
   * chat_tb findMany
   */
  export type chat_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * Filter, which chat_tbs to fetch.
     */
    where?: chat_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_tbs to fetch.
     */
    orderBy?: chat_tbOrderByWithRelationInput | chat_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_tbs.
     */
    cursor?: chat_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_tbs.
     */
    skip?: number
    distinct?: Chat_tbScalarFieldEnum | Chat_tbScalarFieldEnum[]
  }

  /**
   * chat_tb create
   */
  export type chat_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_tb.
     */
    data: XOR<chat_tbCreateInput, chat_tbUncheckedCreateInput>
  }

  /**
   * chat_tb createMany
   */
  export type chat_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_tbs.
     */
    data: chat_tbCreateManyInput | chat_tbCreateManyInput[]
  }

  /**
   * chat_tb update
   */
  export type chat_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_tb.
     */
    data: XOR<chat_tbUpdateInput, chat_tbUncheckedUpdateInput>
    /**
     * Choose, which chat_tb to update.
     */
    where: chat_tbWhereUniqueInput
  }

  /**
   * chat_tb updateMany
   */
  export type chat_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_tbs.
     */
    data: XOR<chat_tbUpdateManyMutationInput, chat_tbUncheckedUpdateManyInput>
    /**
     * Filter which chat_tbs to update
     */
    where?: chat_tbWhereInput
    /**
     * Limit how many chat_tbs to update.
     */
    limit?: number
  }

  /**
   * chat_tb upsert
   */
  export type chat_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_tb to update in case it exists.
     */
    where: chat_tbWhereUniqueInput
    /**
     * In case the chat_tb found by the `where` argument doesn't exist, create a new chat_tb with this data.
     */
    create: XOR<chat_tbCreateInput, chat_tbUncheckedCreateInput>
    /**
     * In case the chat_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_tbUpdateInput, chat_tbUncheckedUpdateInput>
  }

  /**
   * chat_tb delete
   */
  export type chat_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
    /**
     * Filter which chat_tb to delete.
     */
    where: chat_tbWhereUniqueInput
  }

  /**
   * chat_tb deleteMany
   */
  export type chat_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_tbs to delete
     */
    where?: chat_tbWhereInput
    /**
     * Limit how many chat_tbs to delete.
     */
    limit?: number
  }

  /**
   * chat_tb.qnas
   */
  export type chat_tb$qnasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    where?: qNa_tbWhereInput
    orderBy?: qNa_tbOrderByWithRelationInput | qNa_tbOrderByWithRelationInput[]
    cursor?: qNa_tbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QNa_tbScalarFieldEnum | QNa_tbScalarFieldEnum[]
  }

  /**
   * chat_tb without action
   */
  export type chat_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_tb
     */
    select?: chat_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_tb
     */
    omit?: chat_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_tbInclude<ExtArgs> | null
  }


  /**
   * Model qNa_tb
   */

  export type AggregateQNa_tb = {
    _count: QNa_tbCountAggregateOutputType | null
    _avg: QNa_tbAvgAggregateOutputType | null
    _sum: QNa_tbSumAggregateOutputType | null
    _min: QNa_tbMinAggregateOutputType | null
    _max: QNa_tbMaxAggregateOutputType | null
  }

  export type QNa_tbAvgAggregateOutputType = {
    qNaId: number | null
    chatId: number | null
  }

  export type QNa_tbSumAggregateOutputType = {
    qNaId: bigint | null
    chatId: bigint | null
  }

  export type QNa_tbMinAggregateOutputType = {
    qNaId: bigint | null
    chatId: bigint | null
    qNaWords: string | null
    qNaType: string | null
    createdAt: Date | null
  }

  export type QNa_tbMaxAggregateOutputType = {
    qNaId: bigint | null
    chatId: bigint | null
    qNaWords: string | null
    qNaType: string | null
    createdAt: Date | null
  }

  export type QNa_tbCountAggregateOutputType = {
    qNaId: number
    chatId: number
    qNaWords: number
    qNaType: number
    createdAt: number
    _all: number
  }


  export type QNa_tbAvgAggregateInputType = {
    qNaId?: true
    chatId?: true
  }

  export type QNa_tbSumAggregateInputType = {
    qNaId?: true
    chatId?: true
  }

  export type QNa_tbMinAggregateInputType = {
    qNaId?: true
    chatId?: true
    qNaWords?: true
    qNaType?: true
    createdAt?: true
  }

  export type QNa_tbMaxAggregateInputType = {
    qNaId?: true
    chatId?: true
    qNaWords?: true
    qNaType?: true
    createdAt?: true
  }

  export type QNa_tbCountAggregateInputType = {
    qNaId?: true
    chatId?: true
    qNaWords?: true
    qNaType?: true
    createdAt?: true
    _all?: true
  }

  export type QNa_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qNa_tb to aggregate.
     */
    where?: qNa_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qNa_tbs to fetch.
     */
    orderBy?: qNa_tbOrderByWithRelationInput | qNa_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: qNa_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qNa_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qNa_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned qNa_tbs
    **/
    _count?: true | QNa_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QNa_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QNa_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QNa_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QNa_tbMaxAggregateInputType
  }

  export type GetQNa_tbAggregateType<T extends QNa_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateQNa_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQNa_tb[P]>
      : GetScalarType<T[P], AggregateQNa_tb[P]>
  }




  export type qNa_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qNa_tbWhereInput
    orderBy?: qNa_tbOrderByWithAggregationInput | qNa_tbOrderByWithAggregationInput[]
    by: QNa_tbScalarFieldEnum[] | QNa_tbScalarFieldEnum
    having?: qNa_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QNa_tbCountAggregateInputType | true
    _avg?: QNa_tbAvgAggregateInputType
    _sum?: QNa_tbSumAggregateInputType
    _min?: QNa_tbMinAggregateInputType
    _max?: QNa_tbMaxAggregateInputType
  }

  export type QNa_tbGroupByOutputType = {
    qNaId: bigint
    chatId: bigint
    qNaWords: string
    qNaType: string
    createdAt: Date
    _count: QNa_tbCountAggregateOutputType | null
    _avg: QNa_tbAvgAggregateOutputType | null
    _sum: QNa_tbSumAggregateOutputType | null
    _min: QNa_tbMinAggregateOutputType | null
    _max: QNa_tbMaxAggregateOutputType | null
  }

  type GetQNa_tbGroupByPayload<T extends qNa_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QNa_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QNa_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QNa_tbGroupByOutputType[P]>
            : GetScalarType<T[P], QNa_tbGroupByOutputType[P]>
        }
      >
    >


  export type qNa_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qNaId?: boolean
    chatId?: boolean
    qNaWords?: boolean
    qNaType?: boolean
    createdAt?: boolean
    chat?: boolean | chat_tbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qNa_tb"]>



  export type qNa_tbSelectScalar = {
    qNaId?: boolean
    chatId?: boolean
    qNaWords?: boolean
    qNaType?: boolean
    createdAt?: boolean
  }

  export type qNa_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"qNaId" | "chatId" | "qNaWords" | "qNaType" | "createdAt", ExtArgs["result"]["qNa_tb"]>
  export type qNa_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chat_tbDefaultArgs<ExtArgs>
  }

  export type $qNa_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "qNa_tb"
    objects: {
      chat: Prisma.$chat_tbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      qNaId: bigint
      chatId: bigint
      qNaWords: string
      qNaType: string
      createdAt: Date
    }, ExtArgs["result"]["qNa_tb"]>
    composites: {}
  }

  type qNa_tbGetPayload<S extends boolean | null | undefined | qNa_tbDefaultArgs> = $Result.GetResult<Prisma.$qNa_tbPayload, S>

  type qNa_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<qNa_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QNa_tbCountAggregateInputType | true
    }

  export interface qNa_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['qNa_tb'], meta: { name: 'qNa_tb' } }
    /**
     * Find zero or one QNa_tb that matches the filter.
     * @param {qNa_tbFindUniqueArgs} args - Arguments to find a QNa_tb
     * @example
     * // Get one QNa_tb
     * const qNa_tb = await prisma.qNa_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends qNa_tbFindUniqueArgs>(args: SelectSubset<T, qNa_tbFindUniqueArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QNa_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {qNa_tbFindUniqueOrThrowArgs} args - Arguments to find a QNa_tb
     * @example
     * // Get one QNa_tb
     * const qNa_tb = await prisma.qNa_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends qNa_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, qNa_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QNa_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qNa_tbFindFirstArgs} args - Arguments to find a QNa_tb
     * @example
     * // Get one QNa_tb
     * const qNa_tb = await prisma.qNa_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends qNa_tbFindFirstArgs>(args?: SelectSubset<T, qNa_tbFindFirstArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QNa_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qNa_tbFindFirstOrThrowArgs} args - Arguments to find a QNa_tb
     * @example
     * // Get one QNa_tb
     * const qNa_tb = await prisma.qNa_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends qNa_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, qNa_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QNa_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qNa_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QNa_tbs
     * const qNa_tbs = await prisma.qNa_tb.findMany()
     * 
     * // Get first 10 QNa_tbs
     * const qNa_tbs = await prisma.qNa_tb.findMany({ take: 10 })
     * 
     * // Only select the `qNaId`
     * const qNa_tbWithQNaIdOnly = await prisma.qNa_tb.findMany({ select: { qNaId: true } })
     * 
     */
    findMany<T extends qNa_tbFindManyArgs>(args?: SelectSubset<T, qNa_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QNa_tb.
     * @param {qNa_tbCreateArgs} args - Arguments to create a QNa_tb.
     * @example
     * // Create one QNa_tb
     * const QNa_tb = await prisma.qNa_tb.create({
     *   data: {
     *     // ... data to create a QNa_tb
     *   }
     * })
     * 
     */
    create<T extends qNa_tbCreateArgs>(args: SelectSubset<T, qNa_tbCreateArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QNa_tbs.
     * @param {qNa_tbCreateManyArgs} args - Arguments to create many QNa_tbs.
     * @example
     * // Create many QNa_tbs
     * const qNa_tb = await prisma.qNa_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends qNa_tbCreateManyArgs>(args?: SelectSubset<T, qNa_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QNa_tb.
     * @param {qNa_tbDeleteArgs} args - Arguments to delete one QNa_tb.
     * @example
     * // Delete one QNa_tb
     * const QNa_tb = await prisma.qNa_tb.delete({
     *   where: {
     *     // ... filter to delete one QNa_tb
     *   }
     * })
     * 
     */
    delete<T extends qNa_tbDeleteArgs>(args: SelectSubset<T, qNa_tbDeleteArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QNa_tb.
     * @param {qNa_tbUpdateArgs} args - Arguments to update one QNa_tb.
     * @example
     * // Update one QNa_tb
     * const qNa_tb = await prisma.qNa_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends qNa_tbUpdateArgs>(args: SelectSubset<T, qNa_tbUpdateArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QNa_tbs.
     * @param {qNa_tbDeleteManyArgs} args - Arguments to filter QNa_tbs to delete.
     * @example
     * // Delete a few QNa_tbs
     * const { count } = await prisma.qNa_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends qNa_tbDeleteManyArgs>(args?: SelectSubset<T, qNa_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QNa_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qNa_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QNa_tbs
     * const qNa_tb = await prisma.qNa_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends qNa_tbUpdateManyArgs>(args: SelectSubset<T, qNa_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QNa_tb.
     * @param {qNa_tbUpsertArgs} args - Arguments to update or create a QNa_tb.
     * @example
     * // Update or create a QNa_tb
     * const qNa_tb = await prisma.qNa_tb.upsert({
     *   create: {
     *     // ... data to create a QNa_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QNa_tb we want to update
     *   }
     * })
     */
    upsert<T extends qNa_tbUpsertArgs>(args: SelectSubset<T, qNa_tbUpsertArgs<ExtArgs>>): Prisma__qNa_tbClient<$Result.GetResult<Prisma.$qNa_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QNa_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qNa_tbCountArgs} args - Arguments to filter QNa_tbs to count.
     * @example
     * // Count the number of QNa_tbs
     * const count = await prisma.qNa_tb.count({
     *   where: {
     *     // ... the filter for the QNa_tbs we want to count
     *   }
     * })
    **/
    count<T extends qNa_tbCountArgs>(
      args?: Subset<T, qNa_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QNa_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QNa_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QNa_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QNa_tbAggregateArgs>(args: Subset<T, QNa_tbAggregateArgs>): Prisma.PrismaPromise<GetQNa_tbAggregateType<T>>

    /**
     * Group by QNa_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qNa_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends qNa_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: qNa_tbGroupByArgs['orderBy'] }
        : { orderBy?: qNa_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, qNa_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQNa_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the qNa_tb model
   */
  readonly fields: qNa_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for qNa_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__qNa_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends chat_tbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chat_tbDefaultArgs<ExtArgs>>): Prisma__chat_tbClient<$Result.GetResult<Prisma.$chat_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the qNa_tb model
   */ 
  interface qNa_tbFieldRefs {
    readonly qNaId: FieldRef<"qNa_tb", 'BigInt'>
    readonly chatId: FieldRef<"qNa_tb", 'BigInt'>
    readonly qNaWords: FieldRef<"qNa_tb", 'String'>
    readonly qNaType: FieldRef<"qNa_tb", 'String'>
    readonly createdAt: FieldRef<"qNa_tb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * qNa_tb findUnique
   */
  export type qNa_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * Filter, which qNa_tb to fetch.
     */
    where: qNa_tbWhereUniqueInput
  }

  /**
   * qNa_tb findUniqueOrThrow
   */
  export type qNa_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * Filter, which qNa_tb to fetch.
     */
    where: qNa_tbWhereUniqueInput
  }

  /**
   * qNa_tb findFirst
   */
  export type qNa_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * Filter, which qNa_tb to fetch.
     */
    where?: qNa_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qNa_tbs to fetch.
     */
    orderBy?: qNa_tbOrderByWithRelationInput | qNa_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qNa_tbs.
     */
    cursor?: qNa_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qNa_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qNa_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qNa_tbs.
     */
    distinct?: QNa_tbScalarFieldEnum | QNa_tbScalarFieldEnum[]
  }

  /**
   * qNa_tb findFirstOrThrow
   */
  export type qNa_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * Filter, which qNa_tb to fetch.
     */
    where?: qNa_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qNa_tbs to fetch.
     */
    orderBy?: qNa_tbOrderByWithRelationInput | qNa_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qNa_tbs.
     */
    cursor?: qNa_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qNa_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qNa_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qNa_tbs.
     */
    distinct?: QNa_tbScalarFieldEnum | QNa_tbScalarFieldEnum[]
  }

  /**
   * qNa_tb findMany
   */
  export type qNa_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * Filter, which qNa_tbs to fetch.
     */
    where?: qNa_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qNa_tbs to fetch.
     */
    orderBy?: qNa_tbOrderByWithRelationInput | qNa_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing qNa_tbs.
     */
    cursor?: qNa_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qNa_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qNa_tbs.
     */
    skip?: number
    distinct?: QNa_tbScalarFieldEnum | QNa_tbScalarFieldEnum[]
  }

  /**
   * qNa_tb create
   */
  export type qNa_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a qNa_tb.
     */
    data: XOR<qNa_tbCreateInput, qNa_tbUncheckedCreateInput>
  }

  /**
   * qNa_tb createMany
   */
  export type qNa_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many qNa_tbs.
     */
    data: qNa_tbCreateManyInput | qNa_tbCreateManyInput[]
  }

  /**
   * qNa_tb update
   */
  export type qNa_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a qNa_tb.
     */
    data: XOR<qNa_tbUpdateInput, qNa_tbUncheckedUpdateInput>
    /**
     * Choose, which qNa_tb to update.
     */
    where: qNa_tbWhereUniqueInput
  }

  /**
   * qNa_tb updateMany
   */
  export type qNa_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update qNa_tbs.
     */
    data: XOR<qNa_tbUpdateManyMutationInput, qNa_tbUncheckedUpdateManyInput>
    /**
     * Filter which qNa_tbs to update
     */
    where?: qNa_tbWhereInput
    /**
     * Limit how many qNa_tbs to update.
     */
    limit?: number
  }

  /**
   * qNa_tb upsert
   */
  export type qNa_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the qNa_tb to update in case it exists.
     */
    where: qNa_tbWhereUniqueInput
    /**
     * In case the qNa_tb found by the `where` argument doesn't exist, create a new qNa_tb with this data.
     */
    create: XOR<qNa_tbCreateInput, qNa_tbUncheckedCreateInput>
    /**
     * In case the qNa_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<qNa_tbUpdateInput, qNa_tbUncheckedUpdateInput>
  }

  /**
   * qNa_tb delete
   */
  export type qNa_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
    /**
     * Filter which qNa_tb to delete.
     */
    where: qNa_tbWhereUniqueInput
  }

  /**
   * qNa_tb deleteMany
   */
  export type qNa_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qNa_tbs to delete
     */
    where?: qNa_tbWhereInput
    /**
     * Limit how many qNa_tbs to delete.
     */
    limit?: number
  }

  /**
   * qNa_tb without action
   */
  export type qNa_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qNa_tb
     */
    select?: qNa_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qNa_tb
     */
    omit?: qNa_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: qNa_tbInclude<ExtArgs> | null
  }


  /**
   * Model book_tb
   */

  export type AggregateBook_tb = {
    _count: Book_tbCountAggregateOutputType | null
    _avg: Book_tbAvgAggregateOutputType | null
    _sum: Book_tbSumAggregateOutputType | null
    _min: Book_tbMinAggregateOutputType | null
    _max: Book_tbMaxAggregateOutputType | null
  }

  export type Book_tbAvgAggregateOutputType = {
    bookId: number | null
  }

  export type Book_tbSumAggregateOutputType = {
    bookId: bigint | null
  }

  export type Book_tbMinAggregateOutputType = {
    bookId: bigint | null
    bookName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Book_tbMaxAggregateOutputType = {
    bookId: bigint | null
    bookName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Book_tbCountAggregateOutputType = {
    bookId: number
    bookName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Book_tbAvgAggregateInputType = {
    bookId?: true
  }

  export type Book_tbSumAggregateInputType = {
    bookId?: true
  }

  export type Book_tbMinAggregateInputType = {
    bookId?: true
    bookName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Book_tbMaxAggregateInputType = {
    bookId?: true
    bookName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Book_tbCountAggregateInputType = {
    bookId?: true
    bookName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Book_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_tb to aggregate.
     */
    where?: book_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tbs to fetch.
     */
    orderBy?: book_tbOrderByWithRelationInput | book_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: book_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned book_tbs
    **/
    _count?: true | Book_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Book_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Book_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_tbMaxAggregateInputType
  }

  export type GetBook_tbAggregateType<T extends Book_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_tb[P]>
      : GetScalarType<T[P], AggregateBook_tb[P]>
  }




  export type book_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_tbWhereInput
    orderBy?: book_tbOrderByWithAggregationInput | book_tbOrderByWithAggregationInput[]
    by: Book_tbScalarFieldEnum[] | Book_tbScalarFieldEnum
    having?: book_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_tbCountAggregateInputType | true
    _avg?: Book_tbAvgAggregateInputType
    _sum?: Book_tbSumAggregateInputType
    _min?: Book_tbMinAggregateInputType
    _max?: Book_tbMaxAggregateInputType
  }

  export type Book_tbGroupByOutputType = {
    bookId: bigint
    bookName: string
    createdAt: Date
    updatedAt: Date
    _count: Book_tbCountAggregateOutputType | null
    _avg: Book_tbAvgAggregateOutputType | null
    _sum: Book_tbSumAggregateOutputType | null
    _min: Book_tbMinAggregateOutputType | null
    _max: Book_tbMaxAggregateOutputType | null
  }

  type GetBook_tbGroupByPayload<T extends book_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Book_tbGroupByOutputType[P]>
        }
      >
    >


  export type book_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    bookName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapters?: boolean | book_tb$chaptersArgs<ExtArgs>
    _count?: boolean | Book_tbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_tb"]>



  export type book_tbSelectScalar = {
    bookId?: boolean
    bookName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type book_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "bookName" | "createdAt" | "updatedAt", ExtArgs["result"]["book_tb"]>
  export type book_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | book_tb$chaptersArgs<ExtArgs>
    _count?: boolean | Book_tbCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $book_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book_tb"
    objects: {
      chapters: Prisma.$chapter_tbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: bigint
      bookName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book_tb"]>
    composites: {}
  }

  type book_tbGetPayload<S extends boolean | null | undefined | book_tbDefaultArgs> = $Result.GetResult<Prisma.$book_tbPayload, S>

  type book_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<book_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_tbCountAggregateInputType | true
    }

  export interface book_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_tb'], meta: { name: 'book_tb' } }
    /**
     * Find zero or one Book_tb that matches the filter.
     * @param {book_tbFindUniqueArgs} args - Arguments to find a Book_tb
     * @example
     * // Get one Book_tb
     * const book_tb = await prisma.book_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends book_tbFindUniqueArgs>(args: SelectSubset<T, book_tbFindUniqueArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {book_tbFindUniqueOrThrowArgs} args - Arguments to find a Book_tb
     * @example
     * // Get one Book_tb
     * const book_tb = await prisma.book_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends book_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, book_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tbFindFirstArgs} args - Arguments to find a Book_tb
     * @example
     * // Get one Book_tb
     * const book_tb = await prisma.book_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends book_tbFindFirstArgs>(args?: SelectSubset<T, book_tbFindFirstArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tbFindFirstOrThrowArgs} args - Arguments to find a Book_tb
     * @example
     * // Get one Book_tb
     * const book_tb = await prisma.book_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends book_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, book_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_tbs
     * const book_tbs = await prisma.book_tb.findMany()
     * 
     * // Get first 10 Book_tbs
     * const book_tbs = await prisma.book_tb.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const book_tbWithBookIdOnly = await prisma.book_tb.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends book_tbFindManyArgs>(args?: SelectSubset<T, book_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_tb.
     * @param {book_tbCreateArgs} args - Arguments to create a Book_tb.
     * @example
     * // Create one Book_tb
     * const Book_tb = await prisma.book_tb.create({
     *   data: {
     *     // ... data to create a Book_tb
     *   }
     * })
     * 
     */
    create<T extends book_tbCreateArgs>(args: SelectSubset<T, book_tbCreateArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_tbs.
     * @param {book_tbCreateManyArgs} args - Arguments to create many Book_tbs.
     * @example
     * // Create many Book_tbs
     * const book_tb = await prisma.book_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends book_tbCreateManyArgs>(args?: SelectSubset<T, book_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book_tb.
     * @param {book_tbDeleteArgs} args - Arguments to delete one Book_tb.
     * @example
     * // Delete one Book_tb
     * const Book_tb = await prisma.book_tb.delete({
     *   where: {
     *     // ... filter to delete one Book_tb
     *   }
     * })
     * 
     */
    delete<T extends book_tbDeleteArgs>(args: SelectSubset<T, book_tbDeleteArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_tb.
     * @param {book_tbUpdateArgs} args - Arguments to update one Book_tb.
     * @example
     * // Update one Book_tb
     * const book_tb = await prisma.book_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends book_tbUpdateArgs>(args: SelectSubset<T, book_tbUpdateArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_tbs.
     * @param {book_tbDeleteManyArgs} args - Arguments to filter Book_tbs to delete.
     * @example
     * // Delete a few Book_tbs
     * const { count } = await prisma.book_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends book_tbDeleteManyArgs>(args?: SelectSubset<T, book_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_tbs
     * const book_tb = await prisma.book_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends book_tbUpdateManyArgs>(args: SelectSubset<T, book_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book_tb.
     * @param {book_tbUpsertArgs} args - Arguments to update or create a Book_tb.
     * @example
     * // Update or create a Book_tb
     * const book_tb = await prisma.book_tb.upsert({
     *   create: {
     *     // ... data to create a Book_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_tb we want to update
     *   }
     * })
     */
    upsert<T extends book_tbUpsertArgs>(args: SelectSubset<T, book_tbUpsertArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Book_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tbCountArgs} args - Arguments to filter Book_tbs to count.
     * @example
     * // Count the number of Book_tbs
     * const count = await prisma.book_tb.count({
     *   where: {
     *     // ... the filter for the Book_tbs we want to count
     *   }
     * })
    **/
    count<T extends book_tbCountArgs>(
      args?: Subset<T, book_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_tbAggregateArgs>(args: Subset<T, Book_tbAggregateArgs>): Prisma.PrismaPromise<GetBook_tbAggregateType<T>>

    /**
     * Group by Book_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends book_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_tbGroupByArgs['orderBy'] }
        : { orderBy?: book_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, book_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book_tb model
   */
  readonly fields: book_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapters<T extends book_tb$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, book_tb$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book_tb model
   */ 
  interface book_tbFieldRefs {
    readonly bookId: FieldRef<"book_tb", 'BigInt'>
    readonly bookName: FieldRef<"book_tb", 'String'>
    readonly createdAt: FieldRef<"book_tb", 'DateTime'>
    readonly updatedAt: FieldRef<"book_tb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * book_tb findUnique
   */
  export type book_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * Filter, which book_tb to fetch.
     */
    where: book_tbWhereUniqueInput
  }

  /**
   * book_tb findUniqueOrThrow
   */
  export type book_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * Filter, which book_tb to fetch.
     */
    where: book_tbWhereUniqueInput
  }

  /**
   * book_tb findFirst
   */
  export type book_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * Filter, which book_tb to fetch.
     */
    where?: book_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tbs to fetch.
     */
    orderBy?: book_tbOrderByWithRelationInput | book_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_tbs.
     */
    cursor?: book_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_tbs.
     */
    distinct?: Book_tbScalarFieldEnum | Book_tbScalarFieldEnum[]
  }

  /**
   * book_tb findFirstOrThrow
   */
  export type book_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * Filter, which book_tb to fetch.
     */
    where?: book_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tbs to fetch.
     */
    orderBy?: book_tbOrderByWithRelationInput | book_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_tbs.
     */
    cursor?: book_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_tbs.
     */
    distinct?: Book_tbScalarFieldEnum | Book_tbScalarFieldEnum[]
  }

  /**
   * book_tb findMany
   */
  export type book_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * Filter, which book_tbs to fetch.
     */
    where?: book_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_tbs to fetch.
     */
    orderBy?: book_tbOrderByWithRelationInput | book_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing book_tbs.
     */
    cursor?: book_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_tbs.
     */
    skip?: number
    distinct?: Book_tbScalarFieldEnum | Book_tbScalarFieldEnum[]
  }

  /**
   * book_tb create
   */
  export type book_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a book_tb.
     */
    data: XOR<book_tbCreateInput, book_tbUncheckedCreateInput>
  }

  /**
   * book_tb createMany
   */
  export type book_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_tbs.
     */
    data: book_tbCreateManyInput | book_tbCreateManyInput[]
  }

  /**
   * book_tb update
   */
  export type book_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a book_tb.
     */
    data: XOR<book_tbUpdateInput, book_tbUncheckedUpdateInput>
    /**
     * Choose, which book_tb to update.
     */
    where: book_tbWhereUniqueInput
  }

  /**
   * book_tb updateMany
   */
  export type book_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_tbs.
     */
    data: XOR<book_tbUpdateManyMutationInput, book_tbUncheckedUpdateManyInput>
    /**
     * Filter which book_tbs to update
     */
    where?: book_tbWhereInput
    /**
     * Limit how many book_tbs to update.
     */
    limit?: number
  }

  /**
   * book_tb upsert
   */
  export type book_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the book_tb to update in case it exists.
     */
    where: book_tbWhereUniqueInput
    /**
     * In case the book_tb found by the `where` argument doesn't exist, create a new book_tb with this data.
     */
    create: XOR<book_tbCreateInput, book_tbUncheckedCreateInput>
    /**
     * In case the book_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_tbUpdateInput, book_tbUncheckedUpdateInput>
  }

  /**
   * book_tb delete
   */
  export type book_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
    /**
     * Filter which book_tb to delete.
     */
    where: book_tbWhereUniqueInput
  }

  /**
   * book_tb deleteMany
   */
  export type book_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_tbs to delete
     */
    where?: book_tbWhereInput
    /**
     * Limit how many book_tbs to delete.
     */
    limit?: number
  }

  /**
   * book_tb.chapters
   */
  export type book_tb$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    where?: chapter_tbWhereInput
    orderBy?: chapter_tbOrderByWithRelationInput | chapter_tbOrderByWithRelationInput[]
    cursor?: chapter_tbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chapter_tbScalarFieldEnum | Chapter_tbScalarFieldEnum[]
  }

  /**
   * book_tb without action
   */
  export type book_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_tb
     */
    select?: book_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_tb
     */
    omit?: book_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_tbInclude<ExtArgs> | null
  }


  /**
   * Model chapter_tb
   */

  export type AggregateChapter_tb = {
    _count: Chapter_tbCountAggregateOutputType | null
    _avg: Chapter_tbAvgAggregateOutputType | null
    _sum: Chapter_tbSumAggregateOutputType | null
    _min: Chapter_tbMinAggregateOutputType | null
    _max: Chapter_tbMaxAggregateOutputType | null
  }

  export type Chapter_tbAvgAggregateOutputType = {
    chapterId: number | null
    bookId: number | null
  }

  export type Chapter_tbSumAggregateOutputType = {
    chapterId: bigint | null
    bookId: bigint | null
  }

  export type Chapter_tbMinAggregateOutputType = {
    chapterId: bigint | null
    bookId: bigint | null
    chapterName: string | null
    chapterText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Chapter_tbMaxAggregateOutputType = {
    chapterId: bigint | null
    bookId: bigint | null
    chapterName: string | null
    chapterText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Chapter_tbCountAggregateOutputType = {
    chapterId: number
    bookId: number
    chapterName: number
    chapterText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Chapter_tbAvgAggregateInputType = {
    chapterId?: true
    bookId?: true
  }

  export type Chapter_tbSumAggregateInputType = {
    chapterId?: true
    bookId?: true
  }

  export type Chapter_tbMinAggregateInputType = {
    chapterId?: true
    bookId?: true
    chapterName?: true
    chapterText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Chapter_tbMaxAggregateInputType = {
    chapterId?: true
    bookId?: true
    chapterName?: true
    chapterText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Chapter_tbCountAggregateInputType = {
    chapterId?: true
    bookId?: true
    chapterName?: true
    chapterText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Chapter_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapter_tb to aggregate.
     */
    where?: chapter_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapter_tbs to fetch.
     */
    orderBy?: chapter_tbOrderByWithRelationInput | chapter_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chapter_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapter_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapter_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chapter_tbs
    **/
    _count?: true | Chapter_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chapter_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chapter_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chapter_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chapter_tbMaxAggregateInputType
  }

  export type GetChapter_tbAggregateType<T extends Chapter_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter_tb[P]>
      : GetScalarType<T[P], AggregateChapter_tb[P]>
  }




  export type chapter_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapter_tbWhereInput
    orderBy?: chapter_tbOrderByWithAggregationInput | chapter_tbOrderByWithAggregationInput[]
    by: Chapter_tbScalarFieldEnum[] | Chapter_tbScalarFieldEnum
    having?: chapter_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chapter_tbCountAggregateInputType | true
    _avg?: Chapter_tbAvgAggregateInputType
    _sum?: Chapter_tbSumAggregateInputType
    _min?: Chapter_tbMinAggregateInputType
    _max?: Chapter_tbMaxAggregateInputType
  }

  export type Chapter_tbGroupByOutputType = {
    chapterId: bigint
    bookId: bigint
    chapterName: string
    chapterText: string
    createdAt: Date
    updatedAt: Date
    _count: Chapter_tbCountAggregateOutputType | null
    _avg: Chapter_tbAvgAggregateOutputType | null
    _sum: Chapter_tbSumAggregateOutputType | null
    _min: Chapter_tbMinAggregateOutputType | null
    _max: Chapter_tbMaxAggregateOutputType | null
  }

  type GetChapter_tbGroupByPayload<T extends chapter_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chapter_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chapter_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chapter_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Chapter_tbGroupByOutputType[P]>
        }
      >
    >


  export type chapter_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chapterId?: boolean
    bookId?: boolean
    chapterName?: boolean
    chapterText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | book_tbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter_tb"]>



  export type chapter_tbSelectScalar = {
    chapterId?: boolean
    bookId?: boolean
    chapterName?: boolean
    chapterText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type chapter_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chapterId" | "bookId" | "chapterName" | "chapterText" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter_tb"]>
  export type chapter_tbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | book_tbDefaultArgs<ExtArgs>
  }

  export type $chapter_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chapter_tb"
    objects: {
      book: Prisma.$book_tbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      chapterId: bigint
      bookId: bigint
      chapterName: string
      chapterText: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapter_tb"]>
    composites: {}
  }

  type chapter_tbGetPayload<S extends boolean | null | undefined | chapter_tbDefaultArgs> = $Result.GetResult<Prisma.$chapter_tbPayload, S>

  type chapter_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chapter_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chapter_tbCountAggregateInputType | true
    }

  export interface chapter_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chapter_tb'], meta: { name: 'chapter_tb' } }
    /**
     * Find zero or one Chapter_tb that matches the filter.
     * @param {chapter_tbFindUniqueArgs} args - Arguments to find a Chapter_tb
     * @example
     * // Get one Chapter_tb
     * const chapter_tb = await prisma.chapter_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chapter_tbFindUniqueArgs>(args: SelectSubset<T, chapter_tbFindUniqueArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chapter_tbFindUniqueOrThrowArgs} args - Arguments to find a Chapter_tb
     * @example
     * // Get one Chapter_tb
     * const chapter_tb = await prisma.chapter_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chapter_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, chapter_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapter_tbFindFirstArgs} args - Arguments to find a Chapter_tb
     * @example
     * // Get one Chapter_tb
     * const chapter_tb = await prisma.chapter_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chapter_tbFindFirstArgs>(args?: SelectSubset<T, chapter_tbFindFirstArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapter_tbFindFirstOrThrowArgs} args - Arguments to find a Chapter_tb
     * @example
     * // Get one Chapter_tb
     * const chapter_tb = await prisma.chapter_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chapter_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, chapter_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapter_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapter_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapter_tbs
     * const chapter_tbs = await prisma.chapter_tb.findMany()
     * 
     * // Get first 10 Chapter_tbs
     * const chapter_tbs = await prisma.chapter_tb.findMany({ take: 10 })
     * 
     * // Only select the `chapterId`
     * const chapter_tbWithChapterIdOnly = await prisma.chapter_tb.findMany({ select: { chapterId: true } })
     * 
     */
    findMany<T extends chapter_tbFindManyArgs>(args?: SelectSubset<T, chapter_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter_tb.
     * @param {chapter_tbCreateArgs} args - Arguments to create a Chapter_tb.
     * @example
     * // Create one Chapter_tb
     * const Chapter_tb = await prisma.chapter_tb.create({
     *   data: {
     *     // ... data to create a Chapter_tb
     *   }
     * })
     * 
     */
    create<T extends chapter_tbCreateArgs>(args: SelectSubset<T, chapter_tbCreateArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapter_tbs.
     * @param {chapter_tbCreateManyArgs} args - Arguments to create many Chapter_tbs.
     * @example
     * // Create many Chapter_tbs
     * const chapter_tb = await prisma.chapter_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chapter_tbCreateManyArgs>(args?: SelectSubset<T, chapter_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter_tb.
     * @param {chapter_tbDeleteArgs} args - Arguments to delete one Chapter_tb.
     * @example
     * // Delete one Chapter_tb
     * const Chapter_tb = await prisma.chapter_tb.delete({
     *   where: {
     *     // ... filter to delete one Chapter_tb
     *   }
     * })
     * 
     */
    delete<T extends chapter_tbDeleteArgs>(args: SelectSubset<T, chapter_tbDeleteArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter_tb.
     * @param {chapter_tbUpdateArgs} args - Arguments to update one Chapter_tb.
     * @example
     * // Update one Chapter_tb
     * const chapter_tb = await prisma.chapter_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chapter_tbUpdateArgs>(args: SelectSubset<T, chapter_tbUpdateArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapter_tbs.
     * @param {chapter_tbDeleteManyArgs} args - Arguments to filter Chapter_tbs to delete.
     * @example
     * // Delete a few Chapter_tbs
     * const { count } = await prisma.chapter_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chapter_tbDeleteManyArgs>(args?: SelectSubset<T, chapter_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapter_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapter_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapter_tbs
     * const chapter_tb = await prisma.chapter_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chapter_tbUpdateManyArgs>(args: SelectSubset<T, chapter_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter_tb.
     * @param {chapter_tbUpsertArgs} args - Arguments to update or create a Chapter_tb.
     * @example
     * // Update or create a Chapter_tb
     * const chapter_tb = await prisma.chapter_tb.upsert({
     *   create: {
     *     // ... data to create a Chapter_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter_tb we want to update
     *   }
     * })
     */
    upsert<T extends chapter_tbUpsertArgs>(args: SelectSubset<T, chapter_tbUpsertArgs<ExtArgs>>): Prisma__chapter_tbClient<$Result.GetResult<Prisma.$chapter_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapter_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapter_tbCountArgs} args - Arguments to filter Chapter_tbs to count.
     * @example
     * // Count the number of Chapter_tbs
     * const count = await prisma.chapter_tb.count({
     *   where: {
     *     // ... the filter for the Chapter_tbs we want to count
     *   }
     * })
    **/
    count<T extends chapter_tbCountArgs>(
      args?: Subset<T, chapter_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chapter_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chapter_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chapter_tbAggregateArgs>(args: Subset<T, Chapter_tbAggregateArgs>): Prisma.PrismaPromise<GetChapter_tbAggregateType<T>>

    /**
     * Group by Chapter_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapter_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chapter_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chapter_tbGroupByArgs['orderBy'] }
        : { orderBy?: chapter_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chapter_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapter_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chapter_tb model
   */
  readonly fields: chapter_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chapter_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chapter_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends book_tbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, book_tbDefaultArgs<ExtArgs>>): Prisma__book_tbClient<$Result.GetResult<Prisma.$book_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chapter_tb model
   */ 
  interface chapter_tbFieldRefs {
    readonly chapterId: FieldRef<"chapter_tb", 'BigInt'>
    readonly bookId: FieldRef<"chapter_tb", 'BigInt'>
    readonly chapterName: FieldRef<"chapter_tb", 'String'>
    readonly chapterText: FieldRef<"chapter_tb", 'String'>
    readonly createdAt: FieldRef<"chapter_tb", 'DateTime'>
    readonly updatedAt: FieldRef<"chapter_tb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chapter_tb findUnique
   */
  export type chapter_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * Filter, which chapter_tb to fetch.
     */
    where: chapter_tbWhereUniqueInput
  }

  /**
   * chapter_tb findUniqueOrThrow
   */
  export type chapter_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * Filter, which chapter_tb to fetch.
     */
    where: chapter_tbWhereUniqueInput
  }

  /**
   * chapter_tb findFirst
   */
  export type chapter_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * Filter, which chapter_tb to fetch.
     */
    where?: chapter_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapter_tbs to fetch.
     */
    orderBy?: chapter_tbOrderByWithRelationInput | chapter_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapter_tbs.
     */
    cursor?: chapter_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapter_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapter_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapter_tbs.
     */
    distinct?: Chapter_tbScalarFieldEnum | Chapter_tbScalarFieldEnum[]
  }

  /**
   * chapter_tb findFirstOrThrow
   */
  export type chapter_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * Filter, which chapter_tb to fetch.
     */
    where?: chapter_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapter_tbs to fetch.
     */
    orderBy?: chapter_tbOrderByWithRelationInput | chapter_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapter_tbs.
     */
    cursor?: chapter_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapter_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapter_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapter_tbs.
     */
    distinct?: Chapter_tbScalarFieldEnum | Chapter_tbScalarFieldEnum[]
  }

  /**
   * chapter_tb findMany
   */
  export type chapter_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * Filter, which chapter_tbs to fetch.
     */
    where?: chapter_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapter_tbs to fetch.
     */
    orderBy?: chapter_tbOrderByWithRelationInput | chapter_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chapter_tbs.
     */
    cursor?: chapter_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapter_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapter_tbs.
     */
    skip?: number
    distinct?: Chapter_tbScalarFieldEnum | Chapter_tbScalarFieldEnum[]
  }

  /**
   * chapter_tb create
   */
  export type chapter_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * The data needed to create a chapter_tb.
     */
    data: XOR<chapter_tbCreateInput, chapter_tbUncheckedCreateInput>
  }

  /**
   * chapter_tb createMany
   */
  export type chapter_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chapter_tbs.
     */
    data: chapter_tbCreateManyInput | chapter_tbCreateManyInput[]
  }

  /**
   * chapter_tb update
   */
  export type chapter_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * The data needed to update a chapter_tb.
     */
    data: XOR<chapter_tbUpdateInput, chapter_tbUncheckedUpdateInput>
    /**
     * Choose, which chapter_tb to update.
     */
    where: chapter_tbWhereUniqueInput
  }

  /**
   * chapter_tb updateMany
   */
  export type chapter_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chapter_tbs.
     */
    data: XOR<chapter_tbUpdateManyMutationInput, chapter_tbUncheckedUpdateManyInput>
    /**
     * Filter which chapter_tbs to update
     */
    where?: chapter_tbWhereInput
    /**
     * Limit how many chapter_tbs to update.
     */
    limit?: number
  }

  /**
   * chapter_tb upsert
   */
  export type chapter_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * The filter to search for the chapter_tb to update in case it exists.
     */
    where: chapter_tbWhereUniqueInput
    /**
     * In case the chapter_tb found by the `where` argument doesn't exist, create a new chapter_tb with this data.
     */
    create: XOR<chapter_tbCreateInput, chapter_tbUncheckedCreateInput>
    /**
     * In case the chapter_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chapter_tbUpdateInput, chapter_tbUncheckedUpdateInput>
  }

  /**
   * chapter_tb delete
   */
  export type chapter_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
    /**
     * Filter which chapter_tb to delete.
     */
    where: chapter_tbWhereUniqueInput
  }

  /**
   * chapter_tb deleteMany
   */
  export type chapter_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapter_tbs to delete
     */
    where?: chapter_tbWhereInput
    /**
     * Limit how many chapter_tbs to delete.
     */
    limit?: number
  }

  /**
   * chapter_tb without action
   */
  export type chapter_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter_tb
     */
    select?: chapter_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter_tb
     */
    omit?: chapter_tbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapter_tbInclude<ExtArgs> | null
  }


  /**
   * Model embeddings_tb
   */

  export type AggregateEmbeddings_tb = {
    _count: Embeddings_tbCountAggregateOutputType | null
    _avg: Embeddings_tbAvgAggregateOutputType | null
    _sum: Embeddings_tbSumAggregateOutputType | null
    _min: Embeddings_tbMinAggregateOutputType | null
    _max: Embeddings_tbMaxAggregateOutputType | null
  }

  export type Embeddings_tbAvgAggregateOutputType = {
    id: number | null
  }

  export type Embeddings_tbSumAggregateOutputType = {
    id: bigint | null
  }

  export type Embeddings_tbMinAggregateOutputType = {
    id: bigint | null
    embeddings: Uint8Array | null
    metadata: Uint8Array | null
    updatedAt: Date | null
  }

  export type Embeddings_tbMaxAggregateOutputType = {
    id: bigint | null
    embeddings: Uint8Array | null
    metadata: Uint8Array | null
    updatedAt: Date | null
  }

  export type Embeddings_tbCountAggregateOutputType = {
    id: number
    embeddings: number
    metadata: number
    updatedAt: number
    _all: number
  }


  export type Embeddings_tbAvgAggregateInputType = {
    id?: true
  }

  export type Embeddings_tbSumAggregateInputType = {
    id?: true
  }

  export type Embeddings_tbMinAggregateInputType = {
    id?: true
    embeddings?: true
    metadata?: true
    updatedAt?: true
  }

  export type Embeddings_tbMaxAggregateInputType = {
    id?: true
    embeddings?: true
    metadata?: true
    updatedAt?: true
  }

  export type Embeddings_tbCountAggregateInputType = {
    id?: true
    embeddings?: true
    metadata?: true
    updatedAt?: true
    _all?: true
  }

  export type Embeddings_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which embeddings_tb to aggregate.
     */
    where?: embeddings_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings_tbs to fetch.
     */
    orderBy?: embeddings_tbOrderByWithRelationInput | embeddings_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: embeddings_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned embeddings_tbs
    **/
    _count?: true | Embeddings_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Embeddings_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Embeddings_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Embeddings_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Embeddings_tbMaxAggregateInputType
  }

  export type GetEmbeddings_tbAggregateType<T extends Embeddings_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbeddings_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbeddings_tb[P]>
      : GetScalarType<T[P], AggregateEmbeddings_tb[P]>
  }




  export type embeddings_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: embeddings_tbWhereInput
    orderBy?: embeddings_tbOrderByWithAggregationInput | embeddings_tbOrderByWithAggregationInput[]
    by: Embeddings_tbScalarFieldEnum[] | Embeddings_tbScalarFieldEnum
    having?: embeddings_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Embeddings_tbCountAggregateInputType | true
    _avg?: Embeddings_tbAvgAggregateInputType
    _sum?: Embeddings_tbSumAggregateInputType
    _min?: Embeddings_tbMinAggregateInputType
    _max?: Embeddings_tbMaxAggregateInputType
  }

  export type Embeddings_tbGroupByOutputType = {
    id: bigint
    embeddings: Uint8Array
    metadata: Uint8Array
    updatedAt: Date
    _count: Embeddings_tbCountAggregateOutputType | null
    _avg: Embeddings_tbAvgAggregateOutputType | null
    _sum: Embeddings_tbSumAggregateOutputType | null
    _min: Embeddings_tbMinAggregateOutputType | null
    _max: Embeddings_tbMaxAggregateOutputType | null
  }

  type GetEmbeddings_tbGroupByPayload<T extends embeddings_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Embeddings_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Embeddings_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Embeddings_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Embeddings_tbGroupByOutputType[P]>
        }
      >
    >


  export type embeddings_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    embeddings?: boolean
    metadata?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["embeddings_tb"]>



  export type embeddings_tbSelectScalar = {
    id?: boolean
    embeddings?: boolean
    metadata?: boolean
    updatedAt?: boolean
  }

  export type embeddings_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "embeddings" | "metadata" | "updatedAt", ExtArgs["result"]["embeddings_tb"]>

  export type $embeddings_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "embeddings_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      embeddings: Uint8Array
      metadata: Uint8Array
      updatedAt: Date
    }, ExtArgs["result"]["embeddings_tb"]>
    composites: {}
  }

  type embeddings_tbGetPayload<S extends boolean | null | undefined | embeddings_tbDefaultArgs> = $Result.GetResult<Prisma.$embeddings_tbPayload, S>

  type embeddings_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<embeddings_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Embeddings_tbCountAggregateInputType | true
    }

  export interface embeddings_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['embeddings_tb'], meta: { name: 'embeddings_tb' } }
    /**
     * Find zero or one Embeddings_tb that matches the filter.
     * @param {embeddings_tbFindUniqueArgs} args - Arguments to find a Embeddings_tb
     * @example
     * // Get one Embeddings_tb
     * const embeddings_tb = await prisma.embeddings_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends embeddings_tbFindUniqueArgs>(args: SelectSubset<T, embeddings_tbFindUniqueArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Embeddings_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {embeddings_tbFindUniqueOrThrowArgs} args - Arguments to find a Embeddings_tb
     * @example
     * // Get one Embeddings_tb
     * const embeddings_tb = await prisma.embeddings_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends embeddings_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, embeddings_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embeddings_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddings_tbFindFirstArgs} args - Arguments to find a Embeddings_tb
     * @example
     * // Get one Embeddings_tb
     * const embeddings_tb = await prisma.embeddings_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends embeddings_tbFindFirstArgs>(args?: SelectSubset<T, embeddings_tbFindFirstArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embeddings_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddings_tbFindFirstOrThrowArgs} args - Arguments to find a Embeddings_tb
     * @example
     * // Get one Embeddings_tb
     * const embeddings_tb = await prisma.embeddings_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends embeddings_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, embeddings_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Embeddings_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddings_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Embeddings_tbs
     * const embeddings_tbs = await prisma.embeddings_tb.findMany()
     * 
     * // Get first 10 Embeddings_tbs
     * const embeddings_tbs = await prisma.embeddings_tb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embeddings_tbWithIdOnly = await prisma.embeddings_tb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends embeddings_tbFindManyArgs>(args?: SelectSubset<T, embeddings_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Embeddings_tb.
     * @param {embeddings_tbCreateArgs} args - Arguments to create a Embeddings_tb.
     * @example
     * // Create one Embeddings_tb
     * const Embeddings_tb = await prisma.embeddings_tb.create({
     *   data: {
     *     // ... data to create a Embeddings_tb
     *   }
     * })
     * 
     */
    create<T extends embeddings_tbCreateArgs>(args: SelectSubset<T, embeddings_tbCreateArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Embeddings_tbs.
     * @param {embeddings_tbCreateManyArgs} args - Arguments to create many Embeddings_tbs.
     * @example
     * // Create many Embeddings_tbs
     * const embeddings_tb = await prisma.embeddings_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends embeddings_tbCreateManyArgs>(args?: SelectSubset<T, embeddings_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Embeddings_tb.
     * @param {embeddings_tbDeleteArgs} args - Arguments to delete one Embeddings_tb.
     * @example
     * // Delete one Embeddings_tb
     * const Embeddings_tb = await prisma.embeddings_tb.delete({
     *   where: {
     *     // ... filter to delete one Embeddings_tb
     *   }
     * })
     * 
     */
    delete<T extends embeddings_tbDeleteArgs>(args: SelectSubset<T, embeddings_tbDeleteArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Embeddings_tb.
     * @param {embeddings_tbUpdateArgs} args - Arguments to update one Embeddings_tb.
     * @example
     * // Update one Embeddings_tb
     * const embeddings_tb = await prisma.embeddings_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends embeddings_tbUpdateArgs>(args: SelectSubset<T, embeddings_tbUpdateArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Embeddings_tbs.
     * @param {embeddings_tbDeleteManyArgs} args - Arguments to filter Embeddings_tbs to delete.
     * @example
     * // Delete a few Embeddings_tbs
     * const { count } = await prisma.embeddings_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends embeddings_tbDeleteManyArgs>(args?: SelectSubset<T, embeddings_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeddings_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddings_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Embeddings_tbs
     * const embeddings_tb = await prisma.embeddings_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends embeddings_tbUpdateManyArgs>(args: SelectSubset<T, embeddings_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Embeddings_tb.
     * @param {embeddings_tbUpsertArgs} args - Arguments to update or create a Embeddings_tb.
     * @example
     * // Update or create a Embeddings_tb
     * const embeddings_tb = await prisma.embeddings_tb.upsert({
     *   create: {
     *     // ... data to create a Embeddings_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Embeddings_tb we want to update
     *   }
     * })
     */
    upsert<T extends embeddings_tbUpsertArgs>(args: SelectSubset<T, embeddings_tbUpsertArgs<ExtArgs>>): Prisma__embeddings_tbClient<$Result.GetResult<Prisma.$embeddings_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Embeddings_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddings_tbCountArgs} args - Arguments to filter Embeddings_tbs to count.
     * @example
     * // Count the number of Embeddings_tbs
     * const count = await prisma.embeddings_tb.count({
     *   where: {
     *     // ... the filter for the Embeddings_tbs we want to count
     *   }
     * })
    **/
    count<T extends embeddings_tbCountArgs>(
      args?: Subset<T, embeddings_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Embeddings_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Embeddings_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Embeddings_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Embeddings_tbAggregateArgs>(args: Subset<T, Embeddings_tbAggregateArgs>): Prisma.PrismaPromise<GetEmbeddings_tbAggregateType<T>>

    /**
     * Group by Embeddings_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddings_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends embeddings_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: embeddings_tbGroupByArgs['orderBy'] }
        : { orderBy?: embeddings_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, embeddings_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbeddings_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the embeddings_tb model
   */
  readonly fields: embeddings_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for embeddings_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__embeddings_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the embeddings_tb model
   */ 
  interface embeddings_tbFieldRefs {
    readonly id: FieldRef<"embeddings_tb", 'BigInt'>
    readonly embeddings: FieldRef<"embeddings_tb", 'Bytes'>
    readonly metadata: FieldRef<"embeddings_tb", 'Bytes'>
    readonly updatedAt: FieldRef<"embeddings_tb", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * embeddings_tb findUnique
   */
  export type embeddings_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * Filter, which embeddings_tb to fetch.
     */
    where: embeddings_tbWhereUniqueInput
  }

  /**
   * embeddings_tb findUniqueOrThrow
   */
  export type embeddings_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * Filter, which embeddings_tb to fetch.
     */
    where: embeddings_tbWhereUniqueInput
  }

  /**
   * embeddings_tb findFirst
   */
  export type embeddings_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * Filter, which embeddings_tb to fetch.
     */
    where?: embeddings_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings_tbs to fetch.
     */
    orderBy?: embeddings_tbOrderByWithRelationInput | embeddings_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for embeddings_tbs.
     */
    cursor?: embeddings_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of embeddings_tbs.
     */
    distinct?: Embeddings_tbScalarFieldEnum | Embeddings_tbScalarFieldEnum[]
  }

  /**
   * embeddings_tb findFirstOrThrow
   */
  export type embeddings_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * Filter, which embeddings_tb to fetch.
     */
    where?: embeddings_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings_tbs to fetch.
     */
    orderBy?: embeddings_tbOrderByWithRelationInput | embeddings_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for embeddings_tbs.
     */
    cursor?: embeddings_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of embeddings_tbs.
     */
    distinct?: Embeddings_tbScalarFieldEnum | Embeddings_tbScalarFieldEnum[]
  }

  /**
   * embeddings_tb findMany
   */
  export type embeddings_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * Filter, which embeddings_tbs to fetch.
     */
    where?: embeddings_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings_tbs to fetch.
     */
    orderBy?: embeddings_tbOrderByWithRelationInput | embeddings_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing embeddings_tbs.
     */
    cursor?: embeddings_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings_tbs.
     */
    skip?: number
    distinct?: Embeddings_tbScalarFieldEnum | Embeddings_tbScalarFieldEnum[]
  }

  /**
   * embeddings_tb create
   */
  export type embeddings_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a embeddings_tb.
     */
    data: XOR<embeddings_tbCreateInput, embeddings_tbUncheckedCreateInput>
  }

  /**
   * embeddings_tb createMany
   */
  export type embeddings_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many embeddings_tbs.
     */
    data: embeddings_tbCreateManyInput | embeddings_tbCreateManyInput[]
  }

  /**
   * embeddings_tb update
   */
  export type embeddings_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a embeddings_tb.
     */
    data: XOR<embeddings_tbUpdateInput, embeddings_tbUncheckedUpdateInput>
    /**
     * Choose, which embeddings_tb to update.
     */
    where: embeddings_tbWhereUniqueInput
  }

  /**
   * embeddings_tb updateMany
   */
  export type embeddings_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update embeddings_tbs.
     */
    data: XOR<embeddings_tbUpdateManyMutationInput, embeddings_tbUncheckedUpdateManyInput>
    /**
     * Filter which embeddings_tbs to update
     */
    where?: embeddings_tbWhereInput
    /**
     * Limit how many embeddings_tbs to update.
     */
    limit?: number
  }

  /**
   * embeddings_tb upsert
   */
  export type embeddings_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the embeddings_tb to update in case it exists.
     */
    where: embeddings_tbWhereUniqueInput
    /**
     * In case the embeddings_tb found by the `where` argument doesn't exist, create a new embeddings_tb with this data.
     */
    create: XOR<embeddings_tbCreateInput, embeddings_tbUncheckedCreateInput>
    /**
     * In case the embeddings_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<embeddings_tbUpdateInput, embeddings_tbUncheckedUpdateInput>
  }

  /**
   * embeddings_tb delete
   */
  export type embeddings_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
    /**
     * Filter which embeddings_tb to delete.
     */
    where: embeddings_tbWhereUniqueInput
  }

  /**
   * embeddings_tb deleteMany
   */
  export type embeddings_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which embeddings_tbs to delete
     */
    where?: embeddings_tbWhereInput
    /**
     * Limit how many embeddings_tbs to delete.
     */
    limit?: number
  }

  /**
   * embeddings_tb without action
   */
  export type embeddings_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embeddings_tb
     */
    select?: embeddings_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embeddings_tb
     */
    omit?: embeddings_tbOmit<ExtArgs> | null
  }


  /**
   * Model log_tb
   */

  export type AggregateLog_tb = {
    _count: Log_tbCountAggregateOutputType | null
    _avg: Log_tbAvgAggregateOutputType | null
    _sum: Log_tbSumAggregateOutputType | null
    _min: Log_tbMinAggregateOutputType | null
    _max: Log_tbMaxAggregateOutputType | null
  }

  export type Log_tbAvgAggregateOutputType = {
    id: number | null
  }

  export type Log_tbSumAggregateOutputType = {
    id: bigint | null
  }

  export type Log_tbMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    message: string | null
  }

  export type Log_tbMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    message: string | null
  }

  export type Log_tbCountAggregateOutputType = {
    id: number
    createdAt: number
    message: number
    _all: number
  }


  export type Log_tbAvgAggregateInputType = {
    id?: true
  }

  export type Log_tbSumAggregateInputType = {
    id?: true
  }

  export type Log_tbMinAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
  }

  export type Log_tbMaxAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
  }

  export type Log_tbCountAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    _all?: true
  }

  export type Log_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_tb to aggregate.
     */
    where?: log_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_tbs to fetch.
     */
    orderBy?: log_tbOrderByWithRelationInput | log_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_tbs
    **/
    _count?: true | Log_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_tbMaxAggregateInputType
  }

  export type GetLog_tbAggregateType<T extends Log_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_tb[P]>
      : GetScalarType<T[P], AggregateLog_tb[P]>
  }




  export type log_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_tbWhereInput
    orderBy?: log_tbOrderByWithAggregationInput | log_tbOrderByWithAggregationInput[]
    by: Log_tbScalarFieldEnum[] | Log_tbScalarFieldEnum
    having?: log_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_tbCountAggregateInputType | true
    _avg?: Log_tbAvgAggregateInputType
    _sum?: Log_tbSumAggregateInputType
    _min?: Log_tbMinAggregateInputType
    _max?: Log_tbMaxAggregateInputType
  }

  export type Log_tbGroupByOutputType = {
    id: bigint
    createdAt: Date
    message: string
    _count: Log_tbCountAggregateOutputType | null
    _avg: Log_tbAvgAggregateOutputType | null
    _sum: Log_tbSumAggregateOutputType | null
    _min: Log_tbMinAggregateOutputType | null
    _max: Log_tbMaxAggregateOutputType | null
  }

  type GetLog_tbGroupByPayload<T extends log_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Log_tbGroupByOutputType[P]>
        }
      >
    >


  export type log_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    message?: boolean
  }, ExtArgs["result"]["log_tb"]>



  export type log_tbSelectScalar = {
    id?: boolean
    createdAt?: boolean
    message?: boolean
  }

  export type log_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "message", ExtArgs["result"]["log_tb"]>

  export type $log_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      message: string
    }, ExtArgs["result"]["log_tb"]>
    composites: {}
  }

  type log_tbGetPayload<S extends boolean | null | undefined | log_tbDefaultArgs> = $Result.GetResult<Prisma.$log_tbPayload, S>

  type log_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<log_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_tbCountAggregateInputType | true
    }

  export interface log_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_tb'], meta: { name: 'log_tb' } }
    /**
     * Find zero or one Log_tb that matches the filter.
     * @param {log_tbFindUniqueArgs} args - Arguments to find a Log_tb
     * @example
     * // Get one Log_tb
     * const log_tb = await prisma.log_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends log_tbFindUniqueArgs>(args: SelectSubset<T, log_tbFindUniqueArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {log_tbFindUniqueOrThrowArgs} args - Arguments to find a Log_tb
     * @example
     * // Get one Log_tb
     * const log_tb = await prisma.log_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends log_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, log_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_tbFindFirstArgs} args - Arguments to find a Log_tb
     * @example
     * // Get one Log_tb
     * const log_tb = await prisma.log_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends log_tbFindFirstArgs>(args?: SelectSubset<T, log_tbFindFirstArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_tbFindFirstOrThrowArgs} args - Arguments to find a Log_tb
     * @example
     * // Get one Log_tb
     * const log_tb = await prisma.log_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends log_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, log_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Log_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_tbs
     * const log_tbs = await prisma.log_tb.findMany()
     * 
     * // Get first 10 Log_tbs
     * const log_tbs = await prisma.log_tb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_tbWithIdOnly = await prisma.log_tb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends log_tbFindManyArgs>(args?: SelectSubset<T, log_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log_tb.
     * @param {log_tbCreateArgs} args - Arguments to create a Log_tb.
     * @example
     * // Create one Log_tb
     * const Log_tb = await prisma.log_tb.create({
     *   data: {
     *     // ... data to create a Log_tb
     *   }
     * })
     * 
     */
    create<T extends log_tbCreateArgs>(args: SelectSubset<T, log_tbCreateArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Log_tbs.
     * @param {log_tbCreateManyArgs} args - Arguments to create many Log_tbs.
     * @example
     * // Create many Log_tbs
     * const log_tb = await prisma.log_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends log_tbCreateManyArgs>(args?: SelectSubset<T, log_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_tb.
     * @param {log_tbDeleteArgs} args - Arguments to delete one Log_tb.
     * @example
     * // Delete one Log_tb
     * const Log_tb = await prisma.log_tb.delete({
     *   where: {
     *     // ... filter to delete one Log_tb
     *   }
     * })
     * 
     */
    delete<T extends log_tbDeleteArgs>(args: SelectSubset<T, log_tbDeleteArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log_tb.
     * @param {log_tbUpdateArgs} args - Arguments to update one Log_tb.
     * @example
     * // Update one Log_tb
     * const log_tb = await prisma.log_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends log_tbUpdateArgs>(args: SelectSubset<T, log_tbUpdateArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Log_tbs.
     * @param {log_tbDeleteManyArgs} args - Arguments to filter Log_tbs to delete.
     * @example
     * // Delete a few Log_tbs
     * const { count } = await prisma.log_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends log_tbDeleteManyArgs>(args?: SelectSubset<T, log_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_tbs
     * const log_tb = await prisma.log_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends log_tbUpdateManyArgs>(args: SelectSubset<T, log_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_tb.
     * @param {log_tbUpsertArgs} args - Arguments to update or create a Log_tb.
     * @example
     * // Update or create a Log_tb
     * const log_tb = await prisma.log_tb.upsert({
     *   create: {
     *     // ... data to create a Log_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_tb we want to update
     *   }
     * })
     */
    upsert<T extends log_tbUpsertArgs>(args: SelectSubset<T, log_tbUpsertArgs<ExtArgs>>): Prisma__log_tbClient<$Result.GetResult<Prisma.$log_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Log_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_tbCountArgs} args - Arguments to filter Log_tbs to count.
     * @example
     * // Count the number of Log_tbs
     * const count = await prisma.log_tb.count({
     *   where: {
     *     // ... the filter for the Log_tbs we want to count
     *   }
     * })
    **/
    count<T extends log_tbCountArgs>(
      args?: Subset<T, log_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Log_tbAggregateArgs>(args: Subset<T, Log_tbAggregateArgs>): Prisma.PrismaPromise<GetLog_tbAggregateType<T>>

    /**
     * Group by Log_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends log_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_tbGroupByArgs['orderBy'] }
        : { orderBy?: log_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, log_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_tb model
   */
  readonly fields: log_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log_tb model
   */ 
  interface log_tbFieldRefs {
    readonly id: FieldRef<"log_tb", 'BigInt'>
    readonly createdAt: FieldRef<"log_tb", 'DateTime'>
    readonly message: FieldRef<"log_tb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * log_tb findUnique
   */
  export type log_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * Filter, which log_tb to fetch.
     */
    where: log_tbWhereUniqueInput
  }

  /**
   * log_tb findUniqueOrThrow
   */
  export type log_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * Filter, which log_tb to fetch.
     */
    where: log_tbWhereUniqueInput
  }

  /**
   * log_tb findFirst
   */
  export type log_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * Filter, which log_tb to fetch.
     */
    where?: log_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_tbs to fetch.
     */
    orderBy?: log_tbOrderByWithRelationInput | log_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_tbs.
     */
    cursor?: log_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_tbs.
     */
    distinct?: Log_tbScalarFieldEnum | Log_tbScalarFieldEnum[]
  }

  /**
   * log_tb findFirstOrThrow
   */
  export type log_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * Filter, which log_tb to fetch.
     */
    where?: log_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_tbs to fetch.
     */
    orderBy?: log_tbOrderByWithRelationInput | log_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_tbs.
     */
    cursor?: log_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_tbs.
     */
    distinct?: Log_tbScalarFieldEnum | Log_tbScalarFieldEnum[]
  }

  /**
   * log_tb findMany
   */
  export type log_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * Filter, which log_tbs to fetch.
     */
    where?: log_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_tbs to fetch.
     */
    orderBy?: log_tbOrderByWithRelationInput | log_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_tbs.
     */
    cursor?: log_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_tbs.
     */
    skip?: number
    distinct?: Log_tbScalarFieldEnum | Log_tbScalarFieldEnum[]
  }

  /**
   * log_tb create
   */
  export type log_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a log_tb.
     */
    data: XOR<log_tbCreateInput, log_tbUncheckedCreateInput>
  }

  /**
   * log_tb createMany
   */
  export type log_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_tbs.
     */
    data: log_tbCreateManyInput | log_tbCreateManyInput[]
  }

  /**
   * log_tb update
   */
  export type log_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a log_tb.
     */
    data: XOR<log_tbUpdateInput, log_tbUncheckedUpdateInput>
    /**
     * Choose, which log_tb to update.
     */
    where: log_tbWhereUniqueInput
  }

  /**
   * log_tb updateMany
   */
  export type log_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_tbs.
     */
    data: XOR<log_tbUpdateManyMutationInput, log_tbUncheckedUpdateManyInput>
    /**
     * Filter which log_tbs to update
     */
    where?: log_tbWhereInput
    /**
     * Limit how many log_tbs to update.
     */
    limit?: number
  }

  /**
   * log_tb upsert
   */
  export type log_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the log_tb to update in case it exists.
     */
    where: log_tbWhereUniqueInput
    /**
     * In case the log_tb found by the `where` argument doesn't exist, create a new log_tb with this data.
     */
    create: XOR<log_tbCreateInput, log_tbUncheckedCreateInput>
    /**
     * In case the log_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_tbUpdateInput, log_tbUncheckedUpdateInput>
  }

  /**
   * log_tb delete
   */
  export type log_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
    /**
     * Filter which log_tb to delete.
     */
    where: log_tbWhereUniqueInput
  }

  /**
   * log_tb deleteMany
   */
  export type log_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_tbs to delete
     */
    where?: log_tbWhereInput
    /**
     * Limit how many log_tbs to delete.
     */
    limit?: number
  }

  /**
   * log_tb without action
   */
  export type log_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_tb
     */
    select?: log_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_tb
     */
    omit?: log_tbOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_tbScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    userEmail: 'userEmail',
    userPassword: 'userPassword',
    createAt: 'createAt'
  };

  export type User_tbScalarFieldEnum = (typeof User_tbScalarFieldEnum)[keyof typeof User_tbScalarFieldEnum]


  export const Chat_tbScalarFieldEnum: {
    chatId: 'chatId',
    userId: 'userId',
    chatHeader: 'chatHeader',
    createAt: 'createAt'
  };

  export type Chat_tbScalarFieldEnum = (typeof Chat_tbScalarFieldEnum)[keyof typeof Chat_tbScalarFieldEnum]


  export const QNa_tbScalarFieldEnum: {
    qNaId: 'qNaId',
    chatId: 'chatId',
    qNaWords: 'qNaWords',
    qNaType: 'qNaType',
    createdAt: 'createdAt'
  };

  export type QNa_tbScalarFieldEnum = (typeof QNa_tbScalarFieldEnum)[keyof typeof QNa_tbScalarFieldEnum]


  export const Book_tbScalarFieldEnum: {
    bookId: 'bookId',
    bookName: 'bookName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Book_tbScalarFieldEnum = (typeof Book_tbScalarFieldEnum)[keyof typeof Book_tbScalarFieldEnum]


  export const Chapter_tbScalarFieldEnum: {
    chapterId: 'chapterId',
    bookId: 'bookId',
    chapterName: 'chapterName',
    chapterText: 'chapterText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Chapter_tbScalarFieldEnum = (typeof Chapter_tbScalarFieldEnum)[keyof typeof Chapter_tbScalarFieldEnum]


  export const Embeddings_tbScalarFieldEnum: {
    id: 'id',
    embeddings: 'embeddings',
    metadata: 'metadata',
    updatedAt: 'updatedAt'
  };

  export type Embeddings_tbScalarFieldEnum = (typeof Embeddings_tbScalarFieldEnum)[keyof typeof Embeddings_tbScalarFieldEnum]


  export const Log_tbScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    message: 'message'
  };

  export type Log_tbScalarFieldEnum = (typeof Log_tbScalarFieldEnum)[keyof typeof Log_tbScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_tbWhereInput = {
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userId?: BigIntFilter<"user_tb"> | bigint | number
    userName?: StringFilter<"user_tb"> | string
    userEmail?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    createAt?: DateTimeFilter<"user_tb"> | Date | string
    chats?: Chat_tbListRelationFilter
  }

  export type user_tbOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    createAt?: SortOrder
    chats?: chat_tbOrderByRelationAggregateInput
  }

  export type user_tbWhereUniqueInput = Prisma.AtLeast<{
    userId?: bigint | number
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userName?: StringFilter<"user_tb"> | string
    userEmail?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    createAt?: DateTimeFilter<"user_tb"> | Date | string
    chats?: Chat_tbListRelationFilter
  }, "userId">

  export type user_tbOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    createAt?: SortOrder
    _count?: user_tbCountOrderByAggregateInput
    _avg?: user_tbAvgOrderByAggregateInput
    _max?: user_tbMaxOrderByAggregateInput
    _min?: user_tbMinOrderByAggregateInput
    _sum?: user_tbSumOrderByAggregateInput
  }

  export type user_tbScalarWhereWithAggregatesInput = {
    AND?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    OR?: user_tbScalarWhereWithAggregatesInput[]
    NOT?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"user_tb"> | bigint | number
    userName?: StringWithAggregatesFilter<"user_tb"> | string
    userEmail?: StringWithAggregatesFilter<"user_tb"> | string
    userPassword?: StringWithAggregatesFilter<"user_tb"> | string
    createAt?: DateTimeWithAggregatesFilter<"user_tb"> | Date | string
  }

  export type chat_tbWhereInput = {
    AND?: chat_tbWhereInput | chat_tbWhereInput[]
    OR?: chat_tbWhereInput[]
    NOT?: chat_tbWhereInput | chat_tbWhereInput[]
    chatId?: BigIntFilter<"chat_tb"> | bigint | number
    userId?: BigIntFilter<"chat_tb"> | bigint | number
    chatHeader?: StringFilter<"chat_tb"> | string
    createAt?: DateTimeFilter<"chat_tb"> | Date | string
    user?: XOR<User_tbScalarRelationFilter, user_tbWhereInput>
    qnas?: QNa_tbListRelationFilter
  }

  export type chat_tbOrderByWithRelationInput = {
    chatId?: SortOrder
    userId?: SortOrder
    chatHeader?: SortOrder
    createAt?: SortOrder
    user?: user_tbOrderByWithRelationInput
    qnas?: qNa_tbOrderByRelationAggregateInput
  }

  export type chat_tbWhereUniqueInput = Prisma.AtLeast<{
    chatId?: bigint | number
    AND?: chat_tbWhereInput | chat_tbWhereInput[]
    OR?: chat_tbWhereInput[]
    NOT?: chat_tbWhereInput | chat_tbWhereInput[]
    userId?: BigIntFilter<"chat_tb"> | bigint | number
    chatHeader?: StringFilter<"chat_tb"> | string
    createAt?: DateTimeFilter<"chat_tb"> | Date | string
    user?: XOR<User_tbScalarRelationFilter, user_tbWhereInput>
    qnas?: QNa_tbListRelationFilter
  }, "chatId">

  export type chat_tbOrderByWithAggregationInput = {
    chatId?: SortOrder
    userId?: SortOrder
    chatHeader?: SortOrder
    createAt?: SortOrder
    _count?: chat_tbCountOrderByAggregateInput
    _avg?: chat_tbAvgOrderByAggregateInput
    _max?: chat_tbMaxOrderByAggregateInput
    _min?: chat_tbMinOrderByAggregateInput
    _sum?: chat_tbSumOrderByAggregateInput
  }

  export type chat_tbScalarWhereWithAggregatesInput = {
    AND?: chat_tbScalarWhereWithAggregatesInput | chat_tbScalarWhereWithAggregatesInput[]
    OR?: chat_tbScalarWhereWithAggregatesInput[]
    NOT?: chat_tbScalarWhereWithAggregatesInput | chat_tbScalarWhereWithAggregatesInput[]
    chatId?: BigIntWithAggregatesFilter<"chat_tb"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"chat_tb"> | bigint | number
    chatHeader?: StringWithAggregatesFilter<"chat_tb"> | string
    createAt?: DateTimeWithAggregatesFilter<"chat_tb"> | Date | string
  }

  export type qNa_tbWhereInput = {
    AND?: qNa_tbWhereInput | qNa_tbWhereInput[]
    OR?: qNa_tbWhereInput[]
    NOT?: qNa_tbWhereInput | qNa_tbWhereInput[]
    qNaId?: BigIntFilter<"qNa_tb"> | bigint | number
    chatId?: BigIntFilter<"qNa_tb"> | bigint | number
    qNaWords?: StringFilter<"qNa_tb"> | string
    qNaType?: StringFilter<"qNa_tb"> | string
    createdAt?: DateTimeFilter<"qNa_tb"> | Date | string
    chat?: XOR<Chat_tbScalarRelationFilter, chat_tbWhereInput>
  }

  export type qNa_tbOrderByWithRelationInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
    qNaWords?: SortOrder
    qNaType?: SortOrder
    createdAt?: SortOrder
    chat?: chat_tbOrderByWithRelationInput
  }

  export type qNa_tbWhereUniqueInput = Prisma.AtLeast<{
    qNaId?: bigint | number
    AND?: qNa_tbWhereInput | qNa_tbWhereInput[]
    OR?: qNa_tbWhereInput[]
    NOT?: qNa_tbWhereInput | qNa_tbWhereInput[]
    chatId?: BigIntFilter<"qNa_tb"> | bigint | number
    qNaWords?: StringFilter<"qNa_tb"> | string
    qNaType?: StringFilter<"qNa_tb"> | string
    createdAt?: DateTimeFilter<"qNa_tb"> | Date | string
    chat?: XOR<Chat_tbScalarRelationFilter, chat_tbWhereInput>
  }, "qNaId">

  export type qNa_tbOrderByWithAggregationInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
    qNaWords?: SortOrder
    qNaType?: SortOrder
    createdAt?: SortOrder
    _count?: qNa_tbCountOrderByAggregateInput
    _avg?: qNa_tbAvgOrderByAggregateInput
    _max?: qNa_tbMaxOrderByAggregateInput
    _min?: qNa_tbMinOrderByAggregateInput
    _sum?: qNa_tbSumOrderByAggregateInput
  }

  export type qNa_tbScalarWhereWithAggregatesInput = {
    AND?: qNa_tbScalarWhereWithAggregatesInput | qNa_tbScalarWhereWithAggregatesInput[]
    OR?: qNa_tbScalarWhereWithAggregatesInput[]
    NOT?: qNa_tbScalarWhereWithAggregatesInput | qNa_tbScalarWhereWithAggregatesInput[]
    qNaId?: BigIntWithAggregatesFilter<"qNa_tb"> | bigint | number
    chatId?: BigIntWithAggregatesFilter<"qNa_tb"> | bigint | number
    qNaWords?: StringWithAggregatesFilter<"qNa_tb"> | string
    qNaType?: StringWithAggregatesFilter<"qNa_tb"> | string
    createdAt?: DateTimeWithAggregatesFilter<"qNa_tb"> | Date | string
  }

  export type book_tbWhereInput = {
    AND?: book_tbWhereInput | book_tbWhereInput[]
    OR?: book_tbWhereInput[]
    NOT?: book_tbWhereInput | book_tbWhereInput[]
    bookId?: BigIntFilter<"book_tb"> | bigint | number
    bookName?: StringFilter<"book_tb"> | string
    createdAt?: DateTimeFilter<"book_tb"> | Date | string
    updatedAt?: DateTimeFilter<"book_tb"> | Date | string
    chapters?: Chapter_tbListRelationFilter
  }

  export type book_tbOrderByWithRelationInput = {
    bookId?: SortOrder
    bookName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapters?: chapter_tbOrderByRelationAggregateInput
  }

  export type book_tbWhereUniqueInput = Prisma.AtLeast<{
    bookId?: bigint | number
    AND?: book_tbWhereInput | book_tbWhereInput[]
    OR?: book_tbWhereInput[]
    NOT?: book_tbWhereInput | book_tbWhereInput[]
    bookName?: StringFilter<"book_tb"> | string
    createdAt?: DateTimeFilter<"book_tb"> | Date | string
    updatedAt?: DateTimeFilter<"book_tb"> | Date | string
    chapters?: Chapter_tbListRelationFilter
  }, "bookId">

  export type book_tbOrderByWithAggregationInput = {
    bookId?: SortOrder
    bookName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: book_tbCountOrderByAggregateInput
    _avg?: book_tbAvgOrderByAggregateInput
    _max?: book_tbMaxOrderByAggregateInput
    _min?: book_tbMinOrderByAggregateInput
    _sum?: book_tbSumOrderByAggregateInput
  }

  export type book_tbScalarWhereWithAggregatesInput = {
    AND?: book_tbScalarWhereWithAggregatesInput | book_tbScalarWhereWithAggregatesInput[]
    OR?: book_tbScalarWhereWithAggregatesInput[]
    NOT?: book_tbScalarWhereWithAggregatesInput | book_tbScalarWhereWithAggregatesInput[]
    bookId?: BigIntWithAggregatesFilter<"book_tb"> | bigint | number
    bookName?: StringWithAggregatesFilter<"book_tb"> | string
    createdAt?: DateTimeWithAggregatesFilter<"book_tb"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"book_tb"> | Date | string
  }

  export type chapter_tbWhereInput = {
    AND?: chapter_tbWhereInput | chapter_tbWhereInput[]
    OR?: chapter_tbWhereInput[]
    NOT?: chapter_tbWhereInput | chapter_tbWhereInput[]
    chapterId?: BigIntFilter<"chapter_tb"> | bigint | number
    bookId?: BigIntFilter<"chapter_tb"> | bigint | number
    chapterName?: StringFilter<"chapter_tb"> | string
    chapterText?: StringFilter<"chapter_tb"> | string
    createdAt?: DateTimeFilter<"chapter_tb"> | Date | string
    updatedAt?: DateTimeFilter<"chapter_tb"> | Date | string
    book?: XOR<Book_tbScalarRelationFilter, book_tbWhereInput>
  }

  export type chapter_tbOrderByWithRelationInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
    chapterName?: SortOrder
    chapterText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: book_tbOrderByWithRelationInput
  }

  export type chapter_tbWhereUniqueInput = Prisma.AtLeast<{
    chapterId?: bigint | number
    AND?: chapter_tbWhereInput | chapter_tbWhereInput[]
    OR?: chapter_tbWhereInput[]
    NOT?: chapter_tbWhereInput | chapter_tbWhereInput[]
    bookId?: BigIntFilter<"chapter_tb"> | bigint | number
    chapterName?: StringFilter<"chapter_tb"> | string
    chapterText?: StringFilter<"chapter_tb"> | string
    createdAt?: DateTimeFilter<"chapter_tb"> | Date | string
    updatedAt?: DateTimeFilter<"chapter_tb"> | Date | string
    book?: XOR<Book_tbScalarRelationFilter, book_tbWhereInput>
  }, "chapterId">

  export type chapter_tbOrderByWithAggregationInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
    chapterName?: SortOrder
    chapterText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: chapter_tbCountOrderByAggregateInput
    _avg?: chapter_tbAvgOrderByAggregateInput
    _max?: chapter_tbMaxOrderByAggregateInput
    _min?: chapter_tbMinOrderByAggregateInput
    _sum?: chapter_tbSumOrderByAggregateInput
  }

  export type chapter_tbScalarWhereWithAggregatesInput = {
    AND?: chapter_tbScalarWhereWithAggregatesInput | chapter_tbScalarWhereWithAggregatesInput[]
    OR?: chapter_tbScalarWhereWithAggregatesInput[]
    NOT?: chapter_tbScalarWhereWithAggregatesInput | chapter_tbScalarWhereWithAggregatesInput[]
    chapterId?: BigIntWithAggregatesFilter<"chapter_tb"> | bigint | number
    bookId?: BigIntWithAggregatesFilter<"chapter_tb"> | bigint | number
    chapterName?: StringWithAggregatesFilter<"chapter_tb"> | string
    chapterText?: StringWithAggregatesFilter<"chapter_tb"> | string
    createdAt?: DateTimeWithAggregatesFilter<"chapter_tb"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"chapter_tb"> | Date | string
  }

  export type embeddings_tbWhereInput = {
    AND?: embeddings_tbWhereInput | embeddings_tbWhereInput[]
    OR?: embeddings_tbWhereInput[]
    NOT?: embeddings_tbWhereInput | embeddings_tbWhereInput[]
    id?: BigIntFilter<"embeddings_tb"> | bigint | number
    embeddings?: BytesFilter<"embeddings_tb"> | Uint8Array
    metadata?: BytesFilter<"embeddings_tb"> | Uint8Array
    updatedAt?: DateTimeFilter<"embeddings_tb"> | Date | string
  }

  export type embeddings_tbOrderByWithRelationInput = {
    id?: SortOrder
    embeddings?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
  }

  export type embeddings_tbWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: embeddings_tbWhereInput | embeddings_tbWhereInput[]
    OR?: embeddings_tbWhereInput[]
    NOT?: embeddings_tbWhereInput | embeddings_tbWhereInput[]
    embeddings?: BytesFilter<"embeddings_tb"> | Uint8Array
    metadata?: BytesFilter<"embeddings_tb"> | Uint8Array
    updatedAt?: DateTimeFilter<"embeddings_tb"> | Date | string
  }, "id">

  export type embeddings_tbOrderByWithAggregationInput = {
    id?: SortOrder
    embeddings?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    _count?: embeddings_tbCountOrderByAggregateInput
    _avg?: embeddings_tbAvgOrderByAggregateInput
    _max?: embeddings_tbMaxOrderByAggregateInput
    _min?: embeddings_tbMinOrderByAggregateInput
    _sum?: embeddings_tbSumOrderByAggregateInput
  }

  export type embeddings_tbScalarWhereWithAggregatesInput = {
    AND?: embeddings_tbScalarWhereWithAggregatesInput | embeddings_tbScalarWhereWithAggregatesInput[]
    OR?: embeddings_tbScalarWhereWithAggregatesInput[]
    NOT?: embeddings_tbScalarWhereWithAggregatesInput | embeddings_tbScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"embeddings_tb"> | bigint | number
    embeddings?: BytesWithAggregatesFilter<"embeddings_tb"> | Uint8Array
    metadata?: BytesWithAggregatesFilter<"embeddings_tb"> | Uint8Array
    updatedAt?: DateTimeWithAggregatesFilter<"embeddings_tb"> | Date | string
  }

  export type log_tbWhereInput = {
    AND?: log_tbWhereInput | log_tbWhereInput[]
    OR?: log_tbWhereInput[]
    NOT?: log_tbWhereInput | log_tbWhereInput[]
    id?: BigIntFilter<"log_tb"> | bigint | number
    createdAt?: DateTimeFilter<"log_tb"> | Date | string
    message?: StringFilter<"log_tb"> | string
  }

  export type log_tbOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type log_tbWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: log_tbWhereInput | log_tbWhereInput[]
    OR?: log_tbWhereInput[]
    NOT?: log_tbWhereInput | log_tbWhereInput[]
    createdAt?: DateTimeFilter<"log_tb"> | Date | string
    message?: StringFilter<"log_tb"> | string
  }, "id">

  export type log_tbOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    _count?: log_tbCountOrderByAggregateInput
    _avg?: log_tbAvgOrderByAggregateInput
    _max?: log_tbMaxOrderByAggregateInput
    _min?: log_tbMinOrderByAggregateInput
    _sum?: log_tbSumOrderByAggregateInput
  }

  export type log_tbScalarWhereWithAggregatesInput = {
    AND?: log_tbScalarWhereWithAggregatesInput | log_tbScalarWhereWithAggregatesInput[]
    OR?: log_tbScalarWhereWithAggregatesInput[]
    NOT?: log_tbScalarWhereWithAggregatesInput | log_tbScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"log_tb"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"log_tb"> | Date | string
    message?: StringWithAggregatesFilter<"log_tb"> | string
  }

  export type user_tbCreateInput = {
    userId?: bigint | number
    userName: string
    userEmail: string
    userPassword: string
    createAt?: Date | string
    chats?: chat_tbCreateNestedManyWithoutUserInput
  }

  export type user_tbUncheckedCreateInput = {
    userId?: bigint | number
    userName: string
    userEmail: string
    userPassword: string
    createAt?: Date | string
    chats?: chat_tbUncheckedCreateNestedManyWithoutUserInput
  }

  export type user_tbUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: chat_tbUpdateManyWithoutUserNestedInput
  }

  export type user_tbUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: chat_tbUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_tbCreateManyInput = {
    userName: string
    userEmail: string
    userPassword: string
    createAt?: Date | string
  }

  export type user_tbUpdateManyMutationInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tbUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_tbCreateInput = {
    chatId?: bigint | number
    chatHeader: string
    createAt?: Date | string
    user: user_tbCreateNestedOneWithoutChatsInput
    qnas?: qNa_tbCreateNestedManyWithoutChatInput
  }

  export type chat_tbUncheckedCreateInput = {
    chatId?: bigint | number
    userId: bigint | number
    chatHeader: string
    createAt?: Date | string
    qnas?: qNa_tbUncheckedCreateNestedManyWithoutChatInput
  }

  export type chat_tbUpdateInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: user_tbUpdateOneRequiredWithoutChatsNestedInput
    qnas?: qNa_tbUpdateManyWithoutChatNestedInput
  }

  export type chat_tbUncheckedUpdateInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qnas?: qNa_tbUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chat_tbCreateManyInput = {
    userId: bigint | number
    chatHeader: string
    createAt?: Date | string
  }

  export type chat_tbUpdateManyMutationInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_tbUncheckedUpdateManyInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbCreateInput = {
    qNaId?: bigint | number
    qNaWords: string
    qNaType: string
    createdAt?: Date | string
    chat: chat_tbCreateNestedOneWithoutQnasInput
  }

  export type qNa_tbUncheckedCreateInput = {
    qNaId?: bigint | number
    chatId: bigint | number
    qNaWords: string
    qNaType: string
    createdAt?: Date | string
  }

  export type qNa_tbUpdateInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: chat_tbUpdateOneRequiredWithoutQnasNestedInput
  }

  export type qNa_tbUncheckedUpdateInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbCreateManyInput = {
    chatId: bigint | number
    qNaWords: string
    qNaType: string
    createdAt?: Date | string
  }

  export type qNa_tbUpdateManyMutationInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbUncheckedUpdateManyInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type book_tbCreateInput = {
    bookId?: bigint | number
    bookName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: chapter_tbCreateNestedManyWithoutBookInput
  }

  export type book_tbUncheckedCreateInput = {
    bookId?: bigint | number
    bookName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: chapter_tbUncheckedCreateNestedManyWithoutBookInput
  }

  export type book_tbUpdateInput = {
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapter_tbUpdateManyWithoutBookNestedInput
  }

  export type book_tbUncheckedUpdateInput = {
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapter_tbUncheckedUpdateManyWithoutBookNestedInput
  }

  export type book_tbCreateManyInput = {
    bookName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type book_tbUpdateManyMutationInput = {
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type book_tbUncheckedUpdateManyInput = {
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbCreateInput = {
    chapterId?: bigint | number
    chapterName: string
    chapterText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: book_tbCreateNestedOneWithoutChaptersInput
  }

  export type chapter_tbUncheckedCreateInput = {
    chapterId?: bigint | number
    bookId: bigint | number
    chapterName: string
    chapterText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chapter_tbUpdateInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: book_tbUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type chapter_tbUncheckedUpdateInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbCreateManyInput = {
    bookId: bigint | number
    chapterName: string
    chapterText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chapter_tbUpdateManyMutationInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbUncheckedUpdateManyInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type embeddings_tbCreateInput = {
    id?: bigint | number
    embeddings: Uint8Array
    metadata: Uint8Array
    updatedAt?: Date | string
  }

  export type embeddings_tbUncheckedCreateInput = {
    id?: bigint | number
    embeddings: Uint8Array
    metadata: Uint8Array
    updatedAt?: Date | string
  }

  export type embeddings_tbUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    embeddings?: BytesFieldUpdateOperationsInput | Uint8Array
    metadata?: BytesFieldUpdateOperationsInput | Uint8Array
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type embeddings_tbUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    embeddings?: BytesFieldUpdateOperationsInput | Uint8Array
    metadata?: BytesFieldUpdateOperationsInput | Uint8Array
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type embeddings_tbCreateManyInput = {
    embeddings: Uint8Array
    metadata: Uint8Array
    updatedAt?: Date | string
  }

  export type embeddings_tbUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    embeddings?: BytesFieldUpdateOperationsInput | Uint8Array
    metadata?: BytesFieldUpdateOperationsInput | Uint8Array
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type embeddings_tbUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    embeddings?: BytesFieldUpdateOperationsInput | Uint8Array
    metadata?: BytesFieldUpdateOperationsInput | Uint8Array
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_tbCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    message: string
  }

  export type log_tbUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    message: string
  }

  export type log_tbUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type log_tbUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type log_tbCreateManyInput = {
    createdAt?: Date | string
    message: string
  }

  export type log_tbUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type log_tbUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Chat_tbListRelationFilter = {
    every?: chat_tbWhereInput
    some?: chat_tbWhereInput
    none?: chat_tbWhereInput
  }

  export type chat_tbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_tbCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    createAt?: SortOrder
  }

  export type user_tbAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type user_tbMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    createAt?: SortOrder
  }

  export type user_tbMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userPassword?: SortOrder
    createAt?: SortOrder
  }

  export type user_tbSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type User_tbScalarRelationFilter = {
    is?: user_tbWhereInput
    isNot?: user_tbWhereInput
  }

  export type QNa_tbListRelationFilter = {
    every?: qNa_tbWhereInput
    some?: qNa_tbWhereInput
    none?: qNa_tbWhereInput
  }

  export type qNa_tbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chat_tbCountOrderByAggregateInput = {
    chatId?: SortOrder
    userId?: SortOrder
    chatHeader?: SortOrder
    createAt?: SortOrder
  }

  export type chat_tbAvgOrderByAggregateInput = {
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type chat_tbMaxOrderByAggregateInput = {
    chatId?: SortOrder
    userId?: SortOrder
    chatHeader?: SortOrder
    createAt?: SortOrder
  }

  export type chat_tbMinOrderByAggregateInput = {
    chatId?: SortOrder
    userId?: SortOrder
    chatHeader?: SortOrder
    createAt?: SortOrder
  }

  export type chat_tbSumOrderByAggregateInput = {
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type Chat_tbScalarRelationFilter = {
    is?: chat_tbWhereInput
    isNot?: chat_tbWhereInput
  }

  export type qNa_tbCountOrderByAggregateInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
    qNaWords?: SortOrder
    qNaType?: SortOrder
    createdAt?: SortOrder
  }

  export type qNa_tbAvgOrderByAggregateInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
  }

  export type qNa_tbMaxOrderByAggregateInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
    qNaWords?: SortOrder
    qNaType?: SortOrder
    createdAt?: SortOrder
  }

  export type qNa_tbMinOrderByAggregateInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
    qNaWords?: SortOrder
    qNaType?: SortOrder
    createdAt?: SortOrder
  }

  export type qNa_tbSumOrderByAggregateInput = {
    qNaId?: SortOrder
    chatId?: SortOrder
  }

  export type Chapter_tbListRelationFilter = {
    every?: chapter_tbWhereInput
    some?: chapter_tbWhereInput
    none?: chapter_tbWhereInput
  }

  export type chapter_tbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type book_tbCountOrderByAggregateInput = {
    bookId?: SortOrder
    bookName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type book_tbAvgOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type book_tbMaxOrderByAggregateInput = {
    bookId?: SortOrder
    bookName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type book_tbMinOrderByAggregateInput = {
    bookId?: SortOrder
    bookName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type book_tbSumOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type Book_tbScalarRelationFilter = {
    is?: book_tbWhereInput
    isNot?: book_tbWhereInput
  }

  export type chapter_tbCountOrderByAggregateInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
    chapterName?: SortOrder
    chapterText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chapter_tbAvgOrderByAggregateInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
  }

  export type chapter_tbMaxOrderByAggregateInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
    chapterName?: SortOrder
    chapterText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chapter_tbMinOrderByAggregateInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
    chapterName?: SortOrder
    chapterText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type chapter_tbSumOrderByAggregateInput = {
    chapterId?: SortOrder
    bookId?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type embeddings_tbCountOrderByAggregateInput = {
    id?: SortOrder
    embeddings?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
  }

  export type embeddings_tbAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type embeddings_tbMaxOrderByAggregateInput = {
    id?: SortOrder
    embeddings?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
  }

  export type embeddings_tbMinOrderByAggregateInput = {
    id?: SortOrder
    embeddings?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
  }

  export type embeddings_tbSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type log_tbCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type log_tbAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type log_tbMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type log_tbMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type log_tbSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chat_tbCreateNestedManyWithoutUserInput = {
    create?: XOR<chat_tbCreateWithoutUserInput, chat_tbUncheckedCreateWithoutUserInput> | chat_tbCreateWithoutUserInput[] | chat_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_tbCreateOrConnectWithoutUserInput | chat_tbCreateOrConnectWithoutUserInput[]
    createMany?: chat_tbCreateManyUserInputEnvelope
    connect?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
  }

  export type chat_tbUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<chat_tbCreateWithoutUserInput, chat_tbUncheckedCreateWithoutUserInput> | chat_tbCreateWithoutUserInput[] | chat_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_tbCreateOrConnectWithoutUserInput | chat_tbCreateOrConnectWithoutUserInput[]
    createMany?: chat_tbCreateManyUserInputEnvelope
    connect?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type chat_tbUpdateManyWithoutUserNestedInput = {
    create?: XOR<chat_tbCreateWithoutUserInput, chat_tbUncheckedCreateWithoutUserInput> | chat_tbCreateWithoutUserInput[] | chat_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_tbCreateOrConnectWithoutUserInput | chat_tbCreateOrConnectWithoutUserInput[]
    upsert?: chat_tbUpsertWithWhereUniqueWithoutUserInput | chat_tbUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: chat_tbCreateManyUserInputEnvelope
    set?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    disconnect?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    delete?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    connect?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    update?: chat_tbUpdateWithWhereUniqueWithoutUserInput | chat_tbUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: chat_tbUpdateManyWithWhereWithoutUserInput | chat_tbUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: chat_tbScalarWhereInput | chat_tbScalarWhereInput[]
  }

  export type chat_tbUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<chat_tbCreateWithoutUserInput, chat_tbUncheckedCreateWithoutUserInput> | chat_tbCreateWithoutUserInput[] | chat_tbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chat_tbCreateOrConnectWithoutUserInput | chat_tbCreateOrConnectWithoutUserInput[]
    upsert?: chat_tbUpsertWithWhereUniqueWithoutUserInput | chat_tbUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: chat_tbCreateManyUserInputEnvelope
    set?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    disconnect?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    delete?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    connect?: chat_tbWhereUniqueInput | chat_tbWhereUniqueInput[]
    update?: chat_tbUpdateWithWhereUniqueWithoutUserInput | chat_tbUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: chat_tbUpdateManyWithWhereWithoutUserInput | chat_tbUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: chat_tbScalarWhereInput | chat_tbScalarWhereInput[]
  }

  export type user_tbCreateNestedOneWithoutChatsInput = {
    create?: XOR<user_tbCreateWithoutChatsInput, user_tbUncheckedCreateWithoutChatsInput>
    connectOrCreate?: user_tbCreateOrConnectWithoutChatsInput
    connect?: user_tbWhereUniqueInput
  }

  export type qNa_tbCreateNestedManyWithoutChatInput = {
    create?: XOR<qNa_tbCreateWithoutChatInput, qNa_tbUncheckedCreateWithoutChatInput> | qNa_tbCreateWithoutChatInput[] | qNa_tbUncheckedCreateWithoutChatInput[]
    connectOrCreate?: qNa_tbCreateOrConnectWithoutChatInput | qNa_tbCreateOrConnectWithoutChatInput[]
    createMany?: qNa_tbCreateManyChatInputEnvelope
    connect?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
  }

  export type qNa_tbUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<qNa_tbCreateWithoutChatInput, qNa_tbUncheckedCreateWithoutChatInput> | qNa_tbCreateWithoutChatInput[] | qNa_tbUncheckedCreateWithoutChatInput[]
    connectOrCreate?: qNa_tbCreateOrConnectWithoutChatInput | qNa_tbCreateOrConnectWithoutChatInput[]
    createMany?: qNa_tbCreateManyChatInputEnvelope
    connect?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
  }

  export type user_tbUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<user_tbCreateWithoutChatsInput, user_tbUncheckedCreateWithoutChatsInput>
    connectOrCreate?: user_tbCreateOrConnectWithoutChatsInput
    upsert?: user_tbUpsertWithoutChatsInput
    connect?: user_tbWhereUniqueInput
    update?: XOR<XOR<user_tbUpdateToOneWithWhereWithoutChatsInput, user_tbUpdateWithoutChatsInput>, user_tbUncheckedUpdateWithoutChatsInput>
  }

  export type qNa_tbUpdateManyWithoutChatNestedInput = {
    create?: XOR<qNa_tbCreateWithoutChatInput, qNa_tbUncheckedCreateWithoutChatInput> | qNa_tbCreateWithoutChatInput[] | qNa_tbUncheckedCreateWithoutChatInput[]
    connectOrCreate?: qNa_tbCreateOrConnectWithoutChatInput | qNa_tbCreateOrConnectWithoutChatInput[]
    upsert?: qNa_tbUpsertWithWhereUniqueWithoutChatInput | qNa_tbUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: qNa_tbCreateManyChatInputEnvelope
    set?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    disconnect?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    delete?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    connect?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    update?: qNa_tbUpdateWithWhereUniqueWithoutChatInput | qNa_tbUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: qNa_tbUpdateManyWithWhereWithoutChatInput | qNa_tbUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: qNa_tbScalarWhereInput | qNa_tbScalarWhereInput[]
  }

  export type qNa_tbUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<qNa_tbCreateWithoutChatInput, qNa_tbUncheckedCreateWithoutChatInput> | qNa_tbCreateWithoutChatInput[] | qNa_tbUncheckedCreateWithoutChatInput[]
    connectOrCreate?: qNa_tbCreateOrConnectWithoutChatInput | qNa_tbCreateOrConnectWithoutChatInput[]
    upsert?: qNa_tbUpsertWithWhereUniqueWithoutChatInput | qNa_tbUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: qNa_tbCreateManyChatInputEnvelope
    set?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    disconnect?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    delete?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    connect?: qNa_tbWhereUniqueInput | qNa_tbWhereUniqueInput[]
    update?: qNa_tbUpdateWithWhereUniqueWithoutChatInput | qNa_tbUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: qNa_tbUpdateManyWithWhereWithoutChatInput | qNa_tbUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: qNa_tbScalarWhereInput | qNa_tbScalarWhereInput[]
  }

  export type chat_tbCreateNestedOneWithoutQnasInput = {
    create?: XOR<chat_tbCreateWithoutQnasInput, chat_tbUncheckedCreateWithoutQnasInput>
    connectOrCreate?: chat_tbCreateOrConnectWithoutQnasInput
    connect?: chat_tbWhereUniqueInput
  }

  export type chat_tbUpdateOneRequiredWithoutQnasNestedInput = {
    create?: XOR<chat_tbCreateWithoutQnasInput, chat_tbUncheckedCreateWithoutQnasInput>
    connectOrCreate?: chat_tbCreateOrConnectWithoutQnasInput
    upsert?: chat_tbUpsertWithoutQnasInput
    connect?: chat_tbWhereUniqueInput
    update?: XOR<XOR<chat_tbUpdateToOneWithWhereWithoutQnasInput, chat_tbUpdateWithoutQnasInput>, chat_tbUncheckedUpdateWithoutQnasInput>
  }

  export type chapter_tbCreateNestedManyWithoutBookInput = {
    create?: XOR<chapter_tbCreateWithoutBookInput, chapter_tbUncheckedCreateWithoutBookInput> | chapter_tbCreateWithoutBookInput[] | chapter_tbUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapter_tbCreateOrConnectWithoutBookInput | chapter_tbCreateOrConnectWithoutBookInput[]
    createMany?: chapter_tbCreateManyBookInputEnvelope
    connect?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
  }

  export type chapter_tbUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<chapter_tbCreateWithoutBookInput, chapter_tbUncheckedCreateWithoutBookInput> | chapter_tbCreateWithoutBookInput[] | chapter_tbUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapter_tbCreateOrConnectWithoutBookInput | chapter_tbCreateOrConnectWithoutBookInput[]
    createMany?: chapter_tbCreateManyBookInputEnvelope
    connect?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
  }

  export type chapter_tbUpdateManyWithoutBookNestedInput = {
    create?: XOR<chapter_tbCreateWithoutBookInput, chapter_tbUncheckedCreateWithoutBookInput> | chapter_tbCreateWithoutBookInput[] | chapter_tbUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapter_tbCreateOrConnectWithoutBookInput | chapter_tbCreateOrConnectWithoutBookInput[]
    upsert?: chapter_tbUpsertWithWhereUniqueWithoutBookInput | chapter_tbUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: chapter_tbCreateManyBookInputEnvelope
    set?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    disconnect?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    delete?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    connect?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    update?: chapter_tbUpdateWithWhereUniqueWithoutBookInput | chapter_tbUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: chapter_tbUpdateManyWithWhereWithoutBookInput | chapter_tbUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: chapter_tbScalarWhereInput | chapter_tbScalarWhereInput[]
  }

  export type chapter_tbUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<chapter_tbCreateWithoutBookInput, chapter_tbUncheckedCreateWithoutBookInput> | chapter_tbCreateWithoutBookInput[] | chapter_tbUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapter_tbCreateOrConnectWithoutBookInput | chapter_tbCreateOrConnectWithoutBookInput[]
    upsert?: chapter_tbUpsertWithWhereUniqueWithoutBookInput | chapter_tbUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: chapter_tbCreateManyBookInputEnvelope
    set?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    disconnect?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    delete?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    connect?: chapter_tbWhereUniqueInput | chapter_tbWhereUniqueInput[]
    update?: chapter_tbUpdateWithWhereUniqueWithoutBookInput | chapter_tbUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: chapter_tbUpdateManyWithWhereWithoutBookInput | chapter_tbUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: chapter_tbScalarWhereInput | chapter_tbScalarWhereInput[]
  }

  export type book_tbCreateNestedOneWithoutChaptersInput = {
    create?: XOR<book_tbCreateWithoutChaptersInput, book_tbUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: book_tbCreateOrConnectWithoutChaptersInput
    connect?: book_tbWhereUniqueInput
  }

  export type book_tbUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<book_tbCreateWithoutChaptersInput, book_tbUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: book_tbCreateOrConnectWithoutChaptersInput
    upsert?: book_tbUpsertWithoutChaptersInput
    connect?: book_tbWhereUniqueInput
    update?: XOR<XOR<book_tbUpdateToOneWithWhereWithoutChaptersInput, book_tbUpdateWithoutChaptersInput>, book_tbUncheckedUpdateWithoutChaptersInput>
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type chat_tbCreateWithoutUserInput = {
    chatId?: bigint | number
    chatHeader: string
    createAt?: Date | string
    qnas?: qNa_tbCreateNestedManyWithoutChatInput
  }

  export type chat_tbUncheckedCreateWithoutUserInput = {
    chatId?: bigint | number
    chatHeader: string
    createAt?: Date | string
    qnas?: qNa_tbUncheckedCreateNestedManyWithoutChatInput
  }

  export type chat_tbCreateOrConnectWithoutUserInput = {
    where: chat_tbWhereUniqueInput
    create: XOR<chat_tbCreateWithoutUserInput, chat_tbUncheckedCreateWithoutUserInput>
  }

  export type chat_tbCreateManyUserInputEnvelope = {
    data: chat_tbCreateManyUserInput | chat_tbCreateManyUserInput[]
  }

  export type chat_tbUpsertWithWhereUniqueWithoutUserInput = {
    where: chat_tbWhereUniqueInput
    update: XOR<chat_tbUpdateWithoutUserInput, chat_tbUncheckedUpdateWithoutUserInput>
    create: XOR<chat_tbCreateWithoutUserInput, chat_tbUncheckedCreateWithoutUserInput>
  }

  export type chat_tbUpdateWithWhereUniqueWithoutUserInput = {
    where: chat_tbWhereUniqueInput
    data: XOR<chat_tbUpdateWithoutUserInput, chat_tbUncheckedUpdateWithoutUserInput>
  }

  export type chat_tbUpdateManyWithWhereWithoutUserInput = {
    where: chat_tbScalarWhereInput
    data: XOR<chat_tbUpdateManyMutationInput, chat_tbUncheckedUpdateManyWithoutUserInput>
  }

  export type chat_tbScalarWhereInput = {
    AND?: chat_tbScalarWhereInput | chat_tbScalarWhereInput[]
    OR?: chat_tbScalarWhereInput[]
    NOT?: chat_tbScalarWhereInput | chat_tbScalarWhereInput[]
    chatId?: BigIntFilter<"chat_tb"> | bigint | number
    userId?: BigIntFilter<"chat_tb"> | bigint | number
    chatHeader?: StringFilter<"chat_tb"> | string
    createAt?: DateTimeFilter<"chat_tb"> | Date | string
  }

  export type user_tbCreateWithoutChatsInput = {
    userId?: bigint | number
    userName: string
    userEmail: string
    userPassword: string
    createAt?: Date | string
  }

  export type user_tbUncheckedCreateWithoutChatsInput = {
    userId?: bigint | number
    userName: string
    userEmail: string
    userPassword: string
    createAt?: Date | string
  }

  export type user_tbCreateOrConnectWithoutChatsInput = {
    where: user_tbWhereUniqueInput
    create: XOR<user_tbCreateWithoutChatsInput, user_tbUncheckedCreateWithoutChatsInput>
  }

  export type qNa_tbCreateWithoutChatInput = {
    qNaId?: bigint | number
    qNaWords: string
    qNaType: string
    createdAt?: Date | string
  }

  export type qNa_tbUncheckedCreateWithoutChatInput = {
    qNaId?: bigint | number
    qNaWords: string
    qNaType: string
    createdAt?: Date | string
  }

  export type qNa_tbCreateOrConnectWithoutChatInput = {
    where: qNa_tbWhereUniqueInput
    create: XOR<qNa_tbCreateWithoutChatInput, qNa_tbUncheckedCreateWithoutChatInput>
  }

  export type qNa_tbCreateManyChatInputEnvelope = {
    data: qNa_tbCreateManyChatInput | qNa_tbCreateManyChatInput[]
  }

  export type user_tbUpsertWithoutChatsInput = {
    update: XOR<user_tbUpdateWithoutChatsInput, user_tbUncheckedUpdateWithoutChatsInput>
    create: XOR<user_tbCreateWithoutChatsInput, user_tbUncheckedCreateWithoutChatsInput>
    where?: user_tbWhereInput
  }

  export type user_tbUpdateToOneWithWhereWithoutChatsInput = {
    where?: user_tbWhereInput
    data: XOR<user_tbUpdateWithoutChatsInput, user_tbUncheckedUpdateWithoutChatsInput>
  }

  export type user_tbUpdateWithoutChatsInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tbUncheckedUpdateWithoutChatsInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbUpsertWithWhereUniqueWithoutChatInput = {
    where: qNa_tbWhereUniqueInput
    update: XOR<qNa_tbUpdateWithoutChatInput, qNa_tbUncheckedUpdateWithoutChatInput>
    create: XOR<qNa_tbCreateWithoutChatInput, qNa_tbUncheckedCreateWithoutChatInput>
  }

  export type qNa_tbUpdateWithWhereUniqueWithoutChatInput = {
    where: qNa_tbWhereUniqueInput
    data: XOR<qNa_tbUpdateWithoutChatInput, qNa_tbUncheckedUpdateWithoutChatInput>
  }

  export type qNa_tbUpdateManyWithWhereWithoutChatInput = {
    where: qNa_tbScalarWhereInput
    data: XOR<qNa_tbUpdateManyMutationInput, qNa_tbUncheckedUpdateManyWithoutChatInput>
  }

  export type qNa_tbScalarWhereInput = {
    AND?: qNa_tbScalarWhereInput | qNa_tbScalarWhereInput[]
    OR?: qNa_tbScalarWhereInput[]
    NOT?: qNa_tbScalarWhereInput | qNa_tbScalarWhereInput[]
    qNaId?: BigIntFilter<"qNa_tb"> | bigint | number
    chatId?: BigIntFilter<"qNa_tb"> | bigint | number
    qNaWords?: StringFilter<"qNa_tb"> | string
    qNaType?: StringFilter<"qNa_tb"> | string
    createdAt?: DateTimeFilter<"qNa_tb"> | Date | string
  }

  export type chat_tbCreateWithoutQnasInput = {
    chatId?: bigint | number
    chatHeader: string
    createAt?: Date | string
    user: user_tbCreateNestedOneWithoutChatsInput
  }

  export type chat_tbUncheckedCreateWithoutQnasInput = {
    chatId?: bigint | number
    userId: bigint | number
    chatHeader: string
    createAt?: Date | string
  }

  export type chat_tbCreateOrConnectWithoutQnasInput = {
    where: chat_tbWhereUniqueInput
    create: XOR<chat_tbCreateWithoutQnasInput, chat_tbUncheckedCreateWithoutQnasInput>
  }

  export type chat_tbUpsertWithoutQnasInput = {
    update: XOR<chat_tbUpdateWithoutQnasInput, chat_tbUncheckedUpdateWithoutQnasInput>
    create: XOR<chat_tbCreateWithoutQnasInput, chat_tbUncheckedCreateWithoutQnasInput>
    where?: chat_tbWhereInput
  }

  export type chat_tbUpdateToOneWithWhereWithoutQnasInput = {
    where?: chat_tbWhereInput
    data: XOR<chat_tbUpdateWithoutQnasInput, chat_tbUncheckedUpdateWithoutQnasInput>
  }

  export type chat_tbUpdateWithoutQnasInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: user_tbUpdateOneRequiredWithoutChatsNestedInput
  }

  export type chat_tbUncheckedUpdateWithoutQnasInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbCreateWithoutBookInput = {
    chapterId?: bigint | number
    chapterName: string
    chapterText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chapter_tbUncheckedCreateWithoutBookInput = {
    chapterId?: bigint | number
    chapterName: string
    chapterText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chapter_tbCreateOrConnectWithoutBookInput = {
    where: chapter_tbWhereUniqueInput
    create: XOR<chapter_tbCreateWithoutBookInput, chapter_tbUncheckedCreateWithoutBookInput>
  }

  export type chapter_tbCreateManyBookInputEnvelope = {
    data: chapter_tbCreateManyBookInput | chapter_tbCreateManyBookInput[]
  }

  export type chapter_tbUpsertWithWhereUniqueWithoutBookInput = {
    where: chapter_tbWhereUniqueInput
    update: XOR<chapter_tbUpdateWithoutBookInput, chapter_tbUncheckedUpdateWithoutBookInput>
    create: XOR<chapter_tbCreateWithoutBookInput, chapter_tbUncheckedCreateWithoutBookInput>
  }

  export type chapter_tbUpdateWithWhereUniqueWithoutBookInput = {
    where: chapter_tbWhereUniqueInput
    data: XOR<chapter_tbUpdateWithoutBookInput, chapter_tbUncheckedUpdateWithoutBookInput>
  }

  export type chapter_tbUpdateManyWithWhereWithoutBookInput = {
    where: chapter_tbScalarWhereInput
    data: XOR<chapter_tbUpdateManyMutationInput, chapter_tbUncheckedUpdateManyWithoutBookInput>
  }

  export type chapter_tbScalarWhereInput = {
    AND?: chapter_tbScalarWhereInput | chapter_tbScalarWhereInput[]
    OR?: chapter_tbScalarWhereInput[]
    NOT?: chapter_tbScalarWhereInput | chapter_tbScalarWhereInput[]
    chapterId?: BigIntFilter<"chapter_tb"> | bigint | number
    bookId?: BigIntFilter<"chapter_tb"> | bigint | number
    chapterName?: StringFilter<"chapter_tb"> | string
    chapterText?: StringFilter<"chapter_tb"> | string
    createdAt?: DateTimeFilter<"chapter_tb"> | Date | string
    updatedAt?: DateTimeFilter<"chapter_tb"> | Date | string
  }

  export type book_tbCreateWithoutChaptersInput = {
    bookId?: bigint | number
    bookName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type book_tbUncheckedCreateWithoutChaptersInput = {
    bookId?: bigint | number
    bookName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type book_tbCreateOrConnectWithoutChaptersInput = {
    where: book_tbWhereUniqueInput
    create: XOR<book_tbCreateWithoutChaptersInput, book_tbUncheckedCreateWithoutChaptersInput>
  }

  export type book_tbUpsertWithoutChaptersInput = {
    update: XOR<book_tbUpdateWithoutChaptersInput, book_tbUncheckedUpdateWithoutChaptersInput>
    create: XOR<book_tbCreateWithoutChaptersInput, book_tbUncheckedCreateWithoutChaptersInput>
    where?: book_tbWhereInput
  }

  export type book_tbUpdateToOneWithWhereWithoutChaptersInput = {
    where?: book_tbWhereInput
    data: XOR<book_tbUpdateWithoutChaptersInput, book_tbUncheckedUpdateWithoutChaptersInput>
  }

  export type book_tbUpdateWithoutChaptersInput = {
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type book_tbUncheckedUpdateWithoutChaptersInput = {
    bookId?: BigIntFieldUpdateOperationsInput | bigint | number
    bookName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_tbCreateManyUserInput = {
    chatHeader: string
    createAt?: Date | string
  }

  export type chat_tbUpdateWithoutUserInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qnas?: qNa_tbUpdateManyWithoutChatNestedInput
  }

  export type chat_tbUncheckedUpdateWithoutUserInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qnas?: qNa_tbUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chat_tbUncheckedUpdateManyWithoutUserInput = {
    chatId?: BigIntFieldUpdateOperationsInput | bigint | number
    chatHeader?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbCreateManyChatInput = {
    qNaWords: string
    qNaType: string
    createdAt?: Date | string
  }

  export type qNa_tbUpdateWithoutChatInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbUncheckedUpdateWithoutChatInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qNa_tbUncheckedUpdateManyWithoutChatInput = {
    qNaId?: BigIntFieldUpdateOperationsInput | bigint | number
    qNaWords?: StringFieldUpdateOperationsInput | string
    qNaType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbCreateManyBookInput = {
    chapterName: string
    chapterText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chapter_tbUpdateWithoutBookInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbUncheckedUpdateWithoutBookInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapter_tbUncheckedUpdateManyWithoutBookInput = {
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    chapterName?: StringFieldUpdateOperationsInput | string
    chapterText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}