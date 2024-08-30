'use client'
import client from '@/lib/apollo-client'
import { ApolloProvider } from '@apollo/client'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
