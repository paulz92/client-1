import gql from 'graphql-tag'

export const getCarSelectionOptionsQueryString = `
  query {
    data: findAllCarMakes {
      name
      models {
        name
        firstYear
        lastYear
      }
    }
  }
`

export const getCarSelectionOptionsQuery = 
  gql(getCarSelectionOptionsQueryString)
