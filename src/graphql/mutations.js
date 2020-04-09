/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createDesign = /* GraphQL */ `
  mutation CreateDesign(
    $input: CreateDesignInput!
    $condition: ModelDesignConditionInput
  ) {
    createDesign(input: $input, condition: $condition) {
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
export const updateDesign = /* GraphQL */ `
  mutation UpdateDesign(
    $input: UpdateDesignInput!
    $condition: ModelDesignConditionInput
  ) {
    updateDesign(input: $input, condition: $condition) {
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
export const deleteDesign = /* GraphQL */ `
  mutation DeleteDesign(
    $input: DeleteDesignInput!
    $condition: ModelDesignConditionInput
  ) {
    deleteDesign(input: $input, condition: $condition) {
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
