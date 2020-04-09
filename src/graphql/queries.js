/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      type
      urgency
      quantity
      content
      designs {
        items {
          id
          name
          content
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        urgency
        quantity
        content
        designs {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getDesign = /* GraphQL */ `
  query GetDesign($id: ID!) {
    getDesign(id: $id) {
      id
      name
      content
      post {
        id
        title
        type
        urgency
        quantity
        content
        designs {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const listDesigns = /* GraphQL */ `
  query ListDesigns(
    $filter: ModelDesignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDesigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        post {
          id
          title
          type
          urgency
          quantity
          content
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
