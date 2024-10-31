import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: 'https://icommission.spliterash.ru/graphql',
	documents: ['src/queries/**/*.tsx'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'./src/gql/': {
			preset: 'client'
		}
	}
}

export default config
//npx graphql-codegen
