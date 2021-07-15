import 'cross-fetch/polyfill';
import { 
  ApolloClient, 
  InMemoryCache, 
  HttpLink,
  gql
} from '@apollo/client';

// const httpLink = new HttpLink({
//   uri: 'https://api.code-challenge.ze.delivery/public/graphql'
// })

export const client = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache(),
});


export const ALL_PRODUCTS = gql`
  query allProducts($id: ID!, $categoryId: Int, $search: String){
    pocs: poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
        }
      }
    }
  }
`

export const CATEGORIES = gql`
query allCategoriesSearch {
  allCategory{
    title
    id
  }
}`;


export const POC_PRODUCTS_LIST = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          inventoryItemId
          shortDescription
          title
          published
          volume
          volumeUnit
          description
          subtitle
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }
`

export const POC_SEARCH = gql`
query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
  pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
    id
    status
  }
}
`;
