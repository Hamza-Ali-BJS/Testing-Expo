import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

export default function Appolo() {
  return (
    <View>
      <Text>Appolo</Text>
    </View>
  );
}
