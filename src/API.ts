/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  picture?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  picture?: string | null,
  discussions?: ModelDiscussionConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDiscussionConnection = {
  __typename: "ModelDiscussionConnection",
  items:  Array<Discussion | null >,
  nextToken?: string | null,
};

export type Discussion = {
  __typename: "Discussion",
  id: string,
  title: string,
  owner?: User | null,
  messageBlock?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  userDiscussionsId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  owner?: User | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  userMessagesId?: string | null,
  discussionMessageBlockId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  picture?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateDiscussionInput = {
  id?: string | null,
  title: string,
  userDiscussionsId?: string | null,
};

export type ModelDiscussionConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelDiscussionConditionInput | null > | null,
  or?: Array< ModelDiscussionConditionInput | null > | null,
  not?: ModelDiscussionConditionInput | null,
  userDiscussionsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateDiscussionInput = {
  id: string,
  title?: string | null,
  userDiscussionsId?: string | null,
};

export type DeleteDiscussionInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  userMessagesId?: string | null,
  discussionMessageBlockId?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  userMessagesId?: ModelIDInput | null,
  discussionMessageBlockId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  userMessagesId?: string | null,
  discussionMessageBlockId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelDiscussionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelDiscussionFilterInput | null > | null,
  or?: Array< ModelDiscussionFilterInput | null > | null,
  not?: ModelDiscussionFilterInput | null,
  userDiscussionsId?: ModelIDInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  userMessagesId?: ModelIDInput | null,
  discussionMessageBlockId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDiscussionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiscussionFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiscussionFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDiscussionMutationVariables = {
  input: CreateDiscussionInput,
  condition?: ModelDiscussionConditionInput | null,
};

export type CreateDiscussionMutation = {
  createDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type UpdateDiscussionMutationVariables = {
  input: UpdateDiscussionInput,
  condition?: ModelDiscussionConditionInput | null,
};

export type UpdateDiscussionMutation = {
  updateDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type DeleteDiscussionMutationVariables = {
  input: DeleteDiscussionInput,
  condition?: ModelDiscussionConditionInput | null,
};

export type DeleteDiscussionMutation = {
  deleteDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDiscussionQueryVariables = {
  id: string,
};

export type GetDiscussionQuery = {
  getDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type ListDiscussionsQueryVariables = {
  filter?: ModelDiscussionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiscussionsQuery = {
  listDiscussions?:  {
    __typename: "ModelDiscussionConnection",
    items:  Array< {
      __typename: "Discussion",
      id: string,
      title: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        picture?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      messageBlock?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userDiscussionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      owner?:  {
        __typename: "User",
        id: string,
        name: string,
        picture?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      userMessagesId?: string | null,
      discussionMessageBlockId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    picture?: string | null,
    discussions?:  {
      __typename: "ModelDiscussionConnection",
      items:  Array< {
        __typename: "Discussion",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        userDiscussionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDiscussionSubscriptionVariables = {
  filter?: ModelSubscriptionDiscussionFilterInput | null,
};

export type OnCreateDiscussionSubscription = {
  onCreateDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type OnUpdateDiscussionSubscriptionVariables = {
  filter?: ModelSubscriptionDiscussionFilterInput | null,
};

export type OnUpdateDiscussionSubscription = {
  onUpdateDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type OnDeleteDiscussionSubscriptionVariables = {
  filter?: ModelSubscriptionDiscussionFilterInput | null,
};

export type OnDeleteDiscussionSubscription = {
  onDeleteDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messageBlock?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        userMessagesId?: string | null,
        discussionMessageBlockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDiscussionsId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    owner?:  {
      __typename: "User",
      id: string,
      name: string,
      picture?: string | null,
      discussions?:  {
        __typename: "ModelDiscussionConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    userMessagesId?: string | null,
    discussionMessageBlockId?: string | null,
  } | null,
};
