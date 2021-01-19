import ApolloClient, { createNetworkInterface } from "apollo-client";

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri:
      "https://api-eu-central-1.graphcms.com/v2/ckjrg206b9r2001wk3dvz27nk/master",
  }),
});

console.log(client);
