import { Text as T } from "react-native";
import styled from "styled-components";
import { color, size, typography, space, layout, compose } from "styled-system";

const Text = styled(T)(compose(color, size, typography, layout, space));

export default Text;
