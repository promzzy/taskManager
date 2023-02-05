import { userInfo } from "../../utils/types";

export type TeamSlideProps = {
  teamName?: string,
  teamMembers?: userInfo[],
  onAddMember?: () => void,
  onViewMember?: any,
}