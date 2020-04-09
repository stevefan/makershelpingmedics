/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
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
export const onCreateDesign = /* GraphQL */ `
  subscription OnCreateDesign($owner: String!) {
    onCreateDesign(owner: $owner) {
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
export const onUpdateDesign = /* GraphQL */ `
  subscription OnUpdateDesign($owner: String!) {
    onUpdateDesign(owner: $owner) {
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
export const onDeleteDesign = /* GraphQL */ `
  subscription OnDeleteDesign($owner: String!) {
    onDeleteDesign(owner: $owner) {
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
