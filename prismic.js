import * as Prisimic from '@prismicio/client'

const repoName = 'rosamoscatoevents'
const endpoint = Prisimic.getEndpoint(repoName)

export const client = Prisimic.createClient(endpoint)