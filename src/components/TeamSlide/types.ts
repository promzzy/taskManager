export type TeamSlideProps = {
  teamName?: string,
  teamMembers?: (number | undefined)[],
  onAddMember?: () => void,
  onViewMember?: () => void,
}