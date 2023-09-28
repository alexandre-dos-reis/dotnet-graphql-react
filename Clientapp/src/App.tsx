import { useEffect, useState } from "react";

import { GraphQLClient, gql } from "graphql-request";

const query = gql`
  {
    book {
      title
      author {
        name
      }
    }
  }
`;

export interface Data {
  book: Book;
}

export interface Book {
  title: string;
  author: Author;
}

export interface Author {
  name: string;
}

function App() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const client = new GraphQLClient("http://localhost:5281/graphql");
    client.request<Data>(query).then((x) => setData(x));
  }, []);

  return <ul>{data?.book.author.name}</ul>;
}

export default App;
