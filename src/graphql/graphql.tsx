import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | undefined;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Attribute = {
  __typename?: 'Attribute';
  displayValue?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type AttributeSet = {
  __typename?: 'AttributeSet';
  id: Scalars['String'];
  items?: Maybe<Array<Maybe<Attribute>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Category = {
  __typename?: 'Category';
  name?: Maybe<Scalars['String']>;
  products: Array<Maybe<ProductType>>;
};

export type CategoryInput = {
  title: Scalars['String'];
};

export type Currency = {
  __typename?: 'Currency';
  label: Scalars['String'];
  symbol: Scalars['String'];
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float'];
  currency: Currency;
};

export type ProductType = {
  __typename?: 'Product';
  attributes?: Maybe<Array<Maybe<AttributeSet>>>;
  brand: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  inStock?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  prices: Array<Price>;
};

export type ProductCartType = {
  attributeSet?: Maybe<Array<Maybe<AttributeSet>>>;
  attributes?: Maybe<Array<Maybe<AttributeSet>>>;
  brand: Scalars['String'];
  category: Scalars['String'];
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  name: Scalars['String'];
  prices: Array<Price>;
  count: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  product?: Maybe<ProductType>;
};

export type QueryCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};

export type QueryProductArgs = {
  id: Scalars['String'];
};

export type GetProductCategoriesNameQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductCategoriesNameQuery = {
  __typename?: 'Query';
  category?: { __typename?: 'Category'; name?: string | null } | null;
  categories?: Array<{ __typename?: 'Category'; name?: string | null } | null> | null;
};

export type GetCurrenciesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrenciesQuery = {
  __typename?: 'Query';
  currencies?: Array<{
    __typename?: 'Currency';
    label: string;
    symbol: string;
  } | null> | null;
};

export type GetProductQueryVariables = Exact<{
  productId: Scalars['String'];
}>;

export type GetProductQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'Product';
    id: string;
    name: string;
    inStock?: boolean | null;
    gallery?: Array<string | null> | null;
    description: string;
    category: string;
    brand: string;
    attributes?: Array<{
      __typename?: 'AttributeSet';
      id: string;
      name?: string | null;
      type?: string | null;
      items?: Array<{
        __typename?: 'Attribute';
        displayValue?: string | null;
        value?: string | null;
        id: string;
      } | null> | null;
    } | null> | null;
    prices: Array<{
      __typename?: 'Price';
      amount: number;
      currency: { __typename?: 'Currency'; label: string; symbol: string };
    }>;
  } | null;
};

export type GetProductCategoryQueryVariables = Exact<{
  categoryInput?: InputMaybe<CategoryInput>;
}>;

export type GetProductCategoryQuery = {
  __typename?: 'Query';
  category?: {
    __typename?: 'Category';
    name?: string | null;
    products: Array<{
      __typename?: 'Product';
      id: string;
      name: string;
      inStock?: boolean | null;
      gallery?: Array<string | null> | null;
      description: string;
      category: string;
      brand: string;
      attributes?: Array<{
        __typename?: 'AttributeSet';
        id: string;
        name?: string | null;
        type?: string | null;
        items?: Array<{
          __typename?: 'Attribute';
          displayValue?: string | null;
          value?: string | null;
          id: string;
        } | null> | null;
      } | null> | null;
      prices: Array<{
        __typename?: 'Price';
        amount: number;
        currency: { __typename?: 'Currency'; label: string; symbol: string };
      }>;
    } | null>;
  } | null;
};

export const GetProductCategoriesNameDocument = gql`
  query getProductCategoriesName {
    category {
      name
    }
    categories {
      name
    }
  }
`;

/**
 * __useGetProductCategoriesNameQuery__
 *
 * To run a query within a React component, call `useGetProductCategoriesNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoriesNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoriesNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductCategoriesNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductCategoriesNameQuery,
    GetProductCategoriesNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductCategoriesNameQuery,
    GetProductCategoriesNameQueryVariables
  >(GetProductCategoriesNameDocument, options);
}

export function useGetProductCategoriesNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductCategoriesNameQuery,
    GetProductCategoriesNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductCategoriesNameQuery,
    GetProductCategoriesNameQueryVariables
  >(GetProductCategoriesNameDocument, options);
}

export type GetProductCategoriesNameQueryHookResult = ReturnType<
  typeof useGetProductCategoriesNameQuery
>;
export type GetProductCategoriesNameLazyQueryHookResult = ReturnType<
  typeof useGetProductCategoriesNameLazyQuery
>;
export type GetProductCategoriesNameQueryResult = Apollo.QueryResult<
  GetProductCategoriesNameQuery,
  GetProductCategoriesNameQueryVariables
>;
export const GetCurrenciesDocument = gql`
  query getCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

/**
 * __useGetCurrenciesQuery__
 *
 * To run a query within a React component, call `useGetCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrenciesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(
    GetCurrenciesDocument,
    options,
  );
}

export function useGetCurrenciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrenciesQuery,
    GetCurrenciesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(
    GetCurrenciesDocument,
    options,
  );
}

export type GetCurrenciesQueryHookResult = ReturnType<typeof useGetCurrenciesQuery>;
export type GetCurrenciesLazyQueryHookResult = ReturnType<
  typeof useGetCurrenciesLazyQuery
>;
export type GetCurrenciesQueryResult = Apollo.QueryResult<
  GetCurrenciesQuery,
  GetCurrenciesQueryVariables
>;
export const GetProductDocument = gql`
  query getProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options,
  );
}

export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    options,
  );
}

export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<
  GetProductQuery,
  GetProductQueryVariables
>;
export const GetProductCategoryDocument = gql`
  query getProductCategory($categoryInput: CategoryInput) {
    category(input: $categoryInput) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

/**
 * __useGetProductCategoryQuery__
 *
 * To run a query within a React component, call `useGetProductCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoryQuery({
 *   variables: {
 *      categoryInput: // value for 'categoryInput'
 *   },
 * });
 */
export function useGetProductCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductCategoryQuery,
    GetProductCategoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(
    GetProductCategoryDocument,
    options,
  );
}

export function useGetProductCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductCategoryQuery,
    GetProductCategoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(
    GetProductCategoryDocument,
    options,
  );
}

export type GetProductCategoryLazyQueryHookResult = ReturnType<
  typeof useGetProductCategoryLazyQuery
>;
export type GetProductCategoryQueryResult = Apollo.QueryResult<
  GetProductCategoryQuery,
  GetProductCategoryQueryVariables
>;
