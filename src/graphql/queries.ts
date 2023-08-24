/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      picture
      discussions {
        items {
          id
          title
          createdAt
          updatedAt
          userDiscussionsId
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          createdAt
          updatedAt
          userMessagesId
          discussionMessageBlockId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        picture
        discussions {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDiscussion = /* GraphQL */ `
  query GetDiscussion($id: ID!) {
    getDiscussion(id: $id) {
      id
      title
      owner {
        id
        name
        picture
        discussions {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      messageBlock {
        items {
          id
          content
          createdAt
          updatedAt
          userMessagesId
          discussionMessageBlockId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userDiscussionsId
      __typename
    }
  }
`;
export const listDiscussions = /* GraphQL */ `
  query ListDiscussions(
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscussions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        owner {
          id
          name
          picture
          createdAt
          updatedAt
          __typename
        }
        messageBlock {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userDiscussionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      owner {
        id
        name
        picture
        discussions {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      userMessagesId
      discussionMessageBlockId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner {
          id
          name
          picture
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        userMessagesId
        discussionMessageBlockId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
