
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model vote_options
 * 
 */
export type vote_options = $Result.DefaultSelection<Prisma.$vote_optionsPayload>
/**
 * Model votes
 * 
 */
export type votes = $Result.DefaultSelection<Prisma.$votesPayload>
/**
 * Model comment_likes
 * 
 */
export type comment_likes = $Result.DefaultSelection<Prisma.$comment_likesPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote_options`: Exposes CRUD operations for the **vote_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vote_options
    * const vote_options = await prisma.vote_options.findMany()
    * ```
    */
  get vote_options(): Prisma.vote_optionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votes`: Exposes CRUD operations for the **votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.votes.findMany()
    * ```
    */
  get votes(): Prisma.votesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment_likes`: Exposes CRUD operations for the **comment_likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comment_likes
    * const comment_likes = await prisma.comment_likes.findMany()
    * ```
    */
  get comment_likes(): Prisma.comment_likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    users: 'users',
    vote_options: 'vote_options',
    votes: 'votes',
    comment_likes: 'comment_likes',
    comments: 'comments'
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
      modelProps: "users" | "vote_options" | "votes" | "comment_likes" | "comments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      vote_options: {
        payload: Prisma.$vote_optionsPayload<ExtArgs>
        fields: Prisma.vote_optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vote_optionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vote_optionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>
          }
          findFirst: {
            args: Prisma.vote_optionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vote_optionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>
          }
          findMany: {
            args: Prisma.vote_optionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>[]
          }
          create: {
            args: Prisma.vote_optionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>
          }
          createMany: {
            args: Prisma.vote_optionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vote_optionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>[]
          }
          delete: {
            args: Prisma.vote_optionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>
          }
          update: {
            args: Prisma.vote_optionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>
          }
          deleteMany: {
            args: Prisma.vote_optionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vote_optionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vote_optionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>[]
          }
          upsert: {
            args: Prisma.vote_optionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vote_optionsPayload>
          }
          aggregate: {
            args: Prisma.Vote_optionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote_options>
          }
          groupBy: {
            args: Prisma.vote_optionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vote_optionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vote_optionsCountArgs<ExtArgs>
            result: $Utils.Optional<Vote_optionsCountAggregateOutputType> | number
          }
        }
      }
      votes: {
        payload: Prisma.$votesPayload<ExtArgs>
        fields: Prisma.votesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.votesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.votesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          findFirst: {
            args: Prisma.votesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.votesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          findMany: {
            args: Prisma.votesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          create: {
            args: Prisma.votesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          createMany: {
            args: Prisma.votesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.votesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          delete: {
            args: Prisma.votesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          update: {
            args: Prisma.votesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          deleteMany: {
            args: Prisma.votesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.votesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.votesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          upsert: {
            args: Prisma.votesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          aggregate: {
            args: Prisma.VotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotes>
          }
          groupBy: {
            args: Prisma.votesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.votesCountArgs<ExtArgs>
            result: $Utils.Optional<VotesCountAggregateOutputType> | number
          }
        }
      }
      comment_likes: {
        payload: Prisma.$comment_likesPayload<ExtArgs>
        fields: Prisma.comment_likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comment_likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comment_likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          findFirst: {
            args: Prisma.comment_likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comment_likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          findMany: {
            args: Prisma.comment_likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>[]
          }
          create: {
            args: Prisma.comment_likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          createMany: {
            args: Prisma.comment_likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.comment_likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>[]
          }
          delete: {
            args: Prisma.comment_likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          update: {
            args: Prisma.comment_likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          deleteMany: {
            args: Prisma.comment_likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comment_likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.comment_likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>[]
          }
          upsert: {
            args: Prisma.comment_likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          aggregate: {
            args: Prisma.Comment_likesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment_likes>
          }
          groupBy: {
            args: Prisma.comment_likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Comment_likesGroupByOutputType>[]
          }
          count: {
            args: Prisma.comment_likesCountArgs<ExtArgs>
            result: $Utils.Optional<Comment_likesCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
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
    users?: usersOmit
    vote_options?: vote_optionsOmit
    votes?: votesOmit
    comment_likes?: comment_likesOmit
    comments?: commentsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comment_likes: number
    comments: number
    createdVotes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment_likes?: boolean | UsersCountOutputTypeCountComment_likesArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    createdVotes?: boolean | UsersCountOutputTypeCountCreatedVotesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountComment_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_likesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreatedVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votesWhereInput
  }


  /**
   * Count Type VotesCountOutputType
   */

  export type VotesCountOutputType = {
    comments: number
    vote_options: number
  }

  export type VotesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | VotesCountOutputTypeCountCommentsArgs
    vote_options?: boolean | VotesCountOutputTypeCountVote_optionsArgs
  }

  // Custom InputTypes
  /**
   * VotesCountOutputType without action
   */
  export type VotesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotesCountOutputType
     */
    select?: VotesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VotesCountOutputType without action
   */
  export type VotesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * VotesCountOutputType without action
   */
  export type VotesCountOutputTypeCountVote_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vote_optionsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    comment_likes: number
    other_comments: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment_likes?: boolean | CommentsCountOutputTypeCountComment_likesArgs
    other_comments?: boolean | CommentsCountOutputTypeCountOther_commentsArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountComment_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_likesWhereInput
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountOther_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    nickname: string | null
    profile_image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nickname: string | null
    profile_image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    nickname: number
    profile_image: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    profile_image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    profile_image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    profile_image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    nickname: string
    profile_image: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    profile_image?: boolean
    comment_likes?: boolean | users$comment_likesArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    createdVotes?: boolean | users$createdVotesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    profile_image?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    profile_image?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    nickname?: boolean
    profile_image?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nickname" | "profile_image", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment_likes?: boolean | users$comment_likesArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    createdVotes?: boolean | users$createdVotesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comment_likes: Prisma.$comment_likesPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      createdVotes: Prisma.$votesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nickname: string
      profile_image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment_likes<T extends users$comment_likesArgs<ExtArgs> = {}>(args?: Subset<T, users$comment_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdVotes<T extends users$createdVotesArgs<ExtArgs> = {}>(args?: Subset<T, users$createdVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly nickname: FieldRef<"users", 'String'>
    readonly profile_image: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comment_likes
   */
  export type users$comment_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    where?: comment_likesWhereInput
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    cursor?: comment_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.createdVotes
   */
  export type users$createdVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    where?: votesWhereInput
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    cursor?: votesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model vote_options
   */

  export type AggregateVote_options = {
    _count: Vote_optionsCountAggregateOutputType | null
    _avg: Vote_optionsAvgAggregateOutputType | null
    _sum: Vote_optionsSumAggregateOutputType | null
    _min: Vote_optionsMinAggregateOutputType | null
    _max: Vote_optionsMaxAggregateOutputType | null
  }

  export type Vote_optionsAvgAggregateOutputType = {
    id: number | null
    vote_id: number | null
    vote_count: number | null
  }

  export type Vote_optionsSumAggregateOutputType = {
    id: bigint | null
    vote_id: bigint | null
    vote_count: number | null
  }

  export type Vote_optionsMinAggregateOutputType = {
    id: bigint | null
    vote_id: bigint | null
    name: string | null
    vote_count: number | null
  }

  export type Vote_optionsMaxAggregateOutputType = {
    id: bigint | null
    vote_id: bigint | null
    name: string | null
    vote_count: number | null
  }

  export type Vote_optionsCountAggregateOutputType = {
    id: number
    vote_id: number
    name: number
    vote_count: number
    _all: number
  }


  export type Vote_optionsAvgAggregateInputType = {
    id?: true
    vote_id?: true
    vote_count?: true
  }

  export type Vote_optionsSumAggregateInputType = {
    id?: true
    vote_id?: true
    vote_count?: true
  }

  export type Vote_optionsMinAggregateInputType = {
    id?: true
    vote_id?: true
    name?: true
    vote_count?: true
  }

  export type Vote_optionsMaxAggregateInputType = {
    id?: true
    vote_id?: true
    name?: true
    vote_count?: true
  }

  export type Vote_optionsCountAggregateInputType = {
    id?: true
    vote_id?: true
    name?: true
    vote_count?: true
    _all?: true
  }

  export type Vote_optionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vote_options to aggregate.
     */
    where?: vote_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vote_options to fetch.
     */
    orderBy?: vote_optionsOrderByWithRelationInput | vote_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vote_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vote_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vote_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vote_options
    **/
    _count?: true | Vote_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vote_optionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vote_optionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vote_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vote_optionsMaxAggregateInputType
  }

  export type GetVote_optionsAggregateType<T extends Vote_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregateVote_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote_options[P]>
      : GetScalarType<T[P], AggregateVote_options[P]>
  }




  export type vote_optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vote_optionsWhereInput
    orderBy?: vote_optionsOrderByWithAggregationInput | vote_optionsOrderByWithAggregationInput[]
    by: Vote_optionsScalarFieldEnum[] | Vote_optionsScalarFieldEnum
    having?: vote_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vote_optionsCountAggregateInputType | true
    _avg?: Vote_optionsAvgAggregateInputType
    _sum?: Vote_optionsSumAggregateInputType
    _min?: Vote_optionsMinAggregateInputType
    _max?: Vote_optionsMaxAggregateInputType
  }

  export type Vote_optionsGroupByOutputType = {
    id: bigint
    vote_id: bigint
    name: string
    vote_count: number
    _count: Vote_optionsCountAggregateOutputType | null
    _avg: Vote_optionsAvgAggregateOutputType | null
    _sum: Vote_optionsSumAggregateOutputType | null
    _min: Vote_optionsMinAggregateOutputType | null
    _max: Vote_optionsMaxAggregateOutputType | null
  }

  type GetVote_optionsGroupByPayload<T extends vote_optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vote_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vote_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vote_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Vote_optionsGroupByOutputType[P]>
        }
      >
    >


  export type vote_optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_id?: boolean
    name?: boolean
    vote_count?: boolean
    vote?: boolean | votesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote_options"]>

  export type vote_optionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_id?: boolean
    name?: boolean
    vote_count?: boolean
    vote?: boolean | votesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote_options"]>

  export type vote_optionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_id?: boolean
    name?: boolean
    vote_count?: boolean
    vote?: boolean | votesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote_options"]>

  export type vote_optionsSelectScalar = {
    id?: boolean
    vote_id?: boolean
    name?: boolean
    vote_count?: boolean
  }

  export type vote_optionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vote_id" | "name" | "vote_count", ExtArgs["result"]["vote_options"]>
  export type vote_optionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vote?: boolean | votesDefaultArgs<ExtArgs>
  }
  export type vote_optionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vote?: boolean | votesDefaultArgs<ExtArgs>
  }
  export type vote_optionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vote?: boolean | votesDefaultArgs<ExtArgs>
  }

  export type $vote_optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vote_options"
    objects: {
      vote: Prisma.$votesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      vote_id: bigint
      name: string
      vote_count: number
    }, ExtArgs["result"]["vote_options"]>
    composites: {}
  }

  type vote_optionsGetPayload<S extends boolean | null | undefined | vote_optionsDefaultArgs> = $Result.GetResult<Prisma.$vote_optionsPayload, S>

  type vote_optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vote_optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vote_optionsCountAggregateInputType | true
    }

  export interface vote_optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vote_options'], meta: { name: 'vote_options' } }
    /**
     * Find zero or one Vote_options that matches the filter.
     * @param {vote_optionsFindUniqueArgs} args - Arguments to find a Vote_options
     * @example
     * // Get one Vote_options
     * const vote_options = await prisma.vote_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vote_optionsFindUniqueArgs>(args: SelectSubset<T, vote_optionsFindUniqueArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote_options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vote_optionsFindUniqueOrThrowArgs} args - Arguments to find a Vote_options
     * @example
     * // Get one Vote_options
     * const vote_options = await prisma.vote_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vote_optionsFindUniqueOrThrowArgs>(args: SelectSubset<T, vote_optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vote_optionsFindFirstArgs} args - Arguments to find a Vote_options
     * @example
     * // Get one Vote_options
     * const vote_options = await prisma.vote_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vote_optionsFindFirstArgs>(args?: SelectSubset<T, vote_optionsFindFirstArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote_options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vote_optionsFindFirstOrThrowArgs} args - Arguments to find a Vote_options
     * @example
     * // Get one Vote_options
     * const vote_options = await prisma.vote_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vote_optionsFindFirstOrThrowArgs>(args?: SelectSubset<T, vote_optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vote_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vote_optionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vote_options
     * const vote_options = await prisma.vote_options.findMany()
     * 
     * // Get first 10 Vote_options
     * const vote_options = await prisma.vote_options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vote_optionsWithIdOnly = await prisma.vote_options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vote_optionsFindManyArgs>(args?: SelectSubset<T, vote_optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote_options.
     * @param {vote_optionsCreateArgs} args - Arguments to create a Vote_options.
     * @example
     * // Create one Vote_options
     * const Vote_options = await prisma.vote_options.create({
     *   data: {
     *     // ... data to create a Vote_options
     *   }
     * })
     * 
     */
    create<T extends vote_optionsCreateArgs>(args: SelectSubset<T, vote_optionsCreateArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vote_options.
     * @param {vote_optionsCreateManyArgs} args - Arguments to create many Vote_options.
     * @example
     * // Create many Vote_options
     * const vote_options = await prisma.vote_options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vote_optionsCreateManyArgs>(args?: SelectSubset<T, vote_optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vote_options and returns the data saved in the database.
     * @param {vote_optionsCreateManyAndReturnArgs} args - Arguments to create many Vote_options.
     * @example
     * // Create many Vote_options
     * const vote_options = await prisma.vote_options.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vote_options and only return the `id`
     * const vote_optionsWithIdOnly = await prisma.vote_options.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vote_optionsCreateManyAndReturnArgs>(args?: SelectSubset<T, vote_optionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote_options.
     * @param {vote_optionsDeleteArgs} args - Arguments to delete one Vote_options.
     * @example
     * // Delete one Vote_options
     * const Vote_options = await prisma.vote_options.delete({
     *   where: {
     *     // ... filter to delete one Vote_options
     *   }
     * })
     * 
     */
    delete<T extends vote_optionsDeleteArgs>(args: SelectSubset<T, vote_optionsDeleteArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote_options.
     * @param {vote_optionsUpdateArgs} args - Arguments to update one Vote_options.
     * @example
     * // Update one Vote_options
     * const vote_options = await prisma.vote_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vote_optionsUpdateArgs>(args: SelectSubset<T, vote_optionsUpdateArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vote_options.
     * @param {vote_optionsDeleteManyArgs} args - Arguments to filter Vote_options to delete.
     * @example
     * // Delete a few Vote_options
     * const { count } = await prisma.vote_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vote_optionsDeleteManyArgs>(args?: SelectSubset<T, vote_optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vote_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vote_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vote_options
     * const vote_options = await prisma.vote_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vote_optionsUpdateManyArgs>(args: SelectSubset<T, vote_optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vote_options and returns the data updated in the database.
     * @param {vote_optionsUpdateManyAndReturnArgs} args - Arguments to update many Vote_options.
     * @example
     * // Update many Vote_options
     * const vote_options = await prisma.vote_options.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vote_options and only return the `id`
     * const vote_optionsWithIdOnly = await prisma.vote_options.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vote_optionsUpdateManyAndReturnArgs>(args: SelectSubset<T, vote_optionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote_options.
     * @param {vote_optionsUpsertArgs} args - Arguments to update or create a Vote_options.
     * @example
     * // Update or create a Vote_options
     * const vote_options = await prisma.vote_options.upsert({
     *   create: {
     *     // ... data to create a Vote_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote_options we want to update
     *   }
     * })
     */
    upsert<T extends vote_optionsUpsertArgs>(args: SelectSubset<T, vote_optionsUpsertArgs<ExtArgs>>): Prisma__vote_optionsClient<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vote_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vote_optionsCountArgs} args - Arguments to filter Vote_options to count.
     * @example
     * // Count the number of Vote_options
     * const count = await prisma.vote_options.count({
     *   where: {
     *     // ... the filter for the Vote_options we want to count
     *   }
     * })
    **/
    count<T extends vote_optionsCountArgs>(
      args?: Subset<T, vote_optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vote_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vote_optionsAggregateArgs>(args: Subset<T, Vote_optionsAggregateArgs>): Prisma.PrismaPromise<GetVote_optionsAggregateType<T>>

    /**
     * Group by Vote_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vote_optionsGroupByArgs} args - Group by arguments.
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
      T extends vote_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vote_optionsGroupByArgs['orderBy'] }
        : { orderBy?: vote_optionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vote_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVote_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vote_options model
   */
  readonly fields: vote_optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vote_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vote_optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vote<T extends votesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, votesDefaultArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vote_options model
   */
  interface vote_optionsFieldRefs {
    readonly id: FieldRef<"vote_options", 'BigInt'>
    readonly vote_id: FieldRef<"vote_options", 'BigInt'>
    readonly name: FieldRef<"vote_options", 'String'>
    readonly vote_count: FieldRef<"vote_options", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * vote_options findUnique
   */
  export type vote_optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * Filter, which vote_options to fetch.
     */
    where: vote_optionsWhereUniqueInput
  }

  /**
   * vote_options findUniqueOrThrow
   */
  export type vote_optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * Filter, which vote_options to fetch.
     */
    where: vote_optionsWhereUniqueInput
  }

  /**
   * vote_options findFirst
   */
  export type vote_optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * Filter, which vote_options to fetch.
     */
    where?: vote_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vote_options to fetch.
     */
    orderBy?: vote_optionsOrderByWithRelationInput | vote_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vote_options.
     */
    cursor?: vote_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vote_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vote_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vote_options.
     */
    distinct?: Vote_optionsScalarFieldEnum | Vote_optionsScalarFieldEnum[]
  }

  /**
   * vote_options findFirstOrThrow
   */
  export type vote_optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * Filter, which vote_options to fetch.
     */
    where?: vote_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vote_options to fetch.
     */
    orderBy?: vote_optionsOrderByWithRelationInput | vote_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vote_options.
     */
    cursor?: vote_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vote_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vote_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vote_options.
     */
    distinct?: Vote_optionsScalarFieldEnum | Vote_optionsScalarFieldEnum[]
  }

  /**
   * vote_options findMany
   */
  export type vote_optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * Filter, which vote_options to fetch.
     */
    where?: vote_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vote_options to fetch.
     */
    orderBy?: vote_optionsOrderByWithRelationInput | vote_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vote_options.
     */
    cursor?: vote_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vote_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vote_options.
     */
    skip?: number
    distinct?: Vote_optionsScalarFieldEnum | Vote_optionsScalarFieldEnum[]
  }

  /**
   * vote_options create
   */
  export type vote_optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * The data needed to create a vote_options.
     */
    data: XOR<vote_optionsCreateInput, vote_optionsUncheckedCreateInput>
  }

  /**
   * vote_options createMany
   */
  export type vote_optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vote_options.
     */
    data: vote_optionsCreateManyInput | vote_optionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vote_options createManyAndReturn
   */
  export type vote_optionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * The data used to create many vote_options.
     */
    data: vote_optionsCreateManyInput | vote_optionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vote_options update
   */
  export type vote_optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * The data needed to update a vote_options.
     */
    data: XOR<vote_optionsUpdateInput, vote_optionsUncheckedUpdateInput>
    /**
     * Choose, which vote_options to update.
     */
    where: vote_optionsWhereUniqueInput
  }

  /**
   * vote_options updateMany
   */
  export type vote_optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vote_options.
     */
    data: XOR<vote_optionsUpdateManyMutationInput, vote_optionsUncheckedUpdateManyInput>
    /**
     * Filter which vote_options to update
     */
    where?: vote_optionsWhereInput
    /**
     * Limit how many vote_options to update.
     */
    limit?: number
  }

  /**
   * vote_options updateManyAndReturn
   */
  export type vote_optionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * The data used to update vote_options.
     */
    data: XOR<vote_optionsUpdateManyMutationInput, vote_optionsUncheckedUpdateManyInput>
    /**
     * Filter which vote_options to update
     */
    where?: vote_optionsWhereInput
    /**
     * Limit how many vote_options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vote_options upsert
   */
  export type vote_optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * The filter to search for the vote_options to update in case it exists.
     */
    where: vote_optionsWhereUniqueInput
    /**
     * In case the vote_options found by the `where` argument doesn't exist, create a new vote_options with this data.
     */
    create: XOR<vote_optionsCreateInput, vote_optionsUncheckedCreateInput>
    /**
     * In case the vote_options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vote_optionsUpdateInput, vote_optionsUncheckedUpdateInput>
  }

  /**
   * vote_options delete
   */
  export type vote_optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    /**
     * Filter which vote_options to delete.
     */
    where: vote_optionsWhereUniqueInput
  }

  /**
   * vote_options deleteMany
   */
  export type vote_optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vote_options to delete
     */
    where?: vote_optionsWhereInput
    /**
     * Limit how many vote_options to delete.
     */
    limit?: number
  }

  /**
   * vote_options without action
   */
  export type vote_optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
  }


  /**
   * Model votes
   */

  export type AggregateVotes = {
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  export type VotesAvgAggregateOutputType = {
    id: number | null
    vote_count: number | null
  }

  export type VotesSumAggregateOutputType = {
    id: bigint | null
    vote_count: number | null
  }

  export type VotesMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    category_name: string | null
    vote_count: number | null
    created_by: string | null
    created_at: Date | null
    expires_at: Date | null
    category_value: string | null
    is_duplicate_vote: boolean | null
  }

  export type VotesMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    category_name: string | null
    vote_count: number | null
    created_by: string | null
    created_at: Date | null
    expires_at: Date | null
    category_value: string | null
    is_duplicate_vote: boolean | null
  }

  export type VotesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category_name: number
    vote_count: number
    created_by: number
    created_at: number
    expires_at: number
    category_value: number
    is_duplicate_vote: number
    _all: number
  }


  export type VotesAvgAggregateInputType = {
    id?: true
    vote_count?: true
  }

  export type VotesSumAggregateInputType = {
    id?: true
    vote_count?: true
  }

  export type VotesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category_name?: true
    vote_count?: true
    created_by?: true
    created_at?: true
    expires_at?: true
    category_value?: true
    is_duplicate_vote?: true
  }

  export type VotesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category_name?: true
    vote_count?: true
    created_by?: true
    created_at?: true
    expires_at?: true
    category_value?: true
    is_duplicate_vote?: true
  }

  export type VotesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category_name?: true
    vote_count?: true
    created_by?: true
    created_at?: true
    expires_at?: true
    category_value?: true
    is_duplicate_vote?: true
    _all?: true
  }

  export type VotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to aggregate.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned votes
    **/
    _count?: true | VotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotesMaxAggregateInputType
  }

  export type GetVotesAggregateType<T extends VotesAggregateArgs> = {
        [P in keyof T & keyof AggregateVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotes[P]>
      : GetScalarType<T[P], AggregateVotes[P]>
  }




  export type votesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votesWhereInput
    orderBy?: votesOrderByWithAggregationInput | votesOrderByWithAggregationInput[]
    by: VotesScalarFieldEnum[] | VotesScalarFieldEnum
    having?: votesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotesCountAggregateInputType | true
    _avg?: VotesAvgAggregateInputType
    _sum?: VotesSumAggregateInputType
    _min?: VotesMinAggregateInputType
    _max?: VotesMaxAggregateInputType
  }

  export type VotesGroupByOutputType = {
    id: bigint
    title: string
    description: string | null
    category_name: string
    vote_count: number
    created_by: string
    created_at: Date
    expires_at: Date
    category_value: string
    is_duplicate_vote: boolean
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  type GetVotesGroupByPayload<T extends votesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotesGroupByOutputType[P]>
            : GetScalarType<T[P], VotesGroupByOutputType[P]>
        }
      >
    >


  export type votesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category_name?: boolean
    vote_count?: boolean
    created_by?: boolean
    created_at?: boolean
    expires_at?: boolean
    category_value?: boolean
    is_duplicate_vote?: boolean
    comments?: boolean | votes$commentsArgs<ExtArgs>
    vote_options?: boolean | votes$vote_optionsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | VotesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type votesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category_name?: boolean
    vote_count?: boolean
    created_by?: boolean
    created_at?: boolean
    expires_at?: boolean
    category_value?: boolean
    is_duplicate_vote?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type votesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category_name?: boolean
    vote_count?: boolean
    created_by?: boolean
    created_at?: boolean
    expires_at?: boolean
    category_value?: boolean
    is_duplicate_vote?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type votesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category_name?: boolean
    vote_count?: boolean
    created_by?: boolean
    created_at?: boolean
    expires_at?: boolean
    category_value?: boolean
    is_duplicate_vote?: boolean
  }

  export type votesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category_name" | "vote_count" | "created_by" | "created_at" | "expires_at" | "category_value" | "is_duplicate_vote", ExtArgs["result"]["votes"]>
  export type votesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | votes$commentsArgs<ExtArgs>
    vote_options?: boolean | votes$vote_optionsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | VotesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type votesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type votesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $votesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "votes"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      vote_options: Prisma.$vote_optionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      description: string | null
      category_name: string
      vote_count: number
      created_by: string
      created_at: Date
      expires_at: Date
      category_value: string
      is_duplicate_vote: boolean
    }, ExtArgs["result"]["votes"]>
    composites: {}
  }

  type votesGetPayload<S extends boolean | null | undefined | votesDefaultArgs> = $Result.GetResult<Prisma.$votesPayload, S>

  type votesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<votesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotesCountAggregateInputType | true
    }

  export interface votesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['votes'], meta: { name: 'votes' } }
    /**
     * Find zero or one Votes that matches the filter.
     * @param {votesFindUniqueArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends votesFindUniqueArgs>(args: SelectSubset<T, votesFindUniqueArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Votes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {votesFindUniqueOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends votesFindUniqueOrThrowArgs>(args: SelectSubset<T, votesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends votesFindFirstArgs>(args?: SelectSubset<T, votesFindFirstArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends votesFindFirstOrThrowArgs>(args?: SelectSubset<T, votesFindFirstOrThrowArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.votes.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.votes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votesWithIdOnly = await prisma.votes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends votesFindManyArgs>(args?: SelectSubset<T, votesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Votes.
     * @param {votesCreateArgs} args - Arguments to create a Votes.
     * @example
     * // Create one Votes
     * const Votes = await prisma.votes.create({
     *   data: {
     *     // ... data to create a Votes
     *   }
     * })
     * 
     */
    create<T extends votesCreateArgs>(args: SelectSubset<T, votesCreateArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {votesCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const votes = await prisma.votes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends votesCreateManyArgs>(args?: SelectSubset<T, votesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {votesCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const votes = await prisma.votes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const votesWithIdOnly = await prisma.votes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends votesCreateManyAndReturnArgs>(args?: SelectSubset<T, votesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Votes.
     * @param {votesDeleteArgs} args - Arguments to delete one Votes.
     * @example
     * // Delete one Votes
     * const Votes = await prisma.votes.delete({
     *   where: {
     *     // ... filter to delete one Votes
     *   }
     * })
     * 
     */
    delete<T extends votesDeleteArgs>(args: SelectSubset<T, votesDeleteArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Votes.
     * @param {votesUpdateArgs} args - Arguments to update one Votes.
     * @example
     * // Update one Votes
     * const votes = await prisma.votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends votesUpdateArgs>(args: SelectSubset<T, votesUpdateArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {votesDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends votesDeleteManyArgs>(args?: SelectSubset<T, votesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends votesUpdateManyArgs>(args: SelectSubset<T, votesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {votesUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const votesWithIdOnly = await prisma.votes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends votesUpdateManyAndReturnArgs>(args: SelectSubset<T, votesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Votes.
     * @param {votesUpsertArgs} args - Arguments to update or create a Votes.
     * @example
     * // Update or create a Votes
     * const votes = await prisma.votes.upsert({
     *   create: {
     *     // ... data to create a Votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votes we want to update
     *   }
     * })
     */
    upsert<T extends votesUpsertArgs>(args: SelectSubset<T, votesUpsertArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.votes.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends votesCountArgs>(
      args?: Subset<T, votesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VotesAggregateArgs>(args: Subset<T, VotesAggregateArgs>): Prisma.PrismaPromise<GetVotesAggregateType<T>>

    /**
     * Group by Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesGroupByArgs} args - Group by arguments.
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
      T extends votesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: votesGroupByArgs['orderBy'] }
        : { orderBy?: votesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, votesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the votes model
   */
  readonly fields: votesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__votesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends votes$commentsArgs<ExtArgs> = {}>(args?: Subset<T, votes$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vote_options<T extends votes$vote_optionsArgs<ExtArgs> = {}>(args?: Subset<T, votes$vote_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vote_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the votes model
   */
  interface votesFieldRefs {
    readonly id: FieldRef<"votes", 'BigInt'>
    readonly title: FieldRef<"votes", 'String'>
    readonly description: FieldRef<"votes", 'String'>
    readonly category_name: FieldRef<"votes", 'String'>
    readonly vote_count: FieldRef<"votes", 'Int'>
    readonly created_by: FieldRef<"votes", 'String'>
    readonly created_at: FieldRef<"votes", 'DateTime'>
    readonly expires_at: FieldRef<"votes", 'DateTime'>
    readonly category_value: FieldRef<"votes", 'String'>
    readonly is_duplicate_vote: FieldRef<"votes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * votes findUnique
   */
  export type votesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes findUniqueOrThrow
   */
  export type votesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes findFirst
   */
  export type votesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes findFirstOrThrow
   */
  export type votesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes findMany
   */
  export type votesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes create
   */
  export type votesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * The data needed to create a votes.
     */
    data: XOR<votesCreateInput, votesUncheckedCreateInput>
  }

  /**
   * votes createMany
   */
  export type votesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many votes.
     */
    data: votesCreateManyInput | votesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * votes createManyAndReturn
   */
  export type votesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The data used to create many votes.
     */
    data: votesCreateManyInput | votesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * votes update
   */
  export type votesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * The data needed to update a votes.
     */
    data: XOR<votesUpdateInput, votesUncheckedUpdateInput>
    /**
     * Choose, which votes to update.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes updateMany
   */
  export type votesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update votes.
     */
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
  }

  /**
   * votes updateManyAndReturn
   */
  export type votesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The data used to update votes.
     */
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * votes upsert
   */
  export type votesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * The filter to search for the votes to update in case it exists.
     */
    where: votesWhereUniqueInput
    /**
     * In case the votes found by the `where` argument doesn't exist, create a new votes with this data.
     */
    create: XOR<votesCreateInput, votesUncheckedCreateInput>
    /**
     * In case the votes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<votesUpdateInput, votesUncheckedUpdateInput>
  }

  /**
   * votes delete
   */
  export type votesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
    /**
     * Filter which votes to delete.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes deleteMany
   */
  export type votesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to delete
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to delete.
     */
    limit?: number
  }

  /**
   * votes.comments
   */
  export type votes$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * votes.vote_options
   */
  export type votes$vote_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote_options
     */
    select?: vote_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote_options
     */
    omit?: vote_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vote_optionsInclude<ExtArgs> | null
    where?: vote_optionsWhereInput
    orderBy?: vote_optionsOrderByWithRelationInput | vote_optionsOrderByWithRelationInput[]
    cursor?: vote_optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vote_optionsScalarFieldEnum | Vote_optionsScalarFieldEnum[]
  }

  /**
   * votes without action
   */
  export type votesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: votesInclude<ExtArgs> | null
  }


  /**
   * Model comment_likes
   */

  export type AggregateComment_likes = {
    _count: Comment_likesCountAggregateOutputType | null
    _avg: Comment_likesAvgAggregateOutputType | null
    _sum: Comment_likesSumAggregateOutputType | null
    _min: Comment_likesMinAggregateOutputType | null
    _max: Comment_likesMaxAggregateOutputType | null
  }

  export type Comment_likesAvgAggregateOutputType = {
    id: number | null
    comment_id: number | null
  }

  export type Comment_likesSumAggregateOutputType = {
    id: bigint | null
    comment_id: bigint | null
  }

  export type Comment_likesMinAggregateOutputType = {
    id: bigint | null
    comment_id: bigint | null
    user_id: string | null
    created_at: Date | null
  }

  export type Comment_likesMaxAggregateOutputType = {
    id: bigint | null
    comment_id: bigint | null
    user_id: string | null
    created_at: Date | null
  }

  export type Comment_likesCountAggregateOutputType = {
    id: number
    comment_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type Comment_likesAvgAggregateInputType = {
    id?: true
    comment_id?: true
  }

  export type Comment_likesSumAggregateInputType = {
    id?: true
    comment_id?: true
  }

  export type Comment_likesMinAggregateInputType = {
    id?: true
    comment_id?: true
    user_id?: true
    created_at?: true
  }

  export type Comment_likesMaxAggregateInputType = {
    id?: true
    comment_id?: true
    user_id?: true
    created_at?: true
  }

  export type Comment_likesCountAggregateInputType = {
    id?: true
    comment_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type Comment_likesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_likes to aggregate.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comment_likes
    **/
    _count?: true | Comment_likesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Comment_likesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Comment_likesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Comment_likesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Comment_likesMaxAggregateInputType
  }

  export type GetComment_likesAggregateType<T extends Comment_likesAggregateArgs> = {
        [P in keyof T & keyof AggregateComment_likes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment_likes[P]>
      : GetScalarType<T[P], AggregateComment_likes[P]>
  }




  export type comment_likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_likesWhereInput
    orderBy?: comment_likesOrderByWithAggregationInput | comment_likesOrderByWithAggregationInput[]
    by: Comment_likesScalarFieldEnum[] | Comment_likesScalarFieldEnum
    having?: comment_likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Comment_likesCountAggregateInputType | true
    _avg?: Comment_likesAvgAggregateInputType
    _sum?: Comment_likesSumAggregateInputType
    _min?: Comment_likesMinAggregateInputType
    _max?: Comment_likesMaxAggregateInputType
  }

  export type Comment_likesGroupByOutputType = {
    id: bigint
    comment_id: bigint
    user_id: string
    created_at: Date | null
    _count: Comment_likesCountAggregateOutputType | null
    _avg: Comment_likesAvgAggregateOutputType | null
    _sum: Comment_likesSumAggregateOutputType | null
    _min: Comment_likesMinAggregateOutputType | null
    _max: Comment_likesMaxAggregateOutputType | null
  }

  type GetComment_likesGroupByPayload<T extends comment_likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Comment_likesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Comment_likesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Comment_likesGroupByOutputType[P]>
            : GetScalarType<T[P], Comment_likesGroupByOutputType[P]>
        }
      >
    >


  export type comment_likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
    comments?: boolean | commentsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment_likes"]>

  export type comment_likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
    comments?: boolean | commentsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment_likes"]>

  export type comment_likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
    comments?: boolean | commentsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment_likes"]>

  export type comment_likesSelectScalar = {
    id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type comment_likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment_id" | "user_id" | "created_at", ExtArgs["result"]["comment_likes"]>
  export type comment_likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | commentsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type comment_likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | commentsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type comment_likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | commentsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $comment_likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment_likes"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      comment_id: bigint
      user_id: string
      created_at: Date | null
    }, ExtArgs["result"]["comment_likes"]>
    composites: {}
  }

  type comment_likesGetPayload<S extends boolean | null | undefined | comment_likesDefaultArgs> = $Result.GetResult<Prisma.$comment_likesPayload, S>

  type comment_likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comment_likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Comment_likesCountAggregateInputType | true
    }

  export interface comment_likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment_likes'], meta: { name: 'comment_likes' } }
    /**
     * Find zero or one Comment_likes that matches the filter.
     * @param {comment_likesFindUniqueArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comment_likesFindUniqueArgs>(args: SelectSubset<T, comment_likesFindUniqueArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment_likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comment_likesFindUniqueOrThrowArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comment_likesFindUniqueOrThrowArgs>(args: SelectSubset<T, comment_likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesFindFirstArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comment_likesFindFirstArgs>(args?: SelectSubset<T, comment_likesFindFirstArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesFindFirstOrThrowArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comment_likesFindFirstOrThrowArgs>(args?: SelectSubset<T, comment_likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comment_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comment_likes
     * const comment_likes = await prisma.comment_likes.findMany()
     * 
     * // Get first 10 Comment_likes
     * const comment_likes = await prisma.comment_likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comment_likesWithIdOnly = await prisma.comment_likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comment_likesFindManyArgs>(args?: SelectSubset<T, comment_likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment_likes.
     * @param {comment_likesCreateArgs} args - Arguments to create a Comment_likes.
     * @example
     * // Create one Comment_likes
     * const Comment_likes = await prisma.comment_likes.create({
     *   data: {
     *     // ... data to create a Comment_likes
     *   }
     * })
     * 
     */
    create<T extends comment_likesCreateArgs>(args: SelectSubset<T, comment_likesCreateArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comment_likes.
     * @param {comment_likesCreateManyArgs} args - Arguments to create many Comment_likes.
     * @example
     * // Create many Comment_likes
     * const comment_likes = await prisma.comment_likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comment_likesCreateManyArgs>(args?: SelectSubset<T, comment_likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comment_likes and returns the data saved in the database.
     * @param {comment_likesCreateManyAndReturnArgs} args - Arguments to create many Comment_likes.
     * @example
     * // Create many Comment_likes
     * const comment_likes = await prisma.comment_likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comment_likes and only return the `id`
     * const comment_likesWithIdOnly = await prisma.comment_likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends comment_likesCreateManyAndReturnArgs>(args?: SelectSubset<T, comment_likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment_likes.
     * @param {comment_likesDeleteArgs} args - Arguments to delete one Comment_likes.
     * @example
     * // Delete one Comment_likes
     * const Comment_likes = await prisma.comment_likes.delete({
     *   where: {
     *     // ... filter to delete one Comment_likes
     *   }
     * })
     * 
     */
    delete<T extends comment_likesDeleteArgs>(args: SelectSubset<T, comment_likesDeleteArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment_likes.
     * @param {comment_likesUpdateArgs} args - Arguments to update one Comment_likes.
     * @example
     * // Update one Comment_likes
     * const comment_likes = await prisma.comment_likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comment_likesUpdateArgs>(args: SelectSubset<T, comment_likesUpdateArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comment_likes.
     * @param {comment_likesDeleteManyArgs} args - Arguments to filter Comment_likes to delete.
     * @example
     * // Delete a few Comment_likes
     * const { count } = await prisma.comment_likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comment_likesDeleteManyArgs>(args?: SelectSubset<T, comment_likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comment_likes
     * const comment_likes = await prisma.comment_likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comment_likesUpdateManyArgs>(args: SelectSubset<T, comment_likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_likes and returns the data updated in the database.
     * @param {comment_likesUpdateManyAndReturnArgs} args - Arguments to update many Comment_likes.
     * @example
     * // Update many Comment_likes
     * const comment_likes = await prisma.comment_likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comment_likes and only return the `id`
     * const comment_likesWithIdOnly = await prisma.comment_likes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends comment_likesUpdateManyAndReturnArgs>(args: SelectSubset<T, comment_likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment_likes.
     * @param {comment_likesUpsertArgs} args - Arguments to update or create a Comment_likes.
     * @example
     * // Update or create a Comment_likes
     * const comment_likes = await prisma.comment_likes.upsert({
     *   create: {
     *     // ... data to create a Comment_likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment_likes we want to update
     *   }
     * })
     */
    upsert<T extends comment_likesUpsertArgs>(args: SelectSubset<T, comment_likesUpsertArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesCountArgs} args - Arguments to filter Comment_likes to count.
     * @example
     * // Count the number of Comment_likes
     * const count = await prisma.comment_likes.count({
     *   where: {
     *     // ... the filter for the Comment_likes we want to count
     *   }
     * })
    **/
    count<T extends comment_likesCountArgs>(
      args?: Subset<T, comment_likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Comment_likesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Comment_likesAggregateArgs>(args: Subset<T, Comment_likesAggregateArgs>): Prisma.PrismaPromise<GetComment_likesAggregateType<T>>

    /**
     * Group by Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesGroupByArgs} args - Group by arguments.
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
      T extends comment_likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comment_likesGroupByArgs['orderBy'] }
        : { orderBy?: comment_likesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comment_likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_likesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment_likes model
   */
  readonly fields: comment_likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment_likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comment_likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends commentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commentsDefaultArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comment_likes model
   */
  interface comment_likesFieldRefs {
    readonly id: FieldRef<"comment_likes", 'BigInt'>
    readonly comment_id: FieldRef<"comment_likes", 'BigInt'>
    readonly user_id: FieldRef<"comment_likes", 'String'>
    readonly created_at: FieldRef<"comment_likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comment_likes findUnique
   */
  export type comment_likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes findUniqueOrThrow
   */
  export type comment_likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes findFirst
   */
  export type comment_likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_likes.
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_likes.
     */
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comment_likes findFirstOrThrow
   */
  export type comment_likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_likes.
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_likes.
     */
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comment_likes findMany
   */
  export type comment_likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comment_likes.
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comment_likes create
   */
  export type comment_likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * The data needed to create a comment_likes.
     */
    data: XOR<comment_likesCreateInput, comment_likesUncheckedCreateInput>
  }

  /**
   * comment_likes createMany
   */
  export type comment_likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comment_likes.
     */
    data: comment_likesCreateManyInput | comment_likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment_likes createManyAndReturn
   */
  export type comment_likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * The data used to create many comment_likes.
     */
    data: comment_likesCreateManyInput | comment_likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comment_likes update
   */
  export type comment_likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * The data needed to update a comment_likes.
     */
    data: XOR<comment_likesUpdateInput, comment_likesUncheckedUpdateInput>
    /**
     * Choose, which comment_likes to update.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes updateMany
   */
  export type comment_likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comment_likes.
     */
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyInput>
    /**
     * Filter which comment_likes to update
     */
    where?: comment_likesWhereInput
    /**
     * Limit how many comment_likes to update.
     */
    limit?: number
  }

  /**
   * comment_likes updateManyAndReturn
   */
  export type comment_likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * The data used to update comment_likes.
     */
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyInput>
    /**
     * Filter which comment_likes to update
     */
    where?: comment_likesWhereInput
    /**
     * Limit how many comment_likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comment_likes upsert
   */
  export type comment_likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * The filter to search for the comment_likes to update in case it exists.
     */
    where: comment_likesWhereUniqueInput
    /**
     * In case the comment_likes found by the `where` argument doesn't exist, create a new comment_likes with this data.
     */
    create: XOR<comment_likesCreateInput, comment_likesUncheckedCreateInput>
    /**
     * In case the comment_likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comment_likesUpdateInput, comment_likesUncheckedUpdateInput>
  }

  /**
   * comment_likes delete
   */
  export type comment_likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter which comment_likes to delete.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes deleteMany
   */
  export type comment_likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_likes to delete
     */
    where?: comment_likesWhereInput
    /**
     * Limit how many comment_likes to delete.
     */
    limit?: number
  }

  /**
   * comment_likes without action
   */
  export type comment_likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    vote_id: number | null
    parent_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: bigint | null
    vote_id: bigint | null
    parent_id: bigint | null
  }

  export type CommentsMinAggregateOutputType = {
    id: bigint | null
    vote_id: bigint | null
    user_id: string | null
    parent_id: bigint | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: bigint | null
    vote_id: bigint | null
    user_id: string | null
    parent_id: bigint | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    vote_id: number
    user_id: number
    parent_id: number
    content: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    vote_id?: true
    parent_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    vote_id?: true
    parent_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    vote_id?: true
    user_id?: true
    parent_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    vote_id?: true
    user_id?: true
    parent_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    vote_id?: true
    user_id?: true
    parent_id?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: bigint
    vote_id: bigint
    user_id: string
    parent_id: bigint | null
    content: string
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_id?: boolean
    user_id?: boolean
    parent_id?: boolean
    content?: boolean
    created_at?: boolean
    comment_likes?: boolean | comments$comment_likesArgs<ExtArgs>
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    votes?: boolean | votesDefaultArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_id?: boolean
    user_id?: boolean
    parent_id?: boolean
    content?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    votes?: boolean | votesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vote_id?: boolean
    user_id?: boolean
    parent_id?: boolean
    content?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    votes?: boolean | votesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    vote_id?: boolean
    user_id?: boolean
    parent_id?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vote_id" | "user_id" | "parent_id" | "content" | "created_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment_likes?: boolean | comments$comment_likesArgs<ExtArgs>
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    votes?: boolean | votesDefaultArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    votes?: boolean | votesDefaultArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    votes?: boolean | votesDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      comment_likes: Prisma.$comment_likesPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs> | null
      other_comments: Prisma.$commentsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      votes: Prisma.$votesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      vote_id: bigint
      user_id: string
      parent_id: bigint | null
      content: string
      created_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment_likes<T extends comments$comment_likesArgs<ExtArgs> = {}>(args?: Subset<T, comments$comment_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends comments$commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$commentsArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_comments<T extends comments$other_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$other_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends votesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, votesDefaultArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'BigInt'>
    readonly vote_id: FieldRef<"comments", 'BigInt'>
    readonly user_id: FieldRef<"comments", 'String'>
    readonly parent_id: FieldRef<"comments", 'BigInt'>
    readonly content: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.comment_likes
   */
  export type comments$comment_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    where?: comment_likesWhereInput
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    cursor?: comment_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comments.comments
   */
  export type comments$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * comments.other_comments
   */
  export type comments$other_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nickname: 'nickname',
    profile_image: 'profile_image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Vote_optionsScalarFieldEnum: {
    id: 'id',
    vote_id: 'vote_id',
    name: 'name',
    vote_count: 'vote_count'
  };

  export type Vote_optionsScalarFieldEnum = (typeof Vote_optionsScalarFieldEnum)[keyof typeof Vote_optionsScalarFieldEnum]


  export const VotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category_name: 'category_name',
    vote_count: 'vote_count',
    created_by: 'created_by',
    created_at: 'created_at',
    expires_at: 'expires_at',
    category_value: 'category_value',
    is_duplicate_vote: 'is_duplicate_vote'
  };

  export type VotesScalarFieldEnum = (typeof VotesScalarFieldEnum)[keyof typeof VotesScalarFieldEnum]


  export const Comment_likesScalarFieldEnum: {
    id: 'id',
    comment_id: 'comment_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type Comment_likesScalarFieldEnum = (typeof Comment_likesScalarFieldEnum)[keyof typeof Comment_likesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    vote_id: 'vote_id',
    user_id: 'user_id',
    parent_id: 'parent_id',
    content: 'content',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    nickname?: StringFilter<"users"> | string
    profile_image?: StringNullableFilter<"users"> | string | null
    comment_likes?: Comment_likesListRelationFilter
    comments?: CommentsListRelationFilter
    createdVotes?: VotesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    comment_likes?: comment_likesOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    createdVotes?: votesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    nickname?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    profile_image?: StringNullableFilter<"users"> | string | null
    comment_likes?: Comment_likesListRelationFilter
    comments?: CommentsListRelationFilter
    createdVotes?: VotesListRelationFilter
  }, "id" | "email" | "nickname">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    nickname?: StringWithAggregatesFilter<"users"> | string
    profile_image?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type vote_optionsWhereInput = {
    AND?: vote_optionsWhereInput | vote_optionsWhereInput[]
    OR?: vote_optionsWhereInput[]
    NOT?: vote_optionsWhereInput | vote_optionsWhereInput[]
    id?: BigIntFilter<"vote_options"> | bigint | number
    vote_id?: BigIntFilter<"vote_options"> | bigint | number
    name?: StringFilter<"vote_options"> | string
    vote_count?: IntFilter<"vote_options"> | number
    vote?: XOR<VotesScalarRelationFilter, votesWhereInput>
  }

  export type vote_optionsOrderByWithRelationInput = {
    id?: SortOrder
    vote_id?: SortOrder
    name?: SortOrder
    vote_count?: SortOrder
    vote?: votesOrderByWithRelationInput
  }

  export type vote_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: vote_optionsWhereInput | vote_optionsWhereInput[]
    OR?: vote_optionsWhereInput[]
    NOT?: vote_optionsWhereInput | vote_optionsWhereInput[]
    vote_id?: BigIntFilter<"vote_options"> | bigint | number
    name?: StringFilter<"vote_options"> | string
    vote_count?: IntFilter<"vote_options"> | number
    vote?: XOR<VotesScalarRelationFilter, votesWhereInput>
  }, "id">

  export type vote_optionsOrderByWithAggregationInput = {
    id?: SortOrder
    vote_id?: SortOrder
    name?: SortOrder
    vote_count?: SortOrder
    _count?: vote_optionsCountOrderByAggregateInput
    _avg?: vote_optionsAvgOrderByAggregateInput
    _max?: vote_optionsMaxOrderByAggregateInput
    _min?: vote_optionsMinOrderByAggregateInput
    _sum?: vote_optionsSumOrderByAggregateInput
  }

  export type vote_optionsScalarWhereWithAggregatesInput = {
    AND?: vote_optionsScalarWhereWithAggregatesInput | vote_optionsScalarWhereWithAggregatesInput[]
    OR?: vote_optionsScalarWhereWithAggregatesInput[]
    NOT?: vote_optionsScalarWhereWithAggregatesInput | vote_optionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"vote_options"> | bigint | number
    vote_id?: BigIntWithAggregatesFilter<"vote_options"> | bigint | number
    name?: StringWithAggregatesFilter<"vote_options"> | string
    vote_count?: IntWithAggregatesFilter<"vote_options"> | number
  }

  export type votesWhereInput = {
    AND?: votesWhereInput | votesWhereInput[]
    OR?: votesWhereInput[]
    NOT?: votesWhereInput | votesWhereInput[]
    id?: BigIntFilter<"votes"> | bigint | number
    title?: StringFilter<"votes"> | string
    description?: StringNullableFilter<"votes"> | string | null
    category_name?: StringFilter<"votes"> | string
    vote_count?: IntFilter<"votes"> | number
    created_by?: UuidFilter<"votes"> | string
    created_at?: DateTimeFilter<"votes"> | Date | string
    expires_at?: DateTimeFilter<"votes"> | Date | string
    category_value?: StringFilter<"votes"> | string
    is_duplicate_vote?: BoolFilter<"votes"> | boolean
    comments?: CommentsListRelationFilter
    vote_options?: Vote_optionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type votesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category_name?: SortOrder
    vote_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    category_value?: SortOrder
    is_duplicate_vote?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    vote_options?: vote_optionsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type votesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: votesWhereInput | votesWhereInput[]
    OR?: votesWhereInput[]
    NOT?: votesWhereInput | votesWhereInput[]
    title?: StringFilter<"votes"> | string
    description?: StringNullableFilter<"votes"> | string | null
    category_name?: StringFilter<"votes"> | string
    vote_count?: IntFilter<"votes"> | number
    created_by?: UuidFilter<"votes"> | string
    created_at?: DateTimeFilter<"votes"> | Date | string
    expires_at?: DateTimeFilter<"votes"> | Date | string
    category_value?: StringFilter<"votes"> | string
    is_duplicate_vote?: BoolFilter<"votes"> | boolean
    comments?: CommentsListRelationFilter
    vote_options?: Vote_optionsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type votesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category_name?: SortOrder
    vote_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    category_value?: SortOrder
    is_duplicate_vote?: SortOrder
    _count?: votesCountOrderByAggregateInput
    _avg?: votesAvgOrderByAggregateInput
    _max?: votesMaxOrderByAggregateInput
    _min?: votesMinOrderByAggregateInput
    _sum?: votesSumOrderByAggregateInput
  }

  export type votesScalarWhereWithAggregatesInput = {
    AND?: votesScalarWhereWithAggregatesInput | votesScalarWhereWithAggregatesInput[]
    OR?: votesScalarWhereWithAggregatesInput[]
    NOT?: votesScalarWhereWithAggregatesInput | votesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"votes"> | bigint | number
    title?: StringWithAggregatesFilter<"votes"> | string
    description?: StringNullableWithAggregatesFilter<"votes"> | string | null
    category_name?: StringWithAggregatesFilter<"votes"> | string
    vote_count?: IntWithAggregatesFilter<"votes"> | number
    created_by?: UuidWithAggregatesFilter<"votes"> | string
    created_at?: DateTimeWithAggregatesFilter<"votes"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"votes"> | Date | string
    category_value?: StringWithAggregatesFilter<"votes"> | string
    is_duplicate_vote?: BoolWithAggregatesFilter<"votes"> | boolean
  }

  export type comment_likesWhereInput = {
    AND?: comment_likesWhereInput | comment_likesWhereInput[]
    OR?: comment_likesWhereInput[]
    NOT?: comment_likesWhereInput | comment_likesWhereInput[]
    id?: BigIntFilter<"comment_likes"> | bigint | number
    comment_id?: BigIntFilter<"comment_likes"> | bigint | number
    user_id?: UuidFilter<"comment_likes"> | string
    created_at?: DateTimeNullableFilter<"comment_likes"> | Date | string | null
    comments?: XOR<CommentsScalarRelationFilter, commentsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type comment_likesOrderByWithRelationInput = {
    id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    comments?: commentsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type comment_likesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    comment_id_user_id?: comment_likesComment_idUser_idCompoundUniqueInput
    AND?: comment_likesWhereInput | comment_likesWhereInput[]
    OR?: comment_likesWhereInput[]
    NOT?: comment_likesWhereInput | comment_likesWhereInput[]
    comment_id?: BigIntFilter<"comment_likes"> | bigint | number
    user_id?: UuidFilter<"comment_likes"> | string
    created_at?: DateTimeNullableFilter<"comment_likes"> | Date | string | null
    comments?: XOR<CommentsScalarRelationFilter, commentsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "comment_id_user_id">

  export type comment_likesOrderByWithAggregationInput = {
    id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: comment_likesCountOrderByAggregateInput
    _avg?: comment_likesAvgOrderByAggregateInput
    _max?: comment_likesMaxOrderByAggregateInput
    _min?: comment_likesMinOrderByAggregateInput
    _sum?: comment_likesSumOrderByAggregateInput
  }

  export type comment_likesScalarWhereWithAggregatesInput = {
    AND?: comment_likesScalarWhereWithAggregatesInput | comment_likesScalarWhereWithAggregatesInput[]
    OR?: comment_likesScalarWhereWithAggregatesInput[]
    NOT?: comment_likesScalarWhereWithAggregatesInput | comment_likesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"comment_likes"> | bigint | number
    comment_id?: BigIntWithAggregatesFilter<"comment_likes"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"comment_likes"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"comment_likes"> | Date | string | null
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: BigIntFilter<"comments"> | bigint | number
    vote_id?: BigIntFilter<"comments"> | bigint | number
    user_id?: UuidFilter<"comments"> | string
    parent_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    comment_likes?: Comment_likesListRelationFilter
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    votes?: XOR<VotesScalarRelationFilter, votesWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    vote_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    comment_likes?: comment_likesOrderByRelationAggregateInput
    comments?: commentsOrderByWithRelationInput
    other_comments?: commentsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    votes?: votesOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    vote_id?: BigIntFilter<"comments"> | bigint | number
    user_id?: UuidFilter<"comments"> | string
    parent_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    comment_likes?: Comment_likesListRelationFilter
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    votes?: XOR<VotesScalarRelationFilter, votesWhereInput>
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    vote_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"comments"> | bigint | number
    vote_id?: BigIntWithAggregatesFilter<"comments"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"comments"> | string
    parent_id?: BigIntNullableWithAggregatesFilter<"comments"> | bigint | number | null
    content?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type usersCreateInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comment_likes?: comment_likesCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    createdVotes?: votesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    createdVotes?: votesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likes?: comment_likesUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    createdVotes?: votesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    createdVotes?: votesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vote_optionsCreateInput = {
    id?: bigint | number
    name: string
    vote_count?: number
    vote: votesCreateNestedOneWithoutVote_optionsInput
  }

  export type vote_optionsUncheckedCreateInput = {
    id?: bigint | number
    vote_id: bigint | number
    name: string
    vote_count?: number
  }

  export type vote_optionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    vote?: votesUpdateOneRequiredWithoutVote_optionsNestedInput
  }

  export type vote_optionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
  }

  export type vote_optionsCreateManyInput = {
    id?: bigint | number
    vote_id: bigint | number
    name: string
    vote_count?: number
  }

  export type vote_optionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
  }

  export type vote_optionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
  }

  export type votesCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    comments?: commentsCreateNestedManyWithoutVotesInput
    vote_options?: vote_optionsCreateNestedManyWithoutVoteInput
    users: usersCreateNestedOneWithoutCreatedVotesInput
  }

  export type votesUncheckedCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_by: string
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    comments?: commentsUncheckedCreateNestedManyWithoutVotesInput
    vote_options?: vote_optionsUncheckedCreateNestedManyWithoutVoteInput
  }

  export type votesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    comments?: commentsUpdateManyWithoutVotesNestedInput
    vote_options?: vote_optionsUpdateManyWithoutVoteNestedInput
    users?: usersUpdateOneRequiredWithoutCreatedVotesNestedInput
  }

  export type votesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    comments?: commentsUncheckedUpdateManyWithoutVotesNestedInput
    vote_options?: vote_optionsUncheckedUpdateManyWithoutVoteNestedInput
  }

  export type votesCreateManyInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_by: string
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
  }

  export type votesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
  }

  export type votesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
  }

  export type comment_likesCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    comments: commentsCreateNestedOneWithoutComment_likesInput
    users: usersCreateNestedOneWithoutComment_likesInput
  }

  export type comment_likesUncheckedCreateInput = {
    id?: bigint | number
    comment_id: bigint | number
    user_id: string
    created_at?: Date | string | null
  }

  export type comment_likesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneRequiredWithoutComment_likesNestedInput
    users?: usersUpdateOneRequiredWithoutComment_likesNestedInput
  }

  export type comment_likesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_likesCreateManyInput = {
    id?: bigint | number
    comment_id: bigint | number
    user_id: string
    created_at?: Date | string | null
  }

  export type comment_likesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_likesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesCreateNestedManyWithoutCommentsInput
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users: usersCreateNestedOneWithoutCommentsInput
    votes: votesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: bigint | number
    vote_id: bigint | number
    user_id: string
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutCommentsInput
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUpdateManyWithoutCommentsNestedInput
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
    votes?: votesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutCommentsNestedInput
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsCreateManyInput = {
    id?: bigint | number
    vote_id: bigint | number
    user_id: string
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Comment_likesListRelationFilter = {
    every?: comment_likesWhereInput
    some?: comment_likesWhereInput
    none?: comment_likesWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type VotesListRelationFilter = {
    every?: votesWhereInput
    some?: votesWhereInput
    none?: votesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type comment_likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type votesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    profile_image?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    profile_image?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    profile_image?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VotesScalarRelationFilter = {
    is?: votesWhereInput
    isNot?: votesWhereInput
  }

  export type vote_optionsCountOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    name?: SortOrder
    vote_count?: SortOrder
  }

  export type vote_optionsAvgOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    vote_count?: SortOrder
  }

  export type vote_optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    name?: SortOrder
    vote_count?: SortOrder
  }

  export type vote_optionsMinOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    name?: SortOrder
    vote_count?: SortOrder
  }

  export type vote_optionsSumOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    vote_count?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Vote_optionsListRelationFilter = {
    every?: vote_optionsWhereInput
    some?: vote_optionsWhereInput
    none?: vote_optionsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type vote_optionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type votesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category_name?: SortOrder
    vote_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    category_value?: SortOrder
    is_duplicate_vote?: SortOrder
  }

  export type votesAvgOrderByAggregateInput = {
    id?: SortOrder
    vote_count?: SortOrder
  }

  export type votesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category_name?: SortOrder
    vote_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    category_value?: SortOrder
    is_duplicate_vote?: SortOrder
  }

  export type votesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category_name?: SortOrder
    vote_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    category_value?: SortOrder
    is_duplicate_vote?: SortOrder
  }

  export type votesSumOrderByAggregateInput = {
    id?: SortOrder
    vote_count?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CommentsScalarRelationFilter = {
    is?: commentsWhereInput
    isNot?: commentsWhereInput
  }

  export type comment_likesComment_idUser_idCompoundUniqueInput = {
    comment_id: bigint | number
    user_id: string
  }

  export type comment_likesCountOrderByAggregateInput = {
    id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type comment_likesAvgOrderByAggregateInput = {
    id?: SortOrder
    comment_id?: SortOrder
  }

  export type comment_likesMaxOrderByAggregateInput = {
    id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type comment_likesMinOrderByAggregateInput = {
    id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type comment_likesSumOrderByAggregateInput = {
    id?: SortOrder
    comment_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    vote_id?: SortOrder
    parent_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type comment_likesCreateNestedManyWithoutUsersInput = {
    create?: XOR<comment_likesCreateWithoutUsersInput, comment_likesUncheckedCreateWithoutUsersInput> | comment_likesCreateWithoutUsersInput[] | comment_likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUsersInput | comment_likesCreateOrConnectWithoutUsersInput[]
    createMany?: comment_likesCreateManyUsersInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type votesCreateNestedManyWithoutUsersInput = {
    create?: XOR<votesCreateWithoutUsersInput, votesUncheckedCreateWithoutUsersInput> | votesCreateWithoutUsersInput[] | votesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUsersInput | votesCreateOrConnectWithoutUsersInput[]
    createMany?: votesCreateManyUsersInputEnvelope
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
  }

  export type comment_likesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<comment_likesCreateWithoutUsersInput, comment_likesUncheckedCreateWithoutUsersInput> | comment_likesCreateWithoutUsersInput[] | comment_likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUsersInput | comment_likesCreateOrConnectWithoutUsersInput[]
    createMany?: comment_likesCreateManyUsersInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type votesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<votesCreateWithoutUsersInput, votesUncheckedCreateWithoutUsersInput> | votesCreateWithoutUsersInput[] | votesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUsersInput | votesCreateOrConnectWithoutUsersInput[]
    createMany?: votesCreateManyUsersInputEnvelope
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type comment_likesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<comment_likesCreateWithoutUsersInput, comment_likesUncheckedCreateWithoutUsersInput> | comment_likesCreateWithoutUsersInput[] | comment_likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUsersInput | comment_likesCreateOrConnectWithoutUsersInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutUsersInput | comment_likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: comment_likesCreateManyUsersInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutUsersInput | comment_likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutUsersInput | comment_likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type votesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<votesCreateWithoutUsersInput, votesUncheckedCreateWithoutUsersInput> | votesCreateWithoutUsersInput[] | votesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUsersInput | votesCreateOrConnectWithoutUsersInput[]
    upsert?: votesUpsertWithWhereUniqueWithoutUsersInput | votesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: votesCreateManyUsersInputEnvelope
    set?: votesWhereUniqueInput | votesWhereUniqueInput[]
    disconnect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    delete?: votesWhereUniqueInput | votesWhereUniqueInput[]
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    update?: votesUpdateWithWhereUniqueWithoutUsersInput | votesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: votesUpdateManyWithWhereWithoutUsersInput | votesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: votesScalarWhereInput | votesScalarWhereInput[]
  }

  export type comment_likesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<comment_likesCreateWithoutUsersInput, comment_likesUncheckedCreateWithoutUsersInput> | comment_likesCreateWithoutUsersInput[] | comment_likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUsersInput | comment_likesCreateOrConnectWithoutUsersInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutUsersInput | comment_likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: comment_likesCreateManyUsersInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutUsersInput | comment_likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutUsersInput | comment_likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type votesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<votesCreateWithoutUsersInput, votesUncheckedCreateWithoutUsersInput> | votesCreateWithoutUsersInput[] | votesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: votesCreateOrConnectWithoutUsersInput | votesCreateOrConnectWithoutUsersInput[]
    upsert?: votesUpsertWithWhereUniqueWithoutUsersInput | votesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: votesCreateManyUsersInputEnvelope
    set?: votesWhereUniqueInput | votesWhereUniqueInput[]
    disconnect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    delete?: votesWhereUniqueInput | votesWhereUniqueInput[]
    connect?: votesWhereUniqueInput | votesWhereUniqueInput[]
    update?: votesUpdateWithWhereUniqueWithoutUsersInput | votesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: votesUpdateManyWithWhereWithoutUsersInput | votesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: votesScalarWhereInput | votesScalarWhereInput[]
  }

  export type votesCreateNestedOneWithoutVote_optionsInput = {
    create?: XOR<votesCreateWithoutVote_optionsInput, votesUncheckedCreateWithoutVote_optionsInput>
    connectOrCreate?: votesCreateOrConnectWithoutVote_optionsInput
    connect?: votesWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type votesUpdateOneRequiredWithoutVote_optionsNestedInput = {
    create?: XOR<votesCreateWithoutVote_optionsInput, votesUncheckedCreateWithoutVote_optionsInput>
    connectOrCreate?: votesCreateOrConnectWithoutVote_optionsInput
    upsert?: votesUpsertWithoutVote_optionsInput
    connect?: votesWhereUniqueInput
    update?: XOR<XOR<votesUpdateToOneWithWhereWithoutVote_optionsInput, votesUpdateWithoutVote_optionsInput>, votesUncheckedUpdateWithoutVote_optionsInput>
  }

  export type commentsCreateNestedManyWithoutVotesInput = {
    create?: XOR<commentsCreateWithoutVotesInput, commentsUncheckedCreateWithoutVotesInput> | commentsCreateWithoutVotesInput[] | commentsUncheckedCreateWithoutVotesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutVotesInput | commentsCreateOrConnectWithoutVotesInput[]
    createMany?: commentsCreateManyVotesInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type vote_optionsCreateNestedManyWithoutVoteInput = {
    create?: XOR<vote_optionsCreateWithoutVoteInput, vote_optionsUncheckedCreateWithoutVoteInput> | vote_optionsCreateWithoutVoteInput[] | vote_optionsUncheckedCreateWithoutVoteInput[]
    connectOrCreate?: vote_optionsCreateOrConnectWithoutVoteInput | vote_optionsCreateOrConnectWithoutVoteInput[]
    createMany?: vote_optionsCreateManyVoteInputEnvelope
    connect?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCreatedVotesInput = {
    create?: XOR<usersCreateWithoutCreatedVotesInput, usersUncheckedCreateWithoutCreatedVotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreatedVotesInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutVotesInput = {
    create?: XOR<commentsCreateWithoutVotesInput, commentsUncheckedCreateWithoutVotesInput> | commentsCreateWithoutVotesInput[] | commentsUncheckedCreateWithoutVotesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutVotesInput | commentsCreateOrConnectWithoutVotesInput[]
    createMany?: commentsCreateManyVotesInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type vote_optionsUncheckedCreateNestedManyWithoutVoteInput = {
    create?: XOR<vote_optionsCreateWithoutVoteInput, vote_optionsUncheckedCreateWithoutVoteInput> | vote_optionsCreateWithoutVoteInput[] | vote_optionsUncheckedCreateWithoutVoteInput[]
    connectOrCreate?: vote_optionsCreateOrConnectWithoutVoteInput | vote_optionsCreateOrConnectWithoutVoteInput[]
    createMany?: vote_optionsCreateManyVoteInputEnvelope
    connect?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type commentsUpdateManyWithoutVotesNestedInput = {
    create?: XOR<commentsCreateWithoutVotesInput, commentsUncheckedCreateWithoutVotesInput> | commentsCreateWithoutVotesInput[] | commentsUncheckedCreateWithoutVotesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutVotesInput | commentsCreateOrConnectWithoutVotesInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutVotesInput | commentsUpsertWithWhereUniqueWithoutVotesInput[]
    createMany?: commentsCreateManyVotesInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutVotesInput | commentsUpdateWithWhereUniqueWithoutVotesInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutVotesInput | commentsUpdateManyWithWhereWithoutVotesInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type vote_optionsUpdateManyWithoutVoteNestedInput = {
    create?: XOR<vote_optionsCreateWithoutVoteInput, vote_optionsUncheckedCreateWithoutVoteInput> | vote_optionsCreateWithoutVoteInput[] | vote_optionsUncheckedCreateWithoutVoteInput[]
    connectOrCreate?: vote_optionsCreateOrConnectWithoutVoteInput | vote_optionsCreateOrConnectWithoutVoteInput[]
    upsert?: vote_optionsUpsertWithWhereUniqueWithoutVoteInput | vote_optionsUpsertWithWhereUniqueWithoutVoteInput[]
    createMany?: vote_optionsCreateManyVoteInputEnvelope
    set?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    disconnect?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    delete?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    connect?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    update?: vote_optionsUpdateWithWhereUniqueWithoutVoteInput | vote_optionsUpdateWithWhereUniqueWithoutVoteInput[]
    updateMany?: vote_optionsUpdateManyWithWhereWithoutVoteInput | vote_optionsUpdateManyWithWhereWithoutVoteInput[]
    deleteMany?: vote_optionsScalarWhereInput | vote_optionsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCreatedVotesNestedInput = {
    create?: XOR<usersCreateWithoutCreatedVotesInput, usersUncheckedCreateWithoutCreatedVotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreatedVotesInput
    upsert?: usersUpsertWithoutCreatedVotesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCreatedVotesInput, usersUpdateWithoutCreatedVotesInput>, usersUncheckedUpdateWithoutCreatedVotesInput>
  }

  export type commentsUncheckedUpdateManyWithoutVotesNestedInput = {
    create?: XOR<commentsCreateWithoutVotesInput, commentsUncheckedCreateWithoutVotesInput> | commentsCreateWithoutVotesInput[] | commentsUncheckedCreateWithoutVotesInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutVotesInput | commentsCreateOrConnectWithoutVotesInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutVotesInput | commentsUpsertWithWhereUniqueWithoutVotesInput[]
    createMany?: commentsCreateManyVotesInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutVotesInput | commentsUpdateWithWhereUniqueWithoutVotesInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutVotesInput | commentsUpdateManyWithWhereWithoutVotesInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type vote_optionsUncheckedUpdateManyWithoutVoteNestedInput = {
    create?: XOR<vote_optionsCreateWithoutVoteInput, vote_optionsUncheckedCreateWithoutVoteInput> | vote_optionsCreateWithoutVoteInput[] | vote_optionsUncheckedCreateWithoutVoteInput[]
    connectOrCreate?: vote_optionsCreateOrConnectWithoutVoteInput | vote_optionsCreateOrConnectWithoutVoteInput[]
    upsert?: vote_optionsUpsertWithWhereUniqueWithoutVoteInput | vote_optionsUpsertWithWhereUniqueWithoutVoteInput[]
    createMany?: vote_optionsCreateManyVoteInputEnvelope
    set?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    disconnect?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    delete?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    connect?: vote_optionsWhereUniqueInput | vote_optionsWhereUniqueInput[]
    update?: vote_optionsUpdateWithWhereUniqueWithoutVoteInput | vote_optionsUpdateWithWhereUniqueWithoutVoteInput[]
    updateMany?: vote_optionsUpdateManyWithWhereWithoutVoteInput | vote_optionsUpdateManyWithWhereWithoutVoteInput[]
    deleteMany?: vote_optionsScalarWhereInput | vote_optionsScalarWhereInput[]
  }

  export type commentsCreateNestedOneWithoutComment_likesInput = {
    create?: XOR<commentsCreateWithoutComment_likesInput, commentsUncheckedCreateWithoutComment_likesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutComment_likesInput
    connect?: commentsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutComment_likesInput = {
    create?: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
    connectOrCreate?: usersCreateOrConnectWithoutComment_likesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type commentsUpdateOneRequiredWithoutComment_likesNestedInput = {
    create?: XOR<commentsCreateWithoutComment_likesInput, commentsUncheckedCreateWithoutComment_likesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutComment_likesInput
    upsert?: commentsUpsertWithoutComment_likesInput
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutComment_likesInput, commentsUpdateWithoutComment_likesInput>, commentsUncheckedUpdateWithoutComment_likesInput>
  }

  export type usersUpdateOneRequiredWithoutComment_likesNestedInput = {
    create?: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
    connectOrCreate?: usersCreateOrConnectWithoutComment_likesInput
    upsert?: usersUpsertWithoutComment_likesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutComment_likesInput, usersUpdateWithoutComment_likesInput>, usersUncheckedUpdateWithoutComment_likesInput>
  }

  export type comment_likesCreateNestedManyWithoutCommentsInput = {
    create?: XOR<comment_likesCreateWithoutCommentsInput, comment_likesUncheckedCreateWithoutCommentsInput> | comment_likesCreateWithoutCommentsInput[] | comment_likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentsInput | comment_likesCreateOrConnectWithoutCommentsInput[]
    createMany?: comment_likesCreateManyCommentsInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
  }

  export type commentsCreateNestedOneWithoutOther_commentsInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type votesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<votesCreateWithoutCommentsInput, votesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: votesCreateOrConnectWithoutCommentsInput
    connect?: votesWhereUniqueInput
  }

  export type comment_likesUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<comment_likesCreateWithoutCommentsInput, comment_likesUncheckedCreateWithoutCommentsInput> | comment_likesCreateWithoutCommentsInput[] | comment_likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentsInput | comment_likesCreateOrConnectWithoutCommentsInput[]
    createMany?: comment_likesCreateManyCommentsInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type comment_likesUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<comment_likesCreateWithoutCommentsInput, comment_likesUncheckedCreateWithoutCommentsInput> | comment_likesCreateWithoutCommentsInput[] | comment_likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentsInput | comment_likesCreateOrConnectWithoutCommentsInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutCommentsInput | comment_likesUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: comment_likesCreateManyCommentsInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutCommentsInput | comment_likesUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutCommentsInput | comment_likesUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
  }

  export type commentsUpdateOneWithoutOther_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    upsert?: commentsUpsertWithoutOther_commentsInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutOther_commentsInput, commentsUpdateWithoutOther_commentsInput>, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type votesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<votesCreateWithoutCommentsInput, votesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: votesCreateOrConnectWithoutCommentsInput
    upsert?: votesUpsertWithoutCommentsInput
    connect?: votesWhereUniqueInput
    update?: XOR<XOR<votesUpdateToOneWithWhereWithoutCommentsInput, votesUpdateWithoutCommentsInput>, votesUncheckedUpdateWithoutCommentsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type comment_likesUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<comment_likesCreateWithoutCommentsInput, comment_likesUncheckedCreateWithoutCommentsInput> | comment_likesCreateWithoutCommentsInput[] | comment_likesUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentsInput | comment_likesCreateOrConnectWithoutCommentsInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutCommentsInput | comment_likesUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: comment_likesCreateManyCommentsInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutCommentsInput | comment_likesUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutCommentsInput | comment_likesUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type comment_likesCreateWithoutUsersInput = {
    id?: bigint | number
    created_at?: Date | string | null
    comments: commentsCreateNestedOneWithoutComment_likesInput
  }

  export type comment_likesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    comment_id: bigint | number
    created_at?: Date | string | null
  }

  export type comment_likesCreateOrConnectWithoutUsersInput = {
    where: comment_likesWhereUniqueInput
    create: XOR<comment_likesCreateWithoutUsersInput, comment_likesUncheckedCreateWithoutUsersInput>
  }

  export type comment_likesCreateManyUsersInputEnvelope = {
    data: comment_likesCreateManyUsersInput | comment_likesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutUsersInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesCreateNestedManyWithoutCommentsInput
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    votes: votesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    vote_id: bigint | number
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutCommentsInput
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type votesCreateWithoutUsersInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    comments?: commentsCreateNestedManyWithoutVotesInput
    vote_options?: vote_optionsCreateNestedManyWithoutVoteInput
  }

  export type votesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    comments?: commentsUncheckedCreateNestedManyWithoutVotesInput
    vote_options?: vote_optionsUncheckedCreateNestedManyWithoutVoteInput
  }

  export type votesCreateOrConnectWithoutUsersInput = {
    where: votesWhereUniqueInput
    create: XOR<votesCreateWithoutUsersInput, votesUncheckedCreateWithoutUsersInput>
  }

  export type votesCreateManyUsersInputEnvelope = {
    data: votesCreateManyUsersInput | votesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type comment_likesUpsertWithWhereUniqueWithoutUsersInput = {
    where: comment_likesWhereUniqueInput
    update: XOR<comment_likesUpdateWithoutUsersInput, comment_likesUncheckedUpdateWithoutUsersInput>
    create: XOR<comment_likesCreateWithoutUsersInput, comment_likesUncheckedCreateWithoutUsersInput>
  }

  export type comment_likesUpdateWithWhereUniqueWithoutUsersInput = {
    where: comment_likesWhereUniqueInput
    data: XOR<comment_likesUpdateWithoutUsersInput, comment_likesUncheckedUpdateWithoutUsersInput>
  }

  export type comment_likesUpdateManyWithWhereWithoutUsersInput = {
    where: comment_likesScalarWhereInput
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyWithoutUsersInput>
  }

  export type comment_likesScalarWhereInput = {
    AND?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
    OR?: comment_likesScalarWhereInput[]
    NOT?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
    id?: BigIntFilter<"comment_likes"> | bigint | number
    comment_id?: BigIntFilter<"comment_likes"> | bigint | number
    user_id?: UuidFilter<"comment_likes"> | string
    created_at?: DateTimeNullableFilter<"comment_likes"> | Date | string | null
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: BigIntFilter<"comments"> | bigint | number
    vote_id?: BigIntFilter<"comments"> | bigint | number
    user_id?: UuidFilter<"comments"> | string
    parent_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type votesUpsertWithWhereUniqueWithoutUsersInput = {
    where: votesWhereUniqueInput
    update: XOR<votesUpdateWithoutUsersInput, votesUncheckedUpdateWithoutUsersInput>
    create: XOR<votesCreateWithoutUsersInput, votesUncheckedCreateWithoutUsersInput>
  }

  export type votesUpdateWithWhereUniqueWithoutUsersInput = {
    where: votesWhereUniqueInput
    data: XOR<votesUpdateWithoutUsersInput, votesUncheckedUpdateWithoutUsersInput>
  }

  export type votesUpdateManyWithWhereWithoutUsersInput = {
    where: votesScalarWhereInput
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyWithoutUsersInput>
  }

  export type votesScalarWhereInput = {
    AND?: votesScalarWhereInput | votesScalarWhereInput[]
    OR?: votesScalarWhereInput[]
    NOT?: votesScalarWhereInput | votesScalarWhereInput[]
    id?: BigIntFilter<"votes"> | bigint | number
    title?: StringFilter<"votes"> | string
    description?: StringNullableFilter<"votes"> | string | null
    category_name?: StringFilter<"votes"> | string
    vote_count?: IntFilter<"votes"> | number
    created_by?: UuidFilter<"votes"> | string
    created_at?: DateTimeFilter<"votes"> | Date | string
    expires_at?: DateTimeFilter<"votes"> | Date | string
    category_value?: StringFilter<"votes"> | string
    is_duplicate_vote?: BoolFilter<"votes"> | boolean
  }

  export type votesCreateWithoutVote_optionsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    comments?: commentsCreateNestedManyWithoutVotesInput
    users: usersCreateNestedOneWithoutCreatedVotesInput
  }

  export type votesUncheckedCreateWithoutVote_optionsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_by: string
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    comments?: commentsUncheckedCreateNestedManyWithoutVotesInput
  }

  export type votesCreateOrConnectWithoutVote_optionsInput = {
    where: votesWhereUniqueInput
    create: XOR<votesCreateWithoutVote_optionsInput, votesUncheckedCreateWithoutVote_optionsInput>
  }

  export type votesUpsertWithoutVote_optionsInput = {
    update: XOR<votesUpdateWithoutVote_optionsInput, votesUncheckedUpdateWithoutVote_optionsInput>
    create: XOR<votesCreateWithoutVote_optionsInput, votesUncheckedCreateWithoutVote_optionsInput>
    where?: votesWhereInput
  }

  export type votesUpdateToOneWithWhereWithoutVote_optionsInput = {
    where?: votesWhereInput
    data: XOR<votesUpdateWithoutVote_optionsInput, votesUncheckedUpdateWithoutVote_optionsInput>
  }

  export type votesUpdateWithoutVote_optionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    comments?: commentsUpdateManyWithoutVotesNestedInput
    users?: usersUpdateOneRequiredWithoutCreatedVotesNestedInput
  }

  export type votesUncheckedUpdateWithoutVote_optionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    comments?: commentsUncheckedUpdateManyWithoutVotesNestedInput
  }

  export type commentsCreateWithoutVotesInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesCreateNestedManyWithoutCommentsInput
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutVotesInput = {
    id?: bigint | number
    user_id: string
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutCommentsInput
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutVotesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutVotesInput, commentsUncheckedCreateWithoutVotesInput>
  }

  export type commentsCreateManyVotesInputEnvelope = {
    data: commentsCreateManyVotesInput | commentsCreateManyVotesInput[]
    skipDuplicates?: boolean
  }

  export type vote_optionsCreateWithoutVoteInput = {
    id?: bigint | number
    name: string
    vote_count?: number
  }

  export type vote_optionsUncheckedCreateWithoutVoteInput = {
    id?: bigint | number
    name: string
    vote_count?: number
  }

  export type vote_optionsCreateOrConnectWithoutVoteInput = {
    where: vote_optionsWhereUniqueInput
    create: XOR<vote_optionsCreateWithoutVoteInput, vote_optionsUncheckedCreateWithoutVoteInput>
  }

  export type vote_optionsCreateManyVoteInputEnvelope = {
    data: vote_optionsCreateManyVoteInput | vote_optionsCreateManyVoteInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCreatedVotesInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comment_likes?: comment_likesCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCreatedVotesInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCreatedVotesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCreatedVotesInput, usersUncheckedCreateWithoutCreatedVotesInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutVotesInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutVotesInput, commentsUncheckedUpdateWithoutVotesInput>
    create: XOR<commentsCreateWithoutVotesInput, commentsUncheckedCreateWithoutVotesInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutVotesInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutVotesInput, commentsUncheckedUpdateWithoutVotesInput>
  }

  export type commentsUpdateManyWithWhereWithoutVotesInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutVotesInput>
  }

  export type vote_optionsUpsertWithWhereUniqueWithoutVoteInput = {
    where: vote_optionsWhereUniqueInput
    update: XOR<vote_optionsUpdateWithoutVoteInput, vote_optionsUncheckedUpdateWithoutVoteInput>
    create: XOR<vote_optionsCreateWithoutVoteInput, vote_optionsUncheckedCreateWithoutVoteInput>
  }

  export type vote_optionsUpdateWithWhereUniqueWithoutVoteInput = {
    where: vote_optionsWhereUniqueInput
    data: XOR<vote_optionsUpdateWithoutVoteInput, vote_optionsUncheckedUpdateWithoutVoteInput>
  }

  export type vote_optionsUpdateManyWithWhereWithoutVoteInput = {
    where: vote_optionsScalarWhereInput
    data: XOR<vote_optionsUpdateManyMutationInput, vote_optionsUncheckedUpdateManyWithoutVoteInput>
  }

  export type vote_optionsScalarWhereInput = {
    AND?: vote_optionsScalarWhereInput | vote_optionsScalarWhereInput[]
    OR?: vote_optionsScalarWhereInput[]
    NOT?: vote_optionsScalarWhereInput | vote_optionsScalarWhereInput[]
    id?: BigIntFilter<"vote_options"> | bigint | number
    vote_id?: BigIntFilter<"vote_options"> | bigint | number
    name?: StringFilter<"vote_options"> | string
    vote_count?: IntFilter<"vote_options"> | number
  }

  export type usersUpsertWithoutCreatedVotesInput = {
    update: XOR<usersUpdateWithoutCreatedVotesInput, usersUncheckedUpdateWithoutCreatedVotesInput>
    create: XOR<usersCreateWithoutCreatedVotesInput, usersUncheckedCreateWithoutCreatedVotesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCreatedVotesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCreatedVotesInput, usersUncheckedUpdateWithoutCreatedVotesInput>
  }

  export type usersUpdateWithoutCreatedVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likes?: comment_likesUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCreatedVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutComment_likesInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users: usersCreateNestedOneWithoutCommentsInput
    votes: votesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutComment_likesInput = {
    id?: bigint | number
    vote_id: bigint | number
    user_id: string
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutComment_likesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutComment_likesInput, commentsUncheckedCreateWithoutComment_likesInput>
  }

  export type usersCreateWithoutComment_likesInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    createdVotes?: votesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutComment_likesInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    createdVotes?: votesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutComment_likesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
  }

  export type commentsUpsertWithoutComment_likesInput = {
    update: XOR<commentsUpdateWithoutComment_likesInput, commentsUncheckedUpdateWithoutComment_likesInput>
    create: XOR<commentsCreateWithoutComment_likesInput, commentsUncheckedCreateWithoutComment_likesInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutComment_likesInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutComment_likesInput, commentsUncheckedUpdateWithoutComment_likesInput>
  }

  export type commentsUpdateWithoutComment_likesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
    votes?: votesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutComment_likesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type usersUpsertWithoutComment_likesInput = {
    update: XOR<usersUpdateWithoutComment_likesInput, usersUncheckedUpdateWithoutComment_likesInput>
    create: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutComment_likesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutComment_likesInput, usersUncheckedUpdateWithoutComment_likesInput>
  }

  export type usersUpdateWithoutComment_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    createdVotes?: votesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutComment_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    createdVotes?: votesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type comment_likesCreateWithoutCommentsInput = {
    id?: bigint | number
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutComment_likesInput
  }

  export type comment_likesUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    user_id: string
    created_at?: Date | string | null
  }

  export type comment_likesCreateOrConnectWithoutCommentsInput = {
    where: comment_likesWhereUniqueInput
    create: XOR<comment_likesCreateWithoutCommentsInput, comment_likesUncheckedCreateWithoutCommentsInput>
  }

  export type comment_likesCreateManyCommentsInputEnvelope = {
    data: comment_likesCreateManyCommentsInput | comment_likesCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutOther_commentsInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesCreateNestedManyWithoutCommentsInput
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    users: usersCreateNestedOneWithoutCommentsInput
    votes: votesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutOther_commentsInput = {
    id?: bigint | number
    vote_id: bigint | number
    user_id: string
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutOther_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
  }

  export type commentsCreateWithoutCommentsInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesCreateNestedManyWithoutCommentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users: usersCreateNestedOneWithoutCommentsInput
    votes: votesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    vote_id: bigint | number
    user_id: string
    content: string
    created_at?: Date | string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutCommentsInput
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateManyCommentsInputEnvelope = {
    data: commentsCreateManyCommentsInput | commentsCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCommentsInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comment_likes?: comment_likesCreateNestedManyWithoutUsersInput
    createdVotes?: votesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id: string
    email: string
    nickname: string
    profile_image?: string | null
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUsersInput
    createdVotes?: votesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type votesCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    vote_options?: vote_optionsCreateNestedManyWithoutVoteInput
    users: usersCreateNestedOneWithoutCreatedVotesInput
  }

  export type votesUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_by: string
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
    vote_options?: vote_optionsUncheckedCreateNestedManyWithoutVoteInput
  }

  export type votesCreateOrConnectWithoutCommentsInput = {
    where: votesWhereUniqueInput
    create: XOR<votesCreateWithoutCommentsInput, votesUncheckedCreateWithoutCommentsInput>
  }

  export type comment_likesUpsertWithWhereUniqueWithoutCommentsInput = {
    where: comment_likesWhereUniqueInput
    update: XOR<comment_likesUpdateWithoutCommentsInput, comment_likesUncheckedUpdateWithoutCommentsInput>
    create: XOR<comment_likesCreateWithoutCommentsInput, comment_likesUncheckedCreateWithoutCommentsInput>
  }

  export type comment_likesUpdateWithWhereUniqueWithoutCommentsInput = {
    where: comment_likesWhereUniqueInput
    data: XOR<comment_likesUpdateWithoutCommentsInput, comment_likesUncheckedUpdateWithoutCommentsInput>
  }

  export type comment_likesUpdateManyWithWhereWithoutCommentsInput = {
    where: comment_likesScalarWhereInput
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentsUpsertWithoutOther_commentsInput = {
    update: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutOther_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateWithoutOther_commentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUpdateManyWithoutCommentsNestedInput
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
    votes?: votesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutOther_commentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likes?: comment_likesUpdateManyWithoutUsersNestedInput
    createdVotes?: votesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUsersNestedInput
    createdVotes?: votesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type votesUpsertWithoutCommentsInput = {
    update: XOR<votesUpdateWithoutCommentsInput, votesUncheckedUpdateWithoutCommentsInput>
    create: XOR<votesCreateWithoutCommentsInput, votesUncheckedCreateWithoutCommentsInput>
    where?: votesWhereInput
  }

  export type votesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: votesWhereInput
    data: XOR<votesUpdateWithoutCommentsInput, votesUncheckedUpdateWithoutCommentsInput>
  }

  export type votesUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    vote_options?: vote_optionsUpdateManyWithoutVoteNestedInput
    users?: usersUpdateOneRequiredWithoutCreatedVotesNestedInput
  }

  export type votesUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    vote_options?: vote_optionsUncheckedUpdateManyWithoutVoteNestedInput
  }

  export type comment_likesCreateManyUsersInput = {
    id?: bigint | number
    comment_id: bigint | number
    created_at?: Date | string | null
  }

  export type commentsCreateManyUsersInput = {
    id?: bigint | number
    vote_id: bigint | number
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
  }

  export type votesCreateManyUsersInput = {
    id?: bigint | number
    title: string
    description?: string | null
    category_name: string
    vote_count?: number
    created_at?: Date | string
    expires_at: Date | string
    category_value: string
    is_duplicate_vote: boolean
  }

  export type comment_likesUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneRequiredWithoutComment_likesNestedInput
  }

  export type comment_likesUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_likesUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUpdateManyWithoutCommentsNestedInput
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    votes?: votesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutCommentsNestedInput
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type votesUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    comments?: commentsUpdateManyWithoutVotesNestedInput
    vote_options?: vote_optionsUpdateManyWithoutVoteNestedInput
  }

  export type votesUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
    comments?: commentsUncheckedUpdateManyWithoutVotesNestedInput
    vote_options?: vote_optionsUncheckedUpdateManyWithoutVoteNestedInput
  }

  export type votesUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_value?: StringFieldUpdateOperationsInput | string
    is_duplicate_vote?: BoolFieldUpdateOperationsInput | boolean
  }

  export type commentsCreateManyVotesInput = {
    id?: bigint | number
    user_id: string
    parent_id?: bigint | number | null
    content: string
    created_at?: Date | string | null
  }

  export type vote_optionsCreateManyVoteInput = {
    id?: bigint | number
    name: string
    vote_count?: number
  }

  export type commentsUpdateWithoutVotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUpdateManyWithoutCommentsNestedInput
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutVotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutCommentsNestedInput
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutVotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vote_optionsUpdateWithoutVoteInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
  }

  export type vote_optionsUncheckedUpdateWithoutVoteInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
  }

  export type vote_optionsUncheckedUpdateManyWithoutVoteInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    vote_count?: IntFieldUpdateOperationsInput | number
  }

  export type comment_likesCreateManyCommentsInput = {
    id?: bigint | number
    user_id: string
    created_at?: Date | string | null
  }

  export type commentsCreateManyCommentsInput = {
    id?: bigint | number
    vote_id: bigint | number
    user_id: string
    content: string
    created_at?: Date | string | null
  }

  export type comment_likesUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutComment_likesNestedInput
  }

  export type comment_likesUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comment_likesUncheckedUpdateManyWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUpdateManyWithoutCommentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneRequiredWithoutCommentsNestedInput
    votes?: votesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likes?: comment_likesUncheckedUpdateManyWithoutCommentsNestedInput
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    vote_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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