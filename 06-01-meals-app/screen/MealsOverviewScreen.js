import { StyleSheet, Text, View } from "react-native";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={style.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
