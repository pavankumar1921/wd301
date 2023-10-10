import { Suspense,lazy } from "react"
import ErrorBoundary from "../../components/ErrorBoundary"
const MemberList = lazy(() => import("./MemberList"))
const NewMember  =lazy(() => import("./NewMember"))
const Members = () => {
    return (
        <>
        <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <MemberList/>
        </Suspense>
      </ErrorBoundary>
        </>
    )
}
export default Members