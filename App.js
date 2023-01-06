import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Appolo from "./Appolo";
import { useQuery, gql } from "@apollo/client";
export default function App() {
  const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          query GetLocations {
            locations {
              id
              name
              photo
            }
          }
        `,
      })
      .then((result) => {
        console.log(
          "🚀 ~ file: App.js:28 ~ useEffect ~ result",
          JSON.stringify(result)
        );
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>Ok got it</Text>
        <StatusBar style="auto" />
        <Appolo />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
