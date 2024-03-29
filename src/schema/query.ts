import { gql } from "apollo-server-express"

const query = gql`
	type Query {
		hello: String!
		
		me: User!
		user(id: String!): User!
		users: [User]!
		chats: [Chat]!
		chat(input: GetChatInput!): Chat!
	}
`
export default query