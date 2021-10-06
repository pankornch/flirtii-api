import { gql } from "apollo-server-express"

const mutation = gql`
	type Mutation {
		sign_in(input: SignInInput!): AuthResponse!
		sign_up(input: SignUpInput!): AuthResponse!

		upload(file: Upload!): String!
	}
`

export default mutation
