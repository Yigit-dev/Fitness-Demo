import React, { useState } from "react";
import { View } from "../base";
import CategoriesButton from "../buttons/CategoriesButton";
import Footnote from "../text/Footnote";

const WorkoutCategories = () => {
  const categories = [
    { id: 1, name: "Beginner" },
    { id: 2, name: "Intermediate" },
    { id: 3, name: "Advance" },
  ];
  const [filter, setFilter] = useState("Beginner");
  const setCategoriesFilter = (categories) => {
    setFilter(categories);
  };
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bg="dark2"
      borderRadius={16}
      mb={16}
    >
      {categories.map((category) => (
        <CategoriesButton
          key={category.id}
          bg={filter === category.name ? "sahra" : "dark2"}
          onPress={() => setCategoriesFilter(category.name)}
        >
          <Footnote color="white">{category.name}</Footnote>
        </CategoriesButton>
      ))}
    </View>
  );
};

export default WorkoutCategories;
