import gql from 'graphql-tag'
export const argReadCount = () => {
    return { query: gql`{ count2 @client }`}
}

export const argWriteCount = (value: number) => {
    return {data: { count2: value }}
}

export const readCount = (cache: any) => {
    return cache.readQuery(argReadCount()).count2
}

export const writeCount = (cache: any, value: number) => {
    return cache.writeData(argWriteCount(value))
}

export const initialCounter = {
    count2: 1,
}

export const vueCounter = {
    query: gql`{ count2 @client}`,
    loadingKey: 'loading'
  }