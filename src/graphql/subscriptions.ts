/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateDiscussion = /* GraphQL */ `
  subscription OnCreateDiscussion(
    $filter: ModelSubscriptionDiscussionFilterInput
  ) {
    onCreateDiscussion(filter: $filter) {
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
export const onUpdateDiscussion = /* GraphQL */ `
  subscription OnUpdateDiscussion(
    $filter: ModelSubscriptionDiscussionFilterInput
  ) {
    onUpdateDiscussion(filter: $filter) {
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
export const onDeleteDiscussion = /* GraphQL */ `
  subscription OnDeleteDiscussion(
    $filter: ModelSubscriptionDiscussionFilterInput
  ) {
    onDeleteDiscussion(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
