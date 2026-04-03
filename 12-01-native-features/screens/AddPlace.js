import PlaceForm from "../components/Places/PlaceForm";

export default function AddPlace({ navigation }) {
  function createPlaceHandler() {
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm />;
}
