/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Aggregation key-value result */
  Aggregation: { input: any; output: any; }
  /** Time point */
  Instant: { input: any; output: any; }
  /** An RFC-3339 compliant Full Date Scalar */
  LocalDate: { input: any; output: any; }
  /** 24-hour clock time value string in the format `hh:mm:ss` or `hh:mm:ss.sss`. */
  LocalTime: { input: any; output: any; }
  /** A 64-bit signed integer */
  Long: { input: any; output: any; }
  /** An object scalar */
  Object: { input: any; output: any; }
};

export type Account = Entity & {
  __typename?: 'Account';
  accountWallet?: Maybe<AccountWallet>;
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  mail: Scalars['ID']['output'];
  nickname: Scalars['ID']['output'];
  shops?: Maybe<ShopConnection>;
  updatedAt: Scalars['Instant']['output'];
};


export type AccountAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type AccountShopsArgs = {
  filter?: InputMaybe<ShopFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ShopOrder>>;
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String']['output'];
  node: Account;
};

export type AccountFilter = {
  and?: InputMaybe<Array<AccountFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  mail?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  not?: InputMaybe<AccountFilter>;
  or?: InputMaybe<Array<AccountFilter>>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type AccountOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  mail?: InputMaybe<OrderDirection>;
  nickname?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type AccountRole = Entity & {
  __typename?: 'AccountRole';
  account?: Maybe<Account>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  role?: Maybe<Role>;
  updatedAt: Scalars['Instant']['output'];
};

export type AccountRoleInput = {
  accountId: Scalars['ID']['input'];
  role?: InputMaybe<Role>;
};

export type AccountWallet = Entity & {
  __typename?: 'AccountWallet';
  account: Account;
  accountWalletTransactions?: Maybe<AccountWalletTransactionConnection>;
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  balance: Scalars['Int']['output'];
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Instant']['output'];
};


export type AccountWalletAccountWalletTransactionsArgs = {
  filter?: InputMaybe<AccountWalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AccountWalletTransactionOrder>>;
};


export type AccountWalletAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AccountWalletConnection = {
  __typename?: 'AccountWalletConnection';
  edges: Array<AccountWalletEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type AccountWalletEdge = {
  __typename?: 'AccountWalletEdge';
  cursor: Scalars['String']['output'];
  node: AccountWallet;
};

export type AccountWalletFilter = {
  account?: InputMaybe<AccountFilter>;
  and?: InputMaybe<Array<AccountWalletFilter>>;
  balance?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<AccountWalletFilter>;
  or?: InputMaybe<Array<AccountWalletFilter>>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type AccountWalletOrder = {
  account?: InputMaybe<AccountOrder>;
  balance?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type AccountWalletTransaction = Entity & PaymentItemData & PaymentMethodData & {
  __typename?: 'AccountWalletTransaction';
  accountWallet: AccountWallet;
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  payment: Payment;
  type: AccountWalletTransactionType;
  updatedAt: Scalars['Instant']['output'];
};


export type AccountWalletTransactionAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AccountWalletTransactionConnection = {
  __typename?: 'AccountWalletTransactionConnection';
  edges: Array<AccountWalletTransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type AccountWalletTransactionEdge = {
  __typename?: 'AccountWalletTransactionEdge';
  cursor: Scalars['String']['output'];
  node: AccountWalletTransaction;
};

export type AccountWalletTransactionFilter = {
  accountWallet?: InputMaybe<AccountWalletFilter>;
  and?: InputMaybe<Array<AccountWalletTransactionFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  itemType?: InputMaybe<PaymentItemTypeFilter>;
  methodType?: InputMaybe<PaymentMethodTypeFilter>;
  not?: InputMaybe<AccountWalletTransactionFilter>;
  or?: InputMaybe<Array<AccountWalletTransactionFilter>>;
  payment?: InputMaybe<PaymentFilter>;
  type?: InputMaybe<AccountWalletTransactionTypeFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type AccountWalletTransactionOrder = {
  accountWallet?: InputMaybe<AccountWalletOrder>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  itemType?: InputMaybe<OrderDirection>;
  methodType?: InputMaybe<OrderDirection>;
  payment?: InputMaybe<PaymentOrder>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum AccountWalletTransactionType {
  Income = 'INCOME',
  Outcome = 'OUTCOME'
}

export type AccountWalletTransactionTypeFilter = {
  eq?: InputMaybe<AccountWalletTransactionType>;
  in?: InputMaybe<Array<AccountWalletTransactionType>>;
};

export type ActivationCodeOrderProduct = ConversationSource & Entity & OrderProduct & {
  __typename?: 'ActivationCodeOrderProduct';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  /**  Null в случае если заказ не оплачен, так же ошибка в ошибках */
  codes?: Maybe<Array<Scalars['String']['output']>>;
  conversation?: Maybe<Conversation>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  /**  Цена за одну позицию */
  price?: Maybe<Scalars['Int']['output']>;
  product: ActivationCodeProduct;
  productSelection?: Maybe<ActivationCodeProductSelection>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /**  Цена финальная (в данный момент просто price * quantity, но потом могут акции добавиться) */
  total?: Maybe<Scalars['Int']['output']>;
  type: ConversationType;
  updatedAt: Scalars['Instant']['output'];
};


export type ActivationCodeOrderProductAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ActivationCodeProduct = Entity & Product & {
  __typename?: 'ActivationCodeProduct';
  active: Scalars['Boolean']['output'];
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  category: Category;
  createdAt: Scalars['Instant']['output'];
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  oldPrice?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  productPathGroup?: Maybe<ProductPathGroup>;
  productReviews?: Maybe<ProductReviewConnection>;
  /**  Округляет остаток до 10 */
  remainingCount?: Maybe<Scalars['Int']['output']>;
  reviewAverage: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  shop: Shop;
  updatedAt: Scalars['Instant']['output'];
  usageInstruction?: Maybe<Scalars['String']['output']>;
};


export type ActivationCodeProductAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ActivationCodeProductProductReviewsArgs = {
  filter?: InputMaybe<ProductReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductReviewOrder>>;
};

export type ActivationCodeProductOrderInput = {
  positionId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ActivationCodeProductSelection = OrderProductSelection & {
  __typename?: 'ActivationCodeProductSelection';
  _stub?: Maybe<Scalars['Object']['output']>;
};

export type ActivationCodeProductValidateResultRow = ProductValidateResultRow & {
  __typename?: 'ActivationCodeProductValidateResultRow';
  positionId: Scalars['ID']['output'];
  price?: Maybe<OrderProductPrice>;
  problem?: Maybe<ProductValidationProblem>;
  /**  Null если продукт не найден */
  product?: Maybe<ActivationCodeProduct>;
  selection?: Maybe<ActivationCodeProductSelection>;
};

export type AggregationConnection = {
  __typename?: 'AggregationConnection';
  edges?: Maybe<Array<Maybe<AggregationEdge>>>;
  pageInfo: PageInfo;
};

export type AggregationEdge = {
  __typename?: 'AggregationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Scalars['Aggregation']['output']>;
};

export type AggregationOrder = {
  alias: Scalars['String']['input'];
  direction: OrderDirection;
};

export type AggregationParam = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type CardPaymentMethod = Entity & PaymentMethodData & {
  __typename?: 'CardPaymentMethod';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  cardNumber: Scalars['String']['output'];
  createdAt: Scalars['Instant']['output'];
  extId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  payment: Payment;
  updatedAt: Scalars['Instant']['output'];
};


export type CardPaymentMethodAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CardPaymentMethodConnection = {
  __typename?: 'CardPaymentMethodConnection';
  edges: Array<CardPaymentMethodEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type CardPaymentMethodEdge = {
  __typename?: 'CardPaymentMethodEdge';
  cursor: Scalars['String']['output'];
  node: CardPaymentMethod;
};

export type CardPaymentMethodFilter = {
  and?: InputMaybe<Array<CardPaymentMethodFilter>>;
  cardNumber?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  extId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  methodType?: InputMaybe<PaymentMethodTypeFilter>;
  not?: InputMaybe<CardPaymentMethodFilter>;
  or?: InputMaybe<Array<CardPaymentMethodFilter>>;
  payment?: InputMaybe<PaymentFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type CardPaymentMethodOrder = {
  cardNumber?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  extId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  methodType?: InputMaybe<OrderDirection>;
  payment?: InputMaybe<PaymentOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type Category = Entity & {
  __typename?: 'Category';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  children?: Maybe<CategoryConnection>;
  code: Scalars['String']['output'];
  createdAt: Scalars['Instant']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  parent?: Maybe<Category>;
  products?: Maybe<ProductConnection>;
  updatedAt: Scalars['Instant']['output'];
};


export type CategoryAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type CategoryChildrenArgs = {
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CategoryOrder>>;
};


export type CategoryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductOrder>>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  displayName?: InputMaybe<StringSearchFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<ImageFilter>;
  not?: InputMaybe<CategoryFilter>;
  or?: InputMaybe<Array<CategoryFilter>>;
  parent?: InputMaybe<CategoryFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type CategoryOrder = {
  code?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  displayName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<ImageOrder>;
  parent?: InputMaybe<CategoryOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ConfigurableOrderProduct = ConversationSource & Entity & OrderProduct & {
  __typename?: 'ConfigurableOrderProduct';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  conversation?: Maybe<Conversation>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  /**  Цена за одну позицию */
  price?: Maybe<Scalars['Int']['output']>;
  product: ConfigurableProduct;
  productSelection?: Maybe<ConfigurableProductSelection>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /**  Цена финальная (в данный момент просто price * quantity, но потом могут акции добавиться) */
  total?: Maybe<Scalars['Int']['output']>;
  type: ConversationType;
  updatedAt: Scalars['Instant']['output'];
};


export type ConfigurableOrderProductAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ConfigurableProduct = Entity & Product & {
  __typename?: 'ConfigurableProduct';
  active: Scalars['Boolean']['output'];
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  category: Category;
  configuration?: Maybe<ProductConfiguration>;
  createdAt: Scalars['Instant']['output'];
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  oldPrice?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  productPathGroup?: Maybe<ProductPathGroup>;
  productReviews?: Maybe<ProductReviewConnection>;
  reviewAverage: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  shop: Shop;
  updatedAt: Scalars['Instant']['output'];
  usageInstruction?: Maybe<Scalars['String']['output']>;
};


export type ConfigurableProductAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ConfigurableProductProductReviewsArgs = {
  filter?: InputMaybe<ProductReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductReviewOrder>>;
};

export type ConfigurableProductConfigurationInput = {
  checkboxes?: InputMaybe<Array<ProductConfigurationCheckboxGroupInput>>;
  /**  Порядок в котором группы будут идти. Нужно подставить IDшники групп. */
  groupOrder?: InputMaybe<Array<Scalars['String']['input']>>;
  numbers?: InputMaybe<Array<ProductConfigurationInputNumberGroupInput>>;
  selects?: InputMaybe<Array<ProductConfigurationSelectGroupInput>>;
  texts?: InputMaybe<Array<ProductConfigurationInputTextGroupInput>>;
};

export type ConfigurableProductOrderInput = {
  positionId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  selection: ConfigurableProductSelectionInput;
};

export type ConfigurableProductSelection = OrderProductSelection & {
  __typename?: 'ConfigurableProductSelection';
  _stub?: Maybe<Scalars['Object']['output']>;
  groups?: Maybe<Array<OrderProductGroup>>;
};

export type ConfigurableProductSelectionInput = {
  checkboxes?: InputMaybe<Array<ProductSelectionCheckboxGroupInput>>;
  numbers?: InputMaybe<Array<ProductSelectionInputNumberGroupInput>>;
  selects?: InputMaybe<Array<ProductSelectionSelectGroupInput>>;
  texts?: InputMaybe<Array<ProductSelectionInputTextGroupInput>>;
};

export type ConfigurableProductValidateResultRow = ProductValidateResultRow & {
  __typename?: 'ConfigurableProductValidateResultRow';
  positionId: Scalars['ID']['output'];
  price?: Maybe<OrderProductPrice>;
  problem?: Maybe<ProductValidationProblem>;
  /**  Null если продукт не найден */
  product?: Maybe<ConfigurableProduct>;
  selection?: Maybe<ConfigurableProductSelection>;
};

export type Conversation = Entity & {
  __typename?: 'Conversation';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  conversationMessages?: Maybe<ConversationMessageConnection>;
  conversationMessagesPaged?: Maybe<ConversationMessageConnection>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  source?: Maybe<ConversationSource>;
  type?: Maybe<ConversationType>;
  updatedAt: Scalars['Instant']['output'];
};


export type ConversationAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ConversationConversationMessagesArgs = {
  filter?: InputMaybe<ConversationMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ConversationMessageOrder>>;
};


export type ConversationConversationMessagesPagedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ConversationMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ConversationMessageOrder>>;
};

export type ConversationConnection = {
  __typename?: 'ConversationConnection';
  edges: Array<ConversationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ConversationEdge = {
  __typename?: 'ConversationEdge';
  cursor: Scalars['String']['output'];
  node: Conversation;
};

export type ConversationFilter = {
  and?: InputMaybe<Array<ConversationFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<ConversationFilter>;
  or?: InputMaybe<Array<ConversationFilter>>;
  type?: InputMaybe<ConversationTypeFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ConversationMessage = Entity & {
  __typename?: 'ConversationMessage';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  conversation: Conversation;
  createdAt: Scalars['Instant']['output'];
  from: Account;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['Instant']['output'];
};


export type ConversationMessageAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ConversationMessageConnection = {
  __typename?: 'ConversationMessageConnection';
  edges: Array<Maybe<ConversationMessageEdge>>;
  pageInfo: PageInfo;
};

export type ConversationMessageEdge = {
  __typename?: 'ConversationMessageEdge';
  cursor: Scalars['String']['output'];
  node: ConversationMessage;
};

export type ConversationMessageFilter = {
  and?: InputMaybe<Array<ConversationMessageFilter>>;
  conversation?: InputMaybe<ConversationFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  from?: InputMaybe<AccountFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<ConversationMessageFilter>;
  or?: InputMaybe<Array<ConversationMessageFilter>>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ConversationMessageInput = {
  text: Scalars['String']['input'];
};

export type ConversationMessageOrder = {
  conversation?: InputMaybe<ConversationOrder>;
  createdAt?: InputMaybe<OrderDirection>;
  from?: InputMaybe<AccountOrder>;
  id?: InputMaybe<OrderDirection>;
  text?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ConversationOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ConversationSource = {
  conversation?: Maybe<Conversation>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  type: ConversationType;
  updatedAt: Scalars['Instant']['output'];
};

export enum ConversationType {
  OrderProduct = 'ORDER_PRODUCT'
}

export type ConversationTypeFilter = {
  eq?: InputMaybe<ConversationType>;
  in?: InputMaybe<Array<ConversationType>>;
};

export type CreateActivationCodeProductInput = {
  categoryId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Int']['input'];
  shopId: Scalars['ID']['input'];
  usageInstruction?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCategoryInput = {
  code: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateConfigurableProductInput = {
  categoryId: Scalars['ID']['input'];
  configuration?: InputMaybe<ConfigurableProductConfigurationInput>;
  description: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Int']['input'];
  shopId: Scalars['ID']['input'];
  usageInstruction?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  order: ValidateOrderInput;
};

export type CreateOrderTransactionInput = {
  amount: Scalars['Int']['input'];
  orderId: Scalars['ID']['input'];
  paymentMethodType: PaymentMethodType;
};

export type CreateProductReviewInput = {
  orderProductId: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type DepositAccountWalletInput = {
  amount: Scalars['Int']['input'];
  paymentMethodType: PaymentMethodType;
};

export type Entity = {
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Instant']['output'];
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatRange = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

export type GenericAggregate = {
  count?: InputMaybe<AggregationParam>;
};

export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IdInput = {
  id: Scalars['ID']['input'];
};

export type Image = Entity & {
  __typename?: 'Image';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  contentType: Scalars['String']['output'];
  createdAt: Scalars['Instant']['output'];
  fileExtension: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /**  NULL только в случае ошибки */
  resize?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Instant']['output'];
  /**  NULL только в случае ошибки */
  url?: Maybe<Scalars['String']['output']>;
};


export type ImageAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ImageResizeArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges: Array<ImageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ImageEdge = {
  __typename?: 'ImageEdge';
  cursor: Scalars['String']['output'];
  node: Image;
};

export type ImageFilter = {
  and?: InputMaybe<Array<ImageFilter>>;
  contentType?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  fileExtension?: InputMaybe<StringFilter>;
  fileSize?: InputMaybe<IntFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<ImageFilter>;
  or?: InputMaybe<Array<ImageFilter>>;
  originalFilename?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
  uploadedBy?: InputMaybe<AccountFilter>;
  width?: InputMaybe<IntFilter>;
};

export type ImageOrder = {
  contentType?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  fileExtension?: InputMaybe<OrderDirection>;
  fileSize?: InputMaybe<OrderDirection>;
  height?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  originalFilename?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  uploadedBy?: InputMaybe<AccountOrder>;
  width?: InputMaybe<OrderDirection>;
};

export type InstantFilter = {
  between?: InputMaybe<InstantRange>;
  eq?: InputMaybe<Scalars['Instant']['input']>;
  ge?: InputMaybe<Scalars['Instant']['input']>;
  gt?: InputMaybe<Scalars['Instant']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Instant']['input']>>>;
  le?: InputMaybe<Scalars['Instant']['input']>;
  lt?: InputMaybe<Scalars['Instant']['input']>;
};

export type InstantRange = {
  max: Scalars['Instant']['input'];
  min: Scalars['Instant']['input'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
};

export type IntRange = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type LocalDateFilter = {
  between?: InputMaybe<LocalDateRange>;
  eq?: InputMaybe<Scalars['LocalDate']['input']>;
  ge?: InputMaybe<Scalars['LocalDate']['input']>;
  gt?: InputMaybe<Scalars['LocalDate']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  le?: InputMaybe<Scalars['LocalDate']['input']>;
  lt?: InputMaybe<Scalars['LocalDate']['input']>;
};

export type LocalDateRange = {
  max: Scalars['LocalDate']['input'];
  min: Scalars['LocalDate']['input'];
};

export type LocalTimeFilter = {
  between?: InputMaybe<LocalTimeRange>;
  eq?: InputMaybe<Scalars['LocalTime']['input']>;
  ge?: InputMaybe<Scalars['LocalTime']['input']>;
  gt?: InputMaybe<Scalars['LocalTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalTime']['input']>>>;
  le?: InputMaybe<Scalars['LocalTime']['input']>;
  lt?: InputMaybe<Scalars['LocalTime']['input']>;
};

export type LocalTimeRange = {
  max: Scalars['LocalTime']['input'];
  min: Scalars['LocalTime']['input'];
};

export type LongFilter = {
  between?: InputMaybe<LongRange>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  ge?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  le?: InputMaybe<Scalars['Long']['input']>;
  lt?: InputMaybe<Scalars['Long']['input']>;
};

export type LongRange = {
  max: Scalars['Long']['input'];
  min: Scalars['Long']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelCardPaymentMethodExternal?: Maybe<CardPaymentMethod>;
  cancelOrder?: Maybe<Order>;
  /**  Выполняет внутреннюю отмену. Закрывает возможность оплатить во внешней системе */
  cancelPayment?: Maybe<Payment>;
  clearPersistedQueryCache?: Maybe<Scalars['Boolean']['output']>;
  completeCardPaymentMethod?: Maybe<CardPaymentMethod>;
  createAccountRole?: Maybe<AccountRole>;
  createActivationCodeProduct: ActivationCodeProduct;
  createCategory?: Maybe<Category>;
  createConfigurableProduct: ConfigurableProduct;
  createOrder?: Maybe<Order>;
  createOrderTransaction?: Maybe<OrderTransaction>;
  createProductPathGroup?: Maybe<ProductPathGroup>;
  createProductReview?: Maybe<ProductReview>;
  createShop?: Maybe<Shop>;
  deleteAccountRole: Scalars['ID']['output'];
  deleteProductPathGroup?: Maybe<Scalars['Boolean']['output']>;
  depositAccountWallet: AccountWalletTransaction;
  manualRecalculateAllProductIndexes?: Maybe<Scalars['Boolean']['output']>;
  manualRecalculateProductIndex?: Maybe<Scalars['Boolean']['output']>;
  sendOrderProductMessage?: Maybe<ConversationMessage>;
  updateActivationCodeProduct: ActivationCodeProduct;
  updateCategory?: Maybe<Category>;
  updateConfigurableProduct: ConfigurableProduct;
  updateProductPathGroup?: Maybe<ProductPathGroup>;
  updateShop?: Maybe<Shop>;
  updateShopActive?: Maybe<Shop>;
};


export type MutationCancelCardPaymentMethodExternalArgs = {
  input?: InputMaybe<IdInput>;
};


export type MutationCancelOrderArgs = {
  input?: InputMaybe<IdInput>;
};


export type MutationCancelPaymentArgs = {
  input?: InputMaybe<IdInput>;
};


export type MutationCompleteCardPaymentMethodArgs = {
  input?: InputMaybe<IdInput>;
};


export type MutationCreateAccountRoleArgs = {
  input?: InputMaybe<AccountRoleInput>;
};


export type MutationCreateActivationCodeProductArgs = {
  input: CreateActivationCodeProductInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateConfigurableProductArgs = {
  input: CreateConfigurableProductInput;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>;
};


export type MutationCreateOrderTransactionArgs = {
  input?: InputMaybe<CreateOrderTransactionInput>;
};


export type MutationCreateProductPathGroupArgs = {
  input: ProductPathGroupInput;
};


export type MutationCreateProductReviewArgs = {
  input?: InputMaybe<CreateProductReviewInput>;
};


export type MutationCreateShopArgs = {
  input?: InputMaybe<ShopInput>;
};


export type MutationDeleteAccountRoleArgs = {
  input?: InputMaybe<IdInput>;
};


export type MutationDeleteProductPathGroupArgs = {
  input: IdInput;
};


export type MutationDepositAccountWalletArgs = {
  input: DepositAccountWalletInput;
};


export type MutationManualRecalculateProductIndexArgs = {
  input: IdInput;
};


export type MutationSendOrderProductMessageArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ConversationMessageInput>;
};


export type MutationUpdateActivationCodeProductArgs = {
  id: Scalars['ID']['input'];
  input: UpdateActivationCodeProductInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCategoryInput;
};


export type MutationUpdateConfigurableProductArgs = {
  id: Scalars['ID']['input'];
  input: UpdateConfigurableProductInput;
};


export type MutationUpdateProductPathGroupArgs = {
  id: Scalars['ID']['input'];
  input: ProductPathGroupInput;
};


export type MutationUpdateShopArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ShopInput>;
};


export type MutationUpdateShopActiveArgs = {
  id: Scalars['ID']['input'];
  input: ShopActiveInput;
};

export type NumberAggregate = {
  avg?: InputMaybe<AggregationParam>;
  count?: InputMaybe<AggregationParam>;
  max?: InputMaybe<AggregationParam>;
  min?: InputMaybe<AggregationParam>;
  sum?: InputMaybe<AggregationParam>;
};

export type Order = Entity & {
  __typename?: 'Order';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  customer?: Maybe<Account>;
  /**  Когда заказ будет просрочен, если его не оплатить */
  expireAt?: Maybe<Scalars['Instant']['output']>;
  id: Scalars['ID']['output'];
  orderProducts?: Maybe<OrderProductConnection>;
  orderTransactions?: Maybe<OrderTransactionConnection>;
  state?: Maybe<OrderState>;
  total?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Instant']['output'];
};


export type OrderAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type OrderOrderProductsArgs = {
  filter?: InputMaybe<OrderProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderProductOrder>>;
};


export type OrderOrderTransactionsArgs = {
  filter?: InputMaybe<OrderTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderTransactionOrder>>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderDirectionFilter = {
  eq?: InputMaybe<OrderDirection>;
  in?: InputMaybe<Array<OrderDirection>>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  customer?: InputMaybe<AccountFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<OrderFilter>;
  or?: InputMaybe<Array<OrderFilter>>;
  state?: InputMaybe<OrderStateFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type OrderOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  customer?: InputMaybe<AccountOrder>;
  id?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrderProduct = {
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  conversation?: Maybe<Conversation>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  /**  Цена за одну позицию */
  price?: Maybe<Scalars['Int']['output']>;
  product: Product;
  productSelection?: Maybe<OrderProductSelection>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /**  Цена финальная (в данный момент просто price * quantity, но потом могут акции добавиться) */
  total?: Maybe<Scalars['Int']['output']>;
  type: ConversationType;
  updatedAt: Scalars['Instant']['output'];
};


export type OrderProductAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderProductConnection = {
  __typename?: 'OrderProductConnection';
  edges: Array<OrderProductEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type OrderProductEdge = {
  __typename?: 'OrderProductEdge';
  cursor: Scalars['String']['output'];
  node: OrderProduct;
};

export type OrderProductFilter = {
  and?: InputMaybe<Array<OrderProductFilter>>;
  conversation?: InputMaybe<ConversationFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<OrderProductFilter>;
  or?: InputMaybe<Array<OrderProductFilter>>;
  order?: InputMaybe<OrderFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  quantity?: InputMaybe<IntFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type OrderProductGroup = {
  __typename?: 'OrderProductGroup';
  price: Scalars['Int']['output'];
  selection: ProductSelectionGroup;
};

export type OrderProductOrder = {
  conversation?: InputMaybe<ConversationOrder>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderOrder>;
  price?: InputMaybe<OrderDirection>;
  product?: InputMaybe<ProductOrder>;
  quantity?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrderProductPrice = {
  __typename?: 'OrderProductPrice';
  /**  Цена за единицу */
  price: Scalars['Int']['output'];
  /**  Количество */
  quantity: Scalars['Int']['output'];
  /**  Цена за всё */
  total: Scalars['Int']['output'];
};

export type OrderProductSelection = {
  _stub?: Maybe<Scalars['Object']['output']>;
};

export enum OrderState {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS'
}

export type OrderStateFilter = {
  eq?: InputMaybe<OrderState>;
  in?: InputMaybe<Array<OrderState>>;
};

export type OrderTransaction = Entity & PaymentItemData & {
  __typename?: 'OrderTransaction';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  payment: Payment;
  updatedAt: Scalars['Instant']['output'];
};


export type OrderTransactionAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderTransactionConnection = {
  __typename?: 'OrderTransactionConnection';
  edges: Array<OrderTransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type OrderTransactionEdge = {
  __typename?: 'OrderTransactionEdge';
  cursor: Scalars['String']['output'];
  node: OrderTransaction;
};

export type OrderTransactionFilter = {
  and?: InputMaybe<Array<OrderTransactionFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  itemType?: InputMaybe<PaymentItemTypeFilter>;
  not?: InputMaybe<OrderTransactionFilter>;
  or?: InputMaybe<Array<OrderTransactionFilter>>;
  order?: InputMaybe<OrderFilter>;
  payment?: InputMaybe<PaymentFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type OrderTransactionOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  itemType?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderOrder>;
  payment?: InputMaybe<PaymentOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OrderValidateResult = {
  __typename?: 'OrderValidateResult';
  products?: Maybe<Array<ProductValidateResultRow>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Payment = Entity & {
  __typename?: 'Payment';
  account: Account;
  amount: Scalars['Int']['output'];
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /**  Calculated fields: */
  item: PaymentItemData;
  itemType: PaymentItemType;
  method: PaymentMethodData;
  methodType: PaymentMethodType;
  state: TransactionState;
  updatedAt: Scalars['Instant']['output'];
};


export type PaymentAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  edges: Array<PaymentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  cursor: Scalars['String']['output'];
  node: Payment;
};

export type PaymentFilter = {
  account?: InputMaybe<AccountFilter>;
  amount?: InputMaybe<IntFilter>;
  and?: InputMaybe<Array<PaymentFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  itemType?: InputMaybe<PaymentItemTypeFilter>;
  methodType?: InputMaybe<PaymentMethodTypeFilter>;
  not?: InputMaybe<PaymentFilter>;
  or?: InputMaybe<Array<PaymentFilter>>;
  state?: InputMaybe<TransactionStateFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

/**  Что payment пытается оплатить, может быть заказом или пополнением баланса */
export type PaymentItemData = {
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  payment: Payment;
  updatedAt: Scalars['Instant']['output'];
};

export enum PaymentItemType {
  Balance = 'BALANCE',
  Order = 'ORDER'
}

export type PaymentItemTypeFilter = {
  eq?: InputMaybe<PaymentItemType>;
  in?: InputMaybe<Array<PaymentItemType>>;
};

/**  Чем был оплачен payment, с баланса или картой */
export type PaymentMethodData = {
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  payment: Payment;
  updatedAt: Scalars['Instant']['output'];
};

export enum PaymentMethodType {
  Balance = 'BALANCE',
  Card = 'CARD',
  ProductSale = 'PRODUCT_SALE'
}

export type PaymentMethodTypeFilter = {
  eq?: InputMaybe<PaymentMethodType>;
  in?: InputMaybe<Array<PaymentMethodType>>;
};

export type PaymentOrder = {
  account?: InputMaybe<AccountOrder>;
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  itemType?: InputMaybe<OrderDirection>;
  methodType?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type Product = {
  active: Scalars['Boolean']['output'];
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  category: Category;
  createdAt: Scalars['Instant']['output'];
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  oldPrice?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  productPathGroup?: Maybe<ProductPathGroup>;
  productReviews?: Maybe<ProductReviewConnection>;
  reviewAverage: Scalars['Float']['output'];
  /**  Индексы и вычисляемое */
  reviewCount: Scalars['Int']['output'];
  shop: Shop;
  updatedAt: Scalars['Instant']['output'];
  usageInstruction?: Maybe<Scalars['String']['output']>;
};


export type ProductAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ProductProductReviewsArgs = {
  filter?: InputMaybe<ProductReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductReviewOrder>>;
};

export type ProductCodeConsignment = Entity & {
  __typename?: 'ProductCodeConsignment';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product: Product;
  updatedAt: Scalars['Instant']['output'];
};


export type ProductCodeConsignmentAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductCodeConsignmentConnection = {
  __typename?: 'ProductCodeConsignmentConnection';
  edges: Array<ProductCodeConsignmentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ProductCodeConsignmentEdge = {
  __typename?: 'ProductCodeConsignmentEdge';
  cursor: Scalars['String']['output'];
  node: ProductCodeConsignment;
};

export type ProductCodeConsignmentFilter = {
  and?: InputMaybe<Array<ProductCodeConsignmentFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<ProductCodeConsignmentFilter>;
  or?: InputMaybe<Array<ProductCodeConsignmentFilter>>;
  product?: InputMaybe<ProductFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ProductCodeConsignmentOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  product?: InputMaybe<ProductOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProductConfiguration = {
  __typename?: 'ProductConfiguration';
  groups?: Maybe<Array<ProductConfigurationGroup>>;
};

export type ProductConfigurationCheckbox = ProductConfigurationGroupListItem & {
  __typename?: 'ProductConfigurationCheckbox';
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /**  Влияние на цену при выборе */
  price?: Maybe<Scalars['Int']['output']>;
};

/**  Checkbox */
export type ProductConfigurationCheckboxGroup = ProductConfigurationGroup & ProductConfigurationGroupList & {
  __typename?: 'ProductConfigurationCheckboxGroup';
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  list?: Maybe<Array<ProductConfigurationCheckbox>>;
};

export type ProductConfigurationCheckboxGroupInput = {
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  list?: InputMaybe<Array<ProductConfigurationCheckboxInput>>;
};

export type ProductConfigurationCheckboxInput = {
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  /**  Влияние на цену при выборе */
  price: Scalars['Int']['input'];
};

export type ProductConfigurationGroup = {
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type ProductConfigurationGroupList = {
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  list?: Maybe<Array<ProductConfigurationGroupListItem>>;
};

export type ProductConfigurationGroupListItem = {
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/**  Number */
export type ProductConfigurationInputNumberGroup = ProductConfigurationGroup & {
  __typename?: 'ProductConfigurationInputNumberGroup';
  /**  Сколько вписано по умолчанию */
  defaultAmount: Scalars['Float']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  /**  Цена за 1 единицу */
  price: Scalars['Float']['output'];
};

export type ProductConfigurationInputNumberGroupInput = {
  /**  Сколько вписано по умолчанию */
  defaultAmount: Scalars['Float']['input'];
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
  /**  Цена за 1 единицу */
  price: Scalars['Float']['input'];
};

/**  Текстовый INPUT: Какая то информация для продавца, не влияющая на цену */
export type ProductConfigurationInputTextGroup = ProductConfigurationGroup & {
  __typename?: 'ProductConfigurationInputTextGroup';
  displayName: Scalars['String']['output'];
  /**
   *  Сообщение при некорректном regex
   *  Фронтовое поле, на беке логики не имеет
   */
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /**  Текст должен попадать под regex */
  regex?: Maybe<Scalars['String']['output']>;
};

export type ProductConfigurationInputTextGroupInput = {
  displayName: Scalars['String']['input'];
  /**
   *  Сообщение при некорректном regex
   *  Фронтовое поле, на беке логики не имеет
   */
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /**  Текст должен попадать под regex */
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type ProductConfigurationSelect = ProductConfigurationGroupListItem & {
  __typename?: 'ProductConfigurationSelect';
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /**  Влияние на цену при выборе */
  price?: Maybe<Scalars['Int']['output']>;
};

/**  Select */
export type ProductConfigurationSelectGroup = ProductConfigurationGroup & ProductConfigurationGroupList & {
  __typename?: 'ProductConfigurationSelectGroup';
  /**  ID предмета выбранного по умолчанию */
  defaultSelect: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  list?: Maybe<Array<ProductConfigurationSelect>>;
};

export type ProductConfigurationSelectGroupInput = {
  /**  ID предмета выбранного по умолчанию */
  defaultSelect: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  list?: InputMaybe<Array<ProductConfigurationSelectInput>>;
};

export type ProductConfigurationSelectInput = {
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  /**  Влияние на цену при выборе */
  price: Scalars['Int']['input'];
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  and?: InputMaybe<Array<ProductFilter>>;
  category?: InputMaybe<CategoryFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  description?: InputMaybe<StringFilter>;
  displayName?: InputMaybe<StringSearchFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<ImageFilter>;
  not?: InputMaybe<ProductFilter>;
  or?: InputMaybe<Array<ProductFilter>>;
  price?: InputMaybe<IntFilter>;
  shop?: InputMaybe<ShopFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
  usageInstruction?: InputMaybe<StringFilter>;
};

export type ProductOrder = {
  active?: InputMaybe<OrderDirection>;
  category?: InputMaybe<CategoryOrder>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  displayName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<ImageOrder>;
  price?: InputMaybe<OrderDirection>;
  shop?: InputMaybe<ShopOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
  usageInstruction?: InputMaybe<OrderDirection>;
};

export type ProductPath = {
  __typename?: 'ProductPath';
  /**  Вспомогательные поля */
  category?: Maybe<ProductPathCategory>;
  /**  Сделал с ID, чтобы на фронте не мапить лишний раз, при редактировании */
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  targetCategory?: Maybe<ProductPathCategory>;
  targetCategoryId?: Maybe<Scalars['String']['output']>;
  targetProduct?: Maybe<Product>;
  targetProductId?: Maybe<Scalars['String']['output']>;
};

export type ProductPathCategory = {
  __typename?: 'ProductPathCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /**  Вспомогательное поле */
  paths?: Maybe<Array<ProductPath>>;
};

export type ProductPathCategoryInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type ProductPathGraphInput = {
  categories: Array<ProductPathCategoryInput>;
  paths: Array<ProductPathInput>;
};

/** Все эти ограничения валидируются, так что создать и тем более получить некорректный граф невозможно(либо возможно если я где то проебланился, но вроде работает) */
export type ProductPathGroup = Entity & {
  __typename?: 'ProductPathGroup';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  graph?: Maybe<ProductPathGroupGraph>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  updatedAt: Scalars['Instant']['output'];
};


/** Все эти ограничения валидируются, так что создать и тем более получить некорректный граф невозможно(либо возможно если я где то проебланился, но вроде работает) */
export type ProductPathGroupAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductPathGroupConnection = {
  __typename?: 'ProductPathGroupConnection';
  edges: Array<ProductPathGroupEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ProductPathGroupEdge = {
  __typename?: 'ProductPathGroupEdge';
  cursor: Scalars['String']['output'];
  node: ProductPathGroup;
};

export type ProductPathGroupFilter = {
  and?: InputMaybe<Array<ProductPathGroupFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<ProductPathGroupFilter>;
  or?: InputMaybe<Array<ProductPathGroupFilter>>;
  shop?: InputMaybe<ShopFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ProductPathGroupGraph = {
  __typename?: 'ProductPathGroupGraph';
  categories?: Maybe<Array<ProductPathCategory>>;
  dump: Scalars['String']['output'];
  paths?: Maybe<Array<ProductPath>>;
};

export type ProductPathGroupInput = {
  graph?: InputMaybe<ProductPathGraphInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /**  Только создание */
  shopId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductPathGroupOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  shop?: InputMaybe<ShopOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProductPathInput = {
  categoryId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  /**
   *  Должен быть только один из них. Другой обязан быть null
   *  Оба не должны быть null одновременно
   */
  targetCategoryId?: InputMaybe<Scalars['ID']['input']>;
  targetProductId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductReview = Entity & {
  __typename?: 'ProductReview';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  orderProduct?: Maybe<OrderProduct>;
  product: Product;
  score: Scalars['Int']['output'];
  shop: Shop;
  shopResponse?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['Instant']['output'];
};


export type ProductReviewAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductReviewConnection = {
  __typename?: 'ProductReviewConnection';
  edges: Array<ProductReviewEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ProductReviewEdge = {
  __typename?: 'ProductReviewEdge';
  cursor: Scalars['String']['output'];
  node: ProductReview;
};

export type ProductReviewFilter = {
  and?: InputMaybe<Array<ProductReviewFilter>>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  not?: InputMaybe<ProductReviewFilter>;
  or?: InputMaybe<Array<ProductReviewFilter>>;
  orderProduct?: InputMaybe<OrderProductFilter>;
  product?: InputMaybe<ProductFilter>;
  score?: InputMaybe<IntFilter>;
  shop?: InputMaybe<ShopFilter>;
  shopResponse?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ProductReviewOrder = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  orderProduct?: InputMaybe<OrderProductOrder>;
  product?: InputMaybe<ProductOrder>;
  score?: InputMaybe<OrderDirection>;
  shop?: InputMaybe<ShopOrder>;
  shopResponse?: InputMaybe<OrderDirection>;
  text?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProductSalePaymentMethod = Entity & PaymentMethodData & {
  __typename?: 'ProductSalePaymentMethod';
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['Instant']['output'];
  id: Scalars['ID']['output'];
  orderProduct?: Maybe<OrderProduct>;
  payment: Payment;
  updatedAt: Scalars['Instant']['output'];
};


export type ProductSalePaymentMethodAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductSalePaymentMethodConnection = {
  __typename?: 'ProductSalePaymentMethodConnection';
  edges: Array<ProductSalePaymentMethodEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ProductSalePaymentMethodEdge = {
  __typename?: 'ProductSalePaymentMethodEdge';
  cursor: Scalars['String']['output'];
  node: ProductSalePaymentMethod;
};

export type ProductSalePaymentMethodFilter = {
  and?: InputMaybe<Array<ProductSalePaymentMethodFilter>>;
  completeAt?: InputMaybe<InstantFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  id?: InputMaybe<IdFilter>;
  methodType?: InputMaybe<PaymentMethodTypeFilter>;
  not?: InputMaybe<ProductSalePaymentMethodFilter>;
  or?: InputMaybe<Array<ProductSalePaymentMethodFilter>>;
  orderProduct?: InputMaybe<OrderProductFilter>;
  payment?: InputMaybe<PaymentFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ProductSalePaymentMethodOrder = {
  completeAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  methodType?: InputMaybe<OrderDirection>;
  orderProduct?: InputMaybe<OrderProductOrder>;
  payment?: InputMaybe<PaymentOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ProductSelectionCheckbox = {
  __typename?: 'ProductSelectionCheckbox';
  id: Scalars['String']['output'];
  info: ProductConfigurationCheckbox;
};

/**  Checkbox */
export type ProductSelectionCheckboxGroup = ProductSelectionGroup & {
  __typename?: 'ProductSelectionCheckboxGroup';
  id: Scalars['String']['output'];
  info: ProductConfigurationCheckboxGroup;
  list?: Maybe<Array<ProductSelectionCheckbox>>;
};

export type ProductSelectionCheckboxGroupInput = {
  id: Scalars['String']['input'];
  list?: InputMaybe<Array<ProductSelectionCheckboxInput>>;
};

export type ProductSelectionCheckboxInput = {
  id: Scalars['String']['input'];
};

export type ProductSelectionGroup = {
  id: Scalars['String']['output'];
  info: ProductConfigurationGroup;
};

/**  Number */
export type ProductSelectionInputNumberGroup = ProductSelectionGroup & {
  __typename?: 'ProductSelectionInputNumberGroup';
  id: Scalars['String']['output'];
  info: ProductConfigurationInputNumberGroup;
  price?: Maybe<Scalars['Int']['output']>;
  value: Scalars['Float']['output'];
};

export type ProductSelectionInputNumberGroupInput = {
  id: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

/**  Текстовый INPUT: Какая то информация для продавца, не влияющая на цену */
export type ProductSelectionInputTextGroup = ProductSelectionGroup & {
  __typename?: 'ProductSelectionInputTextGroup';
  id: Scalars['String']['output'];
  info: ProductConfigurationInputTextGroup;
  value: Scalars['String']['output'];
};

export type ProductSelectionInputTextGroupInput = {
  id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductSelectionSelect = {
  __typename?: 'ProductSelectionSelect';
  id: Scalars['String']['output'];
  info: ProductConfigurationSelect;
};

/**  Select */
export type ProductSelectionSelectGroup = ProductSelectionGroup & {
  __typename?: 'ProductSelectionSelectGroup';
  id: Scalars['String']['output'];
  info: ProductConfigurationSelectGroup;
  select: ProductSelectionSelect;
};

export type ProductSelectionSelectGroupInput = {
  id: Scalars['String']['input'];
  select?: InputMaybe<ProductSelectionSelectInput>;
};

export type ProductSelectionSelectInput = {
  id: Scalars['String']['input'];
};

export type ProductValidateResultRow = {
  positionId: Scalars['ID']['output'];
  price?: Maybe<OrderProductPrice>;
  problem?: Maybe<ProductValidationProblem>;
  /**  Null если продукт не найден */
  product?: Maybe<Product>;
  selection?: Maybe<OrderProductSelection>;
};

export type ProductValidationProblem = {
  __typename?: 'ProductValidationProblem';
  extra?: Maybe<Scalars['Object']['output']>;
  message: Scalars['String']['output'];
  type: ProductValidationProblemType;
};

export enum ProductValidationProblemType {
  /**  Продукт не активен */
  Disabled = 'DISABLED',
  /**
   *  Ошибки Configurable продуктов:
   *  Конфигурация некорректна
   */
  InvalidConfiguration = 'INVALID_CONFIGURATION',
  /**  Неверный тип продукта */
  InvalidType = 'INVALID_TYPE',
  /**
   *  Ошибки общего назначения
   *  Продукт не найден
   */
  NotFound = 'NOT_FOUND',
  /**
   *  Ошибки ActivationCode продуктов:
   *  Нет доступных кодов для заказа
   */
  OutOfStock = 'OUT_OF_STOCK'
}

export type ProductValidationProblemTypeFilter = {
  eq?: InputMaybe<ProductValidationProblemType>;
  in?: InputMaybe<Array<ProductValidationProblemType>>;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accountWallet: AccountWallet;
  accountWalletTransaction: AccountWalletTransaction;
  accountWalletTransactions: AccountWalletTransactionConnection;
  accountWallets: AccountWalletConnection;
  accounts: AccountConnection;
  activeProducts?: Maybe<ProductConnection>;
  activeShops?: Maybe<ShopConnection>;
  cardPaymentMethod: CardPaymentMethod;
  cardPaymentMethods: CardPaymentMethodConnection;
  categories: CategoryConnection;
  category: Category;
  conversation: Conversation;
  conversationMessage: ConversationMessage;
  conversationMessages: ConversationMessageConnection;
  conversations: ConversationConnection;
  image: Image;
  images: ImageConnection;
  me: UserInfo;
  myOrderProducts?: Maybe<OrderProductConnection>;
  myOrderTransactions?: Maybe<OrderConnection>;
  myOrders?: Maybe<OrderConnection>;
  myPayments?: Maybe<PaymentConnection>;
  myShops?: Maybe<ShopConnection>;
  order: Order;
  orderProduct: OrderProduct;
  orderProductMessages?: Maybe<ConversationMessageConnection>;
  orderProducts: OrderProductConnection;
  orderTransaction: OrderTransaction;
  orderTransactions: OrderTransactionConnection;
  orders: OrderConnection;
  payment: Payment;
  payments: PaymentConnection;
  product: Product;
  productCodeConsignment: ProductCodeConsignment;
  productCodeConsignments: ProductCodeConsignmentConnection;
  productPathGroup: ProductPathGroup;
  productPathGroups: ProductPathGroupConnection;
  productReview: ProductReview;
  productReviews: ProductReviewConnection;
  productSalePaymentMethod: ProductSalePaymentMethod;
  productSalePaymentMethods: ProductSalePaymentMethodConnection;
  products: ProductConnection;
  shop: Shop;
  shopByCode: Shop;
  shops: ShopConnection;
  validateOrder?: Maybe<OrderValidateResult>;
};


export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountWalletTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountWalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountWalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AccountWalletTransactionOrder>>;
};


export type QueryAccountWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountWalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AccountWalletOrder>>;
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AccountOrder>>;
};


export type QueryActiveProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductOrder>>;
};


export type QueryActiveShopsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShopFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ShopOrder>>;
};


export type QueryCardPaymentMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CardPaymentMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CardPaymentMethodOrder>>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CategoryOrder>>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConversationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConversationMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConversationMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ConversationMessageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ConversationMessageOrder>>;
};


export type QueryConversationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ConversationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ConversationOrder>>;
};


export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ImageOrder>>;
};


export type QueryMyOrderProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderProductOrder>>;
};


export type QueryMyOrderTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderOrder>>;
};


export type QueryMyOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderOrder>>;
};


export type QueryMyPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PaymentOrder>>;
};


export type QueryMyShopsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShopFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ShopOrder>>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderProductMessagesArgs = {
  begin?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderProductOrder>>;
};


export type QueryOrderTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderTransactionOrder>>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderOrder>>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PaymentOrder>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductCodeConsignmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductCodeConsignmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductCodeConsignmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductCodeConsignmentOrder>>;
};


export type QueryProductPathGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductPathGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductPathGroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductPathGroupOrder>>;
};


export type QueryProductReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductReviewOrder>>;
};


export type QueryProductSalePaymentMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductSalePaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductSalePaymentMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductSalePaymentMethodOrder>>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductOrder>>;
};


export type QueryShopArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShopByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryShopsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShopFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ShopOrder>>;
};


export type QueryValidateOrderArgs = {
  input: ValidateOrderInput;
};

export enum Role {
  Admin = 'ADMIN',
  Seller = 'SELLER'
}

export type RoleFilter = {
  eq?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
};

export type Shop = Entity & {
  __typename?: 'Shop';
  active?: Maybe<Scalars['Boolean']['output']>;
  availablePermissions?: Maybe<Array<Scalars['String']['output']>>;
  categories?: Maybe<CategoryConnection>;
  code: Scalars['String']['output'];
  cover?: Maybe<Image>;
  createdAt: Scalars['Instant']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  owner?: Maybe<Account>;
  productReviews?: Maybe<ProductReviewConnection>;
  products?: Maybe<ProductConnection>;
  updatedAt: Scalars['Instant']['output'];
};


export type ShopAvailablePermissionsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ShopCategoriesArgs = {
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CategoryOrder>>;
};


export type ShopProductReviewsArgs = {
  filter?: InputMaybe<ProductReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductReviewOrder>>;
};


export type ShopProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProductOrder>>;
};

export type ShopActiveInput = {
  active: Scalars['Boolean']['input'];
};

export type ShopConnection = {
  __typename?: 'ShopConnection';
  edges: Array<ShopEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

export type ShopEdge = {
  __typename?: 'ShopEdge';
  cursor: Scalars['String']['output'];
  node: Shop;
};

export type ShopFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  and?: InputMaybe<Array<ShopFilter>>;
  code?: InputMaybe<StringFilter>;
  cover?: InputMaybe<ImageFilter>;
  createdAt?: InputMaybe<InstantFilter>;
  displayName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<ImageFilter>;
  not?: InputMaybe<ShopFilter>;
  or?: InputMaybe<Array<ShopFilter>>;
  owner?: InputMaybe<AccountFilter>;
  updatedAt?: InputMaybe<InstantFilter>;
};

export type ShopInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  coverId?: InputMaybe<Scalars['ID']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
};

export type ShopOrder = {
  active?: InputMaybe<OrderDirection>;
  code?: InputMaybe<OrderDirection>;
  cover?: InputMaybe<ImageOrder>;
  createdAt?: InputMaybe<OrderDirection>;
  displayName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<ImageOrder>;
  owner?: InputMaybe<AccountOrder>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type StringFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringRange = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

export type StringSearchFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  /**  Так же, неявно, добавляет сортировку по лучшему совпадению */
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  conversationMessage?: Maybe<ConversationMessage>;
  testSub?: Maybe<Scalars['String']['output']>;
};

export enum TransactionState {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS'
}

export type TransactionStateFilter = {
  eq?: InputMaybe<TransactionState>;
  in?: InputMaybe<Array<TransactionState>>;
};

export type UnknownProductValidateResultRow = ProductValidateResultRow & {
  __typename?: 'UnknownProductValidateResultRow';
  positionId: Scalars['ID']['output'];
  price?: Maybe<OrderProductPrice>;
  problem?: Maybe<ProductValidationProblem>;
  /**  Null если продукт не найден */
  product?: Maybe<Product>;
  selection?: Maybe<OrderProductSelection>;
};

export type UpdateActivationCodeProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  usageInstruction?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateConfigurableProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /**  Частичное обновление не поддерживается, надо передать всё! */
  configuration?: InputMaybe<ConfigurableProductConfigurationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  usageInstruction?: InputMaybe<Scalars['String']['input']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  account?: Maybe<Account>;
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  roles?: Maybe<Array<Scalars['String']['output']>>;
};

export type ValidateOrderInput = {
  activationCodeProducts?: InputMaybe<Array<ActivationCodeProductOrderInput>>;
  configurableProducts?: InputMaybe<Array<ConfigurableProductOrderInput>>;
};
