import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";
import Login from "./pages/Login";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </View>
  );
};

export default Main;
