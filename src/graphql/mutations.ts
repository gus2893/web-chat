/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDiscussion = /* GraphQL */ `
  mutation CreateDiscussion(
    $input: CreateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    createDiscussion(input: $input, condition: $condition) {
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
export const updateDiscussion = /* GraphQL */ `
  mutation UpdateDiscussion(
    $input: UpdateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    updateDiscussion(input: $input, condition: $condition) {
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
export const deleteDiscussion = /* GraphQL */ `
  mutation DeleteDiscussion(
    $input: DeleteDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    deleteDiscussion(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
