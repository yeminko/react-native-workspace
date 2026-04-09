import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native/types_generated/index";
import OutlineButton from "../components/UI/OutlineButton";

export default function PlaceDetails() {
  function showOnMapHandler() {}

  return (
    <ScrollView>
      <Image />
      <View>
        <Text>ADDRESS</Text>
      </View>
      <OutlineButton icon="map" onPress={showOnMapHandler}>
        View on Map
      </OutlineButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
  },
});
