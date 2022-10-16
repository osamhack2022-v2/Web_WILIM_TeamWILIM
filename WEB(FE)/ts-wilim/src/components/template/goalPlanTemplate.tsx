import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { GoalCard } from "../organism/goalCard";
import { PlanCard } from "../organism/planCard";
import { BaseStyles } from "../theme";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { Title } from "../molecule/title";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { fetchUserById } from "../../store/asyncThunks/fetchUserById";

export const GoalPlanTemplate = () => {
  const { username, _id } = useSelector((state: ReducerType) => state.userInfo);
  const goal = useSelector((state: ReducerType) => state.userGoal.name);
  const dispatch = useDispatch<AppThunkDispatch>();
  useEffect(() => {
    dispatch(fetchUserById(_id!));
  }, [])
  return (
    <Flex flexDirection="column" alignItems="center">
      <MarginBox marginBottom="2rem" />
      <Title innerText={`${username}님`} />
      <MarginBox marginBottom="2rem" />
      <GoalCard />
      <MarginBox marginBottom="2rem" />
      <Line
        width="30%"
        height="1px"
        color={BaseStyles.Color.Black2}
      />
      <MarginBox marginBottom="2rem" />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <Text
          innerText="Plan"
          color="white"
          fontSize={BaseStyles.Text.Heading2}
          fontWeight={BaseStyles.Text.Border0}
        />
      </Flex>
      <MarginBox marginBottom="1rem" />
      <PlanCard />
    </Flex>
  );
};
