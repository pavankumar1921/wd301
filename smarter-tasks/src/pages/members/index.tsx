import MembersList from "./MemberList"
import NewMember from "./NewMember"
import { Suspense } from "react"
import ErrorBoundary from "../../components/ErrorBoundary"
const Members = () => {
    return (
        <>
        <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading"></div>}>Loading...</Suspense>
      </ErrorBoundary>
      <MembersList />
        </>
    )
}
export default Members