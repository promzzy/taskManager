import { TaskProps, userInfo } from "../../utils/types";

export type DashboardProps = {
 currentUser?: userInfo | null;
 task?: TaskProps[]
}