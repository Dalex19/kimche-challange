import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query CharactersByPage($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        id
        image
      }
    }
  }
`;

const GET_SINGLE_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      gender
      species
      type
      origin {
        dimension
        name
      }
      location {
        name
      }
    }
  }
`;

const GET_CHARACTER_FOR_NAME = gql`
  query GetCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const GET_CHARACTERS_FOR_FILTERS = gql`
query GetCharacters($species: String, $status: String, $gender: String) {
  characters(filter: { species: $species, status: $status, gender: $gender }) {
    results {
      id
      name
      image
    }
  }
}
`;

export { GET_CHARACTER, GET_SINGLE_CHARACTER, GET_CHARACTER_FOR_NAME, GET_CHARACTERS_FOR_FILTERS };
